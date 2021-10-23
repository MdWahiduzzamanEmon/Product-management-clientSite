import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5000/products").then((response) => {
        setProducts(response.data);
      });
    }, []);


    const handleDeleteProduct = (id) => {
        const confirmations =window.confirm("Are you sure you want to delete?")
        if (confirmations) {
            axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
                // console.log(res);
              if (res.data.deletedCount > 0) {
                alert(`Successfully deleted one product`);
                const afterDeletedItem = products.filter(
                  (product) => product._id !== id
                );
                setProducts(afterDeletedItem);
              }
            });
        }
    }
    return (
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {products.map((product) => (
            <Col key={product._id}>
              <div className="border py-4">
                <Card.Body>
                  <Card.Title>{product.ProductName}</Card.Title>

                  <h3>Price: ${product.ProductPrice}</h3>
                  <h4>Quantity: {product.ProductQuantity}</h4>
                </Card.Body>
                <Link to={`/updateProducts/${product._id}`}>
                  <button className="btn btn-success">Update Product</button>
                </Link>

                <button
                  className="btn btn-danger ms-3"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Delete Product
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default Products;

