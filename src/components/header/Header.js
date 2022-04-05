

import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import './Header.scss'


export default function Header() {
    const first_line = 'Hola';
    const second_line = 'Soy David';
    const third_line = 'Desarrollador web';


    const [line1, setLine1] = useState([])
    const [line2, setLine2] = useState([])
    const [line3, setLine3] = useState([])


    useEffect(() => {
        //Loops para poder poner cada letra en un span y poder hacer hover
        let arrayFirstLine = []
        let arraySecondLine = []
        let arrayThirstLine = []
        //primer loop
        for (let i = 0; i < first_line.length; i++) {
            arrayFirstLine.push(<span className='letra-normal'>{first_line[i]}</span>)
        }
        setLine1(arrayFirstLine);
        //Segundo loop
        for (let i = 0; i < second_line.length; i++) {
            if (second_line[i] == 'D') arraySecondLine.push(<span className='letra-especial'>{second_line[i]}</span>)
            else arraySecondLine.push(<span className='letra-normal'>{second_line[i]}</span>)

        }
        setLine2(arraySecondLine);
        //Tercer loop
        for (let i = 0; i < third_line.length; i++) {
            arrayThirstLine.push(<span className='letra-normal'>{third_line[i]}</span>)
        }
        setLine3(arrayThirstLine);

    }, [])




    return (
        <Container>
            <div className="header">
                <div className='header_cabecera'>
                    <p>&lt;html&gt;</p>
                    <p>&lt;body&gt;</p>
                    <p>&lt;h1&gt;</p>

                </div>
                <Row className="header_title">
                    <Col xs={8} className='header_title-title'>
                        <h1>{line1}</h1>
                        <h1>{line2}</h1>
                        <h1>{line3}<span className='cierre-h1'>&lt;/h1&gt;</span></h1>
                    </Col>
                    <Col className='header_title-photo'>
                        <div className='photo'></div>
                    </Col>
                </Row>
                <div className='header_footer'>

                    <p>&lt;p&gt;</p>
                    <p>Full Stack Developer</p>
                    <p>&lt;/p&gt;</p>
                </div>
            </div>
        </Container>
    )
}