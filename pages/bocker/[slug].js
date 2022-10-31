import Image from "next/image";
import Layout from "../../components/Layout";
import axiosInstance from "../../inc/axios-instance";
import { Container, Row, Col } from "react-bootstrap";

export const getBooks = async ( ) => {
  const books = await axiosInstance.get(`/Book?limit=-1`)
  const paths = books.data.data.map((item) => ({ 
      params: { slug: item.Slug}
  }));
  
  return paths
};

export async function getStaticPaths() {

    const paths = await getBooks();

    return {paths, fallback: false}
  }
  
  
export async function getStaticProps({ params }) {
    
    const book = await axiosInstance.get(`/Book?filter[Slug][_eq]=${params.slug}`)

    return {
      props: {
        book: book.data.data[0]
      },
    }
  }

const BockerPage = ({ book }) => {
  
    return (
        <Layout>
            <Container>
              <Row>
                <h1 className="text-center mb-5">{book.Title}</h1>
                <p className="text-center">ISBN: {book.ISBN}</p>
              </Row>
              <Row>
                <Col xs={12} md={6} lg={4} >
                  <div style={{width: '60vh', height: 'auto',  position: 'relative', float: 'left'}} >
                    <Image src={`https://cms.majgullaxelsson.se/assets/${book.CoverImg}`} objectFit="contain" layout="fill" className="rounded mx-auto d-block" />
                  </div>                    
                </Col>
                <Col xs={12} md={6} lg={8}>
                  <div dangerouslySetInnerHTML={{__html: book.Description}} className="p-3" />
                </Col>
              </Row>
            </Container>
        </Layout>
    )
};

export default BockerPage