/**
 * @api {get} /employee List of all the employee
 * @apiName EmployeeList
 * @apiGroup Employee
 *
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of holiday to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} title Title of the holiday
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *         "list": [
 *           {
 *               "id": 1,
 *               "firstName": "Dishant",
 *               "middleName": "",
 *               "lastName": "Navadiya",
 *               "dateOfBirth": "2003-09-03T00:00:00.000Z",
 *               "gender": "M",
 *               "spouseName": "",
 *               "maritalStatus": "Single",
 *               "employeeImage": "uploads/candidate/1632827747774-navbrand.jpg",
 *               "wishlist": false,
 *               "contactNumber": "7896541236",
 *               "alternateContactNumber": "",
 *               "email": "dishantythfytfyvr675navadiya585858@gmail.com",
 *               "skype": "",
 *               "linkedIn": "",
 *               "isActive": false,
 *               "workEmail": null,
 *               "workSkypeId": null,
 *               "createdDate": "2021-09-30T12:56:20.000Z",
 *               "updatedDate": "2021-09-30T12:56:20.000Z",
 *               "deletedDate": null,
 *               "education": [
 *                   {
 *                       "id": 1,
 *                       "educationTypeId": 2,
 *                       "courseId": 1,
 *                       "instituteName": "Charusat",
 *                       "percentage": "8.00",
 *                       "passingYear": 2003,
 *                       "employeeId": 1,
 *                       "createdDate": "2021-09-30T12:56:20.000Z",
 *                       "updatedDate": "2021-09-30T12:56:20.000Z",
 *                       "deletedDate": null,
 *                       "educationType": null,
 *                       "course": {
 *                           "id": 1,
 *                           "title": "react learning bootcamp",
 *                           "isActive": true,
 *                           "createdDate": "2021-08-16T09:54:58.000Z",
 *                           "updatedDate": "2021-08-16T09:54:58.000Z",
 *                           "deletedDate": null
 *                       }
 *                   }
 *               ],
 *               "course": [
 *                   {
 *                       "id": 1,
 *                       "courseName": "Docker and Kubernates",
 *                       "instituteName": "udemy",
 *                       "certificateUrl": "https://www.udemy.com/navneetpal",
 *                       "skills": "nodejs,docker,javascript,java",
 *                       "employeeId": 1,
 *                       "createdDate": "2021-09-30T12:56:20.000Z",
 *                       "updatedDate": "2021-09-30T12:56:20.000Z",
 *                       "deletedDate": null
 *                   }
 *               ],
 *               "salary": {
 *                   "id": 1,
 *                   "lastIncrementDate": "2021-08-01T00:00:00.000Z",
 *                   "currentCtc": 7400,
 *                   "status": "Negotiable",
 *                   "salaryBeforeIncrement": "22000.00",
 *                   "expectedCtc": "22000.00",
 *                   "addNoticePeriod": 4,
 *                   "reasonForProfessionalGap": "hfvhudygd",
 *                   "employeeId": 1,
 *                   "createdDate": "2021-09-30T12:56:20.000Z",
 *                   "updatedDate": "2021-09-30T12:56:20.000Z",
 *                   "deletedDate": null
 *               },
 *               "experience": [
 *                   {
 *                       "id": 1,
 *                       "companyName": "duyytrhfdg",
 *                       "designationId": 1,
 *                       "technologyId": 1,
 *                       "from": "2021-08-01T00:00:00.000Z",
 *                       "to": null,
 *                       "teamLead": "",
 *                       "projectManager": "",
 *                       "reasonForJobChange": "",
 *                       "totalExperience": null,
 *                       "employeeId": 1,
 *                       "createdDate": "2021-09-30T12:56:20.000Z",
 *                       "updatedDate": "2021-09-30T12:56:20.000Z",
 *                       "deletedDate": null,
 *                       "technology": {
 *                           "id": 1,
 *                           "title": "Javascript",
 *                           "parentId": null,
 *                           "isActive": false,
 *                           "deletedDate": null,
 *                           "createdDate": "2021-08-16T09:53:07.000Z",
 *                           "updatedDate": "2021-08-16T10:07:35.000Z"
 *                       },
 *                       "designation": {
 *                           "id": 1,
 *                           "title": "BA",
 *                           "isActive": true,
 *                           "createdDate": "2021-08-16T09:47:38.000Z",
 *                           "updatedDate": "2021-08-16T09:47:38.000Z",
 *                           "deletedDate": null
 *                       }
 *                   }
 *               ]
 *           }
 *         ],
 *         "totalPages": 4,
 *         "limit": 1,
 *         "totalRecords": 4,
 *         "currentPage": 1
 *     }
 * }
 */

