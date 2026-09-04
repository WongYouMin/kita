# Learning Log

## Day 11 (4 Sept 2026)

### What I Practiced
- Completed [Exercise 14](../../backend/exercise/exercise-14.js)
- Completed [Test 11](../../backend/exercise/test11.js)

### Asynchronous Programming
- Synchronous operation will execute each statement only after completing the previous statement.
- Asynchronous operations are operations that takes time. Asynchronous operation can be started, while executing the other operation.
    ```
    console.log("A");

    setTimeout(() => {
        console.log("B");
    }, 2000);

    console.log("C");
    ```
    - Expected Output: 
        - shows A 
        - Starts 2s timer
        - shows C 
        - Timer completes
        - Shows B

### Promise
- Promise object is an object that holds eventual result in asynchronous operation.
- Promise object state can be:
    1. pending (initialized by default)
    2. fulfilled
    3. rejected
- Promise object state is changed to fulfilled in either of the following situations:
    1. `resolve()` is invoked
        ```
        const rewardPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Reward is ready!");
            }, 2000);
        });
        ```
        - `resolve()` changes promise state to fulfilled with value `"Reward is ready"`
        - `new Promise()` is a constructor to create new promise instance with a executor as its argument
        - executor is a function to be used in initializing the promise instance
        - `resolve()` and `reject()` are built in function provided
    2. a value is returned from the asynchronous function invoked
        ```
        async function getReward() {
            return "Reward is ready!";
        }

        async function showReward() {
            const result = await getReward();
        }

        showReward();
        ``` 
        - the `return` statement from asyn function changes the promise state to fulfilled with value `"Reward is ready"`
        - `async` makes a function to be asynchronous, it always returns a promise object
        - `await` waits until the promise object state changes to fulfilled, assigning the fulfilled value to the variable. `await` can only be used within asynchronous function.
        - Note that promise object is different than promise value itself.
        - Without `await`, the console will be printing an object instead of its value.
- Promise object state is changed to rejected in the following situation:
    - `reject()` is invoked
        ```
        const getResult = () => {
            const result = new Promise((resolve, reject) => {
                reject("No result found.");
            });
            return result;
        };
        
        const result = await getResult();
        ```
        - the `reject()` changes the promise state to rejected with value `"No result found."`
- Note that promise object, its value and state is different.
- Promise value can be obtained in three ways:
    - Given the following code:
        ```
        const customers = [
            {
                id: "C001",
                name: "Amy",
                points: 1000
            },
            {
                id: "C002",
                name: "Bob",
                points: 500
            }
        ];

        const rewards = [
            {
                id: "R001",
                customerId: "C001",
                name: "Farm Fresh Taro Milk",
                points: 500
            },
            {
                id: "R002",
                customerId: "C002",
                name: "Farm Fresh Banana Milk",
                points: 600
            }
        ];
        const getCustomerDetails = async (id) => {
            const customer = customers.find(customer => customer.id === id);

            if(customer){
                return customer;
            }
            throw new Error("Customer Id not found.");
        };

        const getCustomerReward = async ({id}) => {
            const reward = rewards.find(reward => reward.customerId === id);
            if(reward){
                return reward;
            }
            throw new Error("Customer has no rewards.");
        };
        ```
    1. Async await + try...catch
        ```
        const showCustomerReward = async () => {
            try {
                const customer = await getCustomerDetails("C001");
                const customerReward = await getCustomerReward(customer);

                console.log(customerReward);
            } catch (error) {
                console.log(error);
            }
        }; 

        showCustomerReward();
        ```
        - Every process required to be executed is put in the `try` block.
        - Whenever a promise gets rejected, the code in `catch` block will execute.
        - This way is easier to read and write.
    2. Promise chaining
        ```
        const showCustomerReward = () => {
            getCustomerDetails("C003")
                .then(getCustomerReward)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        showCustomerReward();
        ```
        - `then()` is used to get the fulfilled value of an asynchronous operation. It receives the fulfilled value as the parameter of its registered callback. It is invoked when the promise state is changed to fulfilled.
        - `catch()` is run whenever the promise object state is rejected, with the reason received as the parameter.
    3. `Promise.all()`
        ```
        const showInformation = async () => {
            try {
                const result = await Promise.all([getCustomerDetails("C001"), getRewardList()]);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        ```
        - `Promise.all()` is a static method that takes an iterable (commonly an array) of **independent** promise objects as arguments and return a promise object.
        - Note that **independent** promise objects refers to promise objects that obtains the result without relying on the other promise objects.
        - When all promise objects are fulfilled with value, the returned promised object will be fulfilled with array of fulfilled value.
        - Even if one of the promise object is rejected with reason, the returned promise object state will be updated to rejected.

### fetch() in Fetch API
- API (Application Programming Interface) is a defined interface that allows one software to interact with another different software.
- Fetch API is a web API that allows JavaScript send network request and handle responses in the web browser.
- `fetch()` is a function provided in Fetch API, to send network request and return a promise object which holds eventual response object.
- Protocol is a set of rules that define how client and server communicates. HTTP and HTTPS are web protocols which defines the request and response structure.
    ```
    const getUser = async() => {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        const response = await fetch(url);
        
        const user = await response.json();
        console.log(user);
    };

    getUser();
    ```
    - `fetch()` needed argument is the `url`, which is the one of the endpoint in the api.
    - Network request is sent to the specified `url`.
    - A promise object `response` is created, with initial state "pending".
    - When HTTP response is received, the promise state changes to "fulfilled" with `response` object as its value.
    - `response` is an object with many properties including status, ok, body and url.
    - To read the response body which is written in json format (depending on types of response body received), `json()` is used. `json()` is a built in response object method that parse the response body to javascript value.
    - `user` is used to store the parsed `response.body` value.
    ```
    const createUser = async() => {
          try {
            const newUser = {
                name: "Hana",
                email: "hana@example.com"
            };
        
            const url = "https://jsonplaceholder.typicode.com/users";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            if(!response.ok){
                throw New Error(`Error: ${response.status}`);
            }
        
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }; 

    createUser();
    ```
    - `fetch()` is used to send network request which returns a promise object which is eventually fulfilled with a response object as its value, and can be assigned to `response` variable.
    - This example shows a network request with `request.options` as its argument. `request.options` is an object, specifying how the request is made. 
    - In this example:
        - request made is a `POST` request, 
        - request headers specifies the type of content in the request body, which is `"application/json"`
        - request body sent is newUser object which is parsed to json with `JSON.stringify()`
    - Note that `response.ok` can be true or false. When `response.status` is non-2xx, then the `response.ok` is `false`. However, the `response` object is fulfilled as the response is received successfully from the server. 
    - If the `response.ok` is `false`, then the `response.body` does not contain the intended result. To handle the not ok `response`, error is thrown. As the code are wrapped in `try...catch` block, error will be caught and printed.
    - If the `response.ok` is `true`, then the `response.body` will be parsed to javascript value. In this example, javascript object is contained in the `response.body`. Object destructuring is used to extract `name`, `phone` and `email`.
    - If no response is received from the server, the promise object state is rejected. The code in catch block will run.