import React, {useState} from "react";
import NavBar from './NavBar';
import { Link, Redirect } from 'react-router-dom';
import {Carousel, Button, Card, Container, Row, Col} from 'react-bootstrap';
import "./explore.css";

const Explore = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [toMatches, setToMatches] = useState(false);
    const goToMatch=(event)=> {
        event.preventDefault();
        setToMatches(true);
  };

  return (
    <>
    {toMatches ? <Redirect to="/matches" /> : null}
     <NavBar/>
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import NavBar from './NavBar';
import firebase from "firebase/app";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
// import { UserContext } from "../providers/UserProvider";

const Explore = () => {
  const [locations, setLocations] = useState([]);
  // const user = useContext(UserContext);
  // const { token } = user;

  async function getLocations() {
    // const user = firebase.auth().currentUser.then((user) => console.log(user)).catch((error) => console.log(error))
    console.log(localStorage.token)
    try {
      const url = 'http://localhost:8081/discover?lat=42&long=50';
      const config = {
        method: 'get',
        headers: {
          // 'Authorization': `Bearer ${firebase.auth().currentUser.getIdToken(true)}`
          'Authorization': `Bearer ${localStorage.token}`
        }
      };
      const response = await axios(url, config);
      console.log(response)
      const payload = response.data;
      console.log(payload)
      const location_info = payload.reduce((location_info, location) => [...location_info, [location["City"], location["Distance"], location["Name"], location["ID"]]], [])
      return location_info

    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    async function fetchLocations() {
      const locations = await getLocations();
      setLocations(locations)
    }
    fetchLocations()
  }, [])

  return (
    <>
      <NavBar />
      <p>explore page</p>


<<<<<<< HEAD
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Container>
            <Row>
            <div class="col d-flex justify-content-center">
              <Col md=".mx-auto">
                <Card style={{ width: '18rem' }} className="mr-4">
                  <Card.Img variant="top" src="https://pbs.twimg.com/media/DhBML0YVQAAUS6Z.jpg" />
                  <Card.Body>
                    <Card.Title>Momofuku</Card.Title>
                    <Card.Text>
                      Toronto, Ontario
                    </Card.Text>
                    <Button variant="primary" onClick={(event) => goToMatch(event)}>Let's go there!</Button>
                  </Card.Body>
                </Card>
              </Col>
              </div>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
            <div class="col d-flex justify-content-center">
              <Col md=".mx-auto">
                <Card style={{ width: '18rem' }} className="mr-4">
                  <Card.Img variant="top" src="https://curiocity.com/toronto/wp-content/uploads/2019/03/53236501_307845819906308_5769774709512547969_n.jpg" />
                  <Card.Body>
                    <Card.Title>Tsujiri</Card.Title>
                    <Card.Text>
                      Toronto, Ontario
                    </Card.Text>
                    <Button variant="primary" onClick={(event) => goToMatch(event)}>Let's go there!</Button>
                  </Card.Body>
                </Card>
              </Col>
              </div>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
            <div class="col d-flex justify-content-center">
              <Col md=".mx-auto">
                <Card style={{ width: '18rem' }} className="mr-4">
                  <Card.Img variant="top" src="https://www.rom.on.ca/sites/default/files/imce/ROM_strategic_plan_highlight.png" />
                  <Card.Body>
                    <Card.Title>Royal Ontario Museum</Card.Title>
                    <Card.Text>
                      Toronto, Ontario
                    </Card.Text>
                    <Button variant="primary" onClick={(event) => goToMatch(event)}>Let's go there!</Button>
                  </Card.Body>
                </Card>
              </Col>
              </div>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
=======
      <Container>
        <Row>
          <Col sm={3}>
            {locations.map((location, index) => {
              console.log(location)
              return (
                <div key={index}>
                  <Card style={{ width: '18rem' }} className="mr-4">
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-EuikTyuD3-Q/WLc0tu0lloI/AAAAAAADfXY/rz4gSl7wftYLd0MARDbV9DNvBAqwNUVqACLcB/s1600/1P1400850.JPG" />
                    <Card.Body>
                      <Card.Title>{location[2]}</Card.Title>
                      <Card.Text>
                        {location[1]}
                      </Card.Text>
                      <Button variant="primary"> Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
>>>>>>> Get data from db
    </>
  );
}
export default Explore;