# Learning Log

## Day 12 (7 Sept 2026)

### React Fundamentals
- React is a JavaScript library to build user interfaces.
- Vite is a build tool that makes creating and developing frontend projects faster and easier.
- To create a React project with Vite:
    1. Ensure Node.js is installed
        - `node -v`.
        - Node.js is a runtime environment, enabling JavaScript to run outside web browser.
    2. Ensure Node Package Manager is installed
        - `npm -v`
        - Node Package Manager is a package manager used to install, manage and run JavaScript packages including React.
    3. Install Vite
        - `npm create vite@latest`
        - Vite is a development tool that creates React project easier and faster.
    4. Install dependencies
        - `npm install`
    5. Navigate to directory of React project
        - `cd yourDirectoryHere`
    6. Starting the development server
        - `npm run dev`

### JavaScript XML (JSX)
- JSX is a syntax extension of JavaScript, with HTML-like syntax.
- It makes the user interfaces code more readable and easier to write.
- `Main.jsx` is commonly the entry point that creates and render the root of the React component into the DOM element with the `Id` root.
    ```
    createRoot(document.getElementById('root')).render(
        <App/>
    )
    ```

### React Components
- React library create user interfaces with components.
- Each component is a JavaScript function which returns JSX to describe the user interface to be rendered.
    ```
    function App() {
        const name = "Amy";
        return(
            <h1>Hello {name}</h1>
        )
    }

    export default App
    ```
    - `App.jsx` is often used as the root component. Normally it is used as the parent of the other components.
    - **Declaring local variables**: Outside the return statement, is where local variables within a component can be declared using normal JavaScript
    - **Display value of variables**: Braces `{}` is used, with the variable placed within the braces.
    - The braces `{}` allows the embedding of any JavaScript **expressions** in JSX. Examples are shown below.
        - `{10 + 20}`, Expected Output: `30`
        ```
        {
            isMember ? (
                <h1>You're a member!</h1>
            ) : (
                <h1>Join us to become a member</h1>
            )
        }
        ```
        - Expected Output: Shows `You're a member!` when `isMember` is `true`, while showing `Join us to become a member` when `isMember` is `false`
    - **Returning element**: The component must return one JSX root element.
        - For instance, a `h1` element.
        - To return multiple elements, a parent element or fragment `<></>` can be used to group the elements together. For example:
            ```
            return(
                <>
                    <p>Banana Milk</p>
                    <p>700 points</p>
                </>
            )
            ```
    - **Exporting a component**: The `export default` is used to export a component, making the component available to other files which imported the component.
        - In this example, `export default App` is used to export `App` component, in which `App` is the component name
    - **Importing a component**: The `import` is used to import exported component from a file. 
        - For instance, `import App from './App'` is used to import the `App` component. `App` is the local alias name that will be used to represent the imported component.
    - **Using imported component**: To use an imported component, put its local name within angle bracket `<>`
        - For instance, `<App/>` is used to apply the `App` component, where `App` is the local name defined when importing the component
    
### React Props (properties)
- Props are values passed from the parent component to child component. React provides props to child components as an object.
    ```
    // App.jsx
    import CustomerCard from './CustomerCard.jsx'

    function App(){
        const name = "Amy";
        const points = 1000;
        return(
            <CustomerCard
                customerName={name}
                customerPoints={points}
            />
        )
    }

    export default App
    ```
    ```
    // CustomerCard.jsx
    function CustomerCard({customerName, customerPoints}){
        return(
            <>
                <p>{customerName}</p>
                <p>{customerPoints}</p>
            </>
        )
    }
    ```
    - In this example, `App` is the parent component, while `CustomerCard` is the child component. 
    - **Passing props**: To pass props, place the props in the opening tag `<>` of the component.
        - Note that for a self-closing tag `</>`, put the props before the `/`.
        - In this example, `<CustomerCard customerName={name}/>`, where `customerName` is the props identifier, which is assigned with the value of `name` variable , and the props is placed within the opening tag of the component (before the `/`)
        - The created props will be stored as properties in props object. In this example, `{customerName: "Amy", customerPoints: 1000}`
    - **Receiving props**: When props is passed to a component (which is a function), the props can be object destructured at the function parameter for convenience usage.
        - In this example, `function CustomerCard({customerName, customerPoints}){}`, at the function parameter of CustomerCard, props object is destructured to `customerName` and `customerPoints`. Props can be accessed using `customerName` instead of `props.customerName`

### Conditional Rendering
- Render different user interface based on the conditions.
    ```
    function RewardCard({isMember, reward}){
        const handleRedeem = () => {
            console.log(`${reward.name} is redeemed with ${reward.points} points.`);
        };
        return (
            {
                isMember ? (
                    <>
                        <p>{reward.name}</p>
                        <button onClick={handleRedeem}>[Redeem]</button>
                    </>
                ) : (
                    <>
                        <p>{reward.name}</p>
                        <button>[Cannot Redeem]</button>
                    </>
                )
            }
        )
    }
    ```
    - In this `RewardCard` component, if the user is a member, he can redeem the reward. If the user is not a member, he cannot redeem the reward. Ternary operator is used within the `{}` braces to evaluate the conditions.

### Invoking Function With Parameter on Element Interaction
- As shown in the example in [Conditional Rendering](#conditional-rendering), function can be passed to `onclick` attribute within the  braces `{}`, as function is stored in variable.
- Note the difference of `{handleRedeem}` with `{handleRedeem()}`, the former passes a function to the attribute, letting it to decide when to invoke the function, while the later invoke the function immediately when passed.
- To pass a function with parameter without immediate execution, an anonymous function can be added to the wrapper of the function with arguments. So that, the function is only called when the event occurs. Assuming `rewardName` is needed as the function parameter, for instance:
    ```
     <button 
        onclick={() => {
            handleRedeem(rewardName);
        }}
    >
        [Redeem]
    </button>
    ```

### Mapping A List of Data to a Component
- It is very common to display a list of data using certain component. The `map()` function allows iteration of every item in the list to use a component.
    ```
    // CustomerList.jsx
    import CustomerCard from './customerCard'

    function CustomerList ({customers}){
        return (
            <>
                {customers.map(({id, name, points}) => {
                    return (
                        <CustomerCard
                            key={id}
                            customerName={name}
                            customerPoints={points}
                        />
                    )
                })}
            </>
        )
    }

    export default CustomerList
    ```
    - `key` is needed when mapping a list of data, to allow React identify the items rendered.
        - Note that `key` should be placed within the opening tag of outermost element or component returned for each item in the mapped list
        - For instance, if the `map` function returns the a block of elements:
        ```
        import React from "react"
        ...
        customers.map(({id, name, points}) => {
            return (
                <React.Fragment key={id}>
                    <CustomerCard
                        customerName={name}
                        customerPoints={points}
                    />
                </React.Fragment>
            )
        })
        ```
        - The fragment `<></>` is a shorthand for `<React.Fragment></React.Fragment>`. However, the shorthand fragment tag cannot receive props. The `React` default export object needs to be imported to use the `<React.Fragment>`. 
        - Named import which specifies the properties of imported object can also be used. 
            ```
            import {Fragment} from "react"
            ...
                    <Fragment key={id}>
                        <CustomerCard
                            customerName={name}
                            customerPoints={points}
                        />
                    </Fragment>
            ```

    
