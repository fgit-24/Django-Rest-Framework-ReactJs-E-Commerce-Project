import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('/api/products/');
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);





  return (
    <Container>
      <br />
      <h1>Products</h1>
      
      <Row>
        {products.map((product) => (
          <Col key={product._id} xs={12} md={6} lg={4} xl={3}>

          <Card classname="my-3 p-3 rounded">
            <img src="{product.image}" alt="" />
          </ Card>
            <h3>{product.productname}</h3>
            <h6>{product.category}</h6>
            <p>{product.price}</p>
            <p>{product.productinfo}</p>
          </Col>
        ))}
      </Row>




    </Container>
  );
}

export default HomeScreen;
