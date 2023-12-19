
/**
 * @api {get} /activityStatus List of all the activityStatus
 * @apiName ActivityStatusList
 * @apiGroup Activity
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of activityStatus to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} title The title of the activityStatus that you wnat
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *    "message": "List of activityStatuss",
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
 * @api {post} /activityStatus Create a new Activity
 * @apiName CreateActivity
 * @apiGroup Activity
 * 
 * @apiParam {String} title Activity title
 * @apiParam {Boolean} isActive Boolean to check whether the activityStatus is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Activity saved successfully"
 * }
 */

/**
 * @api {put} /activityStatus/:id Update Activity by activityStatus Id
 * @apiName UpdateActivity
 * @apiGroup Activity
 * 
 * 
 * @apiParam {Number} id Activity Unique Id
 * @apiParam {String} title Activity title
 * @apiParam {Boolean} isActive Boolean to check whether the activityStatus is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Activity updated successfully"
 * }
 */

/**
 * @api {delete} /activityStatus/:id Delete Activity by activityStatus Id
 * @apiName DeleteActivity
 * @apiGroup Activity
 * 
 * 
 * @apiParam {Number} id Activity Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Activity deleted successfully"
 * }
 */

/**
 * @api {get} /activityStatus/:id Get particular Activity by activityStatus Id
 * @apiName GetActivityById
 * @apiGroup Activity
 * 
 * 
 * @apiParam {Number} id Activity Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Activity Exist",
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
