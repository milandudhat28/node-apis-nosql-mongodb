
/**
 * @api {get} /jobChange List of all the jobChange
 * @apiName JobChangeList
 * @apiGroup Job
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of jobChange to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} title The title of the jobChange that you wnat
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *    "message": "List of courses",
 *    "length": 2,
 *    "data": {
 *        "result": [
 *            {
 *                "id": 1,
 *                "title": "JS COURSE",
 *                "isActive": true,
 *                "createdDate": "2021-07-02T13:34:32.000Z",
 *                "updatedDate": "2021-07-02T13:49:10.000Z",
 *                "deletedDate": null
 *            },
 *            {
 *                "id": 2,
 *                "title": "JAVA COURSE",
 *                "isActive": true,
 *                "createdDate": "2021-07-02T13:45:59.000Z",
 *                "updatedDate": "2021-07-02T13:45:59.000Z",
 *                "deletedDate": null
 *            }
 *        ]
 *    }
 * }
 */

/**
 * @api {post} /jobChange Create a new JobChange
 * @apiName CreateJobChange
 * @apiGroup Job
 * 
 * @apiParam {String} title job Change title
 * @apiParam {Boolean} isActive Boolean to check whether the jobChange is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Job Change saved successfully"
 * }
 */

/**
 * @api {put} /jobChange/:id Update jobChange by jobChange Id
 * @apiName UpdateJobChange
 * @apiGroup Job
 * 
 * 
 * @apiParam {Number} id JobChange Unique Id
 * @apiParam {String} title JobChange title
 * @apiParam {Boolean} isActive Boolean to check whether the jobChange is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"JObChange updated successfully"
 * }
 */

/**
 * @api {delete} /jobChange/:id Delete JobChange by jobChange Id
 * @apiName DeleteJobChange
 * @apiGroup Job
 * 
 * 
 * @apiParam {Number} id jobChange Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"jobChange deleted successfully"
 * }
 */

/**
 * @api {get} /jobChange/:id Get particular jobChange by jobChange Id
 * @apiName GetJobChangeById
 * @apiGroup Job
 * 
 * 
 * @apiParam {Number} id jobChange Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Job Exist",
 *   "data":{
 *      "id": 1,
 *      "title": "PHP",
 *      "isActive": true,
 *      "createdDate": "2021-04-27T12:37:14.000Z",
 *      "updatedDate": "2021-04-27T13:29:56.000Z",
 *      "deletedDate": null
 *   }
 * }
 */
