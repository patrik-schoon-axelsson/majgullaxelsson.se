import styles from  "../styles/Footer.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import FooterModal from "./input/FooterModal";

const Footer = () => {
    return (
        <>
            <div className={styles.topper}>
                <Container fluid className={styles.footer}>
                    <Row>
                        <h3 className="text-center">Majgull Axelsson AB © {new Date().getFullYear()}. Allt innehåll på hemsidan tillhör Majgull Axelsson AB. </h3>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <FooterModal />
                        </Col>
                        <Col xs={12} md={4}>
                            <h5 className="text-center m-2"><a target="_blank" rel="noreferrer" href="https://www.goodreads.com/author/show/165549.Majgull_Axelsson">Majgull på Goodreads</a></h5>
                        </Col>
                        <Col xs={12} md={4}>
                            <h5 className="text-center m-2"><a target="_blank" rel="noreferrer" href="https://www.norstedts.se/115660-majgull-axelsson">Majgull hos Norstedts Förlag</a></h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer