import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Barra = () => {
  return (
    <Navbar>
      <Container bg="light">
         <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link> 
         <Link to='/favoritos'><Navbar.Brand>Favoritos</Navbar.Brand></Link> 
      </Container>
  </Navbar>
  )
}

export default Barra
