const { google } = require("googleapis");
const { googleMeet, isProduction } = require("../config/config.json");
const moment = require("moment");
const { Op } = require("sequelize");
const { at } = require("lodash");
const e = require("express");
const meetCred = isProduction ? googleMeet.production : googleMeet.development;

// const { clientId, clientSecretId, redirectUrl, refreshToken } = meetCred;

// const auth = new google.auth.OAuth2(clientId, clientSecretId, redirectUrl);
// auth.setCredentials({ refresh_token: refreshToken });

// const calendar = google.calendar({
// 	version: "v3",
// 	auth: auth,
// });

module.exports = {
	getMeetConfig: async () => {
		const clientEmail = await setup.functions["config"]["getConfigValue"](
			"meet_clientEmail"
		);
		const clientId = await setup.functions["config"]["getConfigValue"](
			"meet_clientId"
		);
		const clientSecretId = await setup.functions["config"]["getConfigValue"](
			"meet_clientSecretId"
		);
		const redirectUrl = await setup.functions["config"]["getConfigValue"](
			"meet_redirectUrl"
		);
		const refreshToken = await setup.functions["config"]["getConfigValue"](
			"meet_refreshToken"
		);

		const auth = new google.auth.OAuth2(clientId, clientSecretId, redirectUrl);
		auth.setCredentials({ refresh_token: refreshToken });

		const calendar = google.calendar({
			version: "v3",
			auth: auth,
		});

    return {
      clientEmail,
      clientId,
      clientSecretId,
      redirectUrl,
      refreshToken,
      auth,
      calendar
    }




	},
	scheduleInterview: async (
		emails,
		from,
		to,
		candidateName = "",
		technology = "-",
		hrName,
		hrData
	) => {
		const attendees = emails.map((el) => {
			return { email: el };
		});
		const getMeetConfig = await module.exports.getMeetConfig();
		let event = {
			summary: "Interview Invitation: " + candidateName + " on Google Meet",
			location: "Online - via Google Meet",
			start: {
				dateTime: from.split(" ").join("T"),
				// dateTime: "2022-10-18T09:00:00",
				timeZone: "Asia/Kolkata",
			},
			end: {
				dateTime: to.split(" ").join("T"),
				timeZone: "Asia/Kolkata",
			},
			conferenceData: {
				createRequest: {
					conferenceSolutionKey: {
						type: "hangoutsMeet",
					},
					requestId: "google-meet",
					requestedParticipant: attendees,
				},
			},
		};
		const mailEnableMailCommunication = await setup.functions["config"][
			"getConfigValue"
		]("mail_enableMailCommunication");
		if (mailEnableMailCommunication == "1") {
			let emailTemplate = await setup.models.emailtemplate.findOne({
				where: {
					title: { [Op.like]: "%Interview - Google Meet%" },
					enable: true,
				},
				attributes: ["subject", "body"],
			});
			/*  const abc = emailTemplate;
      let emailHeaderFooter = await setup.models.emailtemplate.findOne({
        where: {
          title: { [Op.like]: "Candidate - Header, Footer Master"  },
          enable: true,
        },
        attributes: ["subject", "body"]
      });
      if (emailHeaderFooter?.body) {
        if (emailTemplate?.body && emailTemplate?.subject) {
          emailTemplate.body = emailHeaderFooter.body.replace(
            "{{body}}",
            emailTemplate.body
            );}
          } */
			emailTemplate = JSON.parse(JSON.stringify(emailTemplate));
			if (emailTemplate?.body && emailTemplate?.subject) {
				//for testing mail
				const sandBox = await setup.functions["config"]["getConfigValue"](
					"mail_sandBox"
				);
				const defaultReceiverEmail = await setup.functions["config"][
					"getConfigValue"
				]("mail_defaultReceiverEmail");

				let email;
				if (sandBox == "1") {
					email = [{email:defaultReceiverEmail}];
				} else {
					email = attendees;
				}

				const date = moment(from).format("dddd, Do MMMM YYYY");
				const fromTime = moment(from).format("hh:mm a");
				const toTime = moment(to).format("hh:mm a");
				const titleTime = moment(from).format("ddd Do MMM YYYY hh:mm a");

				const summary = emailTemplate.subject
					.replace("{{fullName}}", candidateName)
					.replace("{{interviewStartTime}}", titleTime)
					.replace("{{interviewEndTime}}", toTime);

				const description = emailTemplate.body
					.replace("{{fullName}}", candidateName)
					.replace("{{interviewTechnology}}", technology)
					.replace("{{interviewDate}}", date)
					.replace("{{interviewStartTime}}", fromTime)
					.replace("{{interviewEndTime}}", toTime)
					.replace("{{hrExecutiveName}}", hrName)
					.replace("{{hrDesignation}}", hrData.workDetails?.designation?.title || " ");

				const emailsendcode = {
					summary,
					description,
					attendees: [{ email: email }],
				};

				console.log("====================================================== scheduleInterview email==================================",email);
				event = { ...event, summary, description, attendees: email  };
			}
		}

		return new Promise((resolve, reject) => {
			getMeetConfig.calendar.events.insert(
				{
					auth: getMeetConfig.auth,
					calendarId: "primary",
					resource: event,
					conferenceDataVersion: 1,
					sendUpdates: "all",
				},
				function (err, event) {
					if (err) {
						console.log(
							`There was an error while scheduling Interview via calendar service: ${err}`
						);
						reject(
							`There was an error while scheduling Interview via calendar service: ${err}`
						);
						return;
					}
					console.log(`Interview Schedule: ${event}`);
					resolve({
						id: event.data.id,
						meetLink: event.data.hangoutLink,
					});
					return;
				}
			);
		});

		return;
	},

	updateInterview: async (
		emails,
		from,
		to,
		eventId,
		candidateName = "",
		technology = "-",
		hrName,
		hrData,
	) => {

		const getMeetConfig = await module.exports.getMeetConfig();

		let emailTemplate = await setup.models.emailtemplate.findOne({
			where: {
				title: { [Op.like]: "%Interview - Google Meet%" },
				enable: true,
			},
			attributes: ["subject", "body"],
		});
		emailTemplate = JSON.parse(JSON.stringify(emailTemplate));
		if (emailTemplate?.body && emailTemplate?.subject) {
			const attendees = emails.map((el) => {
				return { email: el };
			});

			const date = moment(from).format("dddd, Do MMMM YYYY");
			const fromTime = moment(from).format("hh:mm a");
			const toTime = moment(to).format("hh:mm a");
			const titleTime = moment(from).format("ddd Do MMM YYYY hh:mm a");

			// get old event
			const event = getMeetConfig.calendar.events.get({ calendarId: "primary", eventId });

			const summary = emailTemplate.subject
				.replace("{{fullName}}", candidateName)
				.replace("{{interviewStartTime}}", titleTime)
				.replace("{{interviewEndTime}}", toTime);

			const description = emailTemplate.body
				.replace("{{fullName}}", candidateName)
				.replace("{{interviewTechnology}}", technology)
				.replace("{{interviewDate}}", date)
				.replace("{{interviewStartTime}}", fromTime)
				.replace("{{interviewEndTime}}", toTime)
				.replace("{{hrExecutiveName}}", hrName)
				.replace("{{hrDesignation}}", hrData?.workDetails?.designation?.title || " ");

			const sandBox = await setup.functions["config"]["getConfigValue"](
				"mail_sandBox"
			);
			const defaultReceiverEmail = await setup.functions["config"][
				"getConfigValue"
			]("mail_defaultReceiverEmail");

			let email;
			if (sandBox == "1") {
				email = [{email:defaultReceiverEmail}];
			} else {
				email = attendees;
			}

			console.log("============================================================updateInterview email ===========",email);

			// update details of event
			(event.summary = summary),
				(event.description = description),
				(event.attendees = email),
				(event.start = {
					dateTime: from.split(" ").join("T"),
					timeZone: "Asia/Kolkata",
				});
			event.end = {
				dateTime: to.split(" ").join("T"),
				timeZone: "Asia/Kolkata",
			};

			// update it to calendar
			return new Promise((resolve, reject) => {
				getMeetConfig.calendar.events.patch(
					{
						calendarId: "primary",
						eventId,
						resource: event,
						sendUpdates: "all",
					},
					function (err, event) {
						if (err) {
							console.log(
								`There was an error while updating Interview via calendar service: ${err}`
							);
							reject(
								`There was an error while updating Interview via calendar service: ${err}`
							);
							return;
						}
						console.log(`Updated Interview Schedule: ${event}`);
						resolve({
							id: event.data.id,
							meetLink: event.data.hangoutLink,
						});
						return;
					}
				);
			});
		}
		return;
	},

	deleteInterview: (eventId) => {
		const getMeetConfig = module.exports.getMeetConfig();
		const params = {
			calendarId: "primary",
			eventId,
		};

		getMeetConfig.calendar.events.delete(params, function (err) {
			if (err) {
				console.log(`Thre was an error while deleting calender event: ${err}`);
				return;
			}
			console.log(`Calender event has been deleted successfully.`);
		});
	},
};
