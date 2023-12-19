

/**
 * @api {get} /college List of all the college
 * @apiName CollegeList
 * @apiGroup College
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of designation to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} collegeName Name of the college
 * @apiParam (Query Params) {String} location College location
 * @apiParam (Query Params) {String} website College website
 * @apiParam (Query Params) {String} search Search by contact Name,Email and contactNumber
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
 *               "collegeName": "Governement Engineering College MODASA",
 *               "streetLine1": "SHAMLAJI Road",
 *               "streetLine2": null,
 *               "area": "modasa",
 *               "city": "Modasa",
 *               "state": "Gujrat",
 *               "zipcode": 396230,
 *               "website": "https:gecmodasa.ac.in",
 *               "createdDate": "2021-09-15T08:32:52.000Z",
 *               "updatedDate": "2021-09-15T11:40:50.000Z",
 *               "deletedDate": null,
 *               "contact": [
 *                   {
 *                       "id": 1,
 *                       "name": "Prof Maltare",
 *                       "email": "maltare@gmail.com",
 *                       "contactNumber": "9885764587",
 *                       "collegeId": 1,
 *                       "createdDate": "2021-09-15T08:32:52.000Z",
 *                       "updatedDate": "2021-09-15T08:36:46.000Z",
 *                       "deletedDate": null
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
 * @api {delete} /college/:id Delete College by college Id
 * @apiName DeleteCollege
 * @apiGroup College
 * 
 * 
 * @apiParam {Number} id College Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "College has been deleted successfully"
 * }
 */

/**
 * @api {get} /college/:id Get particular College by college Id
 * @apiName GetCollegeById
 * @apiGroup College
 * 
 * 
 * @apiParam {Number} id College Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *       "id": 2,
 *       "collegeName": "LDCE",
 *       "streetLine1": "Shamlaji Road",
 *       "streetLine2": null,
 *       "area": "modasa",
 *       "city": "Modasa",
 *       "state": "Gujrat",
 *       "zipcode": 396230,
 *       "website": "https:gecmodasa.ac.in",
 *       "createdDate": "2021-09-15T08:37:37.000Z",
 *       "updatedDate": "2021-09-15T12:50:48.000Z",
 *       "deletedDate": null,
 *       "contact": [
 *           {
 *               "id": 7,
 *               "name": "Prof Maltare",
 *               "email": "maltare@gmail.com",
 *               "contactNumber": "9885764587",
 *               "collegeId": 2,
 *               "createdDate": "2021-09-15T08:37:37.000Z",
 *               "updatedDate": "2021-09-15T12:50:48.000Z",
 *               "deletedDate": null
 *           },
 *           {
 *               "id": 8,
 *               "name": "Prof Pritee",
 *               "email": "pritee@gmail.com",
 *               "contactNumber": "9885764588",
 *               "collegeId": 2,
 *               "createdDate": "2021-09-15T08:42:05.000Z",
 *               "updatedDate": "2021-09-15T12:50:48.000Z",
 *               "deletedDate": null
 *           }
 *       ]
 *     }
 * }
 */