import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import skillDev from "../../data/skill-dev.json";
import skillTechnologies from "../../data/skill-technologies.json";
import skillAICloud from "../../data/skill-ai-cloud.json";
import Panel from "./Panel.jsx";
import EasterEgg from "./EasterEgg.jsx";

export default function Skill() {
  return (
    <section>
      <Container id="skills" className="p-5">
        <Row>
          <Col className="text-center">
            <h2 className="text-white">
              Skills
            </h2>
          </Col>
        </Row>
        "
        <Row className="justify-content-center">
          <Col md={5} className="text-center">
            <h3 className="text-white">Coding Languagues</h3>
            {skillDev.map((skill) => (
              <>
                <Panel iconName={skill.src} />
                <p className="text-white" > {skill.title} </p>
              </>
            ))}
          </Col>

          <Col md={4} className="text-center">
            <h3 className="text-white">Technologies</h3>
            {skillTechnologies.map((tech) => (
              <>
                <Panel iconName={tech.src} />
                <p className="text-white" > {tech.title} </p>
              </>
            ))}
          </Col>

          <Col md={3} className="text-center">
            <h3 className="text-white">AI/Cloud</h3>
            {skillAICloud.map((element) => (
              <>
              <Panel iconName={element.src} />
              <p className="text-white" > {element.title} </p>
              </>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
