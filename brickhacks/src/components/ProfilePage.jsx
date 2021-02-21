import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase'
import axios from 'axios';
import "firebase/auth";
import Button from 'react-bootstrap/Button'
import {Container, Row, Col, ButtonGroup, ToggleButton} from 'react-bootstrap';

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  const [loggedOut, setLoggedOut] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [toExplore, setToExplore] = useState(false);

  const signOutHandler = () => {
    auth.signOut()
    setLoggedOut(true)
  }

  const updateSelectedInterests = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const submitInterests = async () => {
    // e.preventDefault();
    console.log(selectedInterests)

    insertInterests(selectedInterests)
    setToExplore(true)
  }

  async function insertInterests(interests){
    try {
      const body = {interests};
      console.log('interests: ', interests);
      const url = 'http://localhost:8081/profile';
      const config = {
        method: 'put',
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${localStorage.token}`
        },
        data: JSON.stringify(body)
      };
      const response = await axios(url, config);
      console.log(response)
      // const payload = response.data;
      // console.log(payload)

    } catch (err) {
      console.error(err.message)
    }
}

  return (
    <div className="text-center my-3">
      {loggedOut ? <Redirect to="/" /> : null}
      {toExplore ? <Redirect to="/explore" /> : null}
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className="border border-blue-300"
        ></div>
        <div className="md:pl-4">
          <h2 className="text-2xl font-semibold">{displayName}</h2>
          <h3 className="italic">{email}</h3>
        </div>
      </div>
      <h2 className="text-center my-5">Choose from popular interests</h2>
                <Container>
                    <Row>
                        <Col>
                        <ButtonGroup toggle className="mb-2 justify-content-around d-flex flex-column">
                            <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            checked={selectedInterests.includes("anime")}
                            value="anime"
                            onChange={(e) => updateSelectedInterests("anime")}
                            className="my-1"
                            >
                            anime
                            </ToggleButton>
                            <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            checked={selectedInterests.includes("hiking")}
                            value="hiking"
                            onChange={(e) => updateSelectedInterests("hiking")}
                            className="my-1"
                            >
                            hiking
                            </ToggleButton>
                            <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            checked={selectedInterests.includes("reading")}
                            value="reading"
                            onChange={(e) => updateSelectedInterests("reading")}
                            className="my-1"
                            >
                            reading
                            </ToggleButton>
                        </ButtonGroup>
                        </Col>
                        <Col>
                        <ButtonGroup toggle className="mb-2 justify-content-around d-flex flex-column">
                            <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            checked={selectedInterests.includes("exercising")}
                            value="exercising"
                            onChange={(e) => updateSelectedInterests("exercising")}
                            className="my-1"
                            >
                            exercising
                            </ToggleButton>
                            <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            checked={selectedInterests.includes("biking")}
                            value="biking"
                            onChange={(e) => updateSelectedInterests("biking")}
                            className="my-1"
                            >
                            biking
                            </ToggleButton>
                            <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            checked={selectedInterests.includes("running")}
                            value="running"
                            onChange={(e) => updateSelectedInterests("running")}
                            className="my-1"
                            >
                            running
                            </ToggleButton>
                        </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
      <Button variant="primary" onClick={() => submitInterests()}>Add interests selected</Button>
      <Button variant="secondary" onClick={() => signOutHandler()}>Sign out</Button>
    </div>
  )
};
export default ProfilePage;