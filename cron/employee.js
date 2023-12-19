'use strict'

const cron = require('node-cron');
const path = require('path')

const cronJob = {
	convertToExEmployee:cron.schedule('0 1 * * *', async () => {
		console.log('----- cron started create exit checklist for employee-----', new Date());
    await setup.moduleServices.employee.exitEmployeeCheckList.createExitTaskList();
    console.log('----- cron ended create exit checklist for employee -----', new Date());
		console.log('----- cron started convert employee to ex-employee -----', new Date());
    await setup.moduleServices.employee.cron.convertToExEmployee();
    console.log('----- cron ended convert employee to ex-employee -----', new Date());
  }),

	convertExToEmployee:cron.schedule('0 1 * * *', async () => {
		console.log('----- cron started convert ex-employee to employee -----', new Date());
    await setup.moduleServices.employee.cron.convertExToEmployee();
    console.log('----- cron ended convert ex-employee to employee -----', new Date());
  }),
};

module.exports = cronJob