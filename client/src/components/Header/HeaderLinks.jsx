import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">1</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            {/* <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p> */}
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>New project created.</MenuItem>
            {/* <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem> */}
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Demo
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
