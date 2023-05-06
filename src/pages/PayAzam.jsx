import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const PayAzam = () => {
	const navigate = useNavigate();
	const [ show, setShow ] = useState(false);
	const [ mess, setMess ] = useState();
	const [ phonNumber, setPhoneNumber ] = useState();
	const [ amount, setAmount ] = useState();
	const locate = useLocation();
	const token = locate.state;

	const handleClick = async () => {
		console.log(phonNumber);
		const data = {
			accountNumber: `${phonNumber}`,
			amount: `${amount}`,
			currency: 'TZS',
			externalId: '123',
			provider: 'Tigo',
			additionalProperties: null
		};
		const config = {
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'X-API-Key': 'API-KEY' }
		};
		const res = await axios.post('https://sandbox.azampay.co.tz/azampay/mno/checkout', data, config);
if (!res.data) {
  return <h2> loading</h2>
}
		const { message } = res.data;
		if (res.data) {
			setMess(message);
			setShow(true);
		}
	};

	return (
		<Container
			className="text-center d-flex justify-content-center align-items-center position-relative"
			style={{ minHeight: '100vh', flexDirection: 'column' }}
		>
			<h2 className="text-center">mobile checkout</h2>
			<Form
				className="p-3 mt-4"
				style={{ width: '300px', boxShadow: '0 0 4px #000', backgroundColor: 'rgb(230,230,230)' }}
			>
				<Form.Group controlId="accountNumber" className="me-3 my-3">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control type="number" name="accountNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
				</Form.Group>

				<Form.Group controlId="amount" className="me-3 my-3">
					<Form.Label>amount</Form.Label>
					<Form.Control type="number" name="amount" onChange={(e) => setAmount(e.target.value)} />
				</Form.Group>
				<Button onClick={handleClick} className="w-50 py-2">
					pay
				</Button>
			</Form>
			{show && (
				<div
					className="text-center d-flex justify-content-center align-items-center "
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						right: '0',
						bottom: '0',
						backgroundColor: 'rgba(0,0,0, 0.6)',
						flexDirection: 'column'
					}}
				>
					<p className="py-4 px-3" style={{ backgroundColor: 'rgb(230,230,230)', width: '150px' }}>
            {mess}
            <svg viewBox="25 25 50 50">
						<circle r="20" cy="50" cx="50" />
					</svg>
					</p>
					<br />
					<Button onClick={() => navigate('/')}>return home</Button>
				</div>
			)}
		</Container>
	);
};

export default PayAzam;
