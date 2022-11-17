import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import styles from "../styles/HeroImage.module.css";

const HeroImage = (props) => {
    return (
        <div className={styles.heroImage}>
            <Container>
                <Row>
                    <h1 className="pt-5 m-3 text-center display-handwriting">Majgull Axelsson</h1>
                </Row>
                <Row>
                    <p className="m-5 text-center display-handwriting">Författare, journalist, debattör.</p>
                </Row>
                <br/>
                <Row >
                    <h4 className="mb-5 text-center">Senaste Uppdatering på sidan:</h4>
                    <br/>
                    <Link href={`/nyheter/${props.latestNews.Slug}`}>
                        <a className="btn btn-light"><em className={styles.heroImgAnchorBtn}>{props.latestNews.Header || "Senaste Nytt"}</em></a>
                    </Link>
                </Row>
            </Container>
        </div>
    )
};

export default HeroImage