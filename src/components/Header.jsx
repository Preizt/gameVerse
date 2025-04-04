import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = ({ fromRegisterPage }) => {
  return (
    <>
      <Navbar expand="lg" className="p-2">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none", marginTop: "10px" }}>
            <Navbar.Brand
              style={{
                fontSize: "2.7rem",
                fontFamily: "Bangers",
                letterSpacing: "6px",
                color: "white",

                padding: "15px",
              }}
            >
              Game Verse
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link to={"/"} style={{textDecoration:"none",marginTop:"8px"}}>
                <p className="mx-3 text-white">Home</p>
              </Link>
              <Link to={"/about"} style={{textDecoration:"none",marginTop:"8px"}}>
                <p className="mx-3 text-white">About</p>
              </Link>
              <Link to={"/contact"} style={{textDecoration:"none",marginTop:"8px",marginRight:"20px"}}>
                <p className="mx-3 text-white">Contact</p>
              </Link>

              {fromRegisterPage ? (
                <>
                  <Link to={"/login"}>
                    <Button className="mx-2 rounded-3 neon-button">
                      Login
                    </Button>
                  </Link>
                </>
              ) : (
                <button className="neon-button mb-3">Logout</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
