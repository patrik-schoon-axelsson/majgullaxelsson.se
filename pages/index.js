import Link from 'next/link';
import Head from 'next/head';
import axiosInstance from '../inc/axios-instance';
import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage';
import { Container, Row, Col } from 'react-bootstrap';


export default function Home({ books, news }) {
  return (
    <Layout>
      <Head>
        <title>Majgull Axelssons hemsida</title>
        <meta name="description" content="majgullaxelsson.se är författaren och journalisten Majgull Axelssons officiella hemsida." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <HeroImage latestNews={news[0]} />
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <h4 className="text-center mt-4">Nyheter</h4>
            <hr/>
            <ul className="list-group">
              {news.map((item, index) => <li key={`news-${index}`} className="list-group-item"><Link href={`/nyheter/${item.Slug}`}>{item.Header}</Link></li>)}
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <h4 className="text-center mt-4">Majgulls Böcker</h4>
            <hr/>
            <ul className="list-group">
              {books.map((book, index) => <li key={`bocker-${index}`} className="list-group-item"><Link href={`/bocker/${book.Slug}`}>{book.Title}</Link></li>)}
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <h4 className="text-center mt-4">Externa Länkar</h4>
            <hr/>
            <ul className="list-group">
              <li className="list-group-item">Intervjuer och liknande</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const books = await axiosInstance.get("/Book");
  const news = await axiosInstance.get("/News");
  return {
    props: {
      books: books.data.data,
      news: news.data.data
    },
  }
}