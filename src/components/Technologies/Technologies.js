import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logoCss from "../../assets/img/css.png"
import logoHtml from "../../assets/img/html.png";
import logoPython from "../../assets/img/piton.png";
import logoReact from "../../assets/img/react.png";
import logoGit from "../../assets/img/git.png";
import logoDjango from "../../assets/img/django.png";
import logoSass from "../../assets/img/sass.svg";
import slash from "../../assets/img/slash-solid.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSass, faJs, faBootstrap } from "@fortawesome/free-brands-svg-icons";


import "./Technologies.scss";

export default function Technologies() {
	document.body.style = "background: black";
	return (
		<Container>
			<div className="technologies">
				<div className="technologies_title">
					<p>&lt;h2&gt;</p>
					<h2>Lenguajes, frameworks y otras tecnologías que domino</h2>
					<p>&lt;/h2&gt;</p>
				</div>
				<div className="technologies_icons">
					<p className="technologies_icons-p">&lt;div&gt;</p>
					<Row className="mt-5 pt-5">
						<Col xs={0} md={2}></Col>
						<Col xs={6} md={2}>
							<img className="" src={logoHtml}></img>
						</Col>
						<Col xs={6} md={2}>
							<img className="" src={logoCss}></img>
						</Col>
						<Col xs={6} md={2}>
							<FontAwesomeIcon icon={faJs} style={{ fontSize: "50px", color: "yellow" }}></FontAwesomeIcon>
						</Col>
						<Col xs={6} md={2}>
							<img className="" src={logoReact}></img>
							<p style={{ color: "white" }}>React</p>
						</Col>
						<Col xs={0} md={2}></Col>
					</Row>

					<Row>
						<Col xs={0} md={2}></Col>
						<Col xs={6} md={2} mb-5>
							<img className="" src={logoPython}></img>
							<p style={{ color: "white" }}>Python</p>
						</Col>

						<Col xs={6} md={2}>
							<img className="img-django" src={logoDjango}></img>
						</Col>

						<Col xs={6} md={2}>
							<FontAwesomeIcon icon={faSass} style={{ fontSize: "40px", color: "pink" }}></FontAwesomeIcon>
						</Col>
						<Col xs={6} md={2}>
							<img className="" src={logoGit}></img>
						</Col>
						<Col xs={0} md={2}></Col>
					</Row>
					<Row>
						<Col xs={0} md={2}></Col>
						<Col xs={6} md={2}>
							<FontAwesomeIcon
								icon={faBootstrap}
								style={{ fontSize: "40px", color: "#800080" }}></FontAwesomeIcon>
							<p style={{ color: "white" }}>Bootstrap</p>
						</Col>
						{/* <Col xs={6} md={9}></Col> */}
					</Row>
					<p className="technologies_icons-p">&lt;/div&gt;</p>
				</div>
			</div>
		</Container>
	);
}
