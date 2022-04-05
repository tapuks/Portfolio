import { Container } from 'react-bootstrap'



import './AboutMe.scss'



export default function AboutMe() {
    return (
        <Container>
            <div className='about-me'>
                <p>&lt;h2&gt;</p>
                <h2>Sobre mi</h2>
                <p>&lt;/h2&gt;</p>
                <p>&lt;p&gt;</p>
                <p className='about-me-text'>
                    Despues de unos años trabajando como electricista, me decidí por dar un cambio de aires en mi vida y me puse a estudiar programación.
                    Al finalizar el grado de Desarrollo web, me seguí formando haciendo un bootcamp Full stack developer y por fin llego mi primera oportunidad laboral como programador.
                    Donde he aprendido mucho y cada día sigo formándome con cursos y demás herramientas.
                </p>
                <br></br>
                <p className='about-me-text'>Soy una persona responsable, trabajadora y que si te puedo ayudar en algo lo haré encantado.</p>.
                <p className='about-me-text'>Me gusta hacer deporte, salir a cenar con los amigos, pasar tiempo con mis perros...</p>
                <p>&lt;/p&gt;</p>
            </div>
            <p>fdfdf</p>
        </Container>
    )
}