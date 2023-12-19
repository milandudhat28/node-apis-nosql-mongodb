'use strict'

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

module.exports = myEmitter.on('candidateStatusChanged', async (candidateId) => {
    await setup.moduleServices.candidate.candidate.sendMailToCandidate(candidateId);
});

module.exports = myEmitter.on('helpdeskTicketCreated', async ({ ticketId }) => {
    await setup.moduleServices.HelpDesk.helpDesk.sendMailToReporterPerson({ ticketId });
});

module.exports = myEmitter.on('helpdeskTicketAssigned', async ({ ticketId, subject, response }) => {
    await setup.moduleServices.HelpDesk.helpDesk.sendMailToAssignedToPerson({ ticketId, subject, response });
});