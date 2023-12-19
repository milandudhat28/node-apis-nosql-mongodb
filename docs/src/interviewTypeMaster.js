

/**
 * @api {get} /interviewType List of all the interviewType
 * @apiName InterviewTypeList
 * @apiGroup InterviewType
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of interviewType to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} title Interview Type title
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
 *               "id": 2,
 *               "title": "***",
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
 * @api {post} /interviewType Create a new interviewType
 * @apiName CreateInterviewStatus
 * @apiGroup InterviewType
 * 
 * @apiParam {String} title Interview Type title
 * @apiParam {Boolean} isActive Boolean to check whether interviewType is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Interview type has been added successfully",
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
 * @api {put} /interviewType/:id Update InterviewType by interviewTypeId
 * @apiName UpdateInterviewStatus
 * @apiGroup InterviewType
 * 
 * 
 * @apiParam {Number} id interviewType Unique Id
 * @apiParam {String} title InterviewType title
 * @apiParam {Boolean} isActive InterviewType is active or not.
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Interview type has been updated successfully"
 * }
 */

/**
 * @api {delete} /interviewType/:id Delete interviewType by interviewType Id
 * @apiName Delete interviewType
 * @apiGroup InterviewType
 * 
 * 
 * @apiParam {Number} id InterviewType Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success":true,
 *   "status":200,
 *   "message":"Interview type has been deleted successfully"
 * }
 */

/**
 * @api {get} /interviewType/:id Get particular interviewType by interviewType Id
 * @apiName GetInterviewTypeById
 * @apiGroup InterviewType
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