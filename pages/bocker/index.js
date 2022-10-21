import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../../inc/axios-instance";
import Layout from "../../components/Layout";

const BockerIndexPage = ({ books }) => {  
    
    return (
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
                    {books.map((book, index) => <Link key={`book-${index}`} href={`bocker/${book.Slug}`}>{book.Title}</Link>)}
                </Row>
            </Container>
        </Layout>
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