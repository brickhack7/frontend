import React, {useState} from "react";
import NavBar from './NavBar';
import { Link, Redirect } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import {Image, Button, Container, Row, Col} from 'react-bootstrap';

const Match = () => {

    return (
    <>
     <NavBar/>

     <img src="\frontend\brickhacks\messages.png" alt="Simply Easy Learning" width="200"
         height="80"></img>
    </>
  );
}

export default Match;