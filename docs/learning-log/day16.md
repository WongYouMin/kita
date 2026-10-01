# Learning Log

## Day 16 (1 Oct 2026)

### React Routing
- Routing is the process of rendering user interface based on the matching URL without reloading the entire page. 
- In React routing, components are rendered based on the matching URL.
- To implement React Routing, `react-router-dom` needs to be installed.
    1. At your terminal, change the file directory to where your React project is located.
    2. Use command `npm install react-router-dom`

### How to Implement React Routing
The coding below shows an example of React Routing implementation.
```
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import Customers from './Customers'
import CustomerDetails from './CustomerDetails'
import CustomerOverview from './CustomerOverview'
import CustomerRewards from './CustomerRewards'
import Rewards from './Rewards'
import NavBar from './NavBar'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/customers' element={<Customers/>} />
                <Route path='/customers/:customerId' element={<CustomerDetails/>}>
                    <Route index element={<CustomerOverview/>} />
                    <Route path='rewards' element={<CustomerRewards/>} />
                </Route>
                <Route path='/rewards' element={<Rewards/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

```
1. The `BrowserRouter`, `Routes` and `Route` are imported from `react-router-dom.`
    - `BrowserRouter` connects browser history and URL with React router. It allows functional components within it to access `Route`, `Routes`, `useParams`, `useNavigate`, `Link` and `NavLink`.
2. The `Routes` is placed within the `BrowserRouter`.
    - `Routes` is the semantic container of `Route` which defines the path-element relationship.
3. The `Route` is placed within the `Routes`.
    - `Route` defines the path and the components to be rendered when the path matched with the URL.
    - In this example, four **top-level sibling routes** are defined. 
        - The routes are route to home, customers, customer details and rewards.
        - The sibling routes renders their components independently, separating from other route.
    - There are two **nested route** defined within the customers with customer Id as route parameters. 
        - Note that the route parameter name is defined with the syntax `/:parameterName`. Route parameter name is only defined in route. However, in navigation links such as `Link`, `NavLink` and `useNavigate`, only the actual value of parameter needs to be provided.
        - Nested route is also known as child route, which renders component as part of the parent route through the `Outlet` component.
        - Note that when defining nested route, the path is relative, therefore instead of writing `customers/:customerId/rewards`, `rewards` is defined as its path
        - Note that one of the nested route does not have a path because it is the index route which is the default child route that will show by default when user navigate to the parent route.
    

### How to Navigate across Different Routes
There are three ways to navigate across different routes:
1. Link
    - stateless and navigate to the specified path without reloading the page
    - allowing navigation due to user clicking on the `Link`
    - Example: `<Link to='/rewards'>Rewards</Link>`
        - The destination of `Link` above is navigate to `/rewards` route.
        - `Rewards` is specified as the children that wil appear as the clickable hyperlink.

2. NavLink
    - `NavLink` receives a function for its `className` attribute or its children. The function receives a routing state object as parameter.
    - The routing state object contains properties of `isActive`, `isPending` and `isTransitioning`
    - allowing navigation due to user clicking on the `NavLink`
    - Example: 
        ```
        <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>
            Home
        </NavLink>
        ```
        - The destination of `NavLink` above is navigate to `/` route.
        - `Home` is specified as the children that will appear as the clickable hyperlink.
        - The routing state object is used to determine styling of the `NavLink`.
        - When the user's current location matches the `NavLink`'s destination, then `isActive` is true.

3. useNavigate
    - a React Hook that returns a navigate function, which can be called with a destination path or browsing history delta, allowing navigation due to programming logic.
    - Example:
        ```
        import { useNavigate } from "react-router-dom"

        function CustomerRewards() {
            const navigate = useNavigate();
            const redeemReward = () => {
                console.log('Reward is redeemed successfully.');
                navigate('/');
            };
            return(
                <>
                    <button onClick={redeemReward}>[Redeem Reward]</button>
                    <button onClick={() => {navigate(-1);}}>Close Customer Rewards</button>
                </>
            )
        }
        ```
        - `navigate` stores the function returned from `useNavigate()` which allows navigation to path specified as its function argument.
        - When user click on `[Redeem Reward]` button, `redeemReward()` runs.
            - Console printed 'Reward is redeemed successfully'.
            - User navigates to route with '/' path using `navigate('/')`.
        - When user click on `Close Customer Rewards` button, 
            - User is navigated back one browsing history entry. Therefore, the destination depends on which route the user visit at the previous browsing history.

