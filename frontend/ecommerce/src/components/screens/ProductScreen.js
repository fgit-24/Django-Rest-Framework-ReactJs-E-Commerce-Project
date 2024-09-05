import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Rating from "../Rating";
import axios from "axios";

function ProductScreen(params) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const {id} = useParams()
      const { data } = await axios.get(`/api/product/${id}`);
      setProduct(data);
    }
    fetchProducts();
  }, []);
  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          Go back
        </Link>


      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
      </Row>

      </div>
    </Container>
  );
}

export default ProductScreen;
