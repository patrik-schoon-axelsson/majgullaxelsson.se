import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"

const Page404 = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="m-4 text-center">Http Error 404!</h1>
                </Row>
                <Row>
                    <p className="p-2 text-center">
                        Vi hittade ingenting här. Försök igen senare.
                    </p>
                </Row>
            </Container>
        </Layout>
    )
}

export default Page404