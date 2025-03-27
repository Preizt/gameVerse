import React from "react";
import { Link } from "react-router-dom";
import { Form, FloatingLabel, Button, Container, Card } from "react-bootstrap";

const Auth = ({ fromRegisterPage }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "url('https://www.pixel4k.com/wp-content/uploads/2023/11/aloy-horizon-forbidden-west-ps5-game-4k_1699112853.jpg') no-repeat center/cover",
      }}
      id="authpage"
    >
      <Container>
        <Card
          className="p-5 shadow-lg rounded-4"
          style={{
            maxWidth: "28rem",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Card.Body>
            <Link to={"/"} style={{textDecoration:"none"}} >
            <h1
              className="text-center mb-4"
              style={{
                fontSize: "3rem",
                fontFamily: "Bangers",
                letterSpacing: "6px",
                color:"black"

              }}
            >
              Game Verse
            </h1>
            </Link>

            <h4 className="text-center mb-4" >
              Sign{" "}
              <span className="text-danger">
                {fromRegisterPage ? "Up" : "In"}
              </span>{" "}
              to your Account
            </h4>

            <Form>
              {fromRegisterPage && (
                <FloatingLabel
                  controlId="floatingUsername"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      color: "#fff",
                    }}
                  />
                </FloatingLabel>
              )}

              <FloatingLabel
                controlId="floatingEmail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    color: "#fff",
                  }}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-4"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    color: "#fff",
                  }}
                />
              </FloatingLabel>

              <div className="d-grid">
                <Button
                 className="neon-button"
                 
                >
                  {fromRegisterPage ? "Register" : "Login"}
                </Button>
              </div>

              <p className="text-center mt-4" style={{ color: "#fff" }}>
                {fromRegisterPage
                  ? "Already have an account? "
                  : "New User? "}{" "}
                <Link
                  to={fromRegisterPage ? "/login" : "/register"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "black",
                    
                  }}
                >
                  {fromRegisterPage ? "Login" : "Register"}
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Auth;
