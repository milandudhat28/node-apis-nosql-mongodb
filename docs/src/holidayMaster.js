/**
 * @api {get} /holiday List of all the holiday
 * @apiName HolidayList
 * @apiGroup Holiday
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
 *             {
 *               "id": 1,
 *               "title": "Janamashtmi",
 *               "startDate": "2021-08-30T00:00:00.000Z",
 *               "endDate": "2021-08-30T00:00:00.000Z",
 *               "createdDate": "2021-10-04T05:55:12.000Z",
 *               "updatedDate": "2021-10-04T05:55:12.000Z",
 *               "deletedDate": null,
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
 * @api {post} /holiday Create a new Holiday
 * @apiName CreateHoliday
 * @apiGroup Holiday
 *
 * @apiParam {String} title Title of the holiday
 * @apiParam {Date{yyyy-mm-dd}} startDate Start date of Holiday
 * @apiParam {Date{yyyy-mm-dd}} endDate End date of Holiday
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 200 OK
 * {
 *   "success": true,
 *   "status": 200,
 *   "message": "Holiday has been added successfully",
 * }
 */

/**
 * @api {put} /holiday/:id Update holiday by holiday Id
 * @apiName UpdateHoliday
 * @apiGroup Holiday
 *
 * @apiParam {Number} id holiday unique id
 * @apiParam {String} title Title of the holiday
 * @apiParam {Date{yyyy-mm-dd}} startDate Start date of Holiday
 * @apiParam {Date{yyyy-mm-dd}} endDate End date of Holiday
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Holiday has been updated successfully"
 * }
 */

/**
 * @api {delete} /holiday/:id Delete Holiday by holiday Id
 * @apiName DeleteHoliday
 * @apiGroup Holiday
 *
 *
 * @apiParam {Number} id Holiday Unique Id
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Holiday has been deleted successfully"
 * }
 */

/**
 * @api {get} /holiday/:id Get particular Holiday by holiday Id
 * @apiName GetHolidayById
 * @apiGroup Holiday
 *
 *
 * @apiParam {Number} id Holiday Unique Id
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *       "id": 3,
 *       "title": "Raksha bandhan",
 *       "startDate": "2021-09-09T00:00:00.000Z",
 *       "endDate": "2021-09-09T00:00:00.000Z",
 *       "content": "this is sample content",
 *       "createdDate": "2021-09-15T05:27:19.000Z",
 *       "updatedDate": "2021-09-15T05:28:46.000Z",
 *       "deletedDate": null
 *     }
 * }
 */
