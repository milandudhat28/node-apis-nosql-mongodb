const { google } = require("googleapis");
const { googleDrive, isProduction } = require("../config/config.json");

const driveCred = isProduction ? googleDrive.production : googleDrive.devlopment

const { clientId, clientSecretId, redirectUrl, refreshToken } = driveCred;

const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecretId,
    redirectUrl
);

oauth2Client.setCredentials({ refresh_token: refreshToken });

const drive = google.drive({
    version: "v3",
    auth: oauth2Client,
});

setup.drive = drive;
