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
    </>
  );
}
export default Explore;