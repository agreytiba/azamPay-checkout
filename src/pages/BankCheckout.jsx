import {useState} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom"
import {Container,Form,Button} from "react-bootstrap"
const BankCheckout = () => {
    const navigate = useNavigate()

    // useState for handling  response 
    const [show, setShow] = useState(false)
  const [mess, setMess] = useState()
  const [AccountNumber, setAccountNumber] = useState()
  const [amount, setAmount] = useState()
    
    // handling get data passed through durin navigation
    const locate =useLocation ()
    const token = locate.state;
  // const  token= 'U2FsdGVkX19ld+de2OmarM5DuAKKuWEuzBECvuw4vqVU9C9cN90eYPPqqfeXyl6wkm4/8tVSHPPX0GJ0qbaHZFtzlHjgNeP0ROtX3bU/OITBNFKRzCTGikjE9RhocIVbfil+BcDVszUM8VZaWjTUFz07EF1dqBgt1KDFqUb9e4FD/z3M6abZSnS/CtB95yCpktWMKrEC07fEUv8G/TO9qEI6nhVLTk/Ww/aOXN9vPfj25Q98F+pEsDOSrCPJ7PI0D8fGVlptLbIFedUJ97odrOnNt3iF2lZGeEyMrsxrKGMWMoRUc6+wQdf2WFzl1tYJzlj0xebeeaqLSsGkyMcsXZjIQ9CAiai+lAcMcaFwHr9Reva2tUPyPKzF8w4eHoFFkig85cB6OpjOYbumsj0pWkLz84HThSrydYuDKLKxFbVeCuRH00PycrUISbn6iq5G2L4yfktCzVEvJfkY7gBl7m504U+QU665Yi8Dy/pWwPjR6WUs/TmwHmG+Vjn0L6tgrIBEGW1LYA6VT0KJFG4WdPa/jhsXPm5kBeaMUE/T31nBnM23vcjtugyjAJqCUkjtvnIw8o2IIsFPUraz8yJDzBZd+KL3kcvEQOy5AdKF+0p1dNyPGwUqbQfyLy0z+YpomyTPANf2gJwcORDkcntG/fRRYUHnIdMkCJwPcN4r7owkMx3WVxg8/yHC8KNDnra0ZXPKC7m2XBT6YIJcYvJWaUXJWuJpU0BzObq3x7e23J0k05f+0knJagxsmQBz3dO0eGJg2taeAwAwBEFgHA2YmRdkCPkc0fdTuOkCo6pmxP6W4Otl8u+hDOPO70P7S75VrBySzkR2mtJ2oMiKAyq6es1AkXGxGK6XztzEonCXVxWASnJ1bHUf1DrBaD39kdCsVfBD5+YJ5rI8B40VR5WLdADh3xDTLe4pJ5BAOsOtUjS1tGYWJCGcRT6p+LMFzVLzAZH+1w/i88wSVTY9hIrVVAKfEoO7XbvPBVII3p5RVKFDpEA0lKs7Lh+2cZDlBMQoyeLTitj/GWiDu80+rH8r2siVyFOqJFKJQNsg0cPYYLPSI4OETQa3PPuv0Bh0oYTfPsK3oIzCBZttU09YTswwLQ=='
    const handlepay =async () => {
        const data = { 'amount':`${amount}`, 'currencyCode':'TZS', 'merchantAccountNumber': `${AccountNumber}`, 'merchantMobileNumber':'255123123123', 'merchantName':null, 'otp':'1234', 'provider':'NMB','referenceId':'123'};
		const config = {headers:{ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`   , 'X-API-Key': 'API-KEY' }};
		const res = await axios.post('https://sandbox.azampay.co.tz/azampay/bank/checkout', data, config)
      console.log(res.data);
      const { message, msg } = res.data
      if (res.data) {
          setMess(message) 
          setShow(true)
    }
    }
  return (
          <Container className="text-center d-flex justify-content-center align-items-center position-relative" style={{minHeight:"100vh",flexDirection:"column"}}>
          <h2>Bank checkout</h2>
          <Form className='p-3 mt-4' style={{ width: "300px", boxShadow: "0 0 4px #000", backgroundColor: "rgb(230,230,230)" }}>
              	<Form.Group controlId="accountNumber" className="me-3 my-3">
						<Form.Label>Account Number</Form.Label>
						<Form.Control type="number" name="accountNumber" onChange={(e)=>setAccountNumber(e.target.value)}  />
					</Form.Group>
				
       <Form.Group controlId="amount" className="me-3 my-3">
						<Form.Label>amount</Form.Label>
						<Form.Control type="number" name="amount" onChange={(e)=>setAmount(e.target.value)} />
					</Form.Group>
              <Button onClick={handlepay}>pay</Button>
          </Form>
          { 
              show &&
              <div className="text-center d-flex justify-content-center align-items-center " style={{position: "absolute",top:"0",left:"0", right:"0",bottom:"0",backgroundColor: "rgba(0,0,0, 0.6)",flexDirection:"column"}}>
                     
                      <p className='py-4 px-3' style={{ backgroundColor: "rgb(230,230,230)", width: "150px" }}>{mess}</p>
                      <br />
                      <Button onClick={() => navigate("/transactions")}>return home</Button>
              </div>
          }
    </Container>
  )
}

export default BankCheckout