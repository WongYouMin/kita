# Learning Log

## Day 15 (26 Sept 2026)

### useEffect
- useEffect is one of the React Hooks. Just like the other React Hooks, it should be declared within the top level of functional components (outside control statement, loop statement or functions).
- The `useEffect` allows certain process to be carried out. All `useEffect` will run for at least once during the initial render of the page.
- The structure of `useEffect`:
    ```
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchProducts();
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [search]);
    ```
    1. It receives a callback function as argument.
    2. The callback function is also known as the setup function for the effect. In this example, the effect creates and starts a 500 ms delay to run `fetchProducts()`.
    3. The setup function can return a cleanup function optionally. In this example, the cleanup function will discard the timeout.
    4. Dependency array can be passed as the second argument of useEffect. Dependency array contains state(s), whenever the specified state(s) in dependency changed, the effect will run. In this example, `[search]` is the dependency array. Whenever there is changes made to the `search` state, this effect will run.

### Ways to apply useEffect 
There are 3 ways of using `useEffect`:
 1. Apply the effect for every rendering of user-interface
    ```
    import {useEffect, useState} from "react";
    
    function App() {
    
        // States
        const [count, setCount] = useState(0);

        // Event Handlers
        const updateCount = () => {
            setCount(previousCount => previousCount + 1);
        };

        // Effects
        // Note that no dependency array is specified, not even an empty array
        useEffect(() => {
            console.log(`hello`);
        });

        // Renders    
        return(
            <>
                <h3>Count: {count}</h3>
                <button onClick={updateCount}>[Add]</button>
            </>
        )
    }

    export default App
    ```
    - All effects will run when rendering the page initially.
    - Therefore, when checking at console, `hello` is printed for 2 times during the initial page rendering. It is due to the reason of running the program in `<StrictMode>` development, React will run the effect an extra time in the initial page rendering for easier debugging purposes at setup or cleanup functions.
    - Whenever user clicked the `[Add]` button, the update of `count` state causes the re-rendering of user interface. Therefore, the re-rendering of user interface causes `hello` to be printed at the console.
2. Only apply the effect once during the initial page rendering
    ```
    import {useEffect, useState} from "react";

    function App() {
        
        // States
        const [count, setCount] = useState(0);

        // Event Handlers
        const updateCount = () => {
            setCount(previousCount => previousCount + 1);
        };

        // Effects
        // Note the empty dependency array in the second argument of useEffect
        useEffect(() => {
            console.log(`hello`);
        }, []);
        

        // Renders
        return(
            <>
                <h3>Count: {count}</h3>
                <button onClick={updateCount}>[Add]</button>
            </>
        )
    }

    export default App

    ```
    - The only changes made in the code above compared to the first code is the `useEffect()`. Note that the empty dependency array `[]` passed as the second argument in `useEffect()`.
    - `hello` will only run twice in the initial page rendering, due to the React `<StrictMode>`. Rendering of user interface due to the changes in state(s) no longer causes the printing of `hello` in console.
3. Apply the effect whenever there are changes made to the state(s) in dependency array
    ```
    import {useEffect, useState} from "react";

    function App() {

        const [count, setCount] = useState(0);
        const [name, setName] = useState("");

        const updateCount = () => {
        setCount(previousCount => previousCount + 1);
        };

        const updateName = (event) => {
        setName(event.target.value);
        };

        useEffect(() => {
            console.log(`Name is updated`);
        }, [name]);
        
        return(
            <>
                <h3>Count: {count}</h3>
                <button onClick={updateCount}>[Add]</button>
                <br />
                <input type="text" value={name} onChange={updateName} placeholder="Enter name"/>
            </>
        )
    }

    export default App
    ```
    - There are two states declared, `count` and `name`.
    - The effects defined will applied whenever there is changes made to `name` state.
    - In the initial page rendering, the effect is applied. `Name is updated` is printed at console.
    - If user click the `[Add]` button, `count` value is updated. 
    - If user types or remove characters in the `name` input field, `Name is updated` will be printed for every changes made to the input field. It is because `name` is the dependency state.

