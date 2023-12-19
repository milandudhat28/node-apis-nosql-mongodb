const { Readable } = require("stream");
const fs = require("fs");
const { googleDrive, isProduction } = require("../config/config.json");

const driveCred = isProduction
  ? googleDrive.production
  : googleDrive.devlopment;

const {
  adharFolderKey,
  checklistFolderKey,
  panFolderKey,
  employeeResumesFolderKey,
  candidateResumesFolderKey,
  internResumesFolderKey,
  projectDefinationFolderKey,
  candidateAdharFolderKey,
  candidatePanFolderKey,
  candidatepassportFolderKey,
  candidatePresentAddressFolderKey,
  candidatePermentAddressFolderKey,
  candidateEducationCertificatesFolderKey,
  candidateSalarySlipFolderKey,
  candidateForm16OfPreviousEmployerFolderKey,
  candidateLatestRelievingLetterFolderKey,
  candidateLatestExperienceLetterFolderKey
} = driveCred;
module.exports = {
  getDriveConfig : async () => {
    const adharFolderKey = await setup.functions["config"]["getConfigValue"]("drives_adharFolderKey");
    const checklistFolderKey = await setup.functions["config"]["getConfigValue"]("drives_checklistFolderKey");
    const panFolderKey = await setup.functions["config"]["getConfigValue"]("drives_panFolderKey");
    const employeeResumesFolderKey = await setup.functions["config"]["getConfigValue"]("drives_employeeResumesFolderKey");
    const candidateResumesFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidateResumesFolderKey");
    const internResumesFolderKey = await setup.functions["config"]["getConfigValue"]("drives_internResumesFolderKey");
    const projectDefinationFolderKey = await setup.functions["config"]["getConfigValue"]("drives_projectDefinationFolderKey");
    const candidateAdharFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidateAdharFolderKey");
    const candidatePanFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidatePanFolderKey");
    const candidatepassportFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidatepassportFolderKey");
    const candidatePresentAddressFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidatePresentAddressFolderKey");
    const candidatePermentAddressFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidatePermentAddressFolderKey");
    const candidateEducationCertificatesFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidateEducationCertificatesFolderKey");
    const candidateSalarySlipFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidateSalarySlipFolderKey");
    const candidateForm16OfPreviousEmployerFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidateForm16OfPreviousEmployerFolderKey");
    const candidateLatestRelievingLetterFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidateLatestRelievingLetterFolderKey");
    const candidateLatestExperienceLetterFolderKey = await setup.functions["config"]["getConfigValue"]("drives_candidateLatestExperienceLetterFolderKey");

    return {
      adharFolderKey,
      checklistFolderKey,
      panFolderKey,
      employeeResumesFolderKey,
      candidateResumesFolderKey,
      internResumesFolderKey,
      projectDefinationFolderKey,
      candidateAdharFolderKey,
      candidatePanFolderKey,
      candidatepassportFolderKey,
      candidatePresentAddressFolderKey,
      candidatePermentAddressFolderKey,
      candidateEducationCertificatesFolderKey,
      candidateSalarySlipFolderKey,
      candidateForm16OfPreviousEmployerFolderKey,
      candidateLatestRelievingLetterFolderKey,
      candidateLatestExperienceLetterFolderKey
    };
  },
  addFilesToDrive: async (files, folderType, isFromScript = false) => { 
    const getDriveConfig = await module.exports.getDriveConfig();
    const data = [];
    let parentId;
    if (folderType == "aadharCard") {
      parentId = getDriveConfig.adharFolderKey ;
    } else if (folderType == "checkList") {
      parentId = getDriveConfig.checklistFolderKey;
    } else if (folderType == "panCard") {
      parentId = getDriveConfig.panFolderKey;
    } else if (folderType == "employeeResume") {
      parentId = getDriveConfig.employeeResumesFolderKey;
    } else if (folderType == "candidateResume") {
      parentId = getDriveConfig.candidateResumesFolderKey;
    } else if (folderType == "internResume") {
      parentId = getDriveConfig.internResumesFolderKey;
    } else if (folderType == "project") {
      parentId = getDriveConfig.projectDefinationFolderKey;
    } else if (folderType == "candidateAadharCard") {
      parentId = getDriveConfig.candidateAdharFolderKey;
    } else if (folderType == "candidatePanCard"){
      parentId = getDriveConfig.candidatePanFolderKey;
    }else if (folderType == "candidatePassport"){
      parentId = getDriveConfig.candidatepassportFolderKey;
    }else if (folderType == "candidatePresentAddress"){
      parentId = getDriveConfig.candidatePresentAddressFolderKey;
    }else if (folderType == "candidatePermentAddress"){
      parentId = getDriveConfig.candidatePermentAddressFolderKey;
    }else if (folderType == "candidateEducationCertificates"){
      parentId = getDriveConfig.candidateEducationCertificatesFolderKey;
    }else if (folderType == "candidateSalarySlip"){
      parentId = getDriveConfig.candidateSalarySlipFolderKey;
    }else if (folderType == "candidateForm16OfPreviousEmployer"){
      parentId = getDriveConfig.candidateForm16OfPreviousEmployerFolderKey;
    }else if (folderType == "candidateLatestRelievingLetter"){
      parentId = getDriveConfig.candidateLatestRelievingLetterFolderKey;
    }else if (folderType == "candidateLatestExperienceLetter"){
      parentId = getDriveConfig.candidateLatestExperienceLetterFolderKey;
    }
    else {
      return {
        success: false,
        message: "Invalid Folder type",
      };
    }

    let BASE_PATH;
    if (folderType == "candidateResume") {
      BASE_PATH = "public/uploads/candidate";
    } else if (folderType == "internResume") {
      BASE_PATH = "public/uploads/student";
    } else if (folderType == "project") {
      BASE_PATH = "public/uploads/projects";
    } else if (folderType == "candidateAadharCard"){
      BASE_PATH = "public/uploads/onboarding"
    } else if (folderType == "candidatePanCard") {
      BASE_PATH = "public/uploads/onboarding"
    } else if (folderType == "candidatePresentAddress") {
      BASE_PATH = "public/uploads/onboarding"
    } else if (folderType == "candidatePermentAddress") {
      BASE_PATH = "public/uploads/onboarding"
    } else if (folderType == "candidatePassport") {
      BASE_PATH = "public/uploads/onboarding"
    } else if (folderType == "candidateEducationCertificates") {
      BASE_PATH = "public/uploads/onboarding"
    }else if (folderType == "candidateSalarySlip"){
       BASE_PATH = "public/uploads/onboarding"
    }else if (folderType == "candidateForm16OfPreviousEmployer"){
       BASE_PATH = "public/uploads/onboarding"
    }else if (folderType == "candidateLatestRelievingLetter"){
       BASE_PATH = "public/uploads/onboarding"
    }else if (folderType == "candidateLatestExperienceLetter"){
       BASE_PATH = "public/uploads/onboarding"
    } else {
      BASE_PATH = "public/uploads/employee";
    }
    console.log(BASE_PATH);
    console.log(parentId);
    if (files && files.length) {
      for (const key in files) {
        console.log(`${BASE_PATH}/${files[key].filename}`);
        const body = isFromScript
          ? Readable.from(files[key].buffer)
          : fs.createReadStream(`${BASE_PATH}/${files[key].filename}`);
        // upload file
        const response = await setup.drive.files.create({
          requestBody: {
            name: files[key].driveFileName,
            mimeType: files[key].mimeType,
            parents: [parentId],
          },
          media: {
            mimeType: files[key].mimeType,
            body,
          },
        });


        if (!response || !response.data) {
          return {
            success: false,
            message: "Something went wrong, while uploading file",
            data,
          };
        }
        const { id } = response.data;

        // add public assess to file
        await setup.drive.permissions.create({
          fileId: id,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        });

        // get public view and download file urls
        const result = await setup.drive.files.get({
          fileId: id,
          fields: "webViewLink, webContentLink",
        });

        if (!result || !result.data) {
          return {
            success: false,
            message: "Something went wrong, while generating public url",
            data,
          };
        }
        data.push({ ...response.data, ...result.data });
      }
    }

    return {
      success: true,
      data,
    };
  },

  deleteFileFromDrive: async (id) => {
    // delete image by id

    const result = await setup.drive.files.get({
      fileId: id,
    });
    if (!result || result.status != 204) {
      return {
        success: false,
      };
    }
    const response = await setup.drive.files.delete({
      fileId: id,
    });

    if (!response || response.status != 204) {
      return {
        success: false,
      };
    }
    return {
      success: true,
      status: response.status,
    };
  },

  copyFileOnDrive: async (id, moveTo) => {
    const getDriveConfig = await module.exports.getDriveConfig();
    let parentId;
    if (moveTo == "employeeResume") {
      parentId = getDriveConfig.employeeResumesFolderKey;
    } else if (moveTo == "candidateResume") {
      parentId = getDriveConfig.candidateResumesFolderKey;
    } else if (moveTo == "employeeAdharcard"){
      parentId = getDriveConfig.adharFolderKey;
    }else if (moveTo == "employeePancard"){
      parentId = getDriveConfig.panFolderKey;
    }else if (moveTo == "employeeEducationCertificate"){
      parentId = getDriveConfig.checklistFolderKey;
    }
    else if (moveTo == "employeePresentAddress"){
      parentId = getDriveConfig.checklistFolderKey;
    }
    else if (moveTo == "employeePermenentAddress"){
      parentId = getDriveConfig.checklistFolderKey;
    }
    else {
      return {
        success: false,
        message: "Invalid Folder type",
      };
    }

    // copy file (inside same folder)
    const cloned = await setup.drive.files.copy({
      fileId: id,
    });

    if (!cloned || !cloned.data) {
      return {
        success: false,
        message: "Something went wrong, while cloning file",
      };
    }

    // Move copied file to new folder
    const response = await setup.drive.files.update({
      fileId: cloned.data.id,
      addParents: parentId,
      resource: { name: cloned.data.name },
      fields: "id, parents",
    });

    if (!response || !response.data) {
      return {
        success: false,
        message: "Something went wrong, while updating file to parent",
      };
    }

    const newId = response.data.id;

    // add public assess to file
    await setup.drive.permissions.create({
      fileId: newId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // get public view and download file urls
    const result = await setup.drive.files.get({
      fileId: newId,
      fields: "webViewLink, webContentLink",
    });

    if (!result || !result.data) {
      return {
        success: false,
        message: "Something went wrong, while generating public url",
      };
    }

    return {
      success: true,
      data: [{ ...cloned.data, ...result.data }],
    };
  },
};
