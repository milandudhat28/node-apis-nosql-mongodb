const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const candidateStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(__dirname, "..", "public", "uploads", "candidate");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const onboardingStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(__dirname, "..", "public", "uploads", "onboarding");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const employeeStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(__dirname, "..", "public", "uploads", "employee");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const pollStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(__dirname, "..", "public", "uploads", "poll");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const helpDeskTicketStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(__dirname, "..", "public", "uploads", "helpDeskTicket");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const NoticeBoardSectionStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(
      __dirname,
      "..",
      "public",
      "uploads",
      "NoticeBoardSection"
    );
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const studentStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(__dirname, "..", "public", "uploads", "student");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const excelStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = path.join(__dirname, "..", "public", "uploads", "companyExcel");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const candidateExcelStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = path.join(
      __dirname,
      "..",
      "public",
      "uploads",
      "candidateExcelFile"
    );
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const employeeExcelStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = path.join(
      __dirname,
      "..",
      "public",
      "uploads",
      "employeeExcelFile"
    );
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const studentExcelStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(
      __dirname,
      "..",
      "public",
      "uploads",
      "studentsExcel"
    );
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const projectStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "..", "public", "uploads", "projects");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const salarySlipStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "..", "public", "uploads", "salarySlip");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const pdfFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(pdf|PDF)$/)) {
    req.fileValidationError = "Only PDF files are allowed!";
    return cb(new Error("Only PDF files are allowed!"), false);
  }
  cb(null, true);
};

const fileFilterEmployee = (req, file, cb) => {
  if (
    !file.originalname.match(
      /\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|pdf|PDF|doc|DOC|DOCX|docx)$/
    )
  ) {
    req.fileValidationError = "Only image, word or pdf files are allowed!";
    return cb(new Error("Only images, word or pdf files are allowed!"), false);
  }
  cb(null, true);
};

const fileFilterHelpDeskTicket = (req, file, cb) => {
  if (
    !file.originalname.match(
      /\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|pdf|PDF|doc|DOC|DOCX|docx)$/
    )
  ) {
    req.fileValidationError = "Only image, word or pdf files are allowed!";
    return cb(new Error("Only images, word or pdf files are allowed!"), false);
  }
  if (file.size > 10 * 1024 * 1024) {
    req.fileValidationError = "File size should be less than 10MB!";
    return cb(new Error("File size should be less than 10MB!"), false);
  }
  cb(null, true);
};

const fileFilterNoticeBoardSection = (req, file, cb) => {
  if (
    !file.originalname.match(
      /\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|pdf|PDF|doc|DOC|DOCX|docx)$/
    )
  ) {
    req.fileValidationError = "Only image, word or pdf files are allowed!";
    return cb(new Error("Only images, word or pdf files are allowed!"), false);
  }
  cb(null, true);
};


const excelFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(xls|xlsx|XLS|XLSX)$/)) {
    req.fileValidationError = "Only excel files are allowed!";
    return cb(new Error("Only excel files are allowed!"), false);
  }
  cb(null, true);
};

const invoiceFileFilter = (req, file, cb) => {
  if (
    !file.originalname.match(
      /\.(jpg|JPG|jpeg|JPEG|png|PNG|pdf|PDF|doc|DOC|DOCX|docx|bmp|BMP)$/
    )
  ) {
    req.fileValidationError =
      "You can upload png, jpg, jpeg, pdf, doc, docx, bmp files  only!";
    return cb(
      new Error(
        "You can upload png, jpg, jpeg, pdf, doc, docx, bmp files  only!"
      ),
      false
    );
  }
  cb(null, true);
};

const itemInvoice = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = path.join(__dirname, "..", "public", "uploads", "invoice");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    let uniqueId = uuidv4();
    const exe = file.originalname.split(".").reverse()[0];
    cb(null, "ItemInvoice_" + uniqueId + `.${exe}`);
    // cb(null, Date.now() + "-" + file.originalname);
  },
});

const leadAndProjectmanagerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "..", "public", "uploads", "leadAndProjectmanager");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
})

const upload = {
  candidateStorage,
  employeeStorage,
  excelStorage,
  pollStorage,
  fileFilter,
  excelFileFilter,
  itemInvoice,
  invoiceFileFilter,
  fileFilterEmployee,
  studentExcelStorage,
  studentStorage,
  candidateExcelStorage,
  employeeExcelStorage,
  projectStorage,
  pdfFileFilter,
  salarySlipStorage,
  onboardingStorage,
  helpDeskTicketStorage,
  fileFilterHelpDeskTicket,
  fileFilterNoticeBoardSection,
  NoticeBoardSectionStorage,
  leadAndProjectmanagerStorage
};
setup.upload = upload;

module.exports = upload;
