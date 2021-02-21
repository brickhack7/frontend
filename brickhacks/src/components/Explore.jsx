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

  const createMatchHandler = async(loc_id) => {
    const loc = {"loc_id": loc_id}
    console.log('location body >>>', JSON.stringify(loc))
    try {
      const url = 'http://localhost:8081/discover';
      const config = {
        method: 'post',
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${localStorage.token}`
        },
        data: JSON.stringify(loc)
      };
      const response = await axios(url, config);
      console.log(response)
      const payload = response.data;
      console.log(payload)

    } catch (err) {
      console.error(err.message)
    }
    setToMatches(true);
  }
  const [locations, setLocations] = useState([]);

  async function getLocations() {
    console.log(localStorage.token)
    try {
      const url = 'http://localhost:8081/discover?lat=43.65&long=-79.4';
      const config = {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      };
      const response = await axios(url, config);
      console.log(response)
      const payload = response.data;
      console.log(payload)
      const location_info = payload.reduce((location_info, location) => [...location_info, [location["city"], location["distance"], location["name"], location["id"], location["image"]]], [])
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
        {/* <Row>
          <Container>
            <Col md=".mx-auto"> */}
              {locations.map((location, index) => {
                console.log(location)
                return (
                  <Carousel.Item key={index}>
                      <div className="col d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="mr-4">
                          <Card.Img variant="top" src={location[4]} />
                          <Card.Body>
                            <Card.Title>{location[2]}</Card.Title>
                            <Card.Text>
                              {location[0]} - {Math.round(location[1]*100)/100} km away
                            </Card.Text>
                            <Button variant="primary" onClick={() => createMatchHandler(location[3])}>Let's go there!</Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </Carousel.Item>
                )
              })}
            {/* </Col>
          </Container>
        </Row> */}
      </Carousel>
    </>
  );
}
export default Explore;