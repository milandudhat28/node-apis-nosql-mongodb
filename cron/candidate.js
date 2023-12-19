'use strict'

const cron = require('node-cron');

const cronJob = {
	updateCandidateExperience: cron.schedule('0 0 1 * *', async () => {
		console.log('----- cron started for Update Candidate Experience -----', new Date());
    await setup.moduleServices.candidate.cron.updateCandidateExperience();
    console.log('----- cron ended for Update Candidate Experience -----', new Date());
  }),

	convertCandidateToEmployee: cron.schedule('0 1 * * *', async () => {
		console.log('----- cron started for Convert Candidate Employee -----', new Date());
    await setup.moduleServices.candidate.cron.convertCandidateToEmployee();
    console.log('----- cron ended for Convert Candidate Employee -----', new Date());
  }),
};

module.exports = cronJob