import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary border-bottom border-body rounded-3" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }` }  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }` }
                            to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }` }
                            to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
