import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProjectPage from "../pages/ProjectPage";
import ResumePage from "../pages/ResumePage";
import SignupPage from "../pages/SignupPage";
import ThoughtPage from "../pages/ThoughtPage";
import SingleProject from "../components/SingleProject";
import SingleThought from "../components/SingleThought";
import SingleResume from "../components/SingleResume";
function NavLinks() {
  return (
    <nav
      className="navbar navbar-light blue lighten-4"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Home
          </NavLink>
        </li>
        <li className="nav-item nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item nav-link">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="nav-item nav-link">
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li className="nav-item nav-link">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="nav-item nav-link">
          <NavLink to="/thought">Thought</NavLink>
        </li>
        <li className="nav-item nav-link">
          <NavLink to="/project">Project</NavLink>
        </li>
      </ul>
    </nav>
  );
}
function Navbar() {
  return (
    <BrowserRouter>
      <NavLinks />
      <Switch>
        <Route component={AboutPage} path="/about" />
        <Route component={ContactPage} path="/contact" />
        <Route component={LoginPage} path="/login" />
        <Route
          component={SingleResume}
          path="/resume/:slug"
        />
        <Route component={ResumePage} path="/resume" />
        <Route component={SignupPage} path="/signup" />
        <Route
          component={SingleThought}
          path="/thought/:slug"
        />
        <Route component={ThoughtPage} path="/thought" />
        {/* project should be below /project/:slug */}
        <Route
          component={SingleProject}
          path="/project/:slug"
        />
        <Route component={ProjectPage} path="/project" />
        <Route component={HomePage} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}
export default Navbar;
