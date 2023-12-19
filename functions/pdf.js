const fs = require("fs");
const ejs = require("ejs");
const Promise = require("bluebird");
const pdf = Promise.promisifyAll(require("html-pdf"));

module.exports = {
  generatePdf: async (name, data) => {
    const path = process.env.INIT_CWD + `/public/templates/${name}.ejs`;
    try {
      let templateLocal = null;
      if (fs.existsSync(path)) {
        // let fileName = (data ? (data.name ? (data.name.split(' ').join('_') || 'pf_pdf') : 'pf_pdf') : 'pf_pdf') + `_` + moment(new Date()).format('YYYYMMDDHHmmss');
        //rendering the pdf template

        ejs.renderFile(path, data, [], (err, html) => {
          if (err) {
            console.error(err);
            return false;
          }
          templateLocal = html;
        });

        let options = {
          // "height": "11.5in",
          // "width": "8in"
          format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
          orientation: "portrait",
          type: "pdf",
          // "filename": `./public/pdf/${fileName}.pdf`,
          zoomFactor: "1",
          header: {
            height: "20px",
          },
          footer: {
            height: "20px",
          },
        };

        //create pdf
        let generatedPDF = await funcStream(templateLocal, options);
        function funcStream(templateLocal, options) {
          return new Promise((resolve, reject) => {
            return pdf
              .create(templateLocal, options)
              .toStream((err, stream) => {
                if (err) {
                  return reject(err);
                }
                return resolve(stream);
              });
          });
        }

        return generatedPDF;

        // let public_dir = './public';
        // let pdfDirectory = './public/pdf';
        // if (!fs.existsSync(public_dir)) {
        //     fs.mkdirSync(public_dir, (error) => {
        //         console.error(error);
        //     });
        // }

        // if (fs.existsSync(public_dir)) {
        //     if (!fs.existsSync(pdfDirectory)) {
        //         fs.mkdirSync(pdfDirectory, (error) => {
        //         console.error(error);
        //         });
        //     }
        // }

        // await pdf.createAsync(templateLocal, options);
        // let filePath = `./public/pdf/${fileName}.pdf`;
        // let date = new Date()
        // date.setMinutes( date.getMinutes() + 2);
        // // date.setSeconds( date.getSeconds() + 30);
        // const time_remaining = (date) => new Date(date) - new Date();
        // const timer = setTimeout( () => deleteFile(fileName), time_remaining (date));
        // const deleteFile = async (fileName) => {
        //     if(fs.existsSync(filePath)){
        //         fs.unlink(filePath, (err) => {
        //             if (err) {
        //                 console.log("An Error occured :"+ err.message);
        //             }
        //             console.log("File at "+ filePath +" removed.");
        //         })
        //     }else{
        //         console.log("No such file found.");
        //     }
        // }
        // let finalFilePath = `pdf/${fileName}.pdf`
        // return finalFilePath;
      } else {
        templateLocal = null;
      }
    } catch (err) {
      templateLocal = null;
      console.error(err);
    }
  },
};
