import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import HeroImage from '../components/HeroImage'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Majgull Axelssons hemsida</title>
        <meta name="description" content="majgullaxelsson.se är författaren och journalisten Majgull Axelssons officiella hemsida." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <HeroImage />
        </Row>
        <Row>
          <Col sm={12} md={4}>

          </Col>
          <Col sm={12} md={4}>
            
          </Col>
          <Col sm={12} md={4}>
            
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
