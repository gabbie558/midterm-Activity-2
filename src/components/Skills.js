// src/components/Skills.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Skills() {
  return (
    <Container>
      <h1 style={{ marginBottom: '50px',marginTop: '50px' }}>My Skills</h1> 

      <ul>
        <li>
          Javascript
        </li>
        <li>
          Time Management
        </li>
        <li>
          Problem Solving
        </li>
        <li>
          Artificial Intelligence
        </li>
        <li>
          Critical Thinking
        </li>
      </ul>
    </Container>
  );
}

export default Skills;
