

/**
 * @api {get} /candidate List of all the candidate
 * @apiName GetCandidateList
 * @apiGroup Candidate
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of interviewType to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} seacrh Search by the firstName/email/contactNumber
 * @apiParam (Query Params) {String} technology TechnologyId
 * @apiParam (Query Params) {String} candidateStatusId Candidate status id
 * @apiParam (Query Params) {Date{yyyy-mm-dd}} fromDate Experience from Date
 * @apiParam (Query Params) {Date{yyyy-mm-dd}} toDate Experience to Date
 * @apiParam (Query Params) {Date{yyyy-mm-dd}} company Experience Company Name
 * @apiParam (Query Params) {Boolean} wishlist Candidate wishlist
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *    "data": {
 *        "list": [
 *            {
 *                "id": 1,
 *                "firstName": "Dishant",
 *                "middleName": "",
 *                "lastName": "Navadiya",
 *                "dateOfBirth": "2003-09-03T00:00:00.000Z",
 *                "gender": "M",
 *                "spouseName": "",
 *                "maritalStatus": "Single",
 *                "candidateImage": "uploads/candidate/1632827747774-navbrand.jpg",
 *                "referedBy": "",
 *                "wishlist": false,
 *                "contactNumber": "7896541236",
 *                "alternateContactNumber": "",
 *                "email": "dishantythfytfyvr675navadiya585858@gmail.com",
 *                "skype": "",
 *                "linkedIn": "",
 *                "isActive": false,
 *                "interviewStatus": "PENDING",
 *                "createdDate": "2021-09-14T07:12:47.000Z",
 *                "updatedDate": "2021-09-29T05:22:08.000Z",
 *                "deletedDate": null,
 *                "education": [
 *                    {
 *                        "id": 1,
 *                        "educationTypeId": 2,
 *                        "courseId": 1,
 *                        "instituteName": "Charusat",
 *                        "percentage": "8.00",
 *                        "passingYear": 2003,
 *                        "candidateId": 1,
 *                        "createdDate": "2021-09-14T07:12:47.000Z",
 *                        "updatedDate": "2021-09-29T05:22:08.000Z",
 *                        "deletedDate": null
 *                    }
 *                ],
 *                "course": [
 *                    {
 *                        "id": 1,
 *                        "courseName": "Docker and Kubernates",
 *                        "instituteName": "udemy",
 *                        "certificateUrl": "https://www.udemy.com/navneetpal",
 *                        "skills": "nodejs,docker,javascript,java",
 *                        "candidateId": 1,
 *                        "createdDate": "2021-09-29T05:10:22.000Z",
 *                        "updatedDate": "2021-09-29T05:22:08.000Z",
 *                        "deletedDate": null
 *                    }
 *                ],
 *                "salary": {
 *                    "id": 1,
 *                    "lastIncrementDate": "2021-08-01T00:00:00.000Z",
 *                    "currentCtc": 7400,
 *                    "status": "Negotiable",
 *                    "salaryBeforeIncrement": "22000.00",
 *                    "expectedCtc": "22000.00",
 *                    "addNoticePeriod": 4,
 *                    "reasonForProfessionalGap": "hfvhudygd",
 *                    "candidateId": 1,
 *                    "createdDate": "2021-09-14T07:12:47.000Z",
 *                    "updatedDate": "2021-09-29T05:22:08.000Z",
 *                    "deletedDate": null
 *                },
 *                "experience": [
 *                    {
 *                        "id": 1,
 *                        "companyName": "duyytrhfdg",
 *                        "designationId": 1,
 *                        "technologyId": 1,
 *                        "from": "2021-08-01T00:00:00.000Z",
 *                        "to": null,
 *                        "teamLead": "",
 *                        "projectManager": "",
 *                        "reasonForJobChange": "",
 *                        "totalExperience": null,
 *                        "candidateId": 1,
 *                        "createdDate": "2021-09-14T07:12:47.000Z",
 *                        "updatedDate": "2021-09-29T05:22:08.000Z",
 *                        "deletedDate": null,
 *                        "technology": {
 *                            "id": 1,
 *                            "title": "Javascript",
 *                            "parentId": null,
 *                            "isActive": false,
 *                            "deletedDate": null,
 *                            "createdDate": "2021-08-16T09:53:07.000Z",
 *                            "updatedDate": "2021-08-16T10:07:35.000Z"
 *                        },
 *                        "designation": {
 *                            "id": 1,
 *                            "title": "BA",
 *                            "isActive": true,
 *                            "createdDate": "2021-08-16T09:47:38.000Z",
 *                            "updatedDate": "2021-08-16T09:47:38.000Z",
 *                            "deletedDate": null
 *                        }
 *                    }
 *                ],
 *                "activity": {
 *                    "id": 1,
 *                    "approachDate": "2021-09-02T00:00:00.000Z",
 *                    "approachBy": "Lorem",
 *                    "candidateStatusId": 1,
 *                    "note": "",
 *                    "candidateId": 1,
 *                    "createdDate": "2021-09-14T07:12:47.000Z",
 *                    "updatedDate": "2021-09-29T05:22:08.000Z",
 *                    "deletedDate": null,
 *                    "candidateStatus": {
 *                        "id": 1,
 *                        "name": "Freelancer",
 *                        "isActive": true,
 *                        "createdDate": "2021-08-16T09:58:26.000Z",
 *                        "updatedDate": "2021-08-16T09:58:26.000Z",
 *                        "deletedDate": null
 *                    }
 *                }
 *            }
 *        ],
 *        "totalPages": 2,
 *        "limit": 1,
 *        "totalRecords": 2,
 *        "currentPage": 1
 *    }
 * }
 */


