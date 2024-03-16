import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Experience() {

    const handleDownload = () => {
      window.open('Varlince_Meran_Resume_2024.pdf', '_blank');
    }

  return (
    <main>
      <Container fluid id="three-things" className="p-5 justify-content-center align-items-cente">
        <Row>
          <Col>
            <h2 className="text-center">
              Professional Experience
              <span>My career so far</span>
            </h2>
          </Col>
        </Row>
        
        <Row sm={8} lg={3} className="justify-content-center g-5">
          <h3 >
            .NET Developer
            <span className="d-md-block"></span>
          </h3>
          <p>
            DebtHelper <br></br> July 2023 - Present
          </p>
        </Row>

        <Row sm={8} lg={3} className="justify-content-center g-5">
            <h3 className="text-center">
              Software Engineer Intern
              <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Boca Code <br></br> March 2023 - June 2023
            </p>
          </Row>

          <Row sm={8} lg={3} className="justify-content-center g-5">
            <h3 className="text-center">
              Software Support Analyst <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Anthology Inc. + Blackboard <br></br> May 2019 - March 2022
            </p>
          </Row>

          <Row sm={8} lg={3} className="justify-content-center g-5">
            <h3 className="text-center">
              Application Support Specialist <br></br>
              <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Honorlock Proctoring <br></br> April 2018 - May 2019
            </p>
          </Row>

          <Row sm={8} lg={3} className="justify-content-center g-5">
            <h3 className="text-center">
              Technical Assistant <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Florida Atlantic University <br></br> January 2017 - May 2018
            </p>
          </Row>

          <Row sm={8} lg={3} className="justify-content-center g-5">
            <h3 className="text-center">
              Information Technology Intern <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Broward College - Campus Technology <br></br> August 2016 -
              December 2016
            </p>
            
          </Row>
          <Button
                size="lg"
                variant="outline-danger"
                className="button-style position-center"
              >
                           <a
            href='Varlince_Meran_Resume_2024.pdf'
            className="flex justify-between items-center w-full text-white"
            onClick={handleDownload}
          >
            View My Resume
          </a> 
              </Button>
      </Container>
    </main>
  );
}
