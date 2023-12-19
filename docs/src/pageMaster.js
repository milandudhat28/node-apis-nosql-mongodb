

/**
 * @api {get} /page List of all the Page
 * @apiName PageList
 * @apiGroup Page
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of Page to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} title Title of the Page

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
 *               "title": "contact us",
 *               "content": "<p>This is a contact page</p>",
 *               "metaTitle": "contact",
 *               "metaKeyword": "contact",
 *               "metaDescription": "This is a contact page",
 *               "accessKey": "contact",
 *               "status": "Enable",
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
 * @api {post} /page Create a new Page
 * @apiName CreatePage
 * @apiGroup Page
 * 
 * @apiParam {String} title Title of the Page
 * @apiParam {String} content Content of the page
 * @apiParam {Number} metaTitle metaTitle of the page
 * @apiParam {String} metaKeyword metaKeyword of the page
 * @apiParam {String} metaDescription metadescription of the Page
 * @apiParam {String} accessKey accesskey of the Page
 * @apiParam {String} status status of the Page
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *   "success": true,
 *   "status": 200,
 *   "message": "Page has been added successfully",
 *   "data": {
 *       "id": 1,
 *       "title": "about_page",
 *       "content": "<p>This is About Pag</p>",
 *       "metaTitle": "about_page",
 *       "metaKeyword": "about_page",
 *       "metaDescription": "About Page",
 *       "accessKey": "about_page",
 *       "status": "Enable",
 *       "updatedDate": "2021-10-01T06:01:57.715Z",
 *       "createdDate": "2021-10-01T06:01:57.715Z"
 *   }
 * }
 */

/**
 * @api {put} /page/:id Update Page by Page Id
 * @apiName UpdatePage
 * @apiGroup Page
 * 
 * 
 * @apiParam {Number} id Page Unique Id
 * @apiParam {String} title Title of the Page
 * @apiParam {String} content Content of the page
 * @apiParam {Number} metaTitle metaTitle of the page
 * @apiParam {String} metaKeyword metaKeyword of the page
 * @apiParam {String} metaDescription metadescription of the Page
 * @apiParam {String} accessKey accesskey of the Page
 * @apiParam {String} status status of the Page
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Page has been updated successfully"
 * }
 */

/**
 * @api {delete} /page/:id Delete Page by Page Id
 * @apiName DeletePage
 * @apiGroup Page
 * 
 * 
 * @apiParam {Number} id Page Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 200 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Page has been deleted successfully"
 * }
 */

/**
 * @api {get} /page/:id Get particular Page by Page Id
 * @apiName GetPageById
 * @apiGroup Page
 * 
 * 
 * @apiParam {Number} id Page Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *     "success": true,
 *     "status": 200,
 *     "message": "Success",
 *     "data": {
 *       "id": 1,
 *       "title": "contact_page",
 *       "content": "<ol><li>This is Test Page</li></ol>",
 *       "metaTitle": "contact_page",
 *       "metaKeyword": "contact_page",
 *       "metaDescription": "Contact Page",
 *       "accessKey": "contact_page",
 *       "status": "Enable",
 *         "createdDate": "2021-09-15T05:27:19.000Z",
 *         "updatedDate": "2021-09-15T05:28:46.000Z",
 *         "deletedDate": null
 *     }
 * }
 */