/**
 * @api {delete} /candidate/:id Delete Candidate by candidateId
 * @apiName DeleteCandidate
 * @apiGroup Candidate
 * 
 * 
 * @apiParam {Number} id Candidate Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success":true,
 *   "status":200,
 *   "message":"Candidate has been deleted successfully"
 * }
 */


/**
 * @api {post} /uploadCandidateImage/:id Upload Candidate by candidateId
 * @apiName UploadCandidate
 * @apiGroup Candidate
 * 
 * 
 * @apiParam {Number} id Candidate Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success":true,
 *   "status":200,
 *   "message":"Image has been added successfully"
 * }
 */

/**
 * @api {get} /candidate/:id Get particular Candidate by candidate Id
 * @apiName GetCandidateById
 * @apiGroup Candidate
 * 
 * 
 * @apiParam {Number} id Candidate Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *    "data": {
 *        "id": 1,
 *        "firstName": "Dishant",
 *        "middleName": "",
 *        "lastName": "Navadiya",
 *        "dateOfBirth": "2003-09-03T00:00:00.000Z",
 *        "gender": "M",
 *        "spouseName": "",
 *        "maritalStatus": "Single",
 *        "candidateImage": "uploads/candidate/1632827747774-navbrand.jpg",
 *        "referedBy": "",
 *        "wishlist": false,
 *        "contactNumber": "7896541236",
 *        "alternateContactNumber": "",
 *        "email": "dishantythfytfyvr675navadiya585858@gmail.com",
 *        "skype": "",
 *        "linkedIn": "",
 *        "isActive": false,
 *        "interviewStatus": "PENDING",
 *        "createdDate": "2021-09-14T07:12:47.000Z",
 *        "updatedDate": "2021-09-29T05:22:08.000Z",
 *        "deletedDate": null,
 *        "education": [
 *            {
 *                "id": 1,
 *                "educationTypeId": 2,
 *                "courseId": 1,
 *                "instituteName": "Charusat",
 *                "percentage": "8.00",
 *                "passingYear": 2003,
 *                "candidateId": 1,
 *                "createdDate": "2021-09-14T07:12:47.000Z",
 *                "updatedDate": "2021-09-29T05:22:08.000Z",
 *                "deletedDate": null
 *            }
 *        ],
 *        "course": [
 *            {
 *                "id": 1,
 *                "courseName": "Docker and Kubernates",
 *                "instituteName": "udemy",
 *                "certificateUrl": "https://www.udemy.com/navneetpal",
 *                "skills": "nodejs,docker,javascript,java",
 *                "candidateId": 1,
 *                "createdDate": "2021-09-29T05:10:22.000Z",
 *                "updatedDate": "2021-09-29T05:22:08.000Z",
 *                "deletedDate": null
 *            }
 *        ],
 *        "salary": {
 *            "id": 1,
 *            "lastIncrementDate": "2021-08-01T00:00:00.000Z",
 *            "currentCtc": 7400,
 *            "status": "Negotiable",
 *            "salaryBeforeIncrement": "22000.00",
 *            "expectedCtc": "22000.00",
 *            "addNoticePeriod": 4,
 *            "reasonForProfessionalGap": "hfvhudygd",
 *            "candidateId": 1,
 *            "createdDate": "2021-09-14T07:12:47.000Z",
 *            "updatedDate": "2021-09-29T05:22:08.000Z",
 *            "deletedDate": null
 *        },
 *        "experience": [
 *            {
 *                "id": 1,
 *                "companyName": "duyytrhfdg",
 *                "designationId": 1,
 *                "technologyId": 1,
 *                "from": "2021-08-01T00:00:00.000Z",
 *                "to": null,
 *                "teamLead": "",
 *                "projectManager": "",
 *                "reasonForJobChange": "",
 *                "totalExperience": null,
 *                "candidateId": 1,
 *                "createdDate": "2021-09-14T07:12:47.000Z",
 *                "updatedDate": "2021-09-29T05:22:08.000Z",
 *                "deletedDate": null,
 *                "technology": {
 *                    "id": 1,
 *                    "title": "Javascript",
 *                    "parentId": null,
 *                    "isActive": false,
 *                    "deletedDate": null,
 *                    "createdDate": "2021-08-16T09:53:07.000Z",
 *                    "updatedDate": "2021-08-16T10:07:35.000Z"
 *                },
 *                "designation": {
 *                    "id": 1,
 *                    "title": "BA",
 *                    "isActive": true,
 *                    "createdDate": "2021-08-16T09:47:38.000Z",
 *                    "updatedDate": "2021-08-16T09:47:38.000Z",
 *                    "deletedDate": null
 *                }
 *            }
 *        ],
 *        "activity": {
 *            "id": 1,
 *            "approachDate": "2021-09-02T00:00:00.000Z",
 *            "approachBy": "Lorem",
 *            "candidateStatusId": 1,
 *            "note": "",
 *            "candidateId": 1,
 *            "createdDate": "2021-09-14T07:12:47.000Z",
 *            "updatedDate": "2021-09-29T05:22:08.000Z",
 *            "deletedDate": null,
 *            "candidateStatus": {
 *                "id": 1,
 *                "name": "Freelancer",
 *                "isActive": true,
 *                "createdDate": "2021-08-16T09:58:26.000Z",
 *                "updatedDate": "2021-08-16T09:58:26.000Z",
 *                "deletedDate": null
 *            }
 *        }
 *    }
 * }
 */




