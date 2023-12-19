define({ "api": [
  {
    "type": "get",
    "url": "/activityStatus",
    "title": "List of all the activityStatus",
    "name": "ActivityStatusList",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of activityStatus to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the activityStatus that you wnat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"List of activityStatuss\",\n   \"length\": 2,\n   \"data\": {\n       \"result\": [\n           {\n               \"id\": 1,\n               \"title\": \"JS COURSE\",\n               \"isActive\": true,\n               \"createdDate\": \"2021-07-02T13:34:32.000Z\",\n               \"updatedDate\": \"2021-07-02T13:49:10.000Z\",\n               \"deletedDate\": null\n           },\n           {\n               \"id\": 2,\n               \"title\": \"JAVA COURSE\",\n               \"isActive\": true,\n               \"createdDate\": \"2021-07-02T13:45:59.000Z\",\n               \"updatedDate\": \"2021-07-02T13:45:59.000Z\",\n               \"deletedDate\": null\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/activityStatusMaster.js",
    "groupTitle": "Activity"
  },
  {
    "type": "post",
    "url": "/activityStatus",
    "title": "Create a new Activity",
    "name": "CreateActivity",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Activity title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the activityStatus is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Activity saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/activityStatusMaster.js",
    "groupTitle": "Activity"
  },
  {
    "type": "delete",
    "url": "/activityStatus/:id",
    "title": "Delete Activity by activityStatus Id",
    "name": "DeleteActivity",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Activity Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Activity deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/activityStatusMaster.js",
    "groupTitle": "Activity"
  },
  {
    "type": "get",
    "url": "/activityStatus/:id",
    "title": "Get particular Activity by activityStatus Id",
    "name": "GetActivityById",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Activity Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Activity Exist\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"PHP\",\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/activityStatusMaster.js",
    "groupTitle": "Activity"
  },
  {
    "type": "put",
    "url": "/activityStatus/:id",
    "title": "Update Activity by activityStatus Id",
    "name": "UpdateActivity",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Activity Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Activity title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the activityStatus is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Activity updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/activityStatusMaster.js",
    "groupTitle": "Activity"
  },
  {
    "type": "get",
    "url": "/listBloodGroups",
    "title": "List of Blood Groups",
    "name": "BloodGroupList",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>number of information</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Inputs the field name on which the sorting needs to be done</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Get data related to given title</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Get data of given ids (IDs can be seperated by ',')</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"message\": {\n      \"previous\": {\n          \"page\": 1,\n          \"limit\": 3\n      },\n      \"next\": {\n          \"page\": 3,\n          \"limit\": 3\n      },\n      \"totalPages\": 4,\n      \"totalItems\": 10,\n      \"limit\": 3,\n      \"currentPage\": 2,\n      \"orderBy\" : \"asc\",\n      \"sortBy\" : \"id\",\n      \"data\": [\n          {\n              \"id\": 1,\n              \"title\": \"O+\",\n              \"isActive\": true,\n              \"createdDate\": \"2021-04-30T13:28:23.000Z\",\n              \"updatedDate\": \"2021-04-30T13:28:23.000Z\",\n              \"deletedDate\": null\n          }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "post",
    "url": "/bloodGroup",
    "title": "Create new blood group",
    "name": "CreateNewBloodGroup",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Blood Group</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Blood group is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Blood Group saved successfully...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "delete",
    "url": "/deleteBloodGroup/:id",
    "title": "Delete Blood group by given Id",
    "name": "DeleteBloodGroup",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blood group Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Blood Group deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "get",
    "url": "/getBloodGroup/:id",
    "title": "Get particular blood group by given Id",
    "name": "GetBloodGroupById",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blood Group Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"data\": {\n      \"id\": 1,\n      \"title\": \"B positive\",\n      \"isActive\": true,\n      \"createdDate\": \"2021-04-28T07:29:44.000Z\",\n      \"updatedDate\": \"2021-04-28T07:29:44.000Z\",\n      \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "put",
    "url": "/updateBloodGroup/:id",
    "title": "Update Blood Group by given ID",
    "name": "UpdateBloodGroup",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blood Group Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Blood group</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Blood group is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Blood Group updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "delete",
    "url": "/candidate/:id",
    "title": "Delete Candidate by candidateId",
    "name": "DeleteCandidate",
    "group": "Candidate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Candidate Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\":true,\n  \"status\":200,\n  \"message\":\"Candidate has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/candidate.js",
    "groupTitle": "Candidate"
  },
  {
    "type": "get",
    "url": "/candidate/:id",
    "title": "Get particular Candidate by candidate Id",
    "name": "GetCandidateById",
    "group": "Candidate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Candidate Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n   \"data\": {\n       \"id\": 1,\n       \"firstName\": \"Dishant\",\n       \"middleName\": \"\",\n       \"lastName\": \"Navadiya\",\n       \"dateOfBirth\": \"2003-09-03T00:00:00.000Z\",\n       \"gender\": \"M\",\n       \"spouseName\": \"\",\n       \"maritalStatus\": \"Single\",\n       \"candidateImage\": \"uploads/candidate/1632827747774-navbrand.jpg\",\n       \"referedBy\": \"\",\n       \"wishlist\": false,\n       \"contactNumber\": \"7896541236\",\n       \"alternateContactNumber\": \"\",\n       \"email\": \"dishantythfytfyvr675navadiya585858@gmail.com\",\n       \"skype\": \"\",\n       \"linkedIn\": \"\",\n       \"isActive\": false,\n       \"interviewStatus\": \"PENDING\",\n       \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n       \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n       \"deletedDate\": null,\n       \"education\": [\n           {\n               \"id\": 1,\n               \"educationTypeId\": 2,\n               \"courseId\": 1,\n               \"instituteName\": \"Charusat\",\n               \"percentage\": \"8.00\",\n               \"passingYear\": 2003,\n               \"candidateId\": 1,\n               \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n               \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n               \"deletedDate\": null\n           }\n       ],\n       \"course\": [\n           {\n               \"id\": 1,\n               \"courseName\": \"Docker and Kubernates\",\n               \"instituteName\": \"udemy\",\n               \"certificateUrl\": \"https://www.udemy.com/navneetpal\",\n               \"skills\": \"nodejs,docker,javascript,java\",\n               \"candidateId\": 1,\n               \"createdDate\": \"2021-09-29T05:10:22.000Z\",\n               \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n               \"deletedDate\": null\n           }\n       ],\n       \"salary\": {\n           \"id\": 1,\n           \"lastIncrementDate\": \"2021-08-01T00:00:00.000Z\",\n           \"currentCtc\": 7400,\n           \"status\": \"Negotiable\",\n           \"salaryBeforeIncrement\": \"22000.00\",\n           \"expectedCtc\": \"22000.00\",\n           \"addNoticePeriod\": 4,\n           \"reasonForProfessionalGap\": \"hfvhudygd\",\n           \"candidateId\": 1,\n           \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n           \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n           \"deletedDate\": null\n       },\n       \"experience\": [\n           {\n               \"id\": 1,\n               \"companyName\": \"duyytrhfdg\",\n               \"designationId\": 1,\n               \"technologyId\": 1,\n               \"from\": \"2021-08-01T00:00:00.000Z\",\n               \"to\": null,\n               \"teamLead\": \"\",\n               \"projectManager\": \"\",\n               \"reasonForJobChange\": \"\",\n               \"totalExperience\": null,\n               \"candidateId\": 1,\n               \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n               \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n               \"deletedDate\": null,\n               \"technology\": {\n                   \"id\": 1,\n                   \"title\": \"Javascript\",\n                   \"parentId\": null,\n                   \"isActive\": false,\n                   \"deletedDate\": null,\n                   \"createdDate\": \"2021-08-16T09:53:07.000Z\",\n                   \"updatedDate\": \"2021-08-16T10:07:35.000Z\"\n               },\n               \"designation\": {\n                   \"id\": 1,\n                   \"title\": \"BA\",\n                   \"isActive\": true,\n                   \"createdDate\": \"2021-08-16T09:47:38.000Z\",\n                   \"updatedDate\": \"2021-08-16T09:47:38.000Z\",\n                   \"deletedDate\": null\n               }\n           }\n       ],\n       \"activity\": {\n           \"id\": 1,\n           \"approachDate\": \"2021-09-02T00:00:00.000Z\",\n           \"approachBy\": \"Lorem\",\n           \"candidateStatusId\": 1,\n           \"note\": \"\",\n           \"candidateId\": 1,\n           \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n           \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n           \"deletedDate\": null,\n           \"candidateStatus\": {\n               \"id\": 1,\n               \"name\": \"Freelancer\",\n               \"isActive\": true,\n               \"createdDate\": \"2021-08-16T09:58:26.000Z\",\n               \"updatedDate\": \"2021-08-16T09:58:26.000Z\",\n               \"deletedDate\": null\n           }\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/candidate.js",
    "groupTitle": "Candidate"
  },
  {
    "type": "get",
    "url": "/candidateByName",
    "title": "Get candidates by candidateName",
    "name": "GetCandidateByName",
    "group": "Candidate",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "candidateName",
            "description": "<p>Candidate Name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n   \"data\": [\n        {\n           \"id\": 1,\n           \"candidateName\": \"Dishant Navadiya / dishantythfytfyvr675navadiya585858@gmail.com\",\n           \"linkedIn\": \"\",\n           \"referedBy\": \"\",\n           \"contactNo\": \"7896541236\",\n           \"alternateContactNo\": \"\",\n           \"emailId\": \"dishantythfytfyvr675navadiya585858@gmail.com\",\n           \"experience\": [\n               {\n                   \"companyName\": \"duyytrhfdg\",\n                   \"designationId\": 1,\n                   \"technologyId\": 1,\n                   \"from\": \"2021-08-01T00:00:00.000Z\",\n                   \"to\": null,\n                   \"teamLead\": \"\",\n                   \"projectManager\": \"\",\n                   \"reasonForJobChange\": \"\",\n                   \"totalExperience\": null\n               }\n           ],\n           \"salary\": {\n               \"lastIncrementDate\": \"2021-08-01T00:00:00.000Z\",\n               \"currentCtc\": 7400,\n               \"status\": \"Negotiable\",\n               \"salaryBeforeIncrement\": \"22000.00\",\n               \"expectedCtc\": \"22000.00\",\n               \"addNoticePeriod\": 4,\n               \"reasonForProfessionalGap\": \"hfvhudygd\"\n           }\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/candidate.js",
    "groupTitle": "Candidate"
  },
  {
    "type": "get",
    "url": "/candidateDetail/:id",
    "title": "Get candidateDetail by candidateId",
    "name": "GetCandidateDetailById",
    "group": "Candidate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Candidate Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n   \"data\": {\n       \"id\": 1,\n       \"firstName\": \"Dishant\",\n       \"middleName\": \"\",\n       \"lastName\": \"Navadiya\",\n       \"dateOfBirth\": \"2003-09-05T00:00:00.000Z\",\n       \"gender\": \"M\",\n       \"spouseName\": \"\",\n       \"maritalStatus\": \"Married\",\n       \"candidateImage\": null,\n       \"referedBy\": \"\",\n       \"wishlist\": false,\n       \"contactNumber\": \"9714673853\",\n       \"alternateContactNumber\": \"\",\n       \"email\": \"disha8ntnavadiya585858@gmail.com\",\n       \"skype\": \"\",\n       \"linkedIn\": \"\",\n       \"isActive\": false,\n       \"interviewStatus\": \"PENDING\",\n       \"createdDate\": \"2021-09-14T07:03:10.000Z\",\n       \"updatedDate\": \"2021-09-29T07:06:53.000Z\",\n       \"deletedDate\": null,\n       \"course\": [\n           {\n               \"id\": 3,\n               \"courseName\": \"react\",\n               \"instituteName\": \"https://www.udemy.com\",\n               \"certificateUrl\": \"https://www.udemy.com\",\n               \"skills\": \"reactjs,angularjs\",\n               \"candidateId\": 1,\n               \"createdDate\": \"2021-09-28T12:18:10.000Z\",\n               \"updatedDate\": \"2021-09-28T12:18:10.000Z\",\n               \"deletedDate\": null\n           }\n       ],\n       \"salary\": {\n           \"id\": 1,\n           \"lastIncrementDate\": \"2021-04-01T00:00:00.000Z\",\n           \"currentCtc\": 7400,\n           \"status\": \"Non Negotible\",\n           \"salaryBeforeIncrement\": \"22000.00\",\n           \"expectedCtc\": \"22000.00\",\n           \"addNoticePeriod\": 4,\n           \"reasonForProfessionalGap\": \"jhgj\",\n           \"candidateId\": 1,\n           \"createdDate\": \"2021-09-14T07:03:10.000Z\",\n           \"updatedDate\": \"2021-09-14T07:03:10.000Z\",\n           \"deletedDate\": null\n       },\n       \"experience\": [\n           {\n               \"id\": 1,\n               \"companyName\": \"duyytrhfdg\",\n               \"designationId\": 3,\n               \"technologyId\": 1,\n               \"from\": \"2021-03-01T00:00:00.000Z\",\n               \"to\": null,\n              \"teamLead\": \"\",\n              \"projectManager\": \"\",\n              \"reasonForJobChange\": \"\",\n              \"totalExperience\": null,\n              \"candidateId\": 1,\n              \"createdDate\": \"2021-09-14T07:03:10.000Z\",\n              \"updatedDate\": \"2021-09-14T07:03:10.000Z\",\n              \"deletedDate\": null\n          }\n      ],\n      \"education\": [\n          {\n              \"id\": 1,\n              \"educationTypeId\": 1,\n              \"courseId\": 2,\n              \"instituteName\": \"Charusat\",\n              \"percentage\": \"8.00\",\n              \"passingYear\": 2020,\n              \"candidateId\": 1,\n              \"createdDate\": \"2021-09-14T07:03:10.000Z\",\n              \"updatedDate\": \"2021-09-14T07:03:10.000Z\",\n              \"deletedDate\": null,\n              \"educationtype\": null,\n              \"course\": null\n          }\n      ],\n      \"interviewdetail\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/candidate.js",
    "groupTitle": "Candidate"
  },
  {
    "type": "get",
    "url": "/candidate",
    "title": "List of all the candidate",
    "name": "GetCandidateList",
    "group": "Candidate",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of interviewType to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "seacrh",
            "description": "<p>Search by the firstName/email/contactNumber</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "technology",
            "description": "<p>TechnologyId</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "candidateStatusId",
            "description": "<p>Candidate status id</p>"
          },
          {
            "group": "Query Params",
            "type": "Date",
            "size": "yyyy-mm-dd",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Experience from Date</p>"
          },
          {
            "group": "Query Params",
            "type": "Date",
            "size": "yyyy-mm-dd",
            "optional": false,
            "field": "toDate",
            "description": "<p>Experience to Date</p>"
          },
          {
            "group": "Query Params",
            "type": "Date",
            "size": "yyyy-mm-dd",
            "optional": false,
            "field": "company",
            "description": "<p>Experience Company Name</p>"
          },
          {
            "group": "Query Params",
            "type": "Boolean",
            "optional": false,
            "field": "wishlist",
            "description": "<p>Candidate wishlist</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n   \"data\": {\n       \"list\": [\n           {\n               \"id\": 1,\n               \"firstName\": \"Dishant\",\n               \"middleName\": \"\",\n               \"lastName\": \"Navadiya\",\n               \"dateOfBirth\": \"2003-09-03T00:00:00.000Z\",\n               \"gender\": \"M\",\n               \"spouseName\": \"\",\n               \"maritalStatus\": \"Single\",\n               \"candidateImage\": \"uploads/candidate/1632827747774-navbrand.jpg\",\n               \"referedBy\": \"\",\n               \"wishlist\": false,\n               \"contactNumber\": \"7896541236\",\n               \"alternateContactNumber\": \"\",\n               \"email\": \"dishantythfytfyvr675navadiya585858@gmail.com\",\n               \"skype\": \"\",\n               \"linkedIn\": \"\",\n               \"isActive\": false,\n               \"interviewStatus\": \"PENDING\",\n               \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n               \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n               \"deletedDate\": null,\n               \"education\": [\n                   {\n                       \"id\": 1,\n                       \"educationTypeId\": 2,\n                       \"courseId\": 1,\n                       \"instituteName\": \"Charusat\",\n                       \"percentage\": \"8.00\",\n                       \"passingYear\": 2003,\n                       \"candidateId\": 1,\n                       \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n                       \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n                       \"deletedDate\": null\n                   }\n               ],\n               \"course\": [\n                   {\n                       \"id\": 1,\n                       \"courseName\": \"Docker and Kubernates\",\n                       \"instituteName\": \"udemy\",\n                       \"certificateUrl\": \"https://www.udemy.com/navneetpal\",\n                       \"skills\": \"nodejs,docker,javascript,java\",\n                       \"candidateId\": 1,\n                       \"createdDate\": \"2021-09-29T05:10:22.000Z\",\n                       \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n                       \"deletedDate\": null\n                   }\n               ],\n               \"salary\": {\n                   \"id\": 1,\n                   \"lastIncrementDate\": \"2021-08-01T00:00:00.000Z\",\n                   \"currentCtc\": 7400,\n                   \"status\": \"Negotiable\",\n                   \"salaryBeforeIncrement\": \"22000.00\",\n                   \"expectedCtc\": \"22000.00\",\n                   \"addNoticePeriod\": 4,\n                   \"reasonForProfessionalGap\": \"hfvhudygd\",\n                   \"candidateId\": 1,\n                   \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n                   \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n                   \"deletedDate\": null\n               },\n               \"experience\": [\n                   {\n                       \"id\": 1,\n                       \"companyName\": \"duyytrhfdg\",\n                       \"designationId\": 1,\n                       \"technologyId\": 1,\n                       \"from\": \"2021-08-01T00:00:00.000Z\",\n                       \"to\": null,\n                       \"teamLead\": \"\",\n                       \"projectManager\": \"\",\n                       \"reasonForJobChange\": \"\",\n                       \"totalExperience\": null,\n                       \"candidateId\": 1,\n                       \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n                       \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n                       \"deletedDate\": null,\n                       \"technology\": {\n                           \"id\": 1,\n                           \"title\": \"Javascript\",\n                           \"parentId\": null,\n                           \"isActive\": false,\n                           \"deletedDate\": null,\n                           \"createdDate\": \"2021-08-16T09:53:07.000Z\",\n                           \"updatedDate\": \"2021-08-16T10:07:35.000Z\"\n                       },\n                       \"designation\": {\n                           \"id\": 1,\n                           \"title\": \"BA\",\n                           \"isActive\": true,\n                           \"createdDate\": \"2021-08-16T09:47:38.000Z\",\n                           \"updatedDate\": \"2021-08-16T09:47:38.000Z\",\n                           \"deletedDate\": null\n                       }\n                   }\n               ],\n               \"activity\": {\n                   \"id\": 1,\n                   \"approachDate\": \"2021-09-02T00:00:00.000Z\",\n                   \"approachBy\": \"Lorem\",\n                   \"candidateStatusId\": 1,\n                   \"note\": \"\",\n                   \"candidateId\": 1,\n                   \"createdDate\": \"2021-09-14T07:12:47.000Z\",\n                   \"updatedDate\": \"2021-09-29T05:22:08.000Z\",\n                   \"deletedDate\": null,\n                   \"candidateStatus\": {\n                       \"id\": 1,\n                       \"name\": \"Freelancer\",\n                       \"isActive\": true,\n                       \"createdDate\": \"2021-08-16T09:58:26.000Z\",\n                       \"updatedDate\": \"2021-08-16T09:58:26.000Z\",\n                       \"deletedDate\": null\n                   }\n               }\n           }\n       ],\n       \"totalPages\": 2,\n       \"limit\": 1,\n       \"totalRecords\": 2,\n       \"currentPage\": 1\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/candidate.js",
    "groupTitle": "Candidate"
  },
  {
    "type": "post",
    "url": "/uploadCandidateImage/:id",
    "title": "Upload Candidate by candidateId",
    "name": "UploadCandidate",
    "group": "Candidate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Candidate Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\":true,\n  \"status\":200,\n  \"message\":\"Image has been added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/candidate.js",
    "groupTitle": "Candidate"
  },
  {
    "type": "get",
    "url": "/college",
    "title": "List of all the college",
    "name": "CollegeList",
    "group": "College",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of designation to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "collegeName",
            "description": "<p>Name of the college</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>College location</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>College website</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search by contact Name,Email and contactNumber</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n          {\n              \"id\": 1,\n              \"collegeName\": \"Governement Engineering College MODASA\",\n              \"streetLine1\": \"SHAMLAJI Road\",\n              \"streetLine2\": null,\n              \"area\": \"modasa\",\n              \"city\": \"Modasa\",\n              \"state\": \"Gujrat\",\n              \"zipcode\": 396230,\n              \"website\": \"https:gecmodasa.ac.in\",\n              \"createdDate\": \"2021-09-15T08:32:52.000Z\",\n              \"updatedDate\": \"2021-09-15T11:40:50.000Z\",\n              \"deletedDate\": null,\n              \"contact\": [\n                  {\n                      \"id\": 1,\n                      \"name\": \"Prof Maltare\",\n                      \"email\": \"maltare@gmail.com\",\n                      \"contactNumber\": \"9885764587\",\n                      \"collegeId\": 1,\n                      \"createdDate\": \"2021-09-15T08:32:52.000Z\",\n                      \"updatedDate\": \"2021-09-15T08:36:46.000Z\",\n                      \"deletedDate\": null\n                  }\n              ]\n          }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/collegeMaster.js",
    "groupTitle": "College"
  },
  {
    "type": "delete",
    "url": "/college/:id",
    "title": "Delete College by college Id",
    "name": "DeleteCollege",
    "group": "College",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>College Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"College has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/collegeMaster.js",
    "groupTitle": "College"
  },
  {
    "type": "get",
    "url": "/college/:id",
    "title": "Get particular College by college Id",
    "name": "GetCollegeById",
    "group": "College",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>College Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n      \"id\": 2,\n      \"collegeName\": \"LDCE\",\n      \"streetLine1\": \"Shamlaji Road\",\n      \"streetLine2\": null,\n      \"area\": \"modasa\",\n      \"city\": \"Modasa\",\n      \"state\": \"Gujrat\",\n      \"zipcode\": 396230,\n      \"website\": \"https:gecmodasa.ac.in\",\n      \"createdDate\": \"2021-09-15T08:37:37.000Z\",\n      \"updatedDate\": \"2021-09-15T12:50:48.000Z\",\n      \"deletedDate\": null,\n      \"contact\": [\n          {\n              \"id\": 7,\n              \"name\": \"Prof Maltare\",\n              \"email\": \"maltare@gmail.com\",\n              \"contactNumber\": \"9885764587\",\n              \"collegeId\": 2,\n              \"createdDate\": \"2021-09-15T08:37:37.000Z\",\n              \"updatedDate\": \"2021-09-15T12:50:48.000Z\",\n              \"deletedDate\": null\n          },\n          {\n              \"id\": 8,\n              \"name\": \"Prof Pritee\",\n              \"email\": \"pritee@gmail.com\",\n              \"contactNumber\": \"9885764588\",\n              \"collegeId\": 2,\n              \"createdDate\": \"2021-09-15T08:42:05.000Z\",\n              \"updatedDate\": \"2021-09-15T12:50:48.000Z\",\n              \"deletedDate\": null\n          }\n      ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/collegeMaster.js",
    "groupTitle": "College"
  },
  {
    "type": "delete",
    "url": "/company/:id",
    "title": "Delete Company by Company Id",
    "name": "DeleteCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Company deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/company/:id",
    "title": "Get particular Company by Company Id",
    "name": "GetCompanyById",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Company Profile\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"cybercom\",\n     \"website\": \"cybercom\",\n     \"noOfEmployees\": 150,\n     \"contactNumber\": \"7418529631\",\n     \"contactEmail\": \"cybercom@gmail.com\",\n     \"streetLine1\": \"vastrapur road\",\n     \"streetLine2\": null,\n     \"area\": \"vastrapur\",\n     \"city\": \"ahmedabad\",\n     \"postalCode\": \"111111\",\n     \"state\": \"gujrat\",\n     \"country\": \"india\",\n     \"appraisalCycle\": null,\n     \"noticePeriod\": null,\n     \"bondDurationForExperienced\": null,\n     \"bondDurationForFreshers\": null,\n     \"weekends\": null,\n     \"notes\": null,\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/company/:id",
    "title": "Update a Company by companyId",
    "name": "UpdateCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Company website URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "noOfEmployees",
            "description": "<p>Total number of employees working in a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>Contact number of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>Email of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streetLine1",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streetLine2",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Area of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>postalCode where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "appraisalCycle",
            "description": "<p>Company Appraisal Cycle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "noticePeriod",
            "description": "<p>Company Notice Period</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForExperienced",
            "description": "<p>Company Bond Duration for Experienced</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForFresher",
            "description": "<p>Company Bond Duration for Fresher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "weekends",
            "description": "<p>Company weekends</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Notes</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>Company is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n     \"message\":\"Company updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/company",
    "title": "Create a new Company",
    "name": "createCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Company website URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "noOfEmployees",
            "description": "<p>Total number of employees working in a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>Contact number of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>Email of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streetLine1",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streetLine2",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Area of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>postalCode where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "appraisalCycle",
            "description": "<p>Company Appraisal Cycle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "noticePeriod",
            "description": "<p>Company Notice Period</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForExperienced",
            "description": "<p>Company Bond Duration for Experienced</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForFresher",
            "description": "<p>Company Bond Duration for Fresher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "weekends",
            "description": "<p>Company weekends</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Notes</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>Company is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n     \"message\":\"Company created Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/company",
    "title": "Get list of comapnies",
    "name": "getCompanies",
    "group": "Company",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of companies you want to retrieved</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>List of all companies</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Conatins the information of next and previous page and actual result</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.result",
            "description": "<p>Contains list of companies</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.next",
            "description": "<p>Conatins the next page number and limit if next page exist</p>"
          },
          {
            "group": "Success 200",
            "type": "page",
            "optional": false,
            "field": "data.next.page",
            "description": "<p>The page number of next page</p>"
          },
          {
            "group": "Success 200",
            "type": "limit",
            "optional": false,
            "field": "data.next.limit",
            "description": "<p>Limit of information to retrieved</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.previous",
            "description": "<p>Conatins the previous page number and limit if previous page exist</p>"
          },
          {
            "group": "Success 200",
            "type": "page",
            "optional": false,
            "field": "data.previous.page",
            "description": "<p>The page number of previous page</p>"
          },
          {
            "group": "Success 200",
            "type": "limit",
            "optional": false,
            "field": "data.previous.limit",
            "description": "<p>Limit of information to retrieved</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 201 OK\n{\n     \"message\":\"List of all Companies\",\n     \"data\":{\n         \"next\":{\n             \"page\":2\n             \"limit\":3\n         },\n         \"result\":[\n         {    \n             \"id\": 1,\n              \"name\": \"cybercon\",\n              \"website\": \"cybercom\",\n              \"noOfEmployees\": 150,\n              \"contactNumber\": \"9874561231\",\n              \"contactEmail\": \"cybercon@gmail.com\",\n              \"streetLine1\": \"vastrapur road\",\n              \"streetLine2\": null,\n              \"area\": \"vastrapur\",\n              \"city\": \"ahmedabad\",\n              \"postalCode\": \"396230\",\n              \"state\": \"gujrat\",\n              \"country\": \"india\",\n              \"appraisalCycle\": null,\n              \"noticePeriod\": null,\n              \"bondDurationForExperienced\": null,\n              \"bondDurationForFreshers\": null,\n              \"weekends\": null,\n              \"notes\": null,\n              \"isActive\": null,\n              \"createdDate\": \"2021-04-28T12:07:57.000Z\",\n              \"updatedDate\": \"2021-04-28T12:07:57.000Z\",\n              \"deletedDate\": null\n          },\n         {    \n             \"id\": 2,\n              \"name\": \"tcs\",\n              \"website\": \"tcs\",\n              \"noOfEmployees\": 150,\n              \"contactNumber\": \"9874561231\",\n              \"contactEmail\": \"tcs@gmail.com\",\n              \"streetLine1\": \"vastrapur road\",\n              \"streetLine2\": null,\n              \"area\": \"vastrapur\",\n              \"city\": \"ahmedabad\",\n              \"postalCode\": \"396230\",\n              \"state\": \"gujrat\",\n              \"country\": \"india\",\n              \"appraisalCycle\": null,\n              \"noticePeriod\": null,\n              \"bondDurationForExperienced\": null,\n              \"bondDurationForFreshers\": null,\n              \"weekends\": null,\n              \"notes\": null,\n              \"isActive\": null,\n              \"createdDate\": \"2021-04-28T12:07:57.000Z\",\n              \"updatedDate\": \"2021-04-28T12:07:57.000Z\",\n              \"deletedDate\": null\n          },\n         {    \n             \"id\": 3,\n              \"name\": \"visa\",\n              \"website\": \"visa\",\n              \"noOfEmployees\": 8000,\n              \"contactNumber\": \"9874561231\",\n              \"contactEmail\": \"visa@gmail.com\",\n              \"streetLine1\": \"vastrapur road\",\n              \"streetLine2\": null,\n              \"area\": \"vastrapur\",\n              \"city\": \"ahmedabad\",\n              \"postalCode\": \"396230\",\n              \"state\": \"gujrat\",\n              \"country\": \"india\",\n              \"appraisalCycle\": null,\n              \"noticePeriod\": null,\n              \"bondDurationForExperienced\": null,\n              \"bondDurationForFreshers\": null,\n              \"weekends\": null,\n              \"notes\": null,\n              \"isActive\": null,\n              \"createdDate\": \"2021-04-28T12:07:57.000Z\",\n              \"updatedDate\": \"2021-04-28T12:07:57.000Z\",\n              \"deletedDate\": null\n          }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/course",
    "title": "List of all the course",
    "name": "CourseList",
    "group": "Course",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of course to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the course that you wnat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\":\"List of departments\",\n  \"length\":20,\n  \"data\":{\n     \"next\":{\n         \"page\":3,\n         \"limit\":3\n      },\n     \"previous\":{\n         \"page\":1,\n         \"limit\":3\n      },\n     \"result\":[\n      {\n         \"id\":4,\n         \"title\":\"PHP\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n      {\n         \"id\":5,\n         \"title\":\"JS\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n      {\n         \"id\":6,\n         \"title\":\"MERN\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     }\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/courseMaster.js",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/course",
    "title": "Create a new Course",
    "name": "CreateCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Course title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the course is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Course saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/courseMaster.js",
    "groupTitle": "Course"
  },
  {
    "type": "delete",
    "url": "/course/:id",
    "title": "Delete Course by course Id",
    "name": "DeleteCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Course Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Course deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/courseMaster.js",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/course/:id",
    "title": "Get particular Course by course Id",
    "name": "GetCourseById",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Course Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Course Exist\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"PHP\",\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/courseMaster.js",
    "groupTitle": "Course"
  },
  {
    "type": "put",
    "url": "/course/:id",
    "title": "Update Course by course Id",
    "name": "UpdateCourse",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Course Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Course title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the course is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Course updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/courseMaster.js",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/department",
    "title": "Create a new Department",
    "name": "CreateDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Department title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the department is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "/department/:id",
    "title": "Delete Department by department Id",
    "name": "DeleteDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/department",
    "title": "List of all the department",
    "name": "DepartmentList",
    "group": "Department",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of department to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\":\"List of departments\",\n  \"length\":20,\n  \"data\":{\n     \"next\":{\n         \"page\":3,\n         \"limit\":3\n      },\n     \"previous\":{\n         \"page\":1,\n         \"limit\":3\n      },\n     \"result\":[\n      {\n         \"id\":4,\n         \"title\":\"PHP\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n      {\n         \"id\":5,\n         \"title\":\"JS\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n      {\n         \"id\":6,\n         \"title\":\"MERN\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     }\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/department/:id",
    "title": "Get particular Department by department Id",
    "name": "GetDepartmentById",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department Exist\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"PHP\",\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "put",
    "url": "/department/:id",
    "title": "Update Department by department Id",
    "name": "UpdateDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Department title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the department is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/designation",
    "title": "Create a new Designation",
    "name": "CreateDesignation",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Designation title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the designation is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "delete",
    "url": "/designation/:id",
    "title": "Delete Designation by designation Id",
    "name": "DeleteDesignation",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Designation Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "get",
    "url": "/designation",
    "title": "List of all the designation",
    "name": "DesignationList",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of designation to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\":\"List of designations\",\n  \"length\":15,\n  \"data\":{\n  \"next\":{\n         \"page\":3,\n         \"limit\":3\n      },\n   \"previous\":{\n         \"page\":1,\n         \"limit\":3\n      },\n  \"result\":[\n     {\n         \"id\":4,\n         \"title\":\"SDE\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n     {\n         \"id\":5,\n         \"title\":\"Tech Lead\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n     {\n         \"id\":6,\n         \"title\":\"Devops\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     }\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "get",
    "url": "/designation/:id",
    "title": "Get particular Designation by designation Id",
    "name": "GetDesignationById",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Designation Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation Exist\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"SDE\",\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "put",
    "url": "/designation/:id",
    "title": "Update Designation by designation Id",
    "name": "UpdateDesignation",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Designation Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Designation title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the designation is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "post",
    "url": "/document",
    "title": "Create a new Document",
    "name": "CreateDocument",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "documentName",
            "description": "<p>Name of the document</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Document Code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the document</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"message\": \"Document has been added successfully\",\n  \"data\": {\n      \"id\": 1,\n      \"documentName\": \"*****\",\n      \"code\": \"****\",\n      \"content\": \"*****\",\n      \"updatedDate\": \"2021-10-01T06:01:57.715Z\",\n      \"createdDate\": \"2021-10-01T06:01:57.715Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/documentMaster.js",
    "groupTitle": "Document"
  },
  {
    "type": "delete",
    "url": "/document/:id",
    "title": "Delete Document by document Id",
    "name": "DeleteDocumnet",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Document has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/documentMaster.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document",
    "title": "List of all the document",
    "name": "DocumentList",
    "group": "Document",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of designation to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "documentName",
            "description": "<p>Name of the document</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Document Code</p>"
          },
          {
            "group": "Query Params",
            "type": "Date",
            "size": "'yyyy-mm-dd'",
            "optional": false,
            "field": "createdDateFrom",
            "description": "<p>Document createdDate</p>"
          },
          {
            "group": "Query Params",
            "type": "Date",
            "size": "'yyyy-mm-dd'",
            "optional": false,
            "field": "createdDateTo",
            "description": "<p>Document createdDate</p>"
          },
          {
            "group": "Query Params",
            "type": "Date",
            "size": "'yyyy-mm-dd'",
            "optional": false,
            "field": "updatedDateFrom",
            "description": "<p>Document updatedDate</p>"
          },
          {
            "group": "Query Params",
            "type": "Date",
            "size": "'yyyy-mm-dd'",
            "optional": false,
            "field": "updatedDateto",
            "description": "<p>Document updatedDate</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 1,\n                \"documentName\": \"sonitafortrech\",\n                \"code\": \"hdbvhvfj\",\n                \"content\": \"dvjhsdgfjkwfgjweg\",\n                \"createdDate\": \"2021-09-15T05:26:47.000Z\",\n                \"updatedDate\": \"2021-09-15T05:26:47.000Z\",\n                \"deletedDate\": null\n            }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/documentMaster.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document/:id",
    "title": "Get particular Document by document Id",
    "name": "GetDocumentById",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": 3,\n        \"documentName\": \"******\",\n        \"code\": \"*******\",\n        \"content\": \"********\",\n        \"createdDate\": \"2021-09-15T05:27:19.000Z\",\n        \"updatedDate\": \"2021-09-15T05:28:46.000Z\",\n        \"deletedDate\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/documentMaster.js",
    "groupTitle": "Document"
  },
  {
    "type": "put",
    "url": "/document/:id",
    "title": "Update document by document Id",
    "name": "UpdateDocument",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "documentName",
            "description": "<p>Document Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Document Code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the document</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Document has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/documentMaster.js",
    "groupTitle": "Document"
  },
  {
    "type": "post",
    "url": "/educationType",
    "title": "Create new education type",
    "name": "CreateNewEducationType",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Education Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Education type is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Education Type saved successfully...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "delete",
    "url": "/deleteEducationType/:id",
    "title": "Delete Education Type by given Id",
    "name": "DeleteEducationType",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Education Type Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n   \"status\": 1,\n  \"message\": \"Education Type deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "get",
    "url": "/listEducationTypes",
    "title": "List of Education Types",
    "name": "EducationTypeList",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>number of information</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Inputs the field name on which the sorting needs to be done</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Get data related to given title</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Get data of given ids (IDs can be seperated by ',')</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"message\": [\n      {\n      \"previous\": {\n          \"page\": 1,\n          \"limit\": 3\n      },\n      \"next\": {\n          \"page\": 3,\n          \"limit\": 3\n      },\n     \"totalPages\": 1,\n     \"totalItems\": 1,\n     \"limit\": 5,\n     \"currentPage\": 1,\n     \"orderBy\" : \"asc\",\n     \"sortBy\" : \"id\",\n     \"data\": [\n         {\n             \"id\": 1,\n             \"title\": \"Work from home\",\n             \"isActive\": false,\n             \"createdDate\": \"2021-04-27T18:39:01.000Z\",\n             \"updatedDate\": \"2021-04-28T07:53:25.000Z\",\n             \"deletedDate\": null\n        }\n     ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "get",
    "url": "/getEducationType/:id",
    "title": "Get particular education type by given Id",
    "name": "GetEducationTypeById",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Education Type Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"data\": {\n      \"id\": 1,\n      \"title\": \"Work from home\",\n      \"isActive\": true,\n      \"createdDate\": \"2021-04-28T07:29:44.000Z\",\n      \"updatedDate\": \"2021-04-28T07:29:44.000Z\",\n      \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "put",
    "url": "/updateEducationType/:id",
    "title": "Update Education Type by given ID",
    "name": "UpdateEducationType",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Education Type Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Education Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Education Type is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Education Type updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "get",
    "url": "/candidateToEmployee/:id",
    "title": "Covert particular candidate to employee by candidate Id",
    "name": "ConvertCandidatetoEmployeeById",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Candidate Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Employee has been added successfully\",\n  \"data\": {\n      \"id\": 2,\n      \"firstName\": \"Dishant\",\n      \"middleName\": \"\",\n      \"lastName\": \"Navadiya\",\n      \"dateOfBirth\": \"2003-09-03T00:00:00.000Z\",\n      \"gender\": \"M\",\n      \"spouseName\": \"\",\n      \"maritalStatus\": \"Single\",\n      \"employeeImage\": \"uploads/candidate/1632827747774-navbrand.jpg\",\n      \"wishlist\": false,\n      \"contactNumber\": \"7896541236\",\n      \"alternateContactNumber\": \"\",\n      \"email\": \"dishantythfytfyvr675navadiya585858@gmail.com\",\n      \"skype\": \"\",\n      \"linkedIn\": \"\",\n      \"isActive\": false,\n      \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n      \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n      \"education\": [\n          {\n              \"id\": 1,\n              \"educationTypeId\": 2,\n              \"courseId\": 1,\n              \"instituteName\": \"Charusat\",\n              \"percentage\": \"8.00\",\n              \"passingYear\": 2003,\n              \"employeeId\": 1,\n              \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n              \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n          }\n      ],\n      \"salary\": {\n          \"id\": 1,\n          \"lastIncrementDate\": \"2021-08-01T00:00:00.000Z\",\n          \"currentCtc\": 7400,\n          \"status\": \"Negotiable\",\n          \"salaryBeforeIncrement\": \"22000.00\",\n          \"expectedCtc\": \"22000.00\",\n          \"addNoticePeriod\": 4,\n          \"reasonForProfessionalGap\": \"hfvhudygd\",\n          \"employeeId\": 1,\n          \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n          \"updatedDate\": \"2021-09-30T12:56:20.000Z\"\n      },\n      \"experience\": [\n          {\n              \"id\": 1,\n              \"companyName\": \"duyytrhfdg\",\n              \"designationId\": 1,\n              \"technologyId\": 1,\n              \"from\": \"2021-08-01T00:00:00.000Z\",\n              \"to\": null,\n              \"teamLead\": \"\",\n              \"projectManager\": \"\",\n              \"reasonForJobChange\": \"\",\n              \"totalExperience\": null,\n              \"employeeId\": 1,\n              \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n              \"updatedDate\": \"2021-09-30T12:56:20.000Z\"\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "delete",
    "url": "/employee/:id",
    "title": "Delete Employee by employee Id",
    "name": "DeleteEmployee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Employee has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee",
    "title": "List of all the employee",
    "name": "EmployeeList",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of holiday to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the holiday</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n          {\n              \"id\": 1,\n              \"firstName\": \"Dishant\",\n              \"middleName\": \"\",\n              \"lastName\": \"Navadiya\",\n              \"dateOfBirth\": \"2003-09-03T00:00:00.000Z\",\n              \"gender\": \"M\",\n              \"spouseName\": \"\",\n              \"maritalStatus\": \"Single\",\n              \"employeeImage\": \"uploads/candidate/1632827747774-navbrand.jpg\",\n              \"wishlist\": false,\n              \"contactNumber\": \"7896541236\",\n              \"alternateContactNumber\": \"\",\n              \"email\": \"dishantythfytfyvr675navadiya585858@gmail.com\",\n              \"skype\": \"\",\n              \"linkedIn\": \"\",\n              \"isActive\": false,\n              \"workEmail\": null,\n              \"workSkypeId\": null,\n              \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n              \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n              \"deletedDate\": null,\n              \"education\": [\n                  {\n                      \"id\": 1,\n                      \"educationTypeId\": 2,\n                      \"courseId\": 1,\n                      \"instituteName\": \"Charusat\",\n                      \"percentage\": \"8.00\",\n                      \"passingYear\": 2003,\n                      \"employeeId\": 1,\n                      \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n                      \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n                      \"deletedDate\": null,\n                      \"educationType\": null,\n                      \"course\": {\n                          \"id\": 1,\n                          \"title\": \"react learning bootcamp\",\n                          \"isActive\": true,\n                          \"createdDate\": \"2021-08-16T09:54:58.000Z\",\n                          \"updatedDate\": \"2021-08-16T09:54:58.000Z\",\n                          \"deletedDate\": null\n                      }\n                  }\n              ],\n              \"course\": [\n                  {\n                      \"id\": 1,\n                      \"courseName\": \"Docker and Kubernates\",\n                      \"instituteName\": \"udemy\",\n                      \"certificateUrl\": \"https://www.udemy.com/navneetpal\",\n                      \"skills\": \"nodejs,docker,javascript,java\",\n                      \"employeeId\": 1,\n                      \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n                      \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n                      \"deletedDate\": null\n                  }\n              ],\n              \"salary\": {\n                  \"id\": 1,\n                  \"lastIncrementDate\": \"2021-08-01T00:00:00.000Z\",\n                  \"currentCtc\": 7400,\n                  \"status\": \"Negotiable\",\n                  \"salaryBeforeIncrement\": \"22000.00\",\n                  \"expectedCtc\": \"22000.00\",\n                  \"addNoticePeriod\": 4,\n                  \"reasonForProfessionalGap\": \"hfvhudygd\",\n                  \"employeeId\": 1,\n                  \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n                  \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n                  \"deletedDate\": null\n              },\n              \"experience\": [\n                  {\n                      \"id\": 1,\n                      \"companyName\": \"duyytrhfdg\",\n                      \"designationId\": 1,\n                      \"technologyId\": 1,\n                      \"from\": \"2021-08-01T00:00:00.000Z\",\n                      \"to\": null,\n                      \"teamLead\": \"\",\n                      \"projectManager\": \"\",\n                      \"reasonForJobChange\": \"\",\n                      \"totalExperience\": null,\n                      \"employeeId\": 1,\n                      \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n                      \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n                      \"deletedDate\": null,\n                      \"technology\": {\n                          \"id\": 1,\n                          \"title\": \"Javascript\",\n                          \"parentId\": null,\n                          \"isActive\": false,\n                          \"deletedDate\": null,\n                          \"createdDate\": \"2021-08-16T09:53:07.000Z\",\n                          \"updatedDate\": \"2021-08-16T10:07:35.000Z\"\n                      },\n                      \"designation\": {\n                          \"id\": 1,\n                          \"title\": \"BA\",\n                          \"isActive\": true,\n                          \"createdDate\": \"2021-08-16T09:47:38.000Z\",\n                          \"updatedDate\": \"2021-08-16T09:47:38.000Z\",\n                          \"deletedDate\": null\n                      }\n                  }\n              ]\n          }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id",
    "title": "Get particular Employee by employee Id",
    "name": "GetEmployeeById",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n  \"data\": {\n      \"id\": 1,\n      \"firstName\": \"Dishant\",\n      \"middleName\": \"\",\n      \"lastName\": \"Navadiya\",\n      \"dateOfBirth\": \"2003-09-03T00:00:00.000Z\",\n      \"gender\": \"M\",\n      \"spouseName\": \"\",\n      \"maritalStatus\": \"Single\",\n      \"employeeImage\": \"uploads/candidate/1632827747774-navbrand.jpg\",\n      \"wishlist\": false,\n      \"contactNumber\": \"7896541236\",\n      \"alternateContactNumber\": \"\",\n      \"email\": \"dishantythfytfyvr675navadiya585858@gmail.com\",\n      \"skype\": \"\",\n      \"linkedIn\": \"\",\n      \"isActive\": false,\n      \"workEmail\": null,\n      \"workSkypeId\": null,\n      \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n      \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n      \"deletedDate\": null,\n      \"education\": [\n          {\n              \"id\": 1,\n              \"educationTypeId\": 2,\n              \"courseId\": 1,\n              \"instituteName\": \"Charusat\",\n              \"percentage\": \"8.00\",\n              \"passingYear\": 2003,\n              \"employeeId\": 1,\n              \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n              \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n              \"deletedDate\": null,\n              \"educationType\": null,\n              \"course\": {\n                  \"id\": 1,\n                  \"title\": \"react learning bootcamp\",\n                  \"isActive\": true,\n                  \"createdDate\": \"2021-08-16T09:54:58.000Z\",\n                  \"updatedDate\": \"2021-08-16T09:54:58.000Z\",\n                  \"deletedDate\": null\n              }\n          }\n      ],\n      \"course\": [\n          {\n              \"id\": 1,\n              \"courseName\": \"Docker and Kubernates\",\n              \"instituteName\": \"udemy\",\n              \"certificateUrl\": \"https://www.udemy.com/navneetpal\",\n              \"skills\": \"nodejs,docker,javascript,java\",\n              \"employeeId\": 1,\n              \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n              \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n              \"deletedDate\": null\n          }\n      ],\n      \"salary\": {\n          \"id\": 1,\n          \"lastIncrementDate\": \"2021-08-01T00:00:00.000Z\",\n          \"currentCtc\": 7400,\n          \"status\": \"Negotiable\",\n          \"salaryBeforeIncrement\": \"22000.00\",\n          \"expectedCtc\": \"22000.00\",\n          \"addNoticePeriod\": 4,\n          \"reasonForProfessionalGap\": \"hfvhudygd\",\n          \"employeeId\": 1,\n          \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n          \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n          \"deletedDate\": null\n      },\n      \"experience\": [\n          {\n              \"id\": 1,\n              \"companyName\": \"duyytrhfdg\",\n              \"designationId\": 1,\n              \"technologyId\": 1,\n              \"from\": \"2021-08-01T00:00:00.000Z\",\n              \"to\": null,\n              \"teamLead\": \"\",\n              \"projectManager\": \"\",\n              \"reasonForJobChange\": \"\",\n              \"totalExperience\": null,\n              \"employeeId\": 1,\n              \"createdDate\": \"2021-09-30T12:56:20.000Z\",\n              \"updatedDate\": \"2021-09-30T12:56:20.000Z\",\n              \"deletedDate\": null,\n              \"technology\": {\n                  \"id\": 1,\n                  \"title\": \"Javascript\",\n                  \"parentId\": null,\n                  \"isActive\": false,\n                  \"deletedDate\": null,\n                  \"createdDate\": \"2021-08-16T09:53:07.000Z\",\n                  \"updatedDate\": \"2021-08-16T10:07:35.000Z\"\n              },\n              \"designation\": {\n                  \"id\": 1,\n                  \"title\": \"BA\",\n                  \"isActive\": true,\n                  \"createdDate\": \"2021-08-16T09:47:38.000Z\",\n                  \"updatedDate\": \"2021-08-16T09:47:38.000Z\",\n                  \"deletedDate\": null\n              }\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/uploadEmployeeImage/:id",
    "title": "Upload Employee Image by employee Id",
    "name": "UploadEmployeeImageById",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Image has been added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/holiday",
    "title": "Create a new Holiday",
    "name": "CreateHoliday",
    "group": "Holiday",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the holiday</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "size": "yyyy-mm-dd",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date of Holiday</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "size": "yyyy-mm-dd",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date of Holiday</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"message\": \"Holiday has been added successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/holidayMaster.js",
    "groupTitle": "Holiday"
  },
  {
    "type": "delete",
    "url": "/holiday/:id",
    "title": "Delete Holiday by holiday Id",
    "name": "DeleteHoliday",
    "group": "Holiday",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Holiday Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Holiday has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/holidayMaster.js",
    "groupTitle": "Holiday"
  },
  {
    "type": "get",
    "url": "/holiday/:id",
    "title": "Get particular Holiday by holiday Id",
    "name": "GetHolidayById",
    "group": "Holiday",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Holiday Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n      \"id\": 3,\n      \"title\": \"Raksha bandhan\",\n      \"startDate\": \"2021-09-09T00:00:00.000Z\",\n      \"endDate\": \"2021-09-09T00:00:00.000Z\",\n      \"content\": \"this is sample content\",\n      \"createdDate\": \"2021-09-15T05:27:19.000Z\",\n      \"updatedDate\": \"2021-09-15T05:28:46.000Z\",\n      \"deletedDate\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/holidayMaster.js",
    "groupTitle": "Holiday"
  },
  {
    "type": "get",
    "url": "/holiday",
    "title": "List of all the holiday",
    "name": "HolidayList",
    "group": "Holiday",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of holiday to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the holiday</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n            {\n              \"id\": 1,\n              \"title\": \"Janamashtmi\",\n              \"startDate\": \"2021-08-30T00:00:00.000Z\",\n              \"endDate\": \"2021-08-30T00:00:00.000Z\",\n              \"createdDate\": \"2021-10-04T05:55:12.000Z\",\n              \"updatedDate\": \"2021-10-04T05:55:12.000Z\",\n              \"deletedDate\": null,\n            }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/holidayMaster.js",
    "groupTitle": "Holiday"
  },
  {
    "type": "put",
    "url": "/holiday/:id",
    "title": "Update holiday by holiday Id",
    "name": "UpdateHoliday",
    "group": "Holiday",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>holiday unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the holiday</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "size": "yyyy-mm-dd",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date of Holiday</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "size": "yyyy-mm-dd",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date of Holiday</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Holiday has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/holidayMaster.js",
    "groupTitle": "Holiday"
  },
  {
    "type": "post",
    "url": "/interviewStatus",
    "title": "Create a new interviewStatus",
    "name": "CreateInterviewStatus",
    "group": "InterviewStatus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Interview Status title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether interviewStatus is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Interview status has been added successfully\",\n    \"data\": {\n        \"id\": 5,\n        \"title\": \"****\",\n        \"isActive\": true,\n        \"updatedDate\": \"2021-10-01T07:10:48.458Z\",\n        \"createdDate\": \"2021-10-01T07:10:48.458Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewStatusMaster.js",
    "groupTitle": "InterviewStatus"
  },
  {
    "type": "delete",
    "url": "/interviewStatus/:id",
    "title": "Delete interviewStatus by interviewStatus Id",
    "name": "Delete_interviewStatus",
    "group": "InterviewStatus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>InterviewStatus Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\":true,\n  \"status\":200,\n  \"message\":\"Interview status has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewStatusMaster.js",
    "groupTitle": "InterviewStatus"
  },
  {
    "type": "get",
    "url": "/interviewStatus/:id",
    "title": "Get particular interviewStatus by interviewStatus Id",
    "name": "GetInterviewStatusById",
    "group": "InterviewStatus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Interview Status Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": 5,\n        \"title\": \"***\",\n        \"isActive\": true,\n        \"createdDate\": \"2021-10-01T07:10:48.000Z\",\n        \"updatedDate\": \"2021-10-01T07:50:54.000Z\",\n        \"deletedDate\": null,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewStatusMaster.js",
    "groupTitle": "InterviewStatus"
  },
  {
    "type": "get",
    "url": "/interviewStatus",
    "title": "List of all the interviewStatus",
    "name": "InterviewStatusList",
    "group": "InterviewStatus",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of interviewStatus to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Interview Status title</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n      \"list\": [\n          {\n              \"id\": 6,\n              \"title\": \"selected\",\n              \"isActive\": true,\n              \"createdDate\": \"2021-09-10T06:56:46.000Z\",\n              \"updatedDate\": \"2021-09-10T06:56:46.000Z\",\n              \"deletedDate\": null\n          }\n      ],\n      \"totalPages\": 2,\n      \"limit\": 1,\n      \"totalRecords\": 2,\n      \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewStatusMaster.js",
    "groupTitle": "InterviewStatus"
  },
  {
    "type": "put",
    "url": "/interviewStatus/:id",
    "title": "Update InterviewStatus by interviewStatusId",
    "name": "UpdateInterviewStatus",
    "group": "InterviewStatus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>interviewStatus Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>InterviewStatus title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>InterviewStatus is atibve or not.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Interview Status has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewStatusMaster.js",
    "groupTitle": "InterviewStatus"
  },
  {
    "type": "post",
    "url": "/interviewType",
    "title": "Create a new interviewType",
    "name": "CreateInterviewStatus",
    "group": "InterviewType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Interview Type title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether interviewType is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Interview type has been added successfully\",\n    \"data\": {\n        \"id\": 5,\n        \"title\": \"****\",\n        \"isActive\": true,\n        \"updatedDate\": \"2021-10-01T07:10:48.458Z\",\n        \"createdDate\": \"2021-10-01T07:10:48.458Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewTypeMaster.js",
    "groupTitle": "InterviewType"
  },
  {
    "type": "delete",
    "url": "/interviewType/:id",
    "title": "Delete interviewType by interviewType Id",
    "name": "Delete_interviewType",
    "group": "InterviewType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>InterviewType Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\":true,\n  \"status\":200,\n  \"message\":\"Interview type has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewTypeMaster.js",
    "groupTitle": "InterviewType"
  },
  {
    "type": "get",
    "url": "/interviewType/:id",
    "title": "Get particular interviewType by interviewType Id",
    "name": "GetInterviewTypeById",
    "group": "InterviewType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Interview Status Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": 5,\n        \"title\": \"***\",\n        \"isActive\": true,\n        \"createdDate\": \"2021-10-01T07:10:48.000Z\",\n        \"updatedDate\": \"2021-10-01T07:50:54.000Z\",\n        \"deletedDate\": null,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewTypeMaster.js",
    "groupTitle": "InterviewType"
  },
  {
    "type": "get",
    "url": "/interviewType",
    "title": "List of all the interviewType",
    "name": "InterviewTypeList",
    "group": "InterviewType",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of interviewType to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Interview Type title</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n      \"list\": [\n          {\n              \"id\": 2,\n              \"title\": \"***\",\n              \"isActive\": true,\n              \"createdDate\": \"2021-09-10T06:56:46.000Z\",\n              \"updatedDate\": \"2021-09-10T06:56:46.000Z\",\n              \"deletedDate\": null\n          }\n      ],\n      \"totalPages\": 2,\n      \"limit\": 1,\n      \"totalRecords\": 2,\n      \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewTypeMaster.js",
    "groupTitle": "InterviewType"
  },
  {
    "type": "put",
    "url": "/interviewType/:id",
    "title": "Update InterviewType by interviewTypeId",
    "name": "UpdateInterviewStatus",
    "group": "InterviewType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>interviewType Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>InterviewType title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>InterviewType is active or not.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Interview type has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/interviewTypeMaster.js",
    "groupTitle": "InterviewType"
  },
  {
    "type": "post",
    "url": "/jobChange",
    "title": "Create a new JobChange",
    "name": "CreateJobChange",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>job Change title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the jobChange is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Job Change saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobChangeReasonMaster.js",
    "groupTitle": "Job"
  },
  {
    "type": "delete",
    "url": "/jobChange/:id",
    "title": "Delete JobChange by jobChange Id",
    "name": "DeleteJobChange",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>jobChange Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"jobChange deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobChangeReasonMaster.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/jobDescription",
    "title": "Create a new JobDescription",
    "name": "CreateJobDescription",
    "group": "JobDescription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Experience</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of JobDescription</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "technologyId",
            "description": "<p>Technology id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"message\": \"JobDescription has been added successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobDescription.js",
    "groupTitle": "JobDescription"
  },
  {
    "type": "delete",
    "url": "/jobDescription/:id",
    "title": "Delete JobDescription by jobDescription Id",
    "name": "DeleteJobDescription",
    "group": "JobDescription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>JobDescription Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"JobDescription has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobDescription.js",
    "groupTitle": "JobDescription"
  },
  {
    "type": "get",
    "url": "/jobDescription/:id",
    "title": "Get particular JobDescription by jobDescription Id",
    "name": "GetJobDescriptionById",
    "group": "JobDescription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>JobDescription Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n      \"id\": 3,\n      \"technologyId\": 4,\n      \"experience\": \"1-2years\",\n      \"content\": \"this is sample content\",\n        \"createdDate\": \"2021-09-15T05:27:19.000Z\",\n        \"updatedDate\": \"2021-09-15T05:28:46.000Z\",\n        \"deletedDate\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobDescription.js",
    "groupTitle": "JobDescription"
  },
  {
    "type": "get",
    "url": "/jobDescription",
    "title": "List of all the jobDescription",
    "name": "JobDescriptionList",
    "group": "JobDescription",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of jobDescription to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Name of the technology</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n            {\n              \"id\": 2,\n              \"technologyId\": 4,\n              \"experience\": \"1-2years\",\n              \"content\": \"this is sample content\",\n              \"createdDate\": \"2021-10-04T05:55:12.000Z\",\n              \"updatedDate\": \"2021-10-04T05:55:12.000Z\",\n              \"deletedDate\": null,\n              \"Technology\": {\n                  \"id\": 4,\n                  \"title\": \"node\",\n                  \"parentId\": null,\n                  \"isActive\": true,\n                  \"deletedDate\": null,\n                  \"createdDate\": \"2021-10-01T12:40:30.000Z\",\n                  \"updatedDate\": \"2021-10-01T12:40:30.000Z\"\n              }\n            }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobDescription.js",
    "groupTitle": "JobDescription"
  },
  {
    "type": "put",
    "url": "/jobDescription/:id",
    "title": "Update jobDescription by jobDescription Id",
    "name": "UpdateJobDescription",
    "group": "JobDescription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>jobDescription unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Experience</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of JobDescription</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "technologyId",
            "description": "<p>Technology id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"JobDescription has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobDescription.js",
    "groupTitle": "JobDescription"
  },
  {
    "type": "get",
    "url": "/jobChange/:id",
    "title": "Get particular jobChange by jobChange Id",
    "name": "GetJobChangeById",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>jobChange Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Job Exist\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"PHP\",\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobChangeReasonMaster.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/jobChange",
    "title": "List of all the jobChange",
    "name": "JobChangeList",
    "group": "Job",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of jobChange to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the jobChange that you wnat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"List of courses\",\n   \"length\": 2,\n   \"data\": {\n       \"result\": [\n           {\n               \"id\": 1,\n               \"title\": \"JS COURSE\",\n               \"isActive\": true,\n               \"createdDate\": \"2021-07-02T13:34:32.000Z\",\n               \"updatedDate\": \"2021-07-02T13:49:10.000Z\",\n               \"deletedDate\": null\n           },\n           {\n               \"id\": 2,\n               \"title\": \"JAVA COURSE\",\n               \"isActive\": true,\n               \"createdDate\": \"2021-07-02T13:45:59.000Z\",\n               \"updatedDate\": \"2021-07-02T13:45:59.000Z\",\n               \"deletedDate\": null\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobChangeReasonMaster.js",
    "groupTitle": "Job"
  },
  {
    "type": "put",
    "url": "/jobChange/:id",
    "title": "Update jobChange by jobChange Id",
    "name": "UpdateJobChange",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>JobChange Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>JobChange title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the jobChange is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"JObChange updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/jobChangeReasonMaster.js",
    "groupTitle": "Job"
  },
  {
    "type": "delete",
    "url": "/pomaster/:id",
    "title": "To delete the Pomaster with unique id",
    "name": "DeletePOMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of PoMaster</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record deleted successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not deleted successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not deleted successfully\n{\n  \"message\": \"Record not deleted successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 No Record(s) Found\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "get",
    "url": "/pomaster",
    "title": "To fetch all pomasters data",
    "name": "POMasterList",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>No of data to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p>Sort data according to the field provided</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"ASCE\"",
              "\"DESC\""
            ],
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort data according to ASCENDING or DESCENDING</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of all the POMaster data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [{\n     \"id\": 1,\n      \"area\": \"Ranip\",\n      \"state\": \"Gujarat\",\n      \"city\": \"Ahemdabad\",\n      \"country\": \"India\",\n      \"postalCode\": \"382487\",\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      },\n      {\n      \"id\": 2,\n      \"area\": \"Ranip\",\n      \"state\": \"Gujarat\",\n      \"city\": \"Ahemdabad\",\n      \"country\": \"India\",\n      \"postalCode\": \"382487\",\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:22:05.000Z\",\n      \"updatedDate\": \"2021-04-28T13:22:05.000Z\" *\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "POMasterNotFound": [
          {
            "group": "POMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>No records were found</p>"
          },
          {
            "group": "POMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Empty Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"No Record(s) Found\"\n   \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "put",
    "url": "/pomaster/:id",
    "title": "To update the Pomaster with unique id",
    "name": "UpdatePOMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of PoMaster</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "area",
            "description": "<p>Name of the area</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>Name of the state</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>Name of the city</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Name of the country</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "postalCode",
            "description": "<p>Zip/Postal Code of that specific area</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n po:{\n         \"area\": \"Ranip\",\n         \"state\": \"Gujarat\",\n         \"city\": \"Ahemdabad\",\n         \"country\": \"India\",\n         \"postalCode\": \"382487\",\n         \"isActive\": true,\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record updated successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record updated successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not updated successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not updated successfully\n{\n  \"message\": \"Record not updated successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 No Record(s) Found\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "post",
    "url": "/pomaster",
    "title": "To add new POMaster",
    "name": "addPOMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Name of the area</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Name of the state</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Name of the city</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Name of the country</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Zip/Postal Code of that specific area</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     po:{\n             \"area\": \"Ranip\",\n             \"state\": \"Gujarat\",\n             \"city\": \"Ahemdabad\",\n             \"country\": \"India\",\n             \"postalCode\": \"382487\",\n             \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record added successfully</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Newly added record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"message\": \"Record added sucessfully\",\n     \"data\": {\n         \"id\": 21,\n         \"area\": \"maninagar\",\n         \"state\": \"Gujarat\",\n         \"city\": \"Ahemdabad\",\n         \"country\": \"India\",\n         \"postalCode\": \"382487\",\n         \"isActive\": true,\n         \"updatedDate\": \"2021-04-29T05:25:26.660Z\",\n         \"createdDate\": \"2021-04-29T05:25:26.660Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"Record not added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "get",
    "url": "/pomaster/:id",
    "title": "To fetch pomaster with unique id",
    "name": "fetchPoMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique POMaster id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "POMasterDetail": [
          {
            "group": "POMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of PoMaster</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Name of the area</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Name of the state</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Name of the city</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Name of the country</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Zip/Postal Code of that specific area</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "deletedDate",
            "description": "<p>Date when the entry was deleted</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "updatedDate",
            "description": "<p>Date when the entry was updated</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Date when the entry was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"id\": 1,\n      \"area\": \"Ranip\",\n      \"state\": \"Gujarat\",\n      \"city\": \"Ahemdabad\",\n      \"country\": \"India\",\n      \"postalCode\": \"382487\",\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be a number</p>"
          }
        ],
        "POMasterNotFound": [
          {
            "group": "POMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>PoMaster with unique id not found</p>"
          },
          {
            "group": "POMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>EmptyArray</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"No Record(s) Found\"\n   \"data\":[]\n}\n ///////OR///////////\n HTTP/1.1 500 No Record(s) Found\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "post",
    "url": "/page",
    "title": "Create a new Page",
    "name": "CreatePage",
    "group": "Page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "metaTitle",
            "description": "<p>metaTitle of the page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metaKeyword",
            "description": "<p>metaKeyword of the page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metaDescription",
            "description": "<p>metadescription of the Page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessKey",
            "description": "<p>accesskey of the Page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"message\": \"Page has been added successfully\",\n  \"data\": {\n      \"id\": 1,\n      \"title\": \"about_page\",\n      \"content\": \"<p>This is About Pag</p>\",\n      \"metaTitle\": \"about_page\",\n      \"metaKeyword\": \"about_page\",\n      \"metaDescription\": \"About Page\",\n      \"accessKey\": \"about_page\",\n      \"status\": \"Enable\",\n      \"updatedDate\": \"2021-10-01T06:01:57.715Z\",\n      \"createdDate\": \"2021-10-01T06:01:57.715Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/pageMaster.js",
    "groupTitle": "Page"
  },
  {
    "type": "delete",
    "url": "/page/:id",
    "title": "Delete Page by Page Id",
    "name": "DeletePage",
    "group": "Page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Page Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Page has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/pageMaster.js",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "/page/:id",
    "title": "Get particular Page by Page Id",
    "name": "GetPageById",
    "group": "Page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Page Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n      \"id\": 1,\n      \"title\": \"contact_page\",\n      \"content\": \"<ol><li>This is Test Page</li></ol>\",\n      \"metaTitle\": \"contact_page\",\n      \"metaKeyword\": \"contact_page\",\n      \"metaDescription\": \"Contact Page\",\n      \"accessKey\": \"contact_page\",\n      \"status\": \"Enable\",\n        \"createdDate\": \"2021-09-15T05:27:19.000Z\",\n        \"updatedDate\": \"2021-09-15T05:28:46.000Z\",\n        \"deletedDate\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/pageMaster.js",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "/page",
    "title": "List of all the Page",
    "name": "PageList",
    "group": "Page",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of Page to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n            {\n              \"id\": 1,\n              \"title\": \"contact us\",\n              \"content\": \"<p>This is a contact page</p>\",\n              \"metaTitle\": \"contact\",\n              \"metaKeyword\": \"contact\",\n              \"metaDescription\": \"This is a contact page\",\n              \"accessKey\": \"contact\",\n              \"status\": \"Enable\",\n                \"createdDate\": \"2021-09-15T05:26:47.000Z\",\n                \"updatedDate\": \"2021-09-15T05:26:47.000Z\",\n                \"deletedDate\": null\n            }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/pageMaster.js",
    "groupTitle": "Page"
  },
  {
    "type": "put",
    "url": "/page/:id",
    "title": "Update Page by Page Id",
    "name": "UpdatePage",
    "group": "Page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Page Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "metaTitle",
            "description": "<p>metaTitle of the page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metaKeyword",
            "description": "<p>metaKeyword of the page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metaDescription",
            "description": "<p>metadescription of the Page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessKey",
            "description": "<p>accesskey of the Page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Page has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/pageMaster.js",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "/project",
    "title": "Create a new Project",
    "name": "CreateProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectName",
            "description": "<p>Name of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectManager",
            "description": "<p>Project Manager Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "technologyId",
            "description": "<p>Technology id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Project Year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the project</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"message\": \"Project has been added successfully\",\n  \"data\": {\n      \"id\": 1,\n      \"projectName\": \"*****\",\n      \"projectManager\": \"****\",\n      \"technologyId\": 1,\n      \"year\": \"2021\",\n      \"description\": \"mern stack project\",\n      \"updatedDate\": \"2021-10-01T06:01:57.715Z\",\n      \"createdDate\": \"2021-10-01T06:01:57.715Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/projectMaster.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/project/:id",
    "title": "Delete Project by project Id",
    "name": "DeleteProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Project Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Project has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/projectMaster.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/:id",
    "title": "Get particular Project by project Id",
    "name": "GetProjectById",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Project Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": 3,\n        \"projectName\": \"******\",\n        \"technologyId\": \"*******\",\n        \"projectManager\": \"********\",\n        \"year\":\"2019\",\n        \"description\":\"mern stack project\",\n        \"createdDate\": \"2021-09-15T05:27:19.000Z\",\n        \"updatedDate\": \"2021-09-15T05:28:46.000Z\",\n        \"deletedDate\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/projectMaster.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project",
    "title": "List of all the project",
    "name": "ProjectList",
    "group": "Project",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of project to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "projectName",
            "description": "<p>Name of the project</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "projectManager",
            "description": "<p>Project Manager</p>"
          },
          {
            "group": "Query Params",
            "type": "Nuumber",
            "optional": false,
            "field": "technologyId",
            "description": "<p>Technology unique id</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Project year</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 1,\n                \"projectName\": \"sonitafortrech\",\n                \"technologyId\": 2,\n                \"projectManager\": \"pritee\",\n                \"year\": \"2019\",\n                \"description\":\"mern stack project\"\n                \"createdDate\": \"2021-09-15T05:26:47.000Z\",\n                \"updatedDate\": \"2021-09-15T05:26:47.000Z\",\n                \"deletedDate\": null\n            }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/projectMaster.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project/:id",
    "title": "Update project by project Id",
    "name": "UpdateProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Page Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectName",
            "description": "<p>Name of the project</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectManager",
            "description": "<p>Project Manager Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "technologyId",
            "description": "<p>Technology id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Project Year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the project</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Project has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/projectMaster.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/skill/:id",
    "title": "To delete the SkillMaster with unique id",
    "name": "DeleteSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of SkillMaster</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record deleted successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not deleted successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not deleted successfully\n{\n  \"message\": \"Record not deleted successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "get",
    "url": "/skill",
    "title": "To fetch all skillmaster data",
    "name": "SkillMasterList",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>No of data to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p>Sort data according to the field provided</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"ASCE\"",
              "\"DESC\""
            ],
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort data according to ASCENDING or DESCENDING</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of all the SkillMaster data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [{\n     \"id\": 1,\n     \"title\":\"Node\"\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      },\n      {\n      \"id\": 2,\n     \"title\":\"PHP\"\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "SkillMasterNotFound": [
          {
            "group": "SkillMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>No records were found</p>"
          },
          {
            "group": "SkillMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Empty Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"No Record(s) Found\"\n   \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "put",
    "url": "/skill/:id",
    "title": "To update the SkillMaster with unique id",
    "name": "UpdateSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of SkillMaster</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the SkillMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n skill:{\n          \"title\": \"React\",\n          \"isActive\": true,\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record updated successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record updated successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not updated successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not updated successfully\n{\n  \"message\": \"Record not updated successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "post",
    "url": "/skill",
    "title": "To add new SkillMaster",
    "name": "addSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of SkillMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    skill:{\n         \"title\": \"Node\",\n         \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record added successfully</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Newly added record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"message\": \"Record added sucessfully\",\n     \"data\": {\n         \"id\": 21,\n         \"title\": \"PHP\",\n         \"isActive\": true,\n         \"updatedDate\": \"2021-04-29T05:25:26.660Z\",\n         \"createdDate\": \"2021-04-29T05:25:26.660Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"Record not added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "get",
    "url": "/skill/:id",
    "title": "To fetch skillmaster with unique id",
    "name": "fetchSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique SkillMaster id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "SkillMasterDetail": [
          {
            "group": "SkillMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of SkillMaster</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of SkillMaster</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "deletedDate",
            "description": "<p>Date when the entry was deleted</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "updatedDate",
            "description": "<p>Date when the entry was updated</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Date when the entry was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"id\": 2,\n     \"title\":\"PHP\"\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be a number</p>"
          }
        ],
        "SkillMasterNotFound": [
          {
            "group": "SkillMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>SkillMaster with unique id not found</p>"
          },
          {
            "group": "SkillMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>EmptyArray</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"No Record(s) Found\"\n   \"data\":[]\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "post",
    "url": "/technologyContent",
    "title": "Create a new TechnologyContent",
    "name": "CreateTechnologyContent",
    "group": "TechnologyContent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "technologyId",
            "description": "<p>Technology id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the technology</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Technology content has been added successfully\",\n    \"data\": {\n        \"id\": 5,\n        \"technologyId\": 4,\n        \"content\": \"**********\",\n        \"updatedDate\": \"2021-10-01T07:10:48.458Z\",\n        \"createdDate\": \"2021-10-01T07:10:48.458Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyContentMaster.js",
    "groupTitle": "TechnologyContent"
  },
  {
    "type": "delete",
    "url": "/technologyContent/:id",
    "title": "Delete TechnologyContent by technologyContent Id",
    "name": "Delete_technologyContent",
    "group": "TechnologyContent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>TechnologyContent Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 200 OK\n{\n  \"success\":true,\n  \"status\":200,\n  \"message\":\"Technology content has been deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyContentMaster.js",
    "groupTitle": "TechnologyContent"
  },
  {
    "type": "get",
    "url": "/technologyContent/:id",
    "title": "Get particular technologyContent by technologyContent Id",
    "name": "GetTechnologyContentById",
    "group": "TechnologyContent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>TechnologyContent Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": 5,\n        \"technologyId\": 4,\n        \"content\": \"********\",\n        \"createdDate\": \"2021-10-01T07:10:48.000Z\",\n        \"updatedDate\": \"2021-10-01T07:50:54.000Z\",\n        \"deletedDate\": null,\n        \"technology\": {\n            \"id\": 4,\n            \"title\": \"node\",\n            \"parentId\": null,\n            \"isActive\": true,\n            \"deletedDate\": null,\n            \"createdDate\": \"2021-10-01T12:40:30.000Z\",\n            \"updatedDate\": \"2021-10-01T12:40:30.000Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyContentMaster.js",
    "groupTitle": "TechnologyContent"
  },
  {
    "type": "get",
    "url": "/technologyContent",
    "title": "List of all the technologyContent",
    "name": "TechnologyContentList",
    "group": "TechnologyContent",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of designation to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "technologyId",
            "description": ""
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the technology</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 1,\n                \"technologyId\": 1,\n                \"content\": \"***********\",\n                \"createdDate\": \"2021-09-15T05:44:33.000Z\",\n                \"updatedDate\": \"2021-09-15T05:44:33.000Z\",\n                \"deletedDate\": null,\n                \"technology\": {\n                    \"id\": 1,\n                    \"title\": \"Javascript\",\n                    \"parentId\": null,\n                    \"isActive\": false,\n                    \"deletedDate\": null,\n                    \"createdDate\": \"2021-08-16T09:53:07.000Z\",\n                    \"updatedDate\": \"2021-08-16T10:07:35.000Z\"\n                }\n            }\n        ],\n        \"totalPages\": 4,\n        \"limit\": 1,\n        \"totalRecords\": 4,\n        \"currentPage\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyContentMaster.js",
    "groupTitle": "TechnologyContent"
  },
  {
    "type": "put",
    "url": "/technologyContent/:id",
    "title": "Update TechnologyContent by technologyContentId",
    "name": "UpdateTechnologyContent",
    "group": "TechnologyContent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>TechnologyContent Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "technologyId",
            "description": "<p>TechnologyId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Technology Content</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n    \"success\": true,\n    \"status\": 200,\n    \"message\": \"Technology content has been updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyContentMaster.js",
    "groupTitle": "TechnologyContent"
  },
  {
    "type": "delete",
    "url": "/technology/:id",
    "title": "To delete the TechnologyMaster with unique id",
    "name": "DeleteTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of TechnologyMaster</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record deleted successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not deleted successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not deleted successfully\n{\n  \"message\": \"Record not deleted successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "get",
    "url": "/technology",
    "title": "To fetch all TechnologyMaster data",
    "name": "TechnologyMasterList",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>No of data to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p>Sort data according to the field provided</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"ASCE\"",
              "\"DESC\""
            ],
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort data according to ASCENDING or DESCENDING</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of all the TechnologyMaster data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [{\n     \"id\": 1,\n     \"title\":\"JS\"\n     \"parentId\":null\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      },\n      {\n      \"id\": 2,\n     \"title\":\"Node\"\n     \"parentId\":1\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "TechnologyMasterNotFound": [
          {
            "group": "TechnologyMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>No records were found</p>"
          },
          {
            "group": "TechnologyMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Empty Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"No Record(s) Found\"\n   \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "put",
    "url": "/technology/:id",
    "title": "To update the TechnologyMaster with unique id",
    "name": "UpdateTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of TechnologyMaster</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "parentId",
            "description": "<p>ParentId of that TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\ntechnology:{\n         \"title\": \"React\",\n         \"parentId\": 1,\n         \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record updated successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record updated successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not updated successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not updated successfully\n{\n  \"message\": \"Record not updated successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "post",
    "url": "/technology",
    "title": "To add new TechnologyMaster",
    "name": "addTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "parentId",
            "description": "<p>Parent Technology of that TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n technology:{\n         \"title\": \"Node\",\n         \"parentId\": 1,\n         \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record added successfully</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Newly added record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"message\": \"Record added sucessfully\",\n     \"data\": {\n         \"id\": 2,\n         \"title\": \"Node\",\n         \"parentId\":1\n         \"isActive\": true,\n         \"updatedDate\": \"2021-04-29T05:25:26.660Z\",\n         \"createdDate\": \"2021-04-29T05:25:26.660Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"Record not added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "get",
    "url": "/technology/:id",
    "title": "To fetch TechnologyMaster with unique id",
    "name": "fetchTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique TechnologyMaster id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "TechnologyMasterDetail": [
          {
            "group": "TechnologyMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of TechnologyMaster</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of TechnologyMaster</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "parentId",
            "description": "<p>Parent Technology of that TechnologyMaster</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "deletedDate",
            "description": "<p>Date when the entry was deleted</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "updatedDate",
            "description": "<p>Date when the entry was updated</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Date when the entry was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"id\": 2,\n     \"title\":\"PHP\"\n     \"parentId\":1\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be a number</p>"
          }
        ],
        "TechnologyMasterNotFound": [
          {
            "group": "TechnologyMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>TechnologyMaster with unique id not found</p>"
          },
          {
            "group": "TechnologyMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>EmptyArray</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No Record(s) Found\n{\n  \"message\": \"No Record(s) Found\"\n   \"data\":[]\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  }
] });
