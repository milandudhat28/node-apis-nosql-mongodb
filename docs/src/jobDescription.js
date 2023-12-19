

/**
 * @api {get} /jobDescription List of all the jobDescription
 * @apiName JobDescriptionList
 * @apiGroup JobDescription
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of jobDescription to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} search Name of the technology
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *         "list": [
 *             {
 *               "id": 2,
 *               "technologyId": 4,
 *               "experience": "1-2years",
 *               "content": "this is sample content",
 *               "createdDate": "2021-10-04T05:55:12.000Z",
 *               "updatedDate": "2021-10-04T05:55:12.000Z",
 *               "deletedDate": null,
 *               "Technology": {
 *                   "id": 4,
 *                   "title": "node",
 *                   "parentId": null,
 *                   "isActive": true,
 *                   "deletedDate": null,
 *                   "createdDate": "2021-10-01T12:40:30.000Z",
 *                   "updatedDate": "2021-10-01T12:40:30.000Z"
 *               }
 *             }
 *         ],
 *         "totalPages": 4,
 *         "limit": 1,
 *         "totalRecords": 4,
 *         "currentPage": 1
 *     }
 * }
 */

/**
 * @api {post} /jobDescription Create a new JobDescription
 * @apiName CreateJobDescription
 * @apiGroup JobDescription
 * 
 * @apiParam {String} experience Experience
 * @apiParam {String} content Content of JobDescription
 * @apiParam {Number} technologyId Technology id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success": true,
 *   "status": 200,
 *   "message": "JobDescription has been added successfully",
 * }
 */

/**
 * @api {put} /jobDescription/:id Update jobDescription by jobDescription Id
 * @apiName UpdateJobDescription
 * @apiGroup JobDescription
 * 
 * @apiParam {Number} id jobDescription unique id
 * @apiParam {String} experience Experience
 * @apiParam {String} content Content of JobDescription
 * @apiParam {Number} technologyId Technology id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "JobDescription has been updated successfully"
 * }
 */

/**
 * @api {delete} /jobDescription/:id Delete JobDescription by jobDescription Id
 * @apiName DeleteJobDescription
 * @apiGroup JobDescription
 * 
 * 
 * @apiParam {Number} id JobDescription Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "JobDescription has been deleted successfully"
 * }
 */

/**
 * @api {get} /jobDescription/:id Get particular JobDescription by jobDescription Id
 * @apiName GetJobDescriptionById
 * @apiGroup JobDescription
 * 
 * 
 * @apiParam {Number} id JobDescription Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *       "id": 3,
 *       "technologyId": 4,
 *       "experience": "1-2years",
 *       "content": "this is sample content",
 *         "createdDate": "2021-09-15T05:27:19.000Z",
 *         "updatedDate": "2021-09-15T05:28:46.000Z",
 *         "deletedDate": null
 *     }
 * }
 */