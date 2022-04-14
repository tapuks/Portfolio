import { Container, Row } from "react-bootstrap"
import Cards from "../Cards"
import tweet from '../../assets/img/tweet.jpg'
import helados from '../../assets/img/helados.PNG'
import movies from '../../assets/img/movies.PNG'
import tragaperras from '../../assets/img/tragaperras.png'
import tresRalla from '../../assets/img/tresRalla.PNG'





import './Proyectos.scss'


export default function Proyectos() {

    const proyectos = {
        result:
            [
                {
                    id: 1,
                    title: "Tweeter simulator",
                    imagen: tweet,
                    enlace: "https://euphonious-tiramisu-a1c650.netlify.app/"
                },
                {
                    id: 2,
                    title: "Ecommerce Carrito",
                    imagen: helados,
                    enlace: "https://pedidostapuks.herokuapp.com/"
                },
                {
                    id: 3,
                    title: "Movies",
                    imagen: movies,
                    enlace: "https://creative-lily-623bc2.netlify.app/"
                },
                {
                    id: 4,
                    title: "Tragaperras",
                    imagen: tragaperras,
                    enlace: "https://stunning-horse-3dda0b.netlify.app/"
                },
                {
                    id: 5,
                    title: "Tres en ralla",
                    imagen: tresRalla,
                    enlace: "https://tres-ralla.herokuapp.com/"
                },

            ]
    }


    return (
        <Container>
            <div className="proyectos">
                <div className="proyectos_title">
                    <p>&lt;h2&gt;</p>
                    <h2>Mis proyectos</h2>
                    <p>&lt;/h2&gt;</p>
                </div>


                <Cards data={proyectos} />


            </div>


        </Container>
    )
}