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
    const user = firebase.auth().currentUser.then((user) => console.log(user)).catch((error) => console.log(error))
    try {
      const url = 'localhost:8081/discover';
      const config = {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${firebase.auth().currentUser.getIdToken(true)}`
        }
      };
      const response = await axios(url, config);
      console.log(response)
      const payload = response.data;
      console.log(payload)

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


      <Container>
        <Row>
          <Col sm={3}>
            <Card style={{ width: '18rem' }} className="mr-4">
              <Card.Img variant="top" src="https://2.bp.blogspot.com/-EuikTyuD3-Q/WLc0tu0lloI/AAAAAAADfXY/rz4gSl7wftYLd0MARDbV9DNvBAqwNUVqACLcB/s1600/1P1400850.JPG" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Explore;