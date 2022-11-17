import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"


const NewsCard = (props) => {
    return (
        <>
                {props.evenIndex === 1 ?
                <Container>
                    <Row>
                        <h4 className="text-center m-3 display-handwriting">{props.title}</h4>
                    </Row>
                    <Row>
                        <Col lg={4} sm={5}>
                            <Link href={props.slug} className="text-center m-2 btn">Läs Mer</Link>
                        </Col>
                        <Col lg={8} sm={7}>
                            <div dangerouslySetInnerHTML={{__html: props.content}} />
                        </Col>
                    </Row>
                </Container>
                : 
                <Container>
                    <Row>
                        <h4 className="text-center m-3">{props.title}</h4>
                    </Row>
                    <Row>
                        <Col lg={4} sm={5}>
                            <div dangerouslySetInnerHTML={{__html: props.content}} />
                        </Col>
                        <Col lg={8} sm={7}>
                            <Link href={props.slug} className="text-center m-2 btn btn-primary">Läs Mer</Link>
                        </Col>
                    </Row>
                </Container>
                }
        </>
    )
}

export default NewsCard