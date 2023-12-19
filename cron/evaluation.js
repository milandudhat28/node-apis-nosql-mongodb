"use strict";

const cron = require("node-cron");

const cronJob = {
    createSubmitEvaluation: cron.schedule("0 0 1 * *", async () => {
        console.log(
            "----- cron started for createSubmitEvaluation  -----",
            new Date()
        );

        await setup.moduleServices.evalution.cron.createSubmitEvaluation();

        console.log(
            "----- cron ended for createSubmitEvaluation -----",
            new Date()
        );
    }),
};

module.exports = cronJob;