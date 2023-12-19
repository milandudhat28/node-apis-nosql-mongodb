//list of all departments

/**
 * @api {get} /document List of all the document
 * @apiName DocumentList
 * @apiGroup Document
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of designation to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} documentName Name of the document
 * @apiParam (Query Params) {String} code Document Code
 * @apiParam (Query Params) {Date{'yyyy-mm-dd'}} createdDateFrom Document createdDate
 * @apiParam (Query Params) {Date{'yyyy-mm-dd'}} createdDateTo Document createdDate
 * @apiParam (Query Params) {Date{'yyyy-mm-dd'}} updatedDateFrom Document updatedDate
 * @apiParam (Query Params) {Date{'yyyy-mm-dd'}} updatedDateto Document updatedDate
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
 *                 "documentName": "sonitafortrech",
 *                 "code": "hdbvhvfj",
 *                 "content": "dvjhsdgfjkwfgjweg",
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
 * @api {post} /document Create a new Document
 * @apiName CreateDocument
 * @apiGroup Document
 * 
 * @apiParam {String} documentName Name of the document
 * @apiParam {String} code Document Code
 * @apiParam {String} content Content of the document
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success": true,
 *   "status": 200,
 *   "message": "Document has been added successfully",
 *   "data": {
 *       "id": 1,
 *       "documentName": "*****",
 *       "code": "****",
 *       "content": "*****",
 *       "updatedDate": "2021-10-01T06:01:57.715Z",
 *       "createdDate": "2021-10-01T06:01:57.715Z"
 *   }
 * }
 */

/**
 * @api {put} /document/:id Update document by document Id
 * @apiName UpdateDocument
 * @apiGroup Document
 * 
 * 
 * @apiParam {Number} id Document Unique Id
 * @apiParam {String} documentName Document Name
 * @apiParam {String} code Document Code
 * @apiParam {String} content Content of the document 
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Document has been updated successfully"
 * }
 */

/**
 * @api {delete} /document/:id Delete Document by document Id
 * @apiName DeleteDocumnet
 * @apiGroup Document
 * 
 * 
 * @apiParam {Number} id Document Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Document has been deleted successfully"
 * }
 */

/**
 * @api {get} /document/:id Get particular Document by document Id
 * @apiName GetDocumentById
 * @apiGroup Document
 * 
 * 
 * @apiParam {Number} id Document Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *         "id": 3,
 *         "documentName": "******",
 *         "code": "*******",
 *         "content": "********",
 *         "createdDate": "2021-09-15T05:27:19.000Z",
 *         "updatedDate": "2021-09-15T05:28:46.000Z",
 *         "deletedDate": null
 *     }
 * }
 */