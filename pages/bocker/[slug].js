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
              </Row>
              <div >
                <Image src={`https://cms.majgullaxelsson.se/assets/${book.CoverImg}`} layout="intrinsic" width={500} height={500} />
              </div>
              <Row>
                <div dangerouslySetInnerHTML={{__html: book.Description}} className="p-3" />
              </Row>
            </Container>
        </Layout>
    )
};

export default BockerPage