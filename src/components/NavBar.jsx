import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("Just started to render");
  }
  render() {
    console.log("I am Navbar props path", this.props.location.pathname);
    if (this.props.location.pathname === "/details/2") {
      return (
        <div>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Link to="/">
              <Navbar.Brand>{this.props.title} - Strive For Food</Navbar.Brand>
              <Badge variant="info">My favorite!</Badge>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/menu">
                  <div
                    className={
                      this.props.location.pathname === "/menu"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Menu
                  </div>
                </Link>

                <Link to="/reservation">
                  <div
                    className={
                      this.props.location.pathname === "/reservation"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Reservation
                  </div>
                </Link>
                <Nav.Link>Our Location</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Link to="/">
              <Navbar.Brand>{this.props.title} - Strive For Food</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/menu">
                  <div
                    className={
                      this.props.location.pathname === "/menu"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Menu
                  </div>
                </Link>

                <Link to="/reservation">
                  <div
                    className={
                      this.props.location.pathname === "/reservation"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Reservation
                  </div>
                </Link>
                <Nav.Link>Our Location</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

export default withRouter(NavBar); // will give the component exported EXTRA PROPS: history, location, match
