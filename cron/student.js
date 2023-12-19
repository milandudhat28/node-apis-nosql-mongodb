"use strict";

const cron = require("node-cron");

const cronJob = {
  studentToCandidate: cron.schedule("0 1 * * *", async () => {
    console.log(
      "----- cron started for Update Student to Candidate -----",
      new Date()
    );
    await setup.moduleServices.driveStudents.cron.convertStudentToCandidate();
    console.log(
      "----- cron ended for Update Student to Candidate -----",
      new Date()
    );
  }),
};

module.exports = cronJob;
