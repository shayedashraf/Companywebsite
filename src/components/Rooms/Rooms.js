import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FixedSizeGrid as Grid } from "react-window";
import styled from 'styled-components';

const Rooms = () => {
	const imgsArray = [
		[
			{ src: "./p1.jpg", alt: "Deluxe Double Room" },
			{ src: "./p2.jpg", alt: "Deluxe Single Room" },
			{ src: "./p5", alt: "Deluxe Twin Room" }
		],
		[
			{ src: "./p1.jpg", alt: "Lorem Ipsum" },
			{ src: "./p2.jpg", alt: "Lorem Ipsum" },
			{ src: "./p3", alt: "Twin Ipsum" }
		],
		[
			{ src: "./p4.jpg", alt: "Lorem Ipsum" },
			{ src: "./p5.jpg", alt: "Lorem Ipsum" },
			{ src: "./p1.jpg", alt: "Lorem Ipsum" }
		],
		[
			{ src: "./p1.jpg", alt: "Lorem Ipsum" },
			{ src: "./p5.jpg", alt: "Lorem Ipsum" },
			{ src: "./p1.jpg", alt: "Lorem Ipsum" }
		],
		[
			{ src: "./p2.jpg", alt: "Lorem Ipsum" },
			{ src: "./p1.jpg", alt: "Lorem Ipsum" },
			{ src: "./p3.jpg", alt: "Lorem Ipsum" }
		],
		[
			{ src: "./p5.jpg", alt: "Lorem Ipsum" },
			{ src: "./p5.jpg", alt: "Lorem Ipsum" },
			{ src: "./p1.jpg", alt: "Lorem Ipsum" }
		]
	];
	const JumbotronDiv = styled(Jumbotron)`
		backgroundColor: "#E6E4DC",
		height: "6000px"
	`;
	const TextDiv = styled.div`
		margin-top: 100px;
	`;
	const GridDiv = styled(Grid)`
		@media screen and (max-width: 800px) {
			width: 450px;
			height: 300px;

		}
	`;
	const CaptionDiv = styled.div`
		position: absolute;
		right: 15%;
		top: 45%;
		left: 15%;
		z-zndex: 10;
		color: #fff;
		text-align: center;
	`;
	const ImgGridDiv = styled.div`
		@media screen and (max-width: 800px) {
			width: 250px !important;
			height: 250px !important;
		}
	`;
	const ImgStyle = styled.img`
		width: 400px;
		height: 400px;
		@media screen and (max-width: 800px) {
			width: 250px;
			height: 250px;
			opacity : 0.2;
		}
	`;
	const Cell = ({ columnIndex, rowIndex, style }) => (
		<ImgGridDiv style={style}>
			<ImgStyle
				src={imgsArray[rowIndex][columnIndex].src}
				alt={imgsArray[rowIndex][columnIndex].alt}
			/>
			<CaptionDiv>
				<p>{imgsArray[rowIndex][columnIndex].alt}</p>
			</CaptionDiv>
		</ImgGridDiv>
	);
	return (
		<JumbotronDiv
			id="rooms"
			className="pt-0 pb-0"
			fluid
		>
			<Container className="txtali-l">
				<Row>
					<Col md={{ span: 3, offset: 1 }}>
						<TextDiv>
							<h5 className="title">Project Gallary</h5>
							<p className="text">
								Nova Sky comprises 67 suites. Each one artfully
								combines the ultimate in luxury, comfort and
								sophistication. Every living space, gives a new
								definition to opulence and splendour, which
								contemporary finishes and premium facilities.
							</p>
						</TextDiv>
					</Col>
					<Col md={4}>
						<GridDiv
							className="Grid"
							columnCount={3}
							columnWidth={200}
							height={400}
							rowCount={6}
							rowHeight={300}
							width={600}
						>
							{Cell}
						</GridDiv>
					</Col>
				</Row>
			</Container>
		</JumbotronDiv>
	);
};

export default Rooms;
