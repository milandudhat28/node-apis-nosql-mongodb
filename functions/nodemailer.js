const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { isProduction, mail } = require("../config/config.json");

// const { clientEmail, clientId, clientSecretId, redirectUrl, refreshToken } =
//   isProduction ? mail.production : mail.development;

// const OAuth2Client = new google.auth.OAuth2(
//   clientId,
//   clientSecretId,
//   redirectUrl
// );
// OAuth2Client.setCredentials({ refresh_token: refreshToken });
// let clientEmail
// let clientId
// let clientSecretId
// let redirectUrl
// let refreshToken

module.exports = {

  getEmailConfig : async () => {
			const clientEmail =  await setup.functions["config"]["getConfigValue"]("mail_clientEmail");
      const clientId =  await setup.functions["config"]["getConfigValue"]("mail_clientId");
      const clientSecretId =  await setup.functions["config"]["getConfigValue"]("mail_clientSecretId");
      const redirectUrl =  await setup.functions["config"]["getConfigValue"]("mail_redirectUrl");
      const refreshToken =  await setup.functions["config"]["getConfigValue"]("mail_refreshToken");



      let OAuth2Client = new google.auth.OAuth2(
        clientId,
        clientSecretId,
        redirectUrl
      );
      OAuth2Client.setCredentials({ refresh_token: refreshToken });

      const accessToken = await OAuth2Client.getAccessToken();





      return {
        clientEmail,
        clientId,
        clientSecretId,
        redirectUrl,
        refreshToken,
        OAuth2Client,
        accessToken
      }
  },
  generateTransport: async (toEmail, subject, html, attachments, replyTo=null) => {
    try {
      // const accessToken = await OAuth2Client.getAccessToken();
      const getEmailConfig = await module.exports.getEmailConfig();
      console.log('getEmailConfig' , getEmailConfig);
      console.log();
      // console.log(clientId, '---->', clientSecretId, '------>', redirectUrl);
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: getEmailConfig.clientEmail,
          clientId: getEmailConfig.clientId,
          clientSecret: getEmailConfig.clientSecretId,
          refreshToken: getEmailConfig.refreshToken,
          accessToken: getEmailConfig.accessToken,
        },
      });

      const mailOptions = {
        to: toEmail,
        replyTo : replyTo,
        from: `Cybercom Creation <${getEmailConfig.clientEmail}>`,
        subject,
        html,
        attachments
      };
      console.log(mailOptions, 'mailOptions');

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
