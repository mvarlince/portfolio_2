import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";

export default function List () {

  return (
    <section>
      <Container id="skills" className="p-5">        
        <Row>
          <Col className="text-center">
            <h2 className="text-white">Social
              <span><q>Let's connect and collab!</q></span></h2>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p className="text-white">Work in Progress: - links - </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}