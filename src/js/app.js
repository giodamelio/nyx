import React, { PropTypes } from 'react';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <Navbar inverse toggleNavKey={0}>
          <LinkContainer to="/">
            <NavBrand>Nyx</NavBrand>
          </LinkContainer>
          <Nav eventKey={0}>
            <IndexLinkContainer to="/">
              <NavItem>Posts</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/edit">
              <NavItem>Edit</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

