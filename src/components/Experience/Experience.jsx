import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Experience() {

    const handleDownload = () => {
      window.open('Valince_Meran_Resume_2023.pdf', '_blank');
    };

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
            <h3 className="text-center">
              Software Engineer Intern
              <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Boca Code <br></br> March 2023 - Present
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
            {/* <p className="text-center text-md-start">

              As a software support analyst, I managed 8+ client accounts and ranked in the top 5 for incident resolution. 
              I troubleshooted errors and data issues, reproduced
              defects, and worked with cross-functional teams to configure an
              enterprise Azure-based application. <br></br> Additionally, I managed
              customer support accounts for efficient incident routing and app
              upgrades/releases.
            </p> */}
          </Row>

          <Row sm={8} lg={3} className="justify-content-center g-5">
            <h3 className="text-center">
              Application Support Specialist <br></br> Exam Coordinator{" "}
              <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Honorlock Proctoring <br></br> April 2018 - May 2019
            </p>
            {/* <p className="text-center text-md-start">
              As an application support specialist, I resolved
              high-priority customer issues through live chats, emails, and
              phone calls. I also mentored tier 1 agents with handling
              complex proctoring tasks to ensure the smooth delivery of
              proctoring services.<br></br> 
              I collaborated with management and engineering teams
              to complete critical tasks such as data analysis, bug reporting,
              manual software testing, and information security training
              programs. 
            </p> */}
          </Row>

          <Row sm={8} lg={3} className="justify-content-center g-5">
            <h3 className="text-center">
              Technical Assistant <span className="d-md-block"></span>
            </h3>
            <p>
              {" "}
              Florida Atlantic University <br></br> January 2017 - May 2018
            </p>
            {/* <p className="text-center text-md-start">
              As a technical assistant, I led the course migration to a
              cloud-based Learning Management System and provided immediate
              technical support. I also resolved computer access, password,
              printer, and software issues for faculty, team members, and
              managers. <br></br> 
              In addition, I worked on various projects assigned by
              management, including media coordination, video production, and
              data analytics.
            </p> */}
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
            {/* <p className="text-center text-md-start">
              As an IT intern, I served as the primary point of contact for
              faculty seeking technical assistance through various channels. I
              provided technical support to technicians by installing,
              configuring, moving, and troubleshooting hardware and software
              issues. <br></br> 
              Additionally, I proactively monitored the Service Desk
              ticket queue, efficiently resolving tickets and managing
              escalations.
            </p> */}
          </Row>
          <Button
                size="lg"
                variant="outline-danger"
                className="button-style position-center"
              >
                           <a
            href='Valince_Meran_Resume_2023.pdf'
            className="flex justify-between items-center w-full text-white"
            onClick={handleDownload}
          >
            Download My Resume
          </a> 
              </Button>
      </Container>
    </main>
  );
}
