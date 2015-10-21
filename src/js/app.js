import React from 'react';
import { Link } from 'react-router';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse toggleNavKey={0}>
          <LinkContainer to='/'>
            <NavBrand>Nyx</NavBrand>
          </LinkContainer>
          <Nav right eventKey={0}> {/* This is the eventKey referenced */}
            <LinkContainer to='/'>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Dropdown" id="collapsible-navbar-dropdown">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

