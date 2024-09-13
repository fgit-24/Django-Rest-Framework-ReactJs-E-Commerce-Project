import React, { userState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import InputGroup from "react-bootstrap/InputGroup";

function SignupScreen() {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h3" classname="text-center bg-black text-light">
                Signup
              </Card.Header>

              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="fname">
                    <Form.Label> <span><i className="fa fa-user"></i></span>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your First Name" value="" re/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lname">
                    <Form.Label> <span><i className="fa fa-user"></i></span>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Last Name" value="" re/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label> <span><i className="fa-solid fa-envelope"></i></span>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Email" value="" re/>
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="pass1">
                    <Form.Label> <span><i className="fa-solid fa-envelope"></i></span>Password</Form.Label>
                     <InputGroup className="m-3">


                                {" "}
                                <Form.Control
                                  placeholder="Enter a Password"
                                  required
                                  type="password"
                                  id="pass1"
                                  value={password}
                                />

                            
                            </InputGroup>
                            
                    <small>Password must include at least [1-9][a-z][!-z][_$@*!..] and five Characters</small>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="pass2">
                    <Form.Label> <span><i className="fa-solid fa-envelope"></i></span>Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Your Password" value="" re/>
                  </Form.Group>
                  






                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default SignupScreen;
