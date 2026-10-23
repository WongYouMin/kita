# Learning Log | Day 19 ( 23 October 2026)

## Kita MVP version 1: Loyalty Points Feature Building

### Truthy and Falsy Value
- Example of truthy values: `{}`, `[]`, `"abc"`, `123`, `{id: 1}`, `[1, 2, 3]`
- Example of falsy values: `null`, `undefined`, `0`, `""`, `NaN`

### Number()
- Number() is used to convert an input as numerical value.

    | data         | Number(data)          |
    | ------------ | --------------------- |
    | "123"        | 123                   |
    | "100.5"      | 100.5                 |
    | ""           | 0                     |
    | `null`       | 0                     |
    | "abc"        | `NaN`                 |
    | `undefined`  | `NaN`                 |


### Number.isFinite()
- A finite number is normal and limited values that is neither `Nan`, `Infinity` nor `-Infinity`.

    | data         | Number.isFinite(data) |
    | ------------ | --------------------- |
    | 123          | true                  |
    | 0            | true                  |
    | -5           | true                  |
    | `NaN`        | false                 |
    | `Infinity`   | false                 |
    | `-Infinity`  | false                 |

### Number.isInteger()
- An integer is a whole number without decimal or fractional part.

    | Data     | Number.isInteger(data) |
    | -------- | ---------------------- |
    | 120      | true                   |
    | -5       | true                   |
    | 20.5     | false                  |
    | 0        | true                   |
    | -14.5    | false                  |

### Typeof Operator
- The `typeof` operator returns a **string** describing the type of data.

### JavaScript Quirks
- One of the JavaScript quirk behaviours is returning the type of data with `null` value as `'object'`.

    | Data     | `typeof` returns | Actual data type |
    | -------- | -----------------| ---------------- |
    | {}       | 'object'         | object           |
    | []       | 'object'         | object           |
    | **null** | **'object'**     | **null**         |
    | "abc"    | 'string'         | string           |
    | 123      | 'number'         | number           |

### Array.isArray()
- It checks whether a value is an array.
- Note that all array is object, but an object is not necessarily an array.

    | Data     | Array.isArray(data) | `typeof` returns |
    | -------- | ------------------- | ---------------- |
    | {id: 1}  | false               | 'object'         |
    | [1, 2, 3]| true                | 'object'         |

### Removing Whitespaces with `.trim()`

| Method        | Removes white spaces of  | Example              |
| ------------- | ------------------------ | -------------------- |
| `.trim()`     | Start and End            | " Amy " -> "Amy"     |
| `.trimStart()`| Start                    | " Amy " -> "Amy "    |
| `.trimEnd()`  | End                      | " Amy " -> " Amy"    |

### MongoDB and MySQL Differences

| MongoDB           | MySQL               | Purpose                  |
| ----------------- | ------------------- | ------------------------ |
| database          | database            | Stores data.             |
| collection        | table               | A group of related data. | 
| document          | row                 | A record of certain data.|

### Importing and Exporting Module via CommonJS
- Use `require()` to import module
    - Example: `const express = require('express');`
    - Express module is imported. It enables creation of express application instance.
- Use `module.exports` to make certain part of a code usable by other file which imported the current file.
    - Example: 
        - Current file: `module.exports = router;`
        - File to imports the current file: `const customerRouter = require('./routes/customer');`
    - Router object is exported. File that imports the current file can access the router object.

### Express.js Basics
 1. The express application instance
    - Purpose:
        1. Define middleware (processes that runs between request and response)
        2. Define how HTTP requests are handled
    - Example:
        ```
        const express = require('express');
        const app = express();
        ```
        - When importing the express module, `express` is assigned with a function.
        - By calling the express function, the `app` is assigned with express application instance.
  2. Port
  - Numbered destination used to direct network traffic to approriate application or service.
  - A computer can have multiple application using different port at the same time.
  - A port can listen to network requests from different IP addresses.
  - Listen to the port for incoming network requests when server runs.
  3. Route
  - In backend, route handles the received HTTP request and send appropriate responses.
  - Example: `app.get("/", (req, res) => res.send('Welcome'))`
  - Route consists of three components:
    1. Method: The HTTP request method.
    1. Path: The url of the API endpoint.
    2. Route Handler: The function which handles the request.
  4. Middleware
    - Function that runs between a request and a response.
    - Example: `app.use(express.json());`
    - It parse the request body if it is in JSON format to JavaScript value.

### HTTP Request Methods
- HTTP request methods allows communication between client and the server.

| HTTP Request Method | Purpose      | 
| ------------------- | ------------ |
| GET                 | Read data.   |
| POST                | Create data. |
| PUT                 | Update data. |
| DELETE              | Delete data. |

### HTTP Response Status Code

| Status Code | Purpose           |
| ----------- | ----------------- |
| 200         | OK.               |
| 201         | Created.          |
| 400         | Bad request.      |
| 404         | Not found.        |
| 500         | Server error.     |

**Non-2xx** code is response that is not ok.

### Connecting MongoDB with Express.js
1. Import the `mongodb` module and extract the `MongoClient` object.
    ```
    const {MongoClient} = require('mongodb');
    ```
2. Create the `MongoClient` instance with connection string as argument.
    ```
    const client = new MongoClient('mongodb://127.0.0.1:27017/');
    ```
3. Select the database via db method.
    ```
    const db = client.db("school");
    ```
4. Select the collections via collection method.
    ```
    const students = db.collection("students");
    ```
5. Interact with MongoDB collection through the collection instance in request handler.
    ```
    app.get("/api/students", async(req, res) => {
        const result = await students.find().toArray();
        res.json(result);
    });
    ```
    - `find()` returns a cursor, an object that provides access to documents that matched the query.
    - `.toArray()` is an asynchronous operation that collects results of all matching query to an array.
    - The cursor processes each document individually by iterating through each documents that matched the query.
    - The `.toArray()` stores all result that matched the query to an array after the `.toArray()` finishes.

### Express Router
1. Purpose
    - Express router allows the grouping of related routes with router instance.
    - It makes routing more manageable when the amount of routes increases.
2. Implementing express router
    1. Import express module
    ```
    const express = require('express');
    ```
    2. Create express router instance.
    ```
    const router = express.Router();
    ```
    3. Register related routes with the router instance.
    ```
    router.get("/", async(req, res) => {
        const result = await students.find().toArray();
        res.json(result);
    });
    ```
    4. Export router instance.
    ```
    module.exports = router;
    ```
    - The `module` object is a built-in Node.js object in every file.
    - It is used to make the exported value available to other file that imports current file.
    5. Import router instance in App.js
    ```
    const studentRouter = require('./routes/students');
    ```
    6. Register the router instance with middleware.
    ```
    app.use("/api/students", studentRouter);
    ```

### MongoDB Basics
1. Get all documents from collections
    ```
    const data = await students.find().toArray();
    ```
2. Get one document from collections by id
    ```
    const data = await students.findOne({_id: studentId});
    ```
3. Create a document
    ```
    const result = await students.insertOne({
        name: "Amy",
        class: "3A"
    });
    ```
    - The `insertOne` query returns an object when the record is created successfully.
    - Access the id from the result using `.insertedId`
4. Update a document
    ```
    const result = await students.updateOne(
        {_id: studentId},
        {$set: { class: "3B" }}
    );
    ```