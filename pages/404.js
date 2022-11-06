import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"

const Page404 = () => {
    const router = useRouter();

    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="m-4 text-center"><em>Http Error 404!</em></h1>
                </Row>
                <Row>
                    <p className="p-2 text-center mt-5">
                        Vi hittade tyvärr inget innehåll på denna URL: <em>{`https://majgullaxelsson.se${router.asPath}`}</em>. <Link href={"/"}>Klicka här för att gå tillbaka till startsidan.</Link>
                    </p>
                </Row>
            </Container>
        </Layout>
    )
}

export default Page404