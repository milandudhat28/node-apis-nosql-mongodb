

/**
 * @api {get} /project List of all the project
 * @apiName ProjectList
 * @apiGroup Project
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of project to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} projectName Name of the project
 * @apiParam (Query Params) {String} projectManager Project Manager
 * @apiParam (Query Params) {Nuumber} technologyId Technology unique id
 * @apiParam (Query Params) {String} year Project year
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
 *                 "projectName": "sonitafortrech",
 *                 "technologyId": 2,
 *                 "projectManager": "pritee",
 *                 "year": "2019",
 *                 "description":"mern stack project"
 *                 "createdDate": "2021-09-15T05:26:47.000Z",
 *                 "updatedDate": "2021-09-15T05:26:47.000Z",
 *                 "deletedDate": null
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
 * @api {post} /project Create a new Project
 * @apiName CreateProject
 * @apiGroup Project
 * 
 * @apiParam {String} projectName Name of the project
 * @apiParam {String} projectManager Project Manager Name
 * @apiParam {Number} technologyId Technology id
 * @apiParam {String} year Project Year
 * @apiParam {String} description description of the project
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success": true,
 *   "status": 200,
 *   "message": "Project has been added successfully",
 *   "data": {
 *       "id": 1,
 *       "projectName": "*****",
 *       "projectManager": "****",
 *       "technologyId": 1,
 *       "year": "2021",
 *       "description": "mern stack project",
 *       "updatedDate": "2021-10-01T06:01:57.715Z",
 *       "createdDate": "2021-10-01T06:01:57.715Z"
 *   }
 * }
 */

/**
 * @api {put} /project/:id Update project by project Id
 * @apiName UpdateProject
 * @apiGroup Project
 * 
 * @apiParam {Number} id Page Unique Id
 * @apiParam {String} projectName Name of the project
 * @apiParam {String} projectManager Project Manager Name
 * @apiParam {Number} technologyId Technology id
 * @apiParam {String} year Project Year
 * @apiParam {String} description description of the project
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Project has been updated successfully"
 * }
 */

/**
 * @api {delete} /project/:id Delete Project by project Id
 * @apiName DeleteProject
 * @apiGroup Project
 * 
 * 
 * @apiParam {Number} id Project Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Project has been deleted successfully"
 * }
 */

/**
 * @api {get} /project/:id Get particular Project by project Id
 * @apiName GetProjectById
 * @apiGroup Project
 * 
 * 
 * @apiParam {Number} id Project Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *         "id": 3,
 *         "projectName": "******",
 *         "technologyId": "*******",
 *         "projectManager": "********",
 *         "year":"2019",
 *         "description":"mern stack project",
 *         "createdDate": "2021-09-15T05:27:19.000Z",
 *         "updatedDate": "2021-09-15T05:28:46.000Z",
 *         "deletedDate": null
 *     }
 * }
 */