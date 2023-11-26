import React from 'react'
import axios from 'axios'
import { Container, Button } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
const Azampay = () => {
    const navigate = useNavigate()

       const handleClick = async(id) => {
    try {

      const userData = {
        'appName': '',
        'clientId': '',
        'clientSecret': ``
    const res = await axios.post('https://authenticator-sandbox.azampay.co.tz/AppRegistration/GenerateToken',userData)
      
      const { data, success, statusCode } = res.data
      const {accessToken} = data
       
        
      if (id ===1 && success === true && statusCode === 200) {
          navigate('/payments/',{state: accessToken} )
           
      }
      if (id === 2 && success === true && statusCode === 200) {
          navigate('/banks/',{state: accessToken} )   
      }
   }
    catch (error) {
    console.log(error);
   }
}
  return (
    <Container >
     
      <img src="/img/Azampya.png" alt="" style={{ width: "200px", marginBottom: "20px" }} />
    
          <Button onClick={() => handleClick(1)} className="mb-4">checkout with azampay</Button>
          
          {/* <Button variant='success' onClick={() => handleClick(2)}>Bank checkout</Button> */}
      </Container>
  )
}

export default Azampay
