const passport = require('passport');
const Token = setup.models.token;
const User = setup.models.user;
const chalk=require('chalk');
const PasswordGrantStrategy = require('passport-oauth2-password-grant');

PasswordGrantStrategy.prototype.userProfile=async function(accessToken,done){
	try {
		const token=await Token.findOne({where:{accessToken}});
		if(token){
			const user=await User.findOne({
				where:{id:token.userId},
				attributes:['id','username']
			});
			if(user){
				const {id,username}=user;
				return done(null,{id,username});
			}
		}
	} catch (error) {
		return done(error,null);
	}	
}

passport.use(
	new PasswordGrantStrategy(
		{
			tokenURL: 'http://localhost:3006/oauth/token',
			clientID: 'EXAMPLE_CLIENT_ID',
			clientSecret: 'EXAMPLE_CLIENT_SECRET',
			passReqToCallback: false,
			skipUserProfile: false
		},
		function(accessToken, refreshToken, profile, done) {
			return done(null, profile);
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
	try {
		const user = await User.findByPk(id); 
		if(user)
			done(null,{id:user.id,username:user.username});
	} catch (error) {
		done(error,null);
	}
});

module.exports = passport;
