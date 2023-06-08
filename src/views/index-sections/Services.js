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

                  <h4 className="title">App Security</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"App Security"}
                    ModalParagraph={
                      "Offering app security services guarantees the privacy of user data in businesses. We apply app security solutions that protect against common attacks. Following the best secure coding practices lead to security vulnerability discovery and mitigation. "
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

                  <h4 className="title">Assessment Services</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Assessment Services"}
                    ModalParagraph={
                      "Assisting business leaders in becoming more confident about security comes from identifying risks and mitigating them. We continuously assess businesses' security, leading to steady development that becomes part of each environment."
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
                  <h4 className="title">Cloud Security</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Cloud Security"}
                    ModalParagraph={
                      "Safeguarding sensitive data stored in the cloud is a major role that Teeba succeeds in managing to ensure data security. We deliver flexible cloud security solutions that can scale and adapt to the changing needs of businesses."
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

                  <h4 className="title">Device Security</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Device Security"}
                    ModalParagraph={
                      "Teeba helps businesses keep their devices safe against viruses, ransomware, spyware, and adware, diminishing the risk of data loss. By implementing encryption, strong authentication methods, and secure storage, data is protected from unauthorized access, data breaches, and theft. "
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

                  <h4 className="title">Managed Security Services</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Managed Security Services"}
                    ModalParagraph={
                      "MSS (Managed Security Services) We are in charge of managing, enhancing, and monitoring businesses' security posture while utilizing their resources, knowledge, and technology. Our specialists examine security events, enabling quick identification and action against security lapses or anomalies."
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
                  <h4 className="title">Network Security</h4>
                  <ModalC
                    ModalButton={"Know More"}
                    Modaltitle={"Network Security"}
                    ModalParagraph={
                      "We provide email filtering, antivirus software, and intrusion detection and prevention systems (IDS/IPS). This aids companies in identifying and thwarting rogue software, viruses, and other activities. Access restrictions, secure protocols, and encryption are implemented to protect sensitive data sent via business networks."
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
