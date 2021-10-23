import React from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import { Card, Col, Form } from "react-bootstrap";
const UpdateProduct = () => {
    const { id } = useParams();
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
         axios
           .get(`http://localhost:5000/products/${id}`)
             .then((response) => {
               console.log(response.data);
             setUser(response.data);
           });
    }, [])
    const hanldeUpdateName = (e) => {
        const updateName = e.target.value;
        const newName = { ...user }
        newName.ProductName = updateName;
        setUser(newName);
    }
    const hanldeUpdatePrice = (e) => {
        const updatePrice = e.target.value;
        const newPrice = { ProductPrice: updatePrice, ProductName: user.ProductName, ProductQuantity: user.ProductQuantity }
        setUser(newPrice);
    };
    const hanldeUpdateQuantity = (e) => {
      const updateQuantity = e.target.value;
      const newQuantity = { ...user };
      newQuantity.ProductQuantity = updateQuantity;
      setUser(newQuantity);
    };
    const handleProductDetails = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:5000/products/${id}`, user)
            .then((response) => {
                if (response.data.matchedCount === 1) {
                    alert("Product Update successfully!")
                    setUser({})
                }
            });
    }
    return (
      <div>
        <div>
          <Col className="w-50 mx-auto">
            <div className="border py-4">
              <Card.Body>
                <Card.Title>{user.ProductName}</Card.Title>
                <h3>Price: ${user.ProductPrice}</h3>
                <h4>Quantity: {user.ProductQuantity}</h4>
              </Card.Body>
            </div>
          </Col>
        </div>
        <Form
          onSubmit={handleProductDetails}
          className="container w-50 text-start"
        >
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              onChange={hanldeUpdateName}
              value={user.ProductName || " "}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              onChange={hanldeUpdatePrice}
              value={user.ProductPrice || " "}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Quantity"
              onChange={hanldeUpdateQuantity}
              value={user.ProductQuantity || " "}
            />
          </Form.Group>
          <button className="btn btn-outline-success fw-bold">
            Update Product
          </button>
        </Form>
      </div>
    );
};

export default UpdateProduct;