// src/components/Home.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5">
      <center>
        <h1 style={{ marginBottom: '10px',marginTop: '30px' }}>Welcome to My Profile!!</h1>
        </center>
      <center><p>In this Profile you will be able to see more about me. Enjoy!</p></center>
    </Container>
  );
}

export default Home;