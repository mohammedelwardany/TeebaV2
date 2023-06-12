import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { ModalC } from "./Modal";

function Services() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);

  return (
    <>
      <div className="section section-team text-center" id="services">
        <Container>
          <h2 className="title" style={{ color: "#993314" }}>
            Services
          </h2>
          <div className="team">
            <Row>
              <Col md="4">
                <div className="team-player mt-5">
                  <img
                    alt="..."
                    style={{ maxWidth: "200px" }}
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/services/AppSecurity.png")}
                  ></img>

                  <h4 className="title">Digital Strategy</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Digital Strategy"}
                    ModalParagraph={
                      "We collaborate closely with our clients to develop comprehensive digital strategies aligned with their business objectives. Our strategies encompass market analysis, customer insights, technology roadmaps, and implementation plans to guide organizations through their digital transformation journey."
                    }
                    ModalImageSrc={require("assets/img/services/AppSecurity.png")}
                    // imageeeee={<ImageService1 style={{maxWidth:200,marginBlock:"5vh"}}/>}
                    ModalBtnV={"none"}
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="team-player mt-5">
                  <img
                    alt="..."
                    style={{ maxWidth: "200px" }}
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/services/Assessmentservices.png")}
                  ></img>

                  <h4 className="title">Agile Software Development</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Agile Software Development"}
                    ModalParagraph={
                      "We offer end-to-end software development services using agile methodologies, ensuring rapid and iterative delivery of high-quality digital solutions. Our expertise spans custom software development, web and mobile applications, enterprise systems integration, and more."
                    }
                    ModalImageSrc={require("assets/img/services/Assessmentservices.png")}
                    // imageeeee={<ImageService1 style={{maxWidth:200,marginBlock:"5vh"}}/>}

                    ModalBtnV={"none"}
                  />
                  {/* <a className="category text-info">Know More</a> */}
                </div>
              </Col>
              <Col md="4">
                <div className="team-player mt-5">
                  <img
                    alt="..."
                    style={{ maxWidth: "200px" }}
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/services/CloudSecurity.png")}
                  ></img>
                  <h4 className="title">Cloud Solutions</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Cloud Solutions"}
                    ModalParagraph={
                      "We assist businesses in migrating to cloud platforms, leveraging the power of scalable infrastructure, and enabling cost optimization. Our cloud services include strategy development, cloud architecture design, migration planning, and ongoing cloud management and support."
                    }
                    ModalImageSrc={require("assets/img/services/CloudSecurity.png")}
                    ModalBtnV={"none"}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div className="team">
            <Row>
              <Col md="4">
                <div className="team-player mt-5">
                  <img
                    alt="..."
                    style={{ maxWidth: "200px" }}
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/services/DeviceSecurity.png")}
                  ></img>

                  <h4 className="title">Data Analytics and AI</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Data Analytics and AI"}
                    ModalParagraph={
                      "We help organizations harness the power of data by implementing advanced analytics and artificial intelligence (AI) solutions. Our services include data strategy, data governance, predictive analytics, machine learning, and data visualization to enable data-driven decision-making."
                    }
                    ModalImageSrc={require("assets/img/services/DeviceSecurity.png")}
                    // imageeeee={<ImageService1 style={{maxWidth:200,marginBlock:"5vh"}}/>}
                    ModalBtnV={"none"}
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="team-player mt-5">
                  <img
                    alt="..."
                    style={{ maxWidth: "200px" }}
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/services/ManagedSecurityServices.png")}
                  ></img>

                  <h4 className="title">User Experience (UX) Design</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"User Experience (UX) Design"}
                    ModalParagraph={
                      "We prioritize creating intuitive and engaging user experiences to enhance customer satisfaction and drive user adoption. Our UX design services encompass user research, prototyping, wireframing, and usability testing to deliver user-centric digital products and services."
                    }
                    ModalImageSrc={require("assets/img/services/ManagedSecurityServices.png")}
                    // imageeeee={<ImageService1 style={{maxWidth:200,marginBlock:"5vh"}}/>}

                    ModalBtnV={"none"}
                  />
                  {/* <a className="category text-info">Know More</a> */}
                </div>
              </Col>
              <Col md="4">
                <div className="team-player mt-5">
                  <img
                    alt="..."
                    style={{ maxWidth: "200px" }}
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/services/NetworkSecurity.png")}
                  ></img>
                  <h4 className="title">Cybersecurity</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Cybersecurity"}
                    ModalParagraph={
                      "We prioritize the security of digital assets and sensitive data, providing comprehensive cyber security solutions. Our services include vulnerability assessments, penetration testing, security audits, incident response, and security awareness training to safeguard organizations from evolving cyber threats."
                    }
                    ModalImageSrc={require("assets/img/services/NetworkSecurity.png")}
                    ModalBtnV={"none"}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Services;
