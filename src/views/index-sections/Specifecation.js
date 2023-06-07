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
  Col
} from "reactstrap";
  

const Specefecations = () =>{

    return (
        <>
        <div id="specefecations"></div>
        <Container >
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style={{color:"#993314"}}>Specefecations</h2>
                <h5 className="description" style={{fontWeight:"normal",color:"#000"}}>
                The software system offers a range of essential features designed to meet the needs of modern businesses, including Microsoft SQL or Oracle based systems, an open platform, modularity, multi-user support, client/server architecture, bilingual support, multi-company, multi-branch, and multi-currency functionality, fully integrated systems, parameterization to enable authorized users to define and alter various types of parameters, user-friendly interface, advanced security tools to configure access rights, open platforms not tied to any specific software or hardware, support for hard copy reports, and user documentation to ensure smooth implementation and ongoing use. These features make the software system a comprehensive and reliable solution for businesses seeking to streamline their operations and improve their bottom line.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login1.jpg") + ")"
                    }}
                  >
                    {/* <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p> */}
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3 style={{color:"#5d9a24"}}>
                  Our software system offers a range of key features designed to meet the needs of modern businesses:
                  </h3>
                  <ul style={{color:"#993314"}}>
                    <li>Microsoft SQL or Oracle Based Systems</li>
                    <li>Open Platform</li>
                    <li>Modularity - Multi-User</li>
                    <li>Client/Server Architecture</li>
                    <li>Bilingual</li>
                    <li>Multi-Company - Multi branches - Multi-Currency</li>
                    <li>Fully Integrated Systems</li>
                    <li>Parameterized: Various types of parameters can be defined and altered by authorized users</li>
                    <li>User Friendly</li>
                    <li>Security: System provides advanced tools to allow administrators to configure access rights to various parts of the system</li>
                    <li>Open Platforms: Systems are not tied to any specific software or hardware platforms</li>
                    <li>Hard copy reports</li>
                    <li>User's Guide Documentation</li>

                  </ul>
                  <p style={{color:"#000",fontWeight:"normal"}}>
                  Our fully-integrated system is highly parameterized, allowing authorized users to define and alter various types of parameters quickly and easily. Users will also appreciate the system's user-friendly interface, which is designed to be intuitive and easy to navigate.
                  </p>
                  <p style={{color:"#000",fontWeight:"normal"}}>
                  We take security seriously, and our system provides advanced tools to allow administrators to configure access rights to various parts of the system. Our system is built on an open platform, which means it is not tied to any specific software or hardware platforms, ensuring maximum flexibility and future-proofing.
                  </p>
                  <p style={{color:"#000",fontWeight:"normal"}}>
                  The system also supports hard copy reports and comes complete with user documentation to ensure smooth implementation and ongoing use. Overall, our software system is a comprehensive and reliable solution for businesses looking to streamline their operations and improve their bottom line.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
      </>
    )
}

export {Specefecations}