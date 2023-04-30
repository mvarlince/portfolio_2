import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Intro() {

  return (
    <main>
      <Container fluid className="main-container p-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col 
            md={{ span: 7, offset: 5 }} 
            lg={{ span: 6, offset: 4 }} 
            xl={5} 
            className="about-col">
              <h1><span>Hello, I am</span> Jiho Sohn</h1>
              <p>I am a software engineer residing in south Florida. I love JavaScript, React.js, CSS, Python, MongoDB and more. When I'm not crafting code, you will find me tending to my garden, keeping my Belgian Malinois on her toes (paws), and revving up my Ducati like it's an API.</p>
              <HashLink to="/#portfolio"><Button>See Portfolio</Button></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}