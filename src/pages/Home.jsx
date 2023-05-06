import React from 'react'
import { Container } from 'react-bootstrap'
import Azampay from '../components/Transaction/Azampay'

const Home = () => {
  return (
    <Container className="text-center d-flex justify-content-center align-items-center mt-4">
      <div style={{width:"250px",height:"100px"}}>
          <Azampay />
      </div>
      
    </Container>
  )
}

export default Home