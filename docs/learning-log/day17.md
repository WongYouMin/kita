# Learning Log

## Day 17 (8 Oct 2026)

### Kita MVP version 1: Dashboard Building
- Learned about the importance of layout component in routing.
    - `<Layout />` is a user-defined functional component, which provides a shared layout for its nested routes.
    - The matched child route is rendered in `<Outlet />` within Layout component.
    - There are two ways to structure the hiearchy: 
        1. `<Layout />` is assigned with path `'/'` and `<Dashboard />` becomes its nested index route. 
            ```
            <Route element={<Layout />} path='/'>
                <Route index element={<Dashboard />} />
            </Route>
            ```
        2. `<Layout />` is not assigned with any path. `<Dashboard />` is assigned with path `'/'`.
            ```
            <Route element={<Layout />}>
                <Route path='/' element={<Dashboard />} />
            </Route>
            ```
- The difference of `export default` and named `export`.
    1. `export default`
    - A file can only have one default export.
    - The default export can be any data type.
    - When importing a default export, any local name can be given to access the default export.
    - Example:
        ```
        // Rewards.jsx
        function Rewards() {
            ...
        }

        export default Rewards;
        
        // App.jsx
        import Reward from './pages/Rewards.jsx'
        function App() {
            return (
                <>
                    <Reward />
                </>
            )
        }
        ```
        - `Rewards` functional component is exported as the default item of `Rewards.jsx`
        - `Reward` is the local name given to the default item exported from `Rewards.jsx`
    2. Named Export
    - A file can have one or more named export.
    - The named export can be any data type.
    - When importing named export, the name should matched the exported name.
    - To rename the named export locally, use `as`
        ```
        // Rewards.jsx
        const redeemReward = () => {};

        function Rewards() {
            ...
        }

        export {
            Rewards,
            redeemReward
        };
        
        // App.jsx
        import {Rewards, redeemReward as redeem} from './pages/Rewards.jsx'
        function App() {
            return (
                <>
                    <Rewards />
                    <button onClick={redeem}>Redeem</button>
                </>
            )
        }
        ```
- Learned the importance of separating the data loader with the API functions.
    - Data loader is responsible for managing the UI state and calling API functions to load data into the user interface.
        - Examples of UI state is `loading`, `editing`, `showRewardForm`.
        - The `try...catch` block can be placed within the data loader. The API functions can throw errors, while the data loader will handle it. 
    - API function is responsible for communicating with API such as sending request or receiving responses.

- Revisited the importance of `await` in `try...catch` block to catch errors.
    ```
     const handleAddReward = async(event) => {
        event.preventDefault();
       
        setRewardFormError("");
        const validationError = validateReward();

        if(validationError.trim()){
            setRewardFormError(validationError);
        } else {
             setLoading(true);
            try {
                await addReward();
                clearReward();
                setShowRewardForm(false);
            } catch (error) {
                setRewardFormError(error.message);
            } finally {
                setLoading(false);
            }
        }
        
    };
    ```
    - `addReward()` is an asynchronous function which runs asynchronous operation including `fetch()` and `response.json()`. 
    - Asynchronous function returns a promise by default.
    - `await` pauses the asynchronous function, until the promise returned from `addReward` is settled.
    - When error is thrown, the returned promise state becomes rejected. The error is caught in the catch block because `addReward()` is placed in the `try...catch` block.

- Revisited the importance of `event.preventDefault()` in form submissions.
    - `event.preventDefault()` is needed for **form submission** to prevent default browser behaviour from reloading the page, which resets the React's state to initial value.

- Learned that the HTML `<input />` values are strings although the input type is number
    - Checkbox input value are boolean. To obtain its value, use `event.target.checked`.
    - Therefore, conversion to appropriate data type is needed when obtaining the user input.

- Learned the difference of `event.target.value` vs `event.currentTarget.value`.
    ```
     <button className='delete-button' value={id} onClick={handleDeleteReward}>
        <FontAwesomeIcon icon={faTrash} />
    </button>
    ```
    - The button element contains a FontAwesomeIcon component.
    - `event.target` refers to the DOM element rendered by the FontAwesomeIcon component.
    - When clicking the trash icon, the DOM element rendered by FontAwesomeIcon is clicked.
    - `event.currentTarget` refers to the button element, which attaches the event handler `handleDeleteReward`.
    - Therefore, to obtain the button's value, `event.currentTarget.value` is needed.

- Revisited the importance of loading state.
    - The loading state is needed when performing an asynchronous operation which takes time.
    - Normally, synchronous operation can omit the loading state, as the user does not need to wait for a long time for the synchronous operation to finish.