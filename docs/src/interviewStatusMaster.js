//list of all departments

/**
 * @api {get} /interviewStatus List of all the interviewStatus
 * @apiName InterviewStatusList
 * @apiGroup InterviewStatus
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of interviewStatus to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} title Interview Status title
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *       "list": [
 *           {
 *               "id": 6,
 *               "title": "selected",
 *               "isActive": true,
 *               "createdDate": "2021-09-10T06:56:46.000Z",
 *               "updatedDate": "2021-09-10T06:56:46.000Z",
 *               "deletedDate": null
 *           }
 *       ],
 *       "totalPages": 2,
 *       "limit": 1,
 *       "totalRecords": 2,
 *       "currentPage": 1
 *     }
 * }
 */

/**
 * @api {post} /interviewStatus Create a new interviewStatus
 * @apiName CreateInterviewStatus
 * @apiGroup InterviewStatus
 * 
 * @apiParam {String} title Interview Status title
 * @apiParam {Boolean} isActive Boolean to check whether interviewStatus is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Interview status has been added successfully",
 *     "data": {
 *         "id": 5,
 *         "title": "****",
 *         "isActive": true,
 *         "updatedDate": "2021-10-01T07:10:48.458Z",
 *         "createdDate": "2021-10-01T07:10:48.458Z"
 *     }
 * }
 */

/**
 * @api {put} /interviewStatus/:id Update InterviewStatus by interviewStatusId
 * @apiName UpdateInterviewStatus
 * @apiGroup InterviewStatus
 * 
 * 
 * @apiParam {Number} id interviewStatus Unique Id
 * @apiParam {String} title InterviewStatus title
 * @apiParam {Boolean} isActive InterviewStatus is atibve or not.
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Interview Status has been updated successfully"
 * }
 */

/**
 * @api {delete} /interviewStatus/:id Delete interviewStatus by interviewStatus Id
 * @apiName Delete interviewStatus
 * @apiGroup InterviewStatus
 * 
 * 
 * @apiParam {Number} id InterviewStatus Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success":true,
 *   "status":200,
 *   "message":"Interview status has been deleted successfully"
 * }
 */

/**
 * @api {get} /interviewStatus/:id Get particular interviewStatus by interviewStatus Id
 * @apiName GetInterviewStatusById
 * @apiGroup InterviewStatus
 * 
 * 
 * @apiParam {Number} id Interview Status Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *         "id": 5,
 *         "title": "***",
 *         "isActive": true,
 *         "createdDate": "2021-10-01T07:10:48.000Z",
 *         "updatedDate": "2021-10-01T07:50:54.000Z",
 *         "deletedDate": null,
 *     }
 * }
 */