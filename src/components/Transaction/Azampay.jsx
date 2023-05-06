import React from 'react'
import axios from 'axios'
import { Container, Button } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
const Azampay = () => {
    const navigate = useNavigate()

       const handleClick = async(id) => {
    try {

      const userData = {
        'appName': 'foodApp',
        'clientId': '1324da44-a817-4fe4-a47b-2bb32b343f9b',
        'clientSecret': 'LW6CUsS/1RDTuhIcwdYEhz/ufAE3UATelfzH7sL9e1Nd6zUaPOiS+M/sJMAb+8KBO6dsFLOtAyxoX0zzmPgXTJjzlc6uV/YCh0Yz6TFqdPmBWROZ8xrSS26cs7PtKB44Zto9QRtzkAKhHvG1VlvINYfVbiFmCU5pmpcr7/xUGrBnDX7ASR+Sg5iA1ZEK33cc6ps23mkWjtmACuE9/4mfDUYCg4jmohVaSqt9ubAzv+iX+VAgmlSda8KowKVZPt2LLmFouLYQoUQ0pkJV1txF+3BM6JbODzEWwqcO9wM/QqTEYny3da+DqbBwS0YuSeU1RPp5xcGMx8PEESkrS4BvdAyUQi+xK+h7RWS2b0oEBNYg47zs5pOLFIHd4ZchRbEJA/XWLObTiOpTAg2WwYyLRo+Gatbo8apUtrjaEXkElOrT9DIi8jjxmiX7KD23RahSj/zBQh+9xr8YP5JC8F0dkSiMxpXziccOBRv7KvsUR622Qluh49i122OCd+1PPnd4LphMfNMmxrtt16Mtt6txBgGLuqAon3jGWGz13N5DsR/niKUscmCclsr0dsfNjYLHRAzXUDqvNOagBFitme4mWPwqaLC6298tWrRQwIPOJX9o2XZJZsJ6Qk2aBPVcH0gxU5qgsMRHC9DRUfb5bqcYLBOyjFGT8W/R2xQZokIMBv4='
      }
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