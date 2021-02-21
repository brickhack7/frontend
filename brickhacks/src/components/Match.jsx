import React, {useState} from "react";
import NavBar from './NavBar';
import { Link, Redirect } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import {Image, Button, Container, Row, Col} from 'react-bootstrap';

const Match = () => {

    const [toMessages, setToMessages] = useState(false);
    const messageMatch=(event)=> {
        event.preventDefault();
        setToMessages(true);
    };
  
    return (
    <>
     <NavBar/>

     <Container>
        <Row>
            <Col xs={6} md={6}>
                {toMessages ? <Redirect to="/messages" /> : null}
                <h1>Meet Thalia!</h1>
                <p> Thalia wants to visit the Momofuku bar in Toronto just like you do! Fun fact: she is also interested in movies, food, and punk rock.
Reach out to her and plan a trip to Momofuku bar together!</p>
                <div className="text-center my-3">
                    <Button variant="primary" onClick={(event) => messageMatch(event)}>
                    Message Now!
                    </Button>
                </div>
            </Col>
            <Col xs={6} md={6}>
                <Image src="https://savageuniversal.com/wp-content/uploads/2014/08/young-woman-laughing.jpg" thumbnail />
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default Match;