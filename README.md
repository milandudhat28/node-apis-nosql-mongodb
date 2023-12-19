# Nodejs Setup with sequelize as an orm model
The documentation of the project is : [Documentation](https://docs.google.com/document/d/1FgItK5lLW0D0jOA8eBNheRA2F4n2jDvBpkhyRQltweE/edit)
## Version 1.0.0

## Usage

```bash
$ npm install
```

```bash
$ npm start
# Or run with Nodemon
$ npm run dev


# Visit http://localhost:5000
```

Create a `.env` file

```
NODE_ENV = Specifify wheteher working in development/production
PORT = Specify the PORT NO here 
SECRET = ANY string comes here 
```

The folder structure of the setup will looks like these

* api
* config
* core
* cron
* db
* docs
* functions
* Middleware
* uploads
* .env
* .gitignore
* .sequelizerc
* apidoc.json
* app.js
* example.js
* package.json

Now lets talk about each folder and its functionality

### api folder
 The api folder can contain many folder for different apis and each folder will contain `controller`folder,`middleware` folder,`services` folder and `routes.json` file. The `controller` folder will contain controller file in which controller function are there.Same goes for `middleware` and `services` folder.The `routes.json` file contains the `endpoint` information.


### config folder
 The config folder contains `database.json` and `config.json` file. The `database.json` file contains the information about the database and `config.json` files contains the information for the configuration of morgan and logging.

### core folder
The core folder contains many files such as
    
* connection.js
* cron.js
* ExpressError.js
* function.js
* migration.js
* models.js
* multer.js
* routes.js
* services.js
* moduleFunction.js
* moduleServices.js


In `connection.js` we create a sequelize object using `config/database.json` and handle the logging of the sequelize cmd by using the variable specified in `config/config.json` and store the sequelize object in our global variable called `setup` for futher use in the program.

In `cron.js` file we are creating an array of cron from the folder `cron` and then requiring it in the `app.js` so that we can run all the cron specified in the `cron folder` files.

In `ExpressError.js` we are creating an error class ao that we can throw an error by using that class and add statusCode and message to it.

In `function.js` we are adding all the functions specified in the function folder with the help of `setup` global variable.
```
setup.functions[‘folderName’][‘fileName’][‘functionName’](params1,params2,…,paramsN)
```

In `migration.js` file we are creating an `umzug` object and requiring it in the `app.js` to check whether migration is pending or not.

In `models.js` file we are getting all the models available in the `db` folder and then creating a object of all the models and then adding the models object to the `setup` global variable so that we can easily access it using `setup.models.user`.
```
setup.models[‘fileName’]
```

In `multer.js` we are creating an object of fileUpload so that we can use it in the controller files functions.

In `routes.js` we are taking all the `routes.json` files of every folder of the api and then constructing the  routes array of every `endpoint` and then exporting it and we are requiring it in `app.js` and creating a routes for every `endpoint`

In `services.js` we are creaing a service object so that we can easily access the service file of every pi using `setup` global variable.
```
setup.services[‘fileName’][‘serviceName’]
```

`moduleServices.js`
 This file handles the configurations of services of given module. Developer can access the service files in api via 
 ```
 setup.moduleServices[‘fileName’][‘serviceName’]
```

`moduleFunctions.js`
-> It has configuration for calling function files from function folder of given module. Developer just needs to write 
```
setup.moduleFunctions[‘folderName’][‘fileName’][‘functionName’]( params1,params2,…,paramsN) 
```
to call the function. Functions folder can have multiple folders and files.


### cron folder
The folder conatins cron files.


### db folder
 The `db` folder contains three folder `migrations`,`models` and `seeders`.The `migration` folder contains the migration file that talk to our mtysql database.The `models` folder contains model file.

### function folder
 The function folder can contains many folder and file inside it .

### Middleware folder
 The middleware folder contains the file that contains global middlewares.

### uploads folder
 The folder will contains the uploaded files of the user.

### .sequelizerc
 The sequelizerc file esatblishes the connection between folder and database.json file.

## app.js
 The core logic part of the application comes in `app.js` file.
 
## docs folder
  The docs folder contain the template that get render for the documentation and it use ejs,hbs templating engine and you can see the documentation page by opening index.html inside the docs folder.

## apidoc.json
  The apidoc.json file contains the information about the title,version and the description of your documentation.
## example.js
  The example.js file contains the documentation for every endpoint of the apis and it help us to create the proper documentation for the restful api. The name of the file can be anything i have given the name example.js you can give any name you want. 

 ***

## cli command for the setup

 >For working fast in this setup we have customclicmd that you can visit on [CustomCmd](https://github.com/NavneetPal/customclicommand)

 The above setup provides you with the basics command like:

 `framework init` : To setup the project

 `framework create-module` : To  create a new api module in api folder along with controller,middleware,services and routes.json file.

 `framework create-api` : To create a new `endpoint`

 `framework create-middleware` : Create a module/global middleware for the specifi endpoint

 `framework create-service` : Create a module/global services

 `framework create-function` : Create a module/global functions

 `framework help` : Display help for command



## Documentation of the Restful-Api
 You can see the documentation of the restful api on `localhost:5000/docs` .The documentation is coming from the `apidocs` package that we have used and you can create your own documentation in the file `example.js` and whenever you add the documentation for the new endpoint then you have to run the commands `npm run docs` and it will get addded to the documentation. 

 There is docs folder which contains the template that get render when you go to these url `localhost:5000/docs` and there is also a file known as `apidoc.json` which contains the information about the version and the description of the documentation. You can write the apidoc.json content in the package.json also and then you don't have to create that file. Its your choice whteher you want to create it or add it to the package.json but i prefer creating that file in apidoc.json.

 You can see how it will look likes

 ![image](https://user-images.githubusercontent.com/51921332/115823765-83168080-a424-11eb-87d1-dc09e222e017.png)

## Steps to create the documentation of the api

 1. First you have to install the npm package called "apidoc" for creating the documentation.
 ```
 npm install apidoc -g
 ```

 2. Secondly you have to add a script in the `package.json` file to create the documentation file 
 ```json
 	"scripts": {
		"docs": "apidoc -i ./docs/src -e node_modules -o ./docs/dest"
	}
 ```
 In the above command:
   
    `-i` means the Input/Source dirname.Location of your project Files.
    `-e` means `--exclude-filters` RegEx-Filter to select files / dirs that should not be parsed (many -e can be used). (default: [])
    `-o` means Output dirname. Location where to put the generated documentation.

 This scripts will create an apiDoc of all the files within dir `docs/src`, using the default template and put all output to `docs/dest` directory.

 Without any parameter, apiDoc generate a documentation from all `.cs` `.dart` `.erl` `.go` `.java` `.js` `.php` `.py` `.rb` `.ts` files in current dir (incl. subdirs) and writes the output to ./doc/.


3. Thirdly you have to configure `apidoc.json` file.

The optional `apidoc.json` in your projects root dir includes common information about your project like title, short description, version and configuration options like `header / footer` settings or template specific options.

```json
{
	"name": "HRMS API DOCUMENTATION",
	"version": "0.1.0",
	"description": "RESTFUL API DOCUMENTATION FOR HRMS",
	"title": "API docs",
	"url": "http://192.168.0.31:3006",
	"template": {
		"forceLanguage": "en"
	}
}
```

From `apidoc.json` apiDoc gets the name, version and description of your project.
The file is `optional` (it depends on your template if the data is required).

4. In this setup we have created the `docs` folder which contains two folder `dest` and `src`:
## src :  

  This folder will contain all the js files that contains the source code in the `javadoc-style` 

  ```js
  /**
  * This is a comment
  */
  ```

  The basic syntax of writing the documentation of the apis is given below (as in `example.js`) file

  ```js
  /**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
  ```

A documentation block starts with /** and end with */.

This example describes a GET Method to request the User Information by the user's id.

`@api {get} /user/:id` Request User information is mandatory, without `@api` apiDoc ignores a documentation block.

`@apiName` must be a unique name and should always be used.
Format: method + path (e.g. Get + User)

`@apiGroup` should always be used, and is used to group related APIs together and its folder gets cretaed with name specified in the `@apiGroup`.

`@apiParam` are the parameter passed to your api method they are used for describing the attributes in your request body and request params of your apis.

`@apiSuccessExample` is the successfull response that you get from your apis.

`@apiErrorEXample` is the error response that you get from your apis.

`@apiSucccess` will contains the attributes that you will get in your success response.



In `@apiParam [{type}] [field] [description]`: 
Basically we will use this `type` most of the time `{Boolean}`,`{String}`,`{Number}`,`{Date}`.
'Field' : the name of the attribute.
'description': the description that you want to give to your attribute. 




```
NOTE: For every time you make changes in your apidoc input file the changes will not get reflected instantly. To make that changes you have to run this command every time `npm run docs`
```


To see your api documentation you can see it in the `yoursiteurl/docs`


You can learn more about the api documntation on [APIDocsDocumentation](https://apidocjs.com/)
