import React, {userState, useEffect} from 'react';
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Loader"
import Message from "../Message"





function SignupScreen() {
  return (
<>
<Container className='mt-3'>

<Row>
  <Col md={4}></Col>
  <Col md={4}>
  
    <Card>
      <Card.Header as="h1" classname='text-center bg-black text-light'>
        Signup
      </Card.Header>
    </Card>
  
  
  
  </Col>
  <Col md={4}></Col>
</Row>

</Container>
</>
  )
}

export default SignupScreen
