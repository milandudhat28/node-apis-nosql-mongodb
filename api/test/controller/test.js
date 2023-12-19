const User = require('../../../db/models/test');    
module.exports = {
  
  test: async (req, res, next) => {
    try {
        var user = await new User({
          name : 'test',
          email : 'test',
          password : 'test',
          test : 'test'
        });
        user.save()
        return res.status(200).json({
          success: true,
          status: 200,
          message: "Success"
        });
    } catch (error) {

      next(error);
      return res.status(500).json({
        success: false,
        status: 500,
        message: "Something went wrong, please try again",
      });
    }

  },
};
