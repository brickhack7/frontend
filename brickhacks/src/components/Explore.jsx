import React from "react";
import NavBar from './NavBar';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';

const Explore = () => {
  return (
    <>
     <NavBar/>
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