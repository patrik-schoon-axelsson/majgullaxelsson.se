import BookCard from "../../components/BookCard";
import Head from 'next/head';
import { Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../../inc/axios-instance";
import Layout from "../../components/Layout";

const BockerIndexPage = ({ books }) => {  
    
    return (
        <>
        <Head>
            <title>MajgullAxelssons.se - Böcker skrivna av Majgull Axelsson</title>
            <meta name="description" content="Information om Majgull Axelssons böcker." />
        </Head>
        <Layout>
            <Container>
                <Row>
                    <h1 className="text-center">Majgull Axelssons böcker</h1>
                    <hr />
                    <p className="text-center">
                        Majgulls böcker
                    </p>
                </Row>
                <Row>
                    {books.map((book, index) => <Col key={`col-${index}`} xs={12} sm={6} md={4}><BookCard url={book.Slug} title={book.Title} img={`https://cms.majgullaxelsson.se/assets/${book.CoverImg}`}/></Col>)}
                </Row>
            </Container>
        </Layout>
        </>
        )
};

export default BockerIndexPage

export async function getStaticProps() {
    const book = await axiosInstance.get(`/Book`)

    return {
      props: {
        books: book.data.data
      },
    }
}