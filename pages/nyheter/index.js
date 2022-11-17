import NewsCard from "../../components/NewsCard";
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
            </Container>
            <Container fluid className="text-center">
                {news.map((item, index) => <NewsCard key={`news-${index}`} evenIndex={(index % 2)} title={item.Header} content={item.Contents} slug={item.Slug} />)}
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