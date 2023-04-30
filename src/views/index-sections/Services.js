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
import { ModalC } from "./Modal";


function Services() {
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    
    return (
    <>
<div className="section section-team text-center">
<Container>
  <h2 className="title">Services</h2>
  <div className="team">
    <Row>
      <Col md="4">
        <div className="team-player mt-5">
          <img
            alt="..."
            style={{maxWidth:"200px"}}
            className="rounded-circle img-fluid img-raised"
            src={require("assets/img/avatar.jpg")}
          ></img>
          <h4 className="title">Software Development</h4>
          <ModalC
          ModalButton={"Know More"}
          Modaltitle={"Applications Software Development"}
          ModalParagraph={"Our software systems are meticulously crafted to integrate information and streamline key business functions, leveraging our team's vast expertise to fulfill your unique requirements. We employ a range of technical capabilities and adhere to industry best practices to ensure that our solutions are both reliable and effective. "}
          ModalImageSrc={require("assets/img/SoftwareDevolopment.jpg")}
          ModalBtnV={"none"}
          />

        </div>
      </Col>
      <Col md="4">
        <div className="team-player mt-5">
          <img
            alt="..."
            style={{maxWidth:"200px"}}
            className="rounded-circle img-fluid img-raised"
            src={require("assets/img/ryan1.jpg")}
          ></img>
          <h4 className="title">Technical Support</h4>
          <ModalC
          ModalButton={"Know More"}
          Modaltitle={"Technical Support"}
          ModalParagraph={"Teeba Data Systems is proud of its unique after sale services and technical support.We master the Art of listening to our customers, understand their complaints and solve their problems With the use of specially designed Database and follow-up system, outwe carry planned periodical visits This support varies between answering inquiries using telephone calls, letters, e-mails and site visits to our clients to look after their operation and provide any needed support that will keep their work running smoothly to assure system performance and thus keep on winning their good will. "}
          ModalImageSrc={require("assets/img/technicalSupport.jpg")}
          ModalBtnV={"none"}

          />
          {/* <a className="category text-info">Know More</a> */}
        </div>
      </Col>
      <Col md="4">
        <div className="team-player mt-5">
          <img
            alt="..."
            style={{maxWidth:"200px"}}
            className="rounded-circle img-fluid img-raised"
            src={require("assets/img/eva.jpg")}
          ></img>
          <h4 className="title">Training Users</h4>
          <ModalC
          ModalButton={"Know More"}
          Modaltitle={"Training Users"}
          ModalParagraph={"Training for the users is associated on the mechanisms of each software module .The operators (users) selected to receive the training are the expected direct staff responsible for the function that the particular module will support Training is held parallel to the implementation process to avoid any misunderstanding of using any functions of the system's Modules. "}
          ModalImageSrc={require("assets/img/trainingusers.jpg")}
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
  





