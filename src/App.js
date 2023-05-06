 import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import Home from "./pages/Home.jsx"
import PayAzam from './pages/PayAzam';
import BankCheckout from './pages/BankCheckout';

function App() {
	return (
		<Row className="mb-4">
			
			<Col>
				<Routes>
					<Route path="/" element={<Home />} />
					
					<Route path="/payments" element={<PayAzam />} />
					<Route path="/banks" element={<BankCheckout/>} />
				</Routes>
			</Col>
		</Row>
	);
}

export default App;
