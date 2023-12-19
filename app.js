require('dotenv').config();
global.setup = {};
// // const umzug = require('./core/migration');
const mongoose = require("./db/models")
const APIResponseFormat = require("./utils/APIResponseFormat");
require('./core/function');
require('./core/services');
require('./core/multer');
require('./core/moduleFunction');
require('./core/moduleServices');
require('./core/elasticsearch')
require('./core/googleDrive');
require('./core/firebase');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
// const io = require('./socketServer');
// io.attach(server, { cors: { origin: "*" } });

// const io = require('socket.io')(server, { cors: { origin: "*" } });




const chalk = require('chalk');
const Confirm = require('prompt-confirm');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./core/routes');
const fp = require('find-free-port');
const morgan = require('morgan');
const config = require('./config/config.json');
const crons = require('./core/cron');
const cronJob = require('./cron/index');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
// /* const OAuth2Server = require('express-oauth-server');
// const passport = require('./oauth/passport'); */




// //Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb", extended: true }))
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(cookieParser());
app.use('/docs', express.static(path.join(__dirname, 'docs', 'dest')));
app.use('/uploads', express.static('public/uploads'));
app.use('/assets', express.static('public/assets'));
app.use(session({
    secret: 'cybercomhrmsproject',
    resave: false,
    saveUninitialized: true
}));




//oauth added to app object
/* app.oauth = new OAuth2Server({
    model: require('./oauth/oauth'),
    accessTokenLifetime: 4*60 * 60,
    allowBearerTokensInQueryString: true
}); */
//passport.initialize() middleware is required to initialize Passport
//If your application uses persistent login sessions, passport.session() middleware must also be used.
/* app.use(passport.initialize());
app.use(passport.session()); */



//For getting the the morgan Body according to the config.json allowBody and allowHeaders on  the endpoint
let morganBody = '';
morgan.token('header', function (req) {
    return JSON.stringify(req.headers);
});
morgan.token('body', function (req) {
        return Object.keys(req.body).length == 0 ? '' : JSON.stringify(req.body);
});
const { allowBody, allowHeaders } = config;
if (allowBody && allowHeaders) {
    morganBody =
        ':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] [:date[clf]] :body :header ';
} else if (allowBody || allowHeaders) {
        morganBody = `:remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] [:date[clf]] ${allowBody ? ':body' : ':header'
            } `;
} else {
    morganBody =
        ':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] [:date[clf]]';
}

//logging the details of endpoint
app.use(morgan(morganBody));

//Running the crons
app.use((req, res, next) => {
	// crons.forEach((func) => {
    // 		func();
	// });
	next();
});

//Routes
for (let route of routes) {
    app[route.method](route.path, route.middlewares, route.action);
}


// /* app.post('/oauth/token', app.oauth.token()); */


//migration
// umzug.pending().then((migrations) => {
//     if (migrations.length != 0) {
//         console.log(`All pending migrations are`);
//         for (let migration of migrations) {
//             console.log(chalk.yellow(migration.file));
//         }
//         // new Confirm('Do you want to migrate all the pending migrations (yes)?')
//         // 	.run()
//         // 	.then((answer) => {
//         // 		if (answer) {
//         // 			umzug.up().then(() => {
//         // 				console.log(chalk.green('Migration completed!'));
//         // 				listenServer();
//         // 			});
//         // 		}else{
//         // 			listenServer();
//         // 		}
//         // 	});
//         umzug.up().then(() => {
//             console.log(chalk.green('Migration completed!'));
//             listenServer();
//         });
//     } else {
//         console.log(chalk.green('No pending migrations'));
//         listenServer();
//     }
// });

app.get('/', (req, res) => {
    return APIResponseFormat._ResModifiedMessage(res, 200 , "Welcome to mattermost api server");
})

//If no routes was matched show 404 not found error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.statusCode = 404;
    next(error);
});



//Logging the error
app.use((err, req, res, next) => {
    let caller_line = err.stack.split('\n')[1];
    let index = caller_line?.indexOf('at ');
    let clean = caller_line?.slice(index + 2, caller_line.length);
    let lineNumber = clean.substr(-6, 2);
    console.log('Error:' + chalk.red(err.message));
    console.log(chalk.yellow(`Error occured at:`) + clean);
    console.log(chalk.yellow('Line Number in which error occured :') + lineNumber);
    return res.status(400).send({ message: err.message });
});



let PORT = parseInt(process.env.PORT);
//my server
// process.on('uncaughtException', (error) => {
//     if (error.code === 'EADDRINUSE') {
//         let freeport = '';
//         fp(PORT).then(([freep]) => {
//             new Confirm(
//                 `Port no ${PORT} is busy.Do you want to run it on the avalibale port (${freep})?`
//             )
//                 .run()
//                 .then((answer) => {
//                     if (answer) {
//                         PORT = parseInt(freep);
//                         listenServer();
//                     }
//                 });
//         });
//     }
// });
// console.log(PORT);

//function to listen to server
app.listen(PORT , ()=>{
    console.log(chalk.green(`server is listenining on port ${PORT}`));
})






