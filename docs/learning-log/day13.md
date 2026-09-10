# Learning Log

## Day 13 (10 Sept 2026)

### React Hook
- Hook is special JavaScript function provided by React. It allows React functional components to access the function features directly.

### Rules of React Hook
1. Always declare hook at the top level of React components
    - Never declare them within functions, conditional or loop statements
    - Example:
        ```
        import {useState} from "react"

        function App() {
            const [count, setCount] = useState(0);
            return(...)
        }
        ```
2. Always use React Hook within React functional components

### UseState
- React offers many types of Hooks, `useState` is one of the React's Hooks, as shown in the [Rules of React Hook](#rules-of-react-hook).

### The composition of React Hook
Example: `const [count, setCount] = useState(0);`
1. State: the value that changes when an event occur
    - `count` is the state that changes when user click the button.
    - Note that the state should not be mutated directly, as it does not trigger the re-rendering of user interface.
2. Setter: the function that updates the state
    - `setCount` is the setter that updates the state.
    - The setter can either receives a new value directly or an updater function.
    - When using the updater function, it receives the previous state and must return the updated state value.
    - When the state is updated, React will re-render components when appropriate to reflect the new state in the user interface.
3. React's hook
    - `useState()` is the React's hook which is a function with specific features.
    - The argument of `useState()` is the initial value of state.
    - In this example, the initial value of `count` is 0.
- Note that `useState()` returns an array, with array destructuring, we define the state and state setters as needed.

### Examples Demonstrating useState

#### Increase Count by Clicking The Button
```
import {useState} from "react"

function App() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount((previousCount) => previousCount + 1);
    };
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={updateCount}>+</button>
        </>
    )
}

export default App
```
1. The `count` state is displayed at `h1` element.
2. When user click on the `+` button, `updateCount()` is triggered.
3. In the state setter, it automatically receives the state `previousCount` as its parameter.
4. The `previousCount` is the previous state provided by React that can be used to produce the next state value.
5. The sum of `previousCount` and `1` is returned in the `setCount()` as the new state value.

#### Update Name Whenever Input Field Changes
```
import {useState} from "react"

function App() {
    const [name, setName] = useState("");

    const updateName = (event) => {
        setName(event.target.value);
    };
    return(
        <>
            <h1>Name: {name}</h1>
            <input type="text" value={name} onChange={updateName}/>
        </>
    )
}

export default App

```
1. The `name` state is displayed at `h1` element.
2. An input field is placed below the `h1` element, with its value obtained from `name` state.
3. Whenever user changes the input field, `updateName()` is triggered.
4. `updateName()` is an event handler, which is a function that is invoked when an event occurs. The event in this example, is the change in input field.
5. An event object is automatically sent to the event handler, this event object can be used optionally. Therefore, in the `updateName()`, it receives an event object as its parameter.
6. Event object has many useful properties including `event.target.value` which provides the value of the element that triggers the event.
7. In the state setter `setName()`, the `event.target.value` is passed directly to define the state's value. 


#### Adding User-Defined New Reward When Button is Clicked 
```
// App.jsx
import {useState} from "react"
import RewardList from "./RewardList"

function App() {
    const [customer, setCustomer] = useState({
        name: "Amy",
        points: 500,
        rewards: [
            {id: 1, name: "Banana Milk"},
            {id: 2, name: "Strawberry Milk"},
            {id: 3, name: "Chocolate Milk"}
        ]
    });

    const [newReward, setNewReward] = useState("");

    const updateNewReward = (event) => {
        setNewReward(event.target.value);
    };

    const addNewReward = () => {
        setCustomer((previousCustomer) => {
            if(!newReward.trim()){
                return previousCustomer;
            }
            return {
                ...previousCustomer,
                rewards: [
                    ...previousCustomer.rewards,
                    {
                        id: Date.now(),
                        name: newReward
                    }
                ]
            };
        });
    };


    return(
        <>
            <p>Customer: {customer.name}</p>
            <p>Points: {customer.points}</p>
            <RewardList
                rewards={customer.rewards}
            />
            <input type="text" value={newReward} onChange={updateNewReward} />
            <button onClick={addNewReward}>[Add New Reward]</button>
        </>
    )
}

export default App

```
```
// RewardList.jsx
function RewardList ({rewards}){
    return(
        <>
            {rewards.map(({id, name}) => {
                return(
                    <li key={id}>{name}</li>
                )
            })}
        </>
    )
}

export default RewardList

```
1. The `customer.name` and `customer.points` is displayed at `p` element.
2. The `customer.rewards` is passed as props to `RewardList` component.
3. Each `reward` in `rewards` is displayed at `li` element.
4. The text field's value is controlled by `newReward` state.
5. When the text field is changed, `updateNewReward()` is triggered.
6. The `event` object is sent to the `updateNewReward()` which is the event handler.
7. The `event.target.value` is passed as argument to `setNewReward`, which becomes the new value of `newReward` state.
8. When the add new reward button is clicked, `addNewReward` is triggered.
9. To prevent adding empty value or white spaces `trim()` is used for evaluation. If `newReward` is empty or white spaces, `previousCustomer` object is returned unchanged.
10. If `newReward` is not empty or white spaces, `previousCustomer` is spreaded in the new object.
11. The `rewards` property is overwritten with a new array, spreading `previousCustomer.rewards`, and added with the new reward object.
12. The new object is returned as the updated state from `setCustomer`, which also triggers the re-rendering of user interface by React.
- Note: Using `Date.now()` is not a reliable method to generate unique IDs