import styles from  "../styles/Footer.module.css";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
            <Container fluid className={styles.footer}>
                <Row>
                    <h3 className="text-center">Webbsidan tillhör Majgull Axelsson AB. Kontaktuppgifter nedanför.</h3>
                </Row>
                <Row>
                    <Col xs={12} md={4}>

                    </Col>
                    <Col xs={12} md={4}>
                        
                    </Col>
                    <Col xs={12} md={4}>
                        
                    </Col>
                </Row>
            </Container>
    )
}

export default Footer