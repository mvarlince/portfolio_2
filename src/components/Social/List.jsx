import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import data from "../../data/social.json";
import Panel from "./Panel.jsx";

export default function List() {
  return (
    <section>
      <Container id="skills" className="p-5">
        <Row>
          <Col className="text-center">
            <h2 className="text-white">
              Social
              <span>Let's connect and collab!</span>
            </h2>
          </Col>
        </Row>
        <Row>
          {data.map((element) => {
            return <Panel key={element.id} element={element} />
          })}
        </Row>
      </Container>
    </section>
  )
}
