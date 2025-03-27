import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const ProductAdd = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
            Add New Product Details
          </h2>
          <Button
            onClick={handleShow}
            variant="dark"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: "0",
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter product description"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product size (e.g., XS, S)"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter product price" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Enter image URL" />
              </Form.Group>
              <p className="text-danger">Please fill in all fields.</p>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Add Product</Button>
          </Modal.Footer>
        </Modal>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div style={{width:"20rem"}}>
            <Card>
              <Card.Img
                variant="top"
                src="https://wallpapercat.com/w/full/7/e/6/1501835-3840x2160-desktop-4k-action-adventure-game-wallpaper-image.jpg"
                style={{ height: "350px", objectFit: "cover" ,}}
              />
              <Card.Body>
                <Card.Title>Game</Card.Title>
                <Card.Text>Game Title</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="light">
                    <i className="fa-solid fa-eye"></i> View
                  </Button>
                  <Button variant="light">
                    <i className="fa-solid fa-trash text-danger"></i>
                  </Button>
                </div>
              </Card.Body> 
            </Card>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
