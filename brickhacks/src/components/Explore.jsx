import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from './NavBar';
import { Link, Redirect } from 'react-router-dom';
import { Carousel, Button, Card, Container, Row, Col } from 'react-bootstrap';
import "./explore.css";

const Explore = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [toMatches, setToMatches] = useState(false);
  const goToMatch = (event) => {
    event.preventDefault();
    setToMatches(true);
  };
  const [locations, setLocations] = useState([]);

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
      {toMatches ? <Redirect to="/matches" /> : null}
      <NavBar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Row>
          <Container>
            <Col md=".mx-auto">
              {locations.map((location, index) => {
                console.log(location)
                return (
                  <Carousel.Item>
                    <div key={index}>
                      <div class="col d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="mr-4">
                          <Card.Img variant="top" src="https://2.bp.blogspot.com/-EuikTyuD3-Q/WLc0tu0lloI/AAAAAAADfXY/rz4gSl7wftYLd0MARDbV9DNvBAqwNUVqACLcB/s1600/1P1400850.JPG" />
                          <Card.Body>
                            <Card.Title>{location[2]}</Card.Title>
                            <Card.Text>
                              {location[1]}
                            </Card.Text>
                            <Button variant="primary" onClick={(event) => goToMatch(event)}>Let's go there!</Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </Carousel.Item>
                )
              })}
            </Col>
          </Container>
        </Row>
      </Carousel>
    </>
  );
}
export default Explore;