/**
 * @api {get} /candidateByName Get candidates by candidateName 
 * @apiName GetCandidateByName
 * @apiGroup Candidate
 * 
 * 
 * @apiParam (Query Params) {String} candidateName Candidate Name
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *    "data": [
 *         {
 *            "id": 1,
 *            "candidateName": "Dishant Navadiya / dishantythfytfyvr675navadiya585858@gmail.com",
 *            "linkedIn": "",
 *            "referedBy": "",
 *            "contactNo": "7896541236",
 *            "alternateContactNo": "",
 *            "emailId": "dishantythfytfyvr675navadiya585858@gmail.com",
 *            "experience": [
 *                {
 *                    "companyName": "duyytrhfdg",
 *                    "designationId": 1,
 *                    "technologyId": 1,
 *                    "from": "2021-08-01T00:00:00.000Z",
 *                    "to": null,
 *                    "teamLead": "",
 *                    "projectManager": "",
 *                    "reasonForJobChange": "",
 *                    "totalExperience": null
 *                }
 *            ],
 *            "salary": {
 *                "lastIncrementDate": "2021-08-01T00:00:00.000Z",
 *                "currentCtc": 7400,
 *                "status": "Negotiable",
 *                "salaryBeforeIncrement": "22000.00",
 *                "expectedCtc": "22000.00",
 *                "addNoticePeriod": 4,
 *                "reasonForProfessionalGap": "hfvhudygd"
 *            }
 *        }
 *    ]
 * }
 */


