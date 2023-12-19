const { Op } = require("sequelize");

module.exports = {
  modulePermission: async (req, res, next) => {
    const roleId = req.user.roleId;
    const module = req.headers.module;
    const type = req.headers.type;

    if (!["view", "delete", "update", "create"].includes(type)) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Invalid operation type found",
      });
    }

    if (!module) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Module key not found",
      });
    }

    if (!roleId) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Role ID not found",
      });
    }

    try {
      const permission = await setup.models.userpermission.findOne({
        where: {
          roleId,
          [type]: true,
          "$userModule.moduleKey$": { [Op.like]: module },
        },
        include: [
          {
            model: setup.models.usermodules,
            as: "userModule",
            attributes: ["moduleKey"],
          },
        ],
      });

      if (!permission) {
        return res.status(400).json({
          success: false,
          status: 400,
          message: "User is not authorized for this operation",
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "User is not authorized for this operation",
      });
    }
    return next();
  },
};
