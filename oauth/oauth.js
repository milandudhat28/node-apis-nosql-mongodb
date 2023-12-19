const User = setup.models.user;
const Token = setup.models.token;

const chalk=require('chalk');
const generateRandomString=()=>{
    let result = '';
	let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 255; i > 0; --i)
	  result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

//Invoked to generate a new access token
const generateAccessToken=async(client,user,scope,done)=>{
    //console.log(chalk.yellow('generateAccessToken'));
    //scope-undefined
    let accessValue = generateRandomString();
	return done(null,accessValue)
}

//Invoked to retrieve an existing access token previously saved through Model saveToken() method.
//This model function is required if OAuth2Server authenticate() method is used.
//It will not be used when we use passport
const getAccessToken=async(accessToken,done)=>{
    try {
        //console.log(chalk.yellow('getAccessToken'));
        const token = await Token.findOne({
            where:{accessToken}
        }); 
        if(token)
            return done(null,token.accessToken);
    } catch (error) {
        return done(error,null);
    }
}

//invoked to retrieve a client using a client id or a client id/secret combination, depending on grant type
const getClient=async(clientId,clientSecret,done)=>{
    //console.log(chalk.yellow('getClient'));
    return done(null, {
        id: clientId,
        grants: [ 'password' ],
        clientSecret
    });
}

//Invoked to save an access token and optionally a refresh token,depending on the grant type
const saveToken=async(token,client,user,done)=>{
    try {
       // console.log(chalk.yellow('saveToken'));
        const tokenToSave={
            accessToken:token.accessToken,
            accessTokenExpiresAt:token.accessTokenExpiresAt,
            refreshToken:token.refreshToken,
            refreshTokenExpiresAt:token.refreshTokenExpiresAt,
            clientId:client.id,
            userId:user.id,
            scope:token.scope
        };
        const userTokenAlreadyExist=await Token.findOne({where:{userId:user.id}});
        let createdToken="";
        if(userTokenAlreadyExist){
            userTokenAlreadyExist.accessToken=token.accessToken;
            userTokenAlreadyExist.accessTokenExpiresAt=token.accessTokenExpiresAt;
            userTokenAlreadyExist.refreshToken=token.refreshToken;
            userTokenAlreadyExist.refreshTokenExpiresAt=token.refreshTokenExpiresAt;

            createdToken=await userTokenAlreadyExist.save();
        }else{
           createdToken = await Token.create(tokenToSave);
        }
    
        if(createdToken){
            return done(null,{
                accessToken: token.accessToken,
                accessTokenExpiresAt: token.accessTokenExpiresAt,
                refreshToken: token.refreshToken,
                refreshTokenExpiresAt: token.refreshTokenExpiresAt,
                scope: token.scope,//undefined
                client: {id: client.id},
                user: {id: user.id}
            });
        }   
    } catch (error) {
        return done(error,null);
    }
}


//Method used only by password grant-type
//Invoked to retrieve a user using a username/password combination
//returns an object representing the user, or a falsy values if no such user could be found
const getUser=async(username,password,done)=>{
    try {
        //console.log(chalk.yellow('getUser'))
        const user=await User.findOne({
            where:{username}
        });
        if(!user){
            const encryptedPassword = setup.functions['auth']['encrypt'](password);
            const createdUser=await User.create({username,password:encryptedPassword});
            return done(null,createdUser);
        }
        
        if(password===setup.functions['auth']['decrypt'](user.password)){
            return done(null,user);
        }else{
            return done(null,false);
        }

    } catch (error) {
        return done(error,null);
    }
}


module.exports={
    getAccessToken,
    generateAccessToken,
    getClient,
    saveToken,
    getUser
}