### NavLink used in Navigation Bar
The coding below shows an example of how `NavLink` is useful in navigation bar.
 ```
import { NavLink } from "react-router-dom"
import { Fragment } from "react"

 function NavBar(){
   const paths = ['home', 'customers', 'rewards'];
   const checkIsActive = ({isActive}) => isActive ? 'active' : '';
   return(
        <nav>
            {
                paths.map((path) => {
                    return(
                        <Fragment key={path}>
                            <NavLink to={path === `home` ? `/` : `/${path}`} className={checkIsActive}>
                                {path.charAt(0).toUpperCase() + path.slice(1)}
                            </NavLink>
                            <br />
                        </Fragment>
                    )
                })
            }
        </nav>
   )
 }

 export default NavBar;
 ```
 - Navigation bar is always rendered on almost every user interface, allowing user navigate to different components whenever needed.
 - `NavLink` is used because it provides the routing state object. It provides a convenient way to style the `NavLink` so the user knows which route they are currently in from the user interface due to the visual difference.
 - A `paths` array is created, containing strings of path.
 - `checkIsActive()` is a function that utilize the routing state object received to determine if a `NavLink` is currently active. 
    - It returns `"active"` as the `className` if the user currently navigates to the specified path.
    - It returns empty string if the `NavLink` is not active.
    - In this example, when the `NavLink` is active, it will appear as bold and underlined.
    - If the `NavLink` is inactive, it will only appears as underlined.
 - Note that `<nav>` is a semantic HTML element that tells the browser it contains the navigation links.
- `paths` is mapped to produce a list of `NavLink`. 
    - As more than one element is returned, a `<Fragment>` element can be used to group the block of elements as its child. 
    - `<Fragment>` is imported because the shorthand `<>` could not receive the props value such as `key`.
- In the `NavLink`'s `to` attribute, 
    - If `path` is `home`, then `/` is the route. 
    - If `path` is not `home`, then `path` is attached with `/` as the route. 
    - For example, if the `path` is `customer`, then the path is `/customer`.
- In the `NavLink`'s `className` attribute, the value is determined by `checkIsActive`
- In the `NavLink`'s children, the route name is added by converting its first letter to upper case.
- Note that the coding in [How to Implement React Routing](#how-to-implement-react-routing) places this `NavBar` component above the `Routes` component in `BrowserRouter`. 
    - Technically, the placement order does not matter.
    - However, it is more logical to place the `NavBar` above, because `NavBar` always stays on the user interface, but the changes of URL's routes, causes different components get rendered.

### How To Implement Nested Route
The coding below shows an example of how children components of a nested route are rendered in the parent component. Based on the routes defined in [How to Implement React Routing](#how-to-implement-react-routing), `customers/:customerId` contains two nested route, one of it is the index child route that shows by default and `customers/:customerId/rewards` which only shows if navigate to the route.
```
// CustomerDetails.jsx
import { useParams, Outlet, Link } from "react-router-dom"
function CustomerDetails() {
    const customers = [
        {id: 101, name: "Amy", points: 100},
        {id: 102, name: "Bob", points: 200},
        {id: 103, name: "Cath", points: 300}
    ];
    const {customerId} = useParams();
    const data = customers.find(({id}) => id === Number(customerId));
    return(
        <>
            <h3>Customer Details</h3>
            {
                data !== undefined
                    ? (
                        <>
                            <p>Name: {data.name} Points: {data.points}</p>
                            <Link to={`/customers/${customerId}/rewards`}>View Rewards</Link>
                            <Outlet/>
                        </>
                    )
                    : <p>No customers found</p>
            }
        </>
    )
}

export default CustomerDetails;
```
- To access the route parameter, `useParams()` is used. It returns an object, containing each route parameter as a property. 
    - In this example, only one parameter, `customerId` is defined at the route.
    - The parameter object is destructured to `customerId`, to use it more conveniently.
- Customer's data is searched from the loaded customer details. `customerId` is converted to number because all route parameter's value is returned as string.
- The index nested route with `CustomerOverview` component by default will display in the `Outlet` component if there is no matching child route.
- If user clicks on the `View Rewards` link and if the `customerId` is `101`, React router navigates to `/customers/101/rewards`, then the `CustomerRewards`component will be rendered in `Outlet` component replacing the index nested route.
- Note that in nested route, relative navigation with `..` allows user move one level up in route hierarchy. 
    - For example, if the current route is `/customers/101/rewards` then user clicks:
        - `<Link to='..'>Back to Customer Details</Link>`
    - Then, user will move one level up in hierarchy, which navigates to `/customers/101`


