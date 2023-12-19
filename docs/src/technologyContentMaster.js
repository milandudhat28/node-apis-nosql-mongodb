//list of all departments

/**
 * @api {get} /technologyContent List of all the technologyContent
 * @apiName TechnologyContentList
 * @apiGroup TechnologyContent
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of designation to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {Number} technologyId
 * @apiParam (Query Params) {String} content Content of the technology
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
 *                 "id": 1,
 *                 "technologyId": 1,
 *                 "content": "***********",
 *                 "createdDate": "2021-09-15T05:44:33.000Z",
 *                 "updatedDate": "2021-09-15T05:44:33.000Z",
 *                 "deletedDate": null,
 *                 "technology": {
 *                     "id": 1,
 *                     "title": "Javascript",
 *                     "parentId": null,
 *                     "isActive": false,
 *                     "deletedDate": null,
 *                     "createdDate": "2021-08-16T09:53:07.000Z",
 *                     "updatedDate": "2021-08-16T10:07:35.000Z"
 *                 }
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
 * @api {post} /technologyContent Create a new TechnologyContent
 * @apiName CreateTechnologyContent
 * @apiGroup TechnologyContent
 * 
 * @apiParam {Number} technologyId Technology id
 * @apiParam {String} content Content of the technology
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Technology content has been added successfully",
 *     "data": {
 *         "id": 5,
 *         "technologyId": 4,
 *         "content": "**********",
 *         "updatedDate": "2021-10-01T07:10:48.458Z",
 *         "createdDate": "2021-10-01T07:10:48.458Z"
 *     }
 * }
 */

/**
 * @api {put} /technologyContent/:id Update TechnologyContent by technologyContentId
 * @apiName UpdateTechnologyContent
 * @apiGroup TechnologyContent
 * 
 * 
 * @apiParam {Number} id TechnologyContent Unique Id
 * @apiParam {Number} technologyId TechnologyId
 * @apiParam {String} content Technology Content
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Technology content has been updated successfully"
 * }
 */

/**
 * @api {delete} /technologyContent/:id Delete TechnologyContent by technologyContent Id
 * @apiName Delete technologyContent
 * @apiGroup TechnologyContent
 * 
 * 
 * @apiParam {Number} id TechnologyContent Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success":true,
 *   "status":200,
 *   "message":"Technology content has been deleted successfully"
 * }
 */

/**
 * @api {get} /technologyContent/:id Get particular technologyContent by technologyContent Id
 * @apiName GetTechnologyContentById
 * @apiGroup TechnologyContent
 * 
 * 
 * @apiParam {Number} id TechnologyContent Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *         "id": 5,
 *         "technologyId": 4,
 *         "content": "********",
 *         "createdDate": "2021-10-01T07:10:48.000Z",
 *         "updatedDate": "2021-10-01T07:50:54.000Z",
 *         "deletedDate": null,
 *         "technology": {
 *             "id": 4,
 *             "title": "node",
 *             "parentId": null,
 *             "isActive": true,
 *             "deletedDate": null,
 *             "createdDate": "2021-10-01T12:40:30.000Z",
 *             "updatedDate": "2021-10-01T12:40:30.000Z"
 *         }
 *     }
 * }
 */