import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import { assets } from "../assets/contants";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      {/* Home page */}

      <div className="home ">
        <div className=" row" style={{ marginTop: "100px" }}>
          
         
         
        </div>
      </div>

      {/* featured cards */}

      <div className="category">
  <div style={{ height: "110vh" }}>
    <div className="container">
      <h1
        className="text-white text-center py-5"
        style={{ fontFamily: "Bangers" }}
      >
        Featured{" "}
        <span style={{ fontFamily: "Bangers", color: "white" }}>Games</span>{" "}
      </h1>
      <div>
        <div className="container mt-5 text-center d-flex gap-5">
          {/* Card design starts */}
          <Card
            style={{
              width: "18rem",
              border: "2px solid #ff0000", // Red border
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(255, 0, 0, 0.8)", // Red glow effect
              transition: "transform 0.3s",
            }}
            id="cards"
          >
            <Card.Img
              variant="top"
              src="https://image.api.playstation.com/vulcan/img/cfn/11307_5hpWaHKJtp9AXjlv7IxLsx1epxAQKWoYaJG1J-QtMkOovpU7HWyd8AYxyykG6DfhKXHdii3BM4dIj7hppT4k4YHVEW.jpg"
              style={{
                height: "20rem",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Card.Body
              style={{
                backgroundColor: "#000", // Black background
                color: "#ff0000", // Red text
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <Card.Title
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
              >
                COD Black Ops
              </Card.Title>
              <Button className="neon-button">View Game</Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "2px solid #ff0000",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(255, 0, 0, 0.8)",
              transition: "transform 0.3s",
            }}
            id="cards"
          >
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/736x/30/ac/48/30ac487bc98bb07fbb4abb4feca4a8d4.jpg"
              style={{
                height: "20rem",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Card.Body
              style={{
                backgroundColor: "#000",
                color: "#ff0000",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <Card.Title
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
              >
                Ghost of Tsushima
              </Card.Title>
              <Button className="neon-button">View Game</Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "2px solid #ff0000",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(255, 0, 0, 0.8)",
              transition: "transform 0.3s",
            }}
            id="cards"
          >
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/736x/ad/ba/a4/adbaa41b81502bad7de3c24727d19560.jpg"
              style={{
                height: "20rem",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Card.Body
              style={{
                backgroundColor: "#000",
                color: "#ff0000",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <Card.Title
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
              >
                Horizon Zero Dawn
              </Card.Title>
              <Button className="neon-button">View Game</Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "2px solid #ff0000",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(255, 0, 0, 0.8)",
              transition: "transform 0.3s",
            }}
            id="cards"
          >
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/736x/b0/2e/c3/b02ec3a7bfc4421d602eab2a0c37e71b.jpg"
              style={{
                height: "20rem",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Card.Body
              style={{
                backgroundColor: "#000",
                color: "#ff0000",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <Card.Title
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
              >
                FC 2025
              </Card.Title>
              <Button className="neon-button">View Game</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Category */}

      <div style={{ backgroundColor: "#EDE8DC",height:"145vh"}} >
        <div className="container">
          <h1
            className="text-black text-center py-5"
            style={{ fontFamily: "Bangers" }}
          >
            Game{" "}
            <span style={{ fontFamily: "Bangers", }}>
              Category
            </span>{" "}
          </h1>
          <div className="d-flex flex-wrap justify-content-evenly gap-5 mb-5">
            {assets.map((obj) => (
              <div className="catcard my-4">
                <img src={obj.img} alt="" />
                <div id="gradient"></div>

                <div className="h1back">
                  <div className="h1">
                <h1>{obj.text}</h1>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
