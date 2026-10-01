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