/**
 * @api {delete} /employee/:id Delete Employee by employee Id
 * @apiName DeleteEmployee
 * @apiGroup Employee
 *
 *
 * @apiParam {Number} id Employee Unique Id
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Employee has been deleted successfully"
 * }
 */


/**
 * @api {post} /uploadEmployeeImage/:id Upload Employee Image by employee Id
 * @apiName UploadEmployeeImageById
 * @apiGroup Employee
 *
 *
 * @apiParam {Number} id Employee Unique Id
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Image has been added successfully"
 * }
 */

/**
 * @api {get} /employee/:id Get particular Employee by employee Id
 * @apiName GetEmployeeById
 * @apiGroup Employee
 *
 *
 * @apiParam {Number} id Employee Unique Id
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *   "data": {
 *       "id": 1,
 *       "firstName": "Dishant",
 *       "middleName": "",
 *       "lastName": "Navadiya",
 *       "dateOfBirth": "2003-09-03T00:00:00.000Z",
 *       "gender": "M",
 *       "spouseName": "",
 *       "maritalStatus": "Single",
 *       "employeeImage": "uploads/candidate/1632827747774-navbrand.jpg",
 *       "wishlist": false,
 *       "contactNumber": "7896541236",
 *       "alternateContactNumber": "",
 *       "email": "dishantythfytfyvr675navadiya585858@gmail.com",
 *       "skype": "",
 *       "linkedIn": "",
 *       "isActive": false,
 *       "workEmail": null,
 *       "workSkypeId": null,
 *       "createdDate": "2021-09-30T12:56:20.000Z",
 *       "updatedDate": "2021-09-30T12:56:20.000Z",
 *       "deletedDate": null,
 *       "education": [
 *           {
 *               "id": 1,
 *               "educationTypeId": 2,
 *               "courseId": 1,
 *               "instituteName": "Charusat",
 *               "percentage": "8.00",
 *               "passingYear": 2003,
 *               "employeeId": 1,
 *               "createdDate": "2021-09-30T12:56:20.000Z",
 *               "updatedDate": "2021-09-30T12:56:20.000Z",
 *               "deletedDate": null,
 *               "educationType": null,
 *               "course": {
 *                   "id": 1,
 *                   "title": "react learning bootcamp",
 *                   "isActive": true,
 *                   "createdDate": "2021-08-16T09:54:58.000Z",
 *                   "updatedDate": "2021-08-16T09:54:58.000Z",
 *                   "deletedDate": null
 *               }
 *           }
 *       ],
 *       "course": [
 *           {
 *               "id": 1,
 *               "courseName": "Docker and Kubernates",
 *               "instituteName": "udemy",
 *               "certificateUrl": "https://www.udemy.com/navneetpal",
 *               "skills": "nodejs,docker,javascript,java",
 *               "employeeId": 1,
 *               "createdDate": "2021-09-30T12:56:20.000Z",
 *               "updatedDate": "2021-09-30T12:56:20.000Z",
 *               "deletedDate": null
 *           }
 *       ],
 *       "salary": {
 *           "id": 1,
 *           "lastIncrementDate": "2021-08-01T00:00:00.000Z",
 *           "currentCtc": 7400,
 *           "status": "Negotiable",
 *           "salaryBeforeIncrement": "22000.00",
 *           "expectedCtc": "22000.00",
 *           "addNoticePeriod": 4,
 *           "reasonForProfessionalGap": "hfvhudygd",
 *           "employeeId": 1,
 *           "createdDate": "2021-09-30T12:56:20.000Z",
 *           "updatedDate": "2021-09-30T12:56:20.000Z",
 *           "deletedDate": null
 *       },
 *       "experience": [
 *           {
 *               "id": 1,
 *               "companyName": "duyytrhfdg",
 *               "designationId": 1,
 *               "technologyId": 1,
 *               "from": "2021-08-01T00:00:00.000Z",
 *               "to": null,
 *               "teamLead": "",
 *               "projectManager": "",
 *               "reasonForJobChange": "",
 *               "totalExperience": null,
 *               "employeeId": 1,
 *               "createdDate": "2021-09-30T12:56:20.000Z",
 *               "updatedDate": "2021-09-30T12:56:20.000Z",
 *               "deletedDate": null,
 *               "technology": {
 *                   "id": 1,
 *                   "title": "Javascript",
 *                   "parentId": null,
 *                   "isActive": false,
 *                   "deletedDate": null,
 *                   "createdDate": "2021-08-16T09:53:07.000Z",
 *                   "updatedDate": "2021-08-16T10:07:35.000Z"
 *               },
 *               "designation": {
 *                   "id": 1,
 *                   "title": "BA",
 *                   "isActive": true,
 *                   "createdDate": "2021-08-16T09:47:38.000Z",
 *                   "updatedDate": "2021-08-16T09:47:38.000Z",
 *                   "deletedDate": null
 *               }
 *           }
 *       ]
 *   }
 * }
 */

