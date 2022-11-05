import axiosInstance from "../../inc/axios-instance";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

const NewsIndexPage = ({ news }) => {

    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="m-5 text-center">Senaste Nyheter:</h1>
                    <br/>
                </Row>
                <Row>
                    {news.map((item, index) => <Link key={`news-${index}`} href={`/nyheter/${item.Slug}`}>{item.Header}</Link>)}
                </Row>  
            </Container>
        </Layout>
    )

};

export default NewsIndexPage


export async function getStaticProps() {
    const news = await axiosInstance.get(`/News`)

    return {
      props: {
        news: news.data.data
      },
    }
}