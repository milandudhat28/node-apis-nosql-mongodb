const FieldValue = require("firebase-admin").firestore.FieldValue;

module.exports = {
  sync: async (data) => {
    try {
      console.log("Process started for Firebase sync");
      const hrms_users = setup.db.collection("hrms_users");
      const tl_table = setup.db.collection("tl_table");
      const pm_table = setup.db.collection("pm_table");

      const subOrdinate = {
        firstName: data.firstName,
        lastName: data.lastName,
        image: data.image,
      }

      // if designation is PM and not exits entry in firestore then create new one
      if (
        data.designation &&
        data.designation.toUpperCase() == "PROJECT MANAGER"
      ) {
        console.log("Employee is PM");

        // if Employee is PM and exits as TL then delete TL Document
        const isTl = await tl_table
          .where("__name__", "==", data.employeeId)
          .get();
        if (!isTl.empty) {
          console.log("Delete TL Document");
          await tl_table.doc(data.employeeId).delete();
        }

        // Delete from PM subordinates
        const oldPM = await pm_table
          .where(`${data.employeeId}.employeeId`, "==", data.employeeId)
          .get();

        if (!oldPM.empty) {
          console.log("Will remove employee from old PM subordinates");
          oldPM.forEach((doc) => {
            doc.ref.update({
              [data.employeeId]: FieldValue.delete(),
            });
          });
        }

        // Delete from TL subordinates
        const oldTL = await tl_table
          .where(`${data.employeeId}.employeeId`, "==", data.employeeId)
          .get();

        if (!oldTL.empty) {
          console.log("Will remove employee from old TL subordinates");
          oldTL.forEach((doc) => {
            doc.ref.update({
              [data.employeeId]: FieldValue.delete(),
            });
          });
        }

        // If Not as PM create document
        // const isPl = await pm_table
        //   .where("__name__", "==", data.employeeId)
        //   .get();
        // if (isPl.empty) {
        //   console.log("New Document Added in PM for Employee");
        //   await pm_table.doc(data.employeeId).set({
        //     subordinates_user_ids: [],
        //   });
        // }
      }

      // if designation is TL and not exits entry in firestore then create new one
      else if (
        data.designation &&
        data.designation.toUpperCase() == "TEAM LEADER"
      ) {
        console.log("Employee is TL");

        // if Employee is TL and exits as PM then delete PM Document
        const isPm = await pm_table
          .where("__name__", "==", data.employeeId)
          .get();
        if (!isPm.empty) {
          console.log("Delete PM Document");
          await pm_table.doc(data.employeeId).delete();
        }

        // Delete from TL subordinates
        const oldTL = await tl_table
          .where(`${data.employeeId}.employeeId`, "==", data.employeeId)
          .get();

        if (!oldTL.empty) {
          console.log("Will remove employee from old TL subordinates");

          oldTL.forEach((doc) => {
            doc.ref.update({
              [data.employeeId]: FieldValue.delete(),
            });
          });
        }

        // If Not as TL create document
        // const isTl = await tl_table
        //   .where("__name__", "==", data.employeeId)
        //   .get();
        // if (isTl.empty) {
        //   console.log("New Document Added in TL for Employee");

        //   await tl_table.doc(data.employeeId).set({
        //     subordinates_user_ids: [],
        //   });
        // }
      }

      // if Employee is not TL/PM and exits as PM/TL then delete PM/TL Document
      else if (
        data.designation &&
        data.designation.toUpperCase() != "TEAM LEADER" &&
        data.designation.toUpperCase() != "PROJECT MANAGER"
      ) {
        console.log("Employee is not TL/PM, deleted it's Document in TL/PM");
        const isPm = await pm_table
          .where("__name__", "==", data.employeeId)
          .get();
        if (!isPm.empty) {
          console.log("Delete PM Document");
          await pm_table.doc(data.employeeId).delete();
        }

        const isTl = await tl_table
          .where("__name__", "==", data.employeeId)
          .get();
        if (!isTl.empty) {
          console.log("Delete TL Document");
          await tl_table.doc(data.employeeId).delete();
        }
      }

      // if there is TL
      if (data.tlId && data.tlId != 0) {
        console.log("Employee have TL");

        const TL_ID = `CC${data.tlId.toString().padStart(4, "0")}`;
        const tlData = await tl_table.where("__name__", "==", TL_ID).get();

        // Add new entry is employee is Active and related TL document not exits
        if (tlData.empty && data.isActive == 1) {
          console.log("New Document Added in TL");

          await tl_table.doc(TL_ID).set({
            [data.employeeId]: subOrdinate,
          });
        } else {
          // if employee active then append in subordinates else remove
          if (data.isActive == 1) {
            console.log("Employee Added as TL subordinates");

            await tl_table.doc(TL_ID).update({
              [data.employeeId]: subOrdinate,
            });
          } else if (!tlData.empty) {
            console.log("Employee Removed as TL subordinates");

            await tl_table.doc(TL_ID).update({
              [data.employeeId]: FieldValue.delete(),
            });
          }
        }
      }

      // if there is PM
      if (data.pmId && data.pmId != 0) {
        console.log("Employee have PM");

        const PM_ID = `CC${data.pmId.toString().padStart(4, "0")}`;
        const pmData = await pm_table.where("__name__", "==", PM_ID).get();

        // Add new entry is employee is Active and related PM document not exits
        if (pmData.empty && data.isActive == 1) {
          console.log("New Document Added in PM");

          await pm_table.doc(PM_ID).set({
            [data.employeeId]: subOrdinate,
          });
        } else {
          // if employee active then append in subordinates else remove
          if (data.isActive == 1) {
            console.log("Employee Added as PM subordinates");

            await pm_table.doc(PM_ID).update({
              [data.employeeId]: subOrdinate,
            });
          } else if (!pmData.empty) {
            console.log("Employee Removed as PM subordinates");

            await pm_table.doc(PM_ID).update({
              [data.employeeId]: FieldValue.delete(),
            });
          }
        }
      }

      // Update hrms users document
      const user = await hrms_users
        .where("__name__", "==", data.employeeId)
        .get();

      if (user.empty) {
        console.log("New Employee Added in Firestore");
        await hrms_users.doc(data.employeeId).set(data);
      } else {
        console.log("Employee going for Update in Firestore");
        await hrms_users.doc(data.employeeId).update(data);
      }

      console.log("Process has been complete for Firebase sync");
    } catch (error) {
      console.log(error);
    }
  },

  addInBulk: async (employees) => {
    try {
      console.log("Process started for Firebase sync");
      const hrms_users = setup.db.collection("hrms_users");
      const tl_table = setup.db.collection("tl_table");
      const pm_table = setup.db.collection("pm_table");

      for (let data of employees) {
        const subOrdinate = {
          firstName: data.firstName,
          lastName: data.lastName,
          image: data.image,
        }
        // if designation is PM and not exits entry in firestore then create new one
        // if (
        //   data.designation &&
        //   data.designation.toUpperCase() == "PROJECT MANAGER"
        // ) {
        //   console.log("Employee is PM");

        //   // If Not as PM create document
        //   const isPl = await pm_table
        //     .where("__name__", "==", data.employeeId)
        //     .get();
        //   if (isPl.empty) {
        //     console.log("New Document Added in PM for Employee");
        //     await pm_table.doc(data.employeeId).set({
        //       subordinates_user_ids: [],
        //     });
        //   }
        // }

        // if designation is TL and not exits entry in firestore then create new one
        // else if (
        //   data.designation &&
        //   data.designation.toUpperCase() == "TEAM LEADER"
        // ) {
        //   console.log("Employee is TL");

        //   // If Not as TL create document
        //   const isTl = await tl_table
        //     .where("__name__", "==", data.employeeId)
        //     .get();
        //   if (isTl.empty) {
        //     console.log("New Document Added in TL for Employee");

        //     await tl_table.doc(data.employeeId).set({
        //       subordinates_user_ids: [],
        //     });
        //   }
        // }

        // if there is TL
        if (data.tlId && data.tlId != 0 && data.isActive == 1) {
          console.log("Employee have TL");

          const TL_ID = data.tlEmployeeId;
          const tlData = await tl_table.where("__name__", "==", TL_ID).get();

          // Add new entry with subordinates
          if (tlData.empty) {
            console.log("New Document Added in TL");

            await tl_table.doc(TL_ID).set({
              [data.employeeId]: subOrdinate,
            });
          }
          // append in subordinates
          else {
            console.log("Employee Added as TL subordinates");

            await tl_table.doc(TL_ID).update({
              [data.employeeId]: subOrdinate,
            });
          }
        }

        // if there is PM
        if (data.pmId && data.pmId != 0 && data.isActive == 1) {
          console.log("Employee have PM");

          const PM_ID = data.pmEmployeeId;
          const pmData = await pm_table.where("__name__", "==", PM_ID).get();

          // Add new entry with subordinates
          if (pmData.empty) {
            console.log("New Document Added in PM");

            await pm_table.doc(PM_ID).set({
              [data.employeeId]: subOrdinate,
            });
          }
          // append in subordinates
          else {
            console.log("Employee Added as PM subordinates");

            await pm_table.doc(PM_ID).update({
              [data.employeeId]: subOrdinate,
            });
          }
        }

        delete data.tlEmployeeId
        delete data.pmEmployeeId

        // Create hrms users document
        console.log("New Employee Added in Firestore");
        await hrms_users.doc(data.employeeId).set(data);
      }

      console.log("Process has been complete for Firebase sync");
    } catch (error) {
      console.log(error);
    }
  },
};