/**
 * @api {get} /candidateToEmployee/:id Covert particular candidate to employee by candidate Id
 * @apiName ConvertCandidatetoEmployeeById
 * @apiGroup Employee
 *
 *
 * @apiParam {Number} id Candidate Unique Id
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Employee has been added successfully",
 *   "data": {
 *       "id": 2,
 *       "firstName": "Dishant",
 *       "middleName": "",
 *       "lastName": "Navadiya",
 *       "dateOfBirth": "2003-09-03T00:00:00.000Z",
 *       "gender": "M",
 *       "spouseName": "",
 *       "maritalStatus": "Single",
 *       "employeeImage": "uploads/candidate/1632827747774-navbrand.jpg",
 *       "wishlist": false,
 *       "contactNumber": "7896541236",
 *       "alternateContactNumber": "",
 *       "email": "dishantythfytfyvr675navadiya585858@gmail.com",
 *       "skype": "",
 *       "linkedIn": "",
 *       "isActive": false,
 *       "createdDate": "2021-09-30T12:56:20.000Z",
 *       "updatedDate": "2021-09-30T12:56:20.000Z",
 *       "education": [
 *           {
 *               "id": 1,
 *               "educationTypeId": 2,
 *               "courseId": 1,
 *               "instituteName": "Charusat",
 *               "percentage": "8.00",
 *               "passingYear": 2003,
 *               "employeeId": 1,
 *               "createdDate": "2021-09-30T12:56:20.000Z",
 *               "updatedDate": "2021-09-30T12:56:20.000Z",
 *           }
 *       ],
 *       "salary": {
 *           "id": 1,
 *           "lastIncrementDate": "2021-08-01T00:00:00.000Z",
 *           "currentCtc": 7400,
 *           "status": "Negotiable",
 *           "salaryBeforeIncrement": "22000.00",
 *           "expectedCtc": "22000.00",
 *           "addNoticePeriod": 4,
 *           "reasonForProfessionalGap": "hfvhudygd",
 *           "employeeId": 1,
 *           "createdDate": "2021-09-30T12:56:20.000Z",
 *           "updatedDate": "2021-09-30T12:56:20.000Z"
 *       },
 *       "experience": [
 *           {
 *               "id": 1,
 *               "companyName": "duyytrhfdg",
 *               "designationId": 1,
 *               "technologyId": 1,
 *               "from": "2021-08-01T00:00:00.000Z",
 *               "to": null,
 *               "teamLead": "",
 *               "projectManager": "",
 *               "reasonForJobChange": "",
 *               "totalExperience": null,
 *               "employeeId": 1,
 *               "createdDate": "2021-09-30T12:56:20.000Z",
 *               "updatedDate": "2021-09-30T12:56:20.000Z"
 *           }
 *       ]
 *   }
 * }
 */

