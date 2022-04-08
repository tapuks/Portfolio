import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import cursoHtml from "../../assets/img/cursoHtml.png";
import cursoApiRest from "../../assets/img/cursoApiRest.png";
import cursoReact from "../../assets/img/cursoReact.jpg";
import cursoAngular from "../../assets/img/cursoAngular.jpg";
import cursoReact2 from "../../assets/img/cursoReact2.jpg";
import cursoSql from "../../assets/img/cursoSql.jpg";
import cursoCss from "../../assets/img/cursoCss.jpg";
import cursoJava from "../../assets/img/cursoJava.jpg";
import cursoPython from "../../assets/img/cursoPython.jpg";
import cursoJs from "../../assets/img/cursoJs.jpg";
import cursoLinux from "../../assets/img/cursoLinux.jpg";
import cursoGit from "../../assets/img/cursoGit.jpg";
import imgUdemy from "../../assets/img/imgUdemy.png";


import './CursosUdemy.scss'
import Cards from "../Cards/Cards";

export default function CursosUdemy() {
	document.body.style = "background: black";

	const cursos = {
		result: [
			{
				id: 1,
				title: "HTML5 desde cero Edición 2020",
				imagen: cursoHtml
			},
			{
				id: 2,
				title: "Django REST Framework de cero a experto",
				imagen: cursoApiRest
			},
			{
				id: 3,
				title: "React JS Hooks: De Cero a Experto Creando Ap...",
				imagen: cursoReact
			},
			{
				id: 4,
				title: "Angular 9 / 10 para Principiantes",
				imagen: cursoAngular
			},
			{
				id: 5,
				title: "React.JS, Guía desde 0 (Actualizado 2022)",
				imagen: cursoReact2
			},
			{
				id: 6,
				title: "Aprende SQL desde cero: ¡Curso con mas de 50...",
				imagen: cursoSql
			},
			{
				id: 7,
				title: "Desarrollo web. CSS desde cero. Edición 2020",
				imagen: cursoCss
			},
			{
				id: 8,
				title: "Máster Completo en Java de cero a experto 2022",
				imagen: cursoJava
			},
			{
				id: 9,
				title: "Universidad Python con Frameworks Django, Fla...",
				imagen: cursoPython
			},
			{
				id: 10,
				title: "Desarrollo web. JavaScript desde cero...",
				imagen: cursoJs
			},
			{
				id: 11,
				title: "Curso de Linux desde cero",
				imagen: cursoLinux
			}, {
				id: 12,
				title: "Curso Completo de Git y Github para principiantes",
				imagen: cursoGit
			},
		]
	};
	return (
		<Container>
			<div className="cursos-udemy">
				<div className="cursos-udemy_title">
					<p>&lt;h2&gt;</p>
					<h2>Cursos <span style={{ color: 'white' }}>Udemy</span> realizados </h2>
					<p>&lt;/h2&gt;</p>
				</div>
				<Cards data={cursos} />
			</div>
		</Container >
	);
}

