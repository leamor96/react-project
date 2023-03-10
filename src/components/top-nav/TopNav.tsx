import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RxHome } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";

import "./TopNav.css"

const TopNav = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="brand" href="/">
          HOUSE<span className="brand-highlight">keep</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="spacer"></div>
          <Nav className="me-auto ms-5">
            <NavLink className="nav-link" to="/">
              <RxHome />
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              <AiOutlineInfoCircle />
              About
            </NavLink>
            <NavLink className="nav-link" to="/chores">
              <HiOutlineClipboardList />
              Chores
            </NavLink>
            <NavLink className="nav-link" to="/customlist">
              <CgUserList />
              My Custom-List
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
