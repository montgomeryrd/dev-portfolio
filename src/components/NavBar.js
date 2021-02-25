import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        r.monty
                    </NavLink>
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                    <NavLink to="/projects">
                        Featured Projects
                    </NavLink>
                    <NavLink to="/posts">
                        Current Status
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;