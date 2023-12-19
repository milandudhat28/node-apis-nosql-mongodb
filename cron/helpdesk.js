"use strict";

const cron = require("node-cron");

const cronJob = {
    updateStatusOfHelpdeskTickets: cron.schedule("0 2 * * *", async () => {
        console.log(
            "----- cron started for Update Status of Helpdesk Tickets -----",
            new Date()
        );

        await setup.moduleServices.HelpDesk.cron.updateStatusOfHelpdeskTickets();

        console.log(
            "----- cron ended for Update Status of Helpdesk Tickets -----",
            new Date()
        );
    }),
};

module.exports = cronJob;