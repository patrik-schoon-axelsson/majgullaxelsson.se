import axiosInstance from "../../inc/axios-instance";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

export const getNews = async ( ) => {
    const news = await axiosInstance.get(`/News?limit=-1`)
    const paths = news.data.data.map((item) => ({ 
        params: { slug: item.Slug}
    }));
    
    return paths
  };
  
  export async function getStaticPaths() {
  
      const paths = await getNews();
  
      return {paths, fallback: false}
    }
    
    
  export async function getStaticProps({ params }) {
      
      const news = await axiosInstance.get(`/News?filter[Slug][_eq]=${params.slug}`)
  
      return {
        props: {
          news: news.data.data[0]
        },
      }
    }


const NewsPage = ({ news }) => {

    const dateOffPost = new Date(news.date_created).toLocaleDateString()

    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="text-center mb-5 display-handwriting">{news.Header} - ({dateOffPost})</h1>
                </Row>
                <Row>
                    <div dangerouslySetInnerHTML={{__html: news.Contents}} className="text-center m-2" />
                </Row>
            </Container>
        </Layout>
    )

};

export default NewsPage