### useEffect and API call
- API allows different software communicates with each other. Request can be sent to the API to get the corresponding response. The returned response object contains the data requested to be displayed at the client side.
- API is called as effect or with the help of effect. It is because all effect will be applied for 
at least once during the initial page rendering. It is essential in retrieving data for displaying when the page loads initially.
- The dependency array which contains state(s) will also trigger the useEffect whenever there is any changes occured to the state(s). For instance, changes to page in pagination, product title in search bar needs to make a new request to get relevant data.
    ```
    import {useEffect, useState} from "react";

    function App() {

        // States
        const [products, setProducts] = useState([]);

        // API Functions
        const fetchProducts = async () => {
            try {
                const api = `https://dummyjson.com/products`;
                const response = await fetch(api);
                if(!response.ok){
                    throw new Error(`Failed to fetch products with status code ${response.status}`);
                }
                const productsResponse = await response.json();
                setProducts(productsResponse.products);
            } catch (error) {
                console.log(error.message);
            } 
        };

        // Effects
        useEffect(() => {
            fetchProducts();
        }, []);

        // Renders
        return(
            <>
                <h3>Products</h3>
                {
                    products.length > 0
                    ? products.map(({id, title}) => {
                        return (
                            <p key={id}>{title}</p>
                        )
                    })
                    : <p>No products found.</p>
                
                }
            </>
        )
    }

    export default App

    ```
    - `products` is declared as a state, which is initialized as an empty array. `products` need to be declared as a state due to the importance of preserving its value across re-rendering of user interface. Without being a state, the value is reset to its initial value during every render. It prevents the need of fetching products data everytime when there is UI re-rendering.
    - `fetchProducts()` is the API functions that will be ran in the effect. It only run for once after the initial page rendering, due to the empty dependency array specified. Therefore, in this example, it only shows the list of products retrieved from the API.
    - Note that each API response body differs in structure. Not all API response is sent in JSON format. In this example, the API response body's content-type is JSON and it returns an object with properties including `products`, `total`, `skip` and `limit`. Therefore, `productsResponse.products` is the value set in `products` state.

    ### Multiple Dependencies in useEffect with Debouncing and Pagination
    - There could be more than one dependencies in useEffect. In another word, there could be more than one states determining whether to run an effect.
    - The effect will run even if one of the state listed in the dependencies is updated.
        ```
        import {useEffect, useState} from "react";

        function App() {

            // States
            const [products, setProducts] = useState([]);
            const [search, setSearch] = useState("");
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState("");

            const [page, setPage] = useState(1);
            const [totalPage, setTotalPage] = useState(1);

            // Event Handlers
            const updateSearch = (event) => {
                setSearch(event.target.value);
                setPage(1);
            };

            const updatePage = (event) => {
                switch(event.target.name){
                    case `previous`:
                        setPage(previousPage => previousPage > 1 
                        ? previousPage - 1 
                        : previousPage
                        );
                        break;
                    case `next`:
                        setPage(previousPage => previousPage < totalPage 
                        ? previousPage + 1 
                        : previousPage
                        );
                        break;
                }
            };

            // API Functions
            const fetchProducts = async () => {
                setLoading(true);
                setError("");
                try {
                    const limit = 10;
                    const skip = (page - 1) * limit;
                    const api = `https://dummyjson.com/products` + (search.trim() 
                                    ? `/search?q=${search}&limit=${limit}&skip=${skip}`
                                    : `?limit=${limit}&skip=${skip}`
                                );
                    const response = await fetch(api);
                    if(!response.ok){
                        throw new Error(`Failed to fetch products with status code ${response.status}`);
                    }
                    const productsResponse = await response.json();
                    setProducts(productsResponse.products);
                    setTotalPage(Math.ceil(productsResponse.total / limit));
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            // Effects
            useEffect(() => {
                const timer = setTimeout(() => {
                    fetchProducts();
                }, 500);

                return () => {
                    clearTimeout(timer);
                };
            }, [search, page]);

            return(
                <>
                    <h3>Products: {search}</h3>
                    <input type="text" value={search} placeholder="Search products" onChange={updateSearch} />
                    <br />
                    {
                        loading
                        ? <p>Loading products...</p> 
                        : error.trim() 
                            ? <p>{error}</p>
                            : products.length > 0
                            ? products.map(({id, title}) => {
                                return (
                                <p key={id}>{title}</p>
                                )
                            })
                            : <p>No products found.</p>
                        
                    }
                    <br />
                    <p>Page {page}</p>
                    <button name="previous" disabled={page <= 1} onClick={updatePage}>Previous</button>
                    <button name="next" disabled={page >= totalPage} onClick={updatePage}>Next</button>
                </>
            )
        }

        export default App
        ```
        - The states declared are `products`, `search`, `loading`, `error`, `page` and `totalPage`.
            - `products` stores the loaded products as array. It is initialized as empty array.
            - `search` stores the searched content from input. It is initialized as empty string.
            - `page` stores the current page of products displayed. It is initialized as 1 because there is always at least 1 page of content.
            - `totalPage` stores the total page of products that can be displayed. It is initialized as 1 because there is always at least a total of 1 page of content.
        - At the initial page rendering, the effect with `fetchProducts()` will run. It contains dependencies, which are `search` and `page`. Therefore, whenever `search` or `page` gets updated, `products` will be fetched from the API.
            - When the effect runs for the first time, as `search` is initialized as an empty string, therefore it retrieves 10 products records based on the `limit`.
            - `skip` specifies the number of records to be skipped before retrieving the products records. As `page` is initialized as 1, therefore `0` products records will be skipped, and `10` products will be printed.
            - `totalPage` is determined by dividing `productsResponse.total` with `limit` and round up its result to the nearest whole number with `Math.ceil()`. It is important to round up the result, because page is always a whole number. For instance, 3 pages instead of 2.5 pages.
        - If user types at `search` input:
            1. `updateSearch()` will run, which updates the `search` state and `page` state. `page` is set to `1` because it allows user to view the search results from the first page. It is invalid to keep the `page` state used to displayed all products results.
            2. Due to the changes made to `search` and `page` state, the effect with `fetchProducts()` will run. 
                - Debouncing is added in this effect by setting a timer with `setTimeout()`. It is needed to increase the efficiency in API calling. 
                - The definition of debouncing is to delay an action for a certain amount of time until the user stop triggering it.
                - In this example, debouncing is used to delay the calling of API which is carried out by `fetchProducts()`. The process is delayed until the user stop changing the `search` state for `500 ms`. 
                    - As every changes made to the `search` state causes the effect to run. For example, typing a new character or removing an existing character changes the `search` state. If there are three changes made to the `search` state, the effect will run 3 times.
                    - The `500 ms` delay prevents calling the API immediately for every changes made to the search state. 
                        1. When the first changes occured at `search` state, the effect runs.
                        2. A `500 ms` timer is started.
                        3. During this `500 ms` delay, if there is new changes made to the `search` state, then the cleanup effect runs.
                        4. In the cleanup function, the timer is discarded.
                        5. Then the next effect start running. The process repeats until the user stops changing the `search` state for `500 ms`. Only then, `fetchProducts()` will run.
                    - Note that it is important to discard the timer. If the timer is not discarded, when the delay is completed, the `fetchProducts()` will still run, which means `fetchProducts()` will run for every changes made to the `search` state with a `500 ms` delay.
            3. `search.trim()` is true when there are characters even after ignoring its white spaces, then the `api` that would be run has a path of `/search`. 
                - The query parameters involved are `q`, `limit` and `skip`.
                - Note that to add query parameters to an URL, only the first query parameter starts with a question mark `?`. To add more query parameters, use ampersand `&`.
            4. Therefore, the `products` state will be updated with a new response value. Displaying the searched products result.
        - If user clicks `next` or `previous` button:
            1. The `updatePage()` will run.
            2. It evaluates the `event.target.name` 
                - If `event.target.name` is `previous`, then:
                    - It checks whether there is previous page by comparing if current page is more than 1.
                        - If `page` is more than 1, then `page` will be deducted by 1.
                        - If `page` is not more than 1, then `page` will not be changed.
                - If `event.target.name` is `next`, then:
                    - It checks whether there is next page by comparing if current page is less than totalPage
                        - If `page` is less than `totalPage`, then `page` will be increased by 1.
                        - If `page` is not less than `totalPage`, then `page` will not be changed.
            3. Due to the changes made at `page` state, the effect with `fetchProducts()` will run. The changes of `page` state impacts the value of `skip`, allowing new page of products to be displayed.
    
    ### Appending Results to Existing State
    - When implementing loading more interface, previously fetched content can be preserved while newly fetched results can be appended to the existing state.
    - For example, to load more products which only fetch 10 more products when the load more products button is clicked.
        ```
        import {useEffect, useState} from "react";

        function App() {

            // States
            const [products, setProducts] = useState([]);
            const [search, setSearch] = useState("");
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState("");
            const [hasMoreProducts, setHasMoreProducts] = useState(false);

            // Event Handlers
            const updateSearch = (event) => {
                setSearch(event.target.value);
            };

            const loadMoreProducts = () => {
                fetchMoreProducts();
            };

            // API Functions
            const fetchProducts = async () => {
                setLoading(true);
                setError("");
                try {
                    const limit = 10;
                    const skip = 0;
                    const api = `https://dummyjson.com/products` + (search.trim() 
                                    ? `/search?q=${search}&limit=${limit}&skip=${skip}`
                                    : `?limit=${limit}&skip=${skip}`
                                );
                    const response = await fetch(api);
                    if(!response.ok){
                        throw new Error(`Failed to fetch products with status code ${response.status}`);
                    }
                    const productsResponse = await response.json();
                    setProducts(productsResponse.products);
                    setHasMoreProducts(productsResponse.total > products.length + productsResponse.products.length);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            const fetchMoreProducts = async () => {
                setLoading(true);
                setError("");
                try {
                    const limit = 10;
                    const skip = products.length;
                    const api = `https://dummyjson.com/products` + (search.trim()
                        ? `/search?q=${search}&limit=${limit}&skip=${skip}`
                        : `?limit=${limit}&skip=${skip}`
                    );
                    const response = await fetch(api);
                    if(!response.ok){
                        throw new Error(`Failed to fetch products with error code ${response.status}`);
                    }
                    const productsResponse = await response.json();
                    setProducts(previousProducts => [...previousProducts, ...productsResponse.products]);
                    setHasMoreProducts(productsResponse.total > products.length + productsResponse.products.length);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            // Effects
            useEffect(() => {
                const timer = setTimeout(() => {
                    fetchProducts();
                }, 500);

                return () => {
                    clearTimeout(timer);
                };
            }, [search]);

            return(
                <>
                    <h3>Products: {search}</h3>
                    <input type="text" value={search} placeholder="Search products" onChange={updateSearch} />
                    <br />
                    {
                        loading
                        ? <p>Loading products...</p> 
                        : error.trim() 
                            ? <p>{error}</p>
                            : products.length > 0
                            ? products.map(({id, title}) => {
                                return (
                                <p key={id}>{title}</p>
                                )
                            })
                            : <p>No products found.</p>
                        
                    }
                    <br />
                    <button disabled={!hasMoreProducts} onClick={loadMoreProducts}>Load More Products</button>
                </>
            )
        }

        export default App

        ``` 
        - The states declared are `products`, `search`, `loading`, `error` and `hasMoreProducts`.
            - `hasMoreProducts` is used to determine whether the load more products button is clickable.
        - At the initial page rendering, `fetchProducts()` will be called as the effect runs.
            - Note that the value of `skip` is set to `0` because the first 10 products will always be displayed. When `search` state is updated, the `skip` is still `0` because it allows retrieval of products records without skipping any records.
        - When user clicks the load more products button, 
            -`loadMoreProducts()` is invoked. It invokes `fetchMoreProducts()`.
            - `fetchProducts()` and `fetchMoreProducts()` is different.
                - In `fetchProducts()`, it retrieves and replaces the `products` with `productsResponse.products` completely.
                - In `fetchMoreProducts()`, it keep tracks of the number of products fetched with `products.length` as its `skip` value. So, it allows the action of only retrieving the next `10` products.
                - Note the difference of `productsResponse.total`, `productsResponse.products.length` and `products.length`. 
                    - `productsResponse.total` shows total amount of products records matching the API request.
                    - `productsResponse.products.length` shows total amount of retrieved products records in current response.
                    - `products.length` shows total amount of existing products records in `product` state.
                - To determine whether there are more products, `productsResponse.total` is compared with the sum of `products.length` and `productsResponse.products.length`. 
                    - If `productsResponse.total` is greater than the sum, there is still more products to be loaded.
                    - If `productsResponse.total` is not greater than the sum, there is no more products to be loaded.
                - Note that `products.length` is not being updated immediately once the `setProducts()` is invoked. Therefore, it is necessary to add it with `productsResponse.products.length`.
                - `productsResponse.products.length` is not strictly coded as 10 because 10 is only the limit of the records fetched. The maximum number of records will not exceed 10, but it could be less than 10, when the records not loaded is less than 10.







