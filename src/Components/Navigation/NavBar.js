import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../Styles/Navbar.scss";

export default function Homepage() {
  const regions = {
    Africa: "africa",
    Americas: "americas",
    Asia: "asia",
    Europe: "europe",
    Oceania: "oceania",
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to={`/`}>
          <Navbar.Brand>Countries</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/seachcountryname">Name</Nav.Link>
            <Nav.Link href="/seachcapital">Capital</Nav.Link>
            <Nav.Link href="/callingcode"> Code</Nav.Link>
            <Nav.Link href="/seachcurrency">Currency</Nav.Link>

            <NavDropdown title="Region" id="collasible-nav-dropdown">
              <NavDropdown.Item href={`/region/${regions.Africa}`}>
                Africa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`/region/${regions.Asia}`}>
                Asia
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href={`/region/${regions.Americas}`}>
                Americas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`/region/${regions.Europe}`}>
                Europe
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href={`/region/${regions.Oceania}`}>
                Oceania
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
