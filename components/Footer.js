import styles from  "../styles/Footer.module.css";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className={styles.topper}>
                <Container fluid className={styles.footer}>
                    <Row>
                        <h3 className="text-center">Webbsidan och allt innehåll tillhör Majgull Axelsson AB om inte annat anges. </h3>
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
            </div>
        </>
    )
}

export default Footer