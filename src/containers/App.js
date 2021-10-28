import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import AboutUs from "../components/AboutUs/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import ContactUs from "../components/ContactUs/ContactUs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";


const App = () => {
	return (
		<div className="App">

			<Navbar />
			<Carousel />
			<AboutUs />
			<Rooms />
			<ContactUs />
			<Footer />



		</div>
	);
}

export default App;
