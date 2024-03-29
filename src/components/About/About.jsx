import { Container, Row, Col, Image } from "../../utilis/Bootstrap.jsx";

export default function About() {
  // const [imageIndex, setImageIndex] = useState(0);

  // const imageArray = [
  //   "heashot.webp",
  // ];

  // if (imageIndex >= imageArray.length) setImageIndex(0);

  return (
    <Container id="about" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">About</h2>
        </Col>
      </Row>
 
      <Row className="justify-content-center">
        <Col xs={8} md={5} lg={3}>
          <Image
            src={`/images/hdsht.png`}
            alt="Varlince Meran"
            className="headshot button-effect border-style"
            fluid
            style={{ cursor: "zoom-in" }}
          />
        </Col>

        <Col md={8} lg={6} className="text-white">
          <p>
            Growing up, I was always fascinated by the way technology was
            changing the world and the possibilities that it opened up for
            people. I wanted to be in the forefront of technology, amongst those
            who are moving society and become a digital creator.
          </p>

          <p>
            Currently, I am a software engineer and lately I have been learning
            C#/.NET and PHP.
          </p>

        </Col>
      </Row>
    </Container>
  );
}
