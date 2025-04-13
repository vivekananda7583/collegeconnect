import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid  nav">
            
            <a className="navbar-brand" href="#">
              <h1>College Connect</h1>
            </a>
  
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Features">Features</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/SignUp">SignUp</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/LogIn">LogIn</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  };
  
  export default NavBar;
  