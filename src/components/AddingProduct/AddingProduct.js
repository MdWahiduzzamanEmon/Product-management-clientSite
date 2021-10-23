import axios from 'axios';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

const AddingProduct = () => {
    const pdNameRef = useRef();
    const pdPriceRef = useRef();
    const pdQuantityRef = useRef();

    const handleToAddProduct = e => {
        e.preventDefault();
        const ProductName = pdNameRef.current.value;
        const ProductPrice = pdPriceRef.current.value;
        const ProductQuantity = pdQuantityRef.current.value;
        const Products = {
          ProductName: ProductName,
          ProductPrice: ProductPrice,
          ProductQuantity: ProductQuantity,
        };
        axios
          .post("http://localhost:5000/products", Products)
          .then((response) => {
            //   console.log(response.data);
              if (response.data.insertedId) {
                  alert("Product added successfully!");
                  e.target.reset();
              }
          });
    }
    return (
      <div className="container w-50 text-start">
        <Form onSubmit={handleToAddProduct}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              ref={pdNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" placeholder="Price" ref={pdPriceRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control type="text" placeholder="Product Quantity" ref={pdQuantityRef} />
          </Form.Group>
          <button className="btn btn-outline-success fw-bold">
            Add Product
          </button>
        </Form>
      </div>
    );
};

export default AddingProduct;