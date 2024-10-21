// src/components/Home.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5">
      <center>
        <h1 style={{ marginBottom: '10px',marginTop: '30px' }}>Welcome to My Profile!!</h1>
        </center>
      <center><p>I want to be a Graphic Designer!</p></center>
    </Container>
  );
}

export default Home;
