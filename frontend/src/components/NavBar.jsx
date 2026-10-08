import { NavLink } from "react-router-dom"
function NavBar() {
    const paths = ['dashboard', 'customers', 'rewards', 'transactions'];
    const checkIsActive = ({isActive}) => isActive ? 'active' : '';
    return(
        <>
            {
                paths.map((path) => {
                    return(
                        <NavLink key={path} to={path === 'dashboard' ? '/' : `/${path}`} className={checkIsActive}>
                            {path.charAt(0).toUpperCase() + path.slice(1)}
                        </NavLink>
                    )
                })
            }
        </>
    )
}

export default NavBar;