/**
 * @api {get} /candidateDetail/:id Get candidateDetail by candidateId
 * @apiName GetCandidateDetailById
 * @apiGroup Candidate
 * 
 * 
 * @apiParam  {Number} id Candidate Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *    "data": {
 *        "id": 1,
 *        "firstName": "Dishant",
 *        "middleName": "",
 *        "lastName": "Navadiya",
 *        "dateOfBirth": "2003-09-05T00:00:00.000Z",
 *        "gender": "M",
 *        "spouseName": "",
 *        "maritalStatus": "Married",
 *        "candidateImage": null,
 *        "referedBy": "",
 *        "wishlist": false,
 *        "contactNumber": "9714673853",
 *        "alternateContactNumber": "",
 *        "email": "disha8ntnavadiya585858@gmail.com",
 *        "skype": "",
 *        "linkedIn": "",
 *        "isActive": false,
 *        "interviewStatus": "PENDING",
 *        "createdDate": "2021-09-14T07:03:10.000Z",
 *        "updatedDate": "2021-09-29T07:06:53.000Z",
 *        "deletedDate": null,
 *        "course": [
 *            {
 *                "id": 3,
 *                "courseName": "react",
 *                "instituteName": "https://www.udemy.com",
 *                "certificateUrl": "https://www.udemy.com",
 *                "skills": "reactjs,angularjs",
 *                "candidateId": 1,
 *                "createdDate": "2021-09-28T12:18:10.000Z",
 *                "updatedDate": "2021-09-28T12:18:10.000Z",
 *                "deletedDate": null
 *            }
 *        ],
 *        "salary": {
 *            "id": 1,
 *            "lastIncrementDate": "2021-04-01T00:00:00.000Z",
 *            "currentCtc": 7400,
 *            "status": "Non Negotible",
 *            "salaryBeforeIncrement": "22000.00",
 *            "expectedCtc": "22000.00",
 *            "addNoticePeriod": 4,
 *            "reasonForProfessionalGap": "jhgj",
 *            "candidateId": 1,
 *            "createdDate": "2021-09-14T07:03:10.000Z",
 *            "updatedDate": "2021-09-14T07:03:10.000Z",
 *            "deletedDate": null
 *        },
 *        "experience": [
 *            {
 *                "id": 1,
 *                "companyName": "duyytrhfdg",
 *                "designationId": 3,
 *                "technologyId": 1,
 *                "from": "2021-03-01T00:00:00.000Z",
 *                "to": null,
 *               "teamLead": "",
 *               "projectManager": "",
 *               "reasonForJobChange": "",
 *               "totalExperience": null,
 *               "candidateId": 1,
 *               "createdDate": "2021-09-14T07:03:10.000Z",
 *               "updatedDate": "2021-09-14T07:03:10.000Z",
 *               "deletedDate": null
 *           }
 *       ],
 *       "education": [
 *           {
 *               "id": 1,
 *               "educationTypeId": 1,
 *               "courseId": 2,
 *               "instituteName": "Charusat",
 *               "percentage": "8.00",
 *               "passingYear": 2020,
 *               "candidateId": 1,
 *               "createdDate": "2021-09-14T07:03:10.000Z",
 *               "updatedDate": "2021-09-14T07:03:10.000Z",
 *               "deletedDate": null,
 *               "educationtype": null,
 *               "course": null
 *           }
 *       ],
 *       "interviewdetail": null
 *   }
 * }
 */