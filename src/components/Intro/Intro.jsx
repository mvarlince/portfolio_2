import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Intro() {
  return (
    <main>
      <Container fluid className="p-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            md={{ span: 7, offset: 5 }}
            lg={{ span: 6, offset: 4 }}
            xl={5}
            className="p-4 height-100vh;"
          >
            <h1>
              <span>Hi there! My name is</span> Varlince Meran
            </h1>
            <p>
              I am a software developer living in
              south Florida. I have 6 years of experience in technical roles.
              <br />
              <br />
              Currently a C#/.NET developer at a non-profit organization writing clean and
              scalable code. I have a knack for problem-solving, a talent for
              clear communication, and a team player attitude. 
              <br />
              <br />
              I love Japanese cars 🏎️, soccer ⚽️ and music 🎶🎹.
            </p>
            <HashLink to="/#portfolio" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                variant="outline-danger"
                className="button-style button-effect"
              >
                See Portfolio
              </Button>
            </HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
