import { Card, Row, Col } from 'react-bootstrap'


import './Cards.scss'

export default function Cards(props) {
    const { data } = props
    return (
        <div className="cards">
            <p>&lt;div&gt;</p>
            <Row className='mt-5'
            >
                {data.result.map(item => {
                    return (
                        <>
                            <Col xs={12} md={6} lg={4} key={item.id} className="mb-5 text-center">
                                <CardComponent item={item} />
                            </Col>
                        </>
                    )
                })}
            </Row>
            <p>&lt;/div&gt;</p>
        </div>
    )
}

function CardComponent(props) {
    const { item } = props
    return (
        <Card className="cursos-udemy_cards-card" style={{ width: "17rem" }}>
            <Card.Img variant="top" src={item.imagen} />
            <Card.Body>
                <Card.Title> <a href={item.enlace} target="_blank">{item.title}</a></Card.Title>
            </Card.Body>
        </Card>
    )
}