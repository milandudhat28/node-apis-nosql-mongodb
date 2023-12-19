//list of all courses

/**
 * @api {get} /course List of all the course
 * @apiName CourseList
 * @apiGroup Course
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of course to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * @apiParam (Query Params) {String} title The title of the course that you wnat
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *   "message":"List of departments",
 *   "length":20,
 *   "data":{
 *      "next":{
 *          "page":3,
 *          "limit":3
 *       },
 *      "previous":{
 *          "page":1,
 *          "limit":3
 *       },
 *      "result":[
 *       {
 *          "id":4,
 *          "title":"PHP",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      },
 *       {
 *          "id":5,
 *          "title":"JS",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      },
 *       {
 *          "id":6,
 *          "title":"MERN",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      }
 *      ]
 *    }
 * }
 */

/**
 * @api {post} /course Create a new Course
 * @apiName CreateCourse
 * @apiGroup Course
 * 
 * @apiParam {String} title Course title
 * @apiParam {Boolean} isActive Boolean to check whether the course is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Course saved successfully"
 * }
 */

/**
 * @api {put} /course/:id Update Course by course Id
 * @apiName UpdateCourse
 * @apiGroup Course
 * 
 * 
 * @apiParam {Number} id Course Unique Id
 * @apiParam {String} title Course title
 * @apiParam {Boolean} isActive Boolean to check whether the course is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Course updated successfully"
 * }
 */

/**
 * @api {delete} /course/:id Delete Course by course Id
 * @apiName DeleteCourse
 * @apiGroup Course
 * 
 * 
 * @apiParam {Number} id Course Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Course deleted successfully"
 * }
 */

/**
 * @api {get} /course/:id Get particular Course by course Id
 * @apiName GetCourseById
 * @apiGroup Course
 * 
 * 
 * @apiParam {Number} id Course Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Course Exist",
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
