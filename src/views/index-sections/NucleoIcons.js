import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { ModalC } from "./Modal";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons" id="aboutUs">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title" style={{color:"#000"}}>About Us</h2>
              <h5 className="description">
              Teeba Digital Transformation is a reputable and experienced company with a proven track record of 25 years in the field of digital transformation. We specialize in helping organizations embrace digital technologies and leverage them to drive innovation, enhance operational efficiency, and achieve sustainable growth.              </h5>
              {/* <h5 className="description">
              </h5> */}
              <ModalC
          ModalButton={"Know More"}
          Modaltitle={"About Us"}
          ModalParagraph={<>
  {/* Teeba Digital Transformation is a reputable and experienced company with a proven track record of 25 years in the field of digital transformation. We specialize in helping organizations embrace digital technologies and leverage them to drive innovation, enhance operational efficiency, and achieve sustainable growth. */}

Our mission is to empower businesses across industries to navigate the ever-evolving digital landscape and thrive in the digital age. With a team of seasoned professionals and a deep understanding of emerging technologies, we deliver tailored solutions that enable our clients to stay ahead of the competition and capitalize on new opportunities.
            {/* <ul>
              <li>Many business segments</li>
              <li>Management , technical support and software development , using project</li>
            </ul>
            management that leads to timely implementation with the advice of experienced consultants for implementing, tailoring and streamlining systems to clients' specific needs. Teeba Data Systems objective to develop, customize and implement the customer's turnkey solutions to automate its existing operation and the future needs.
           */}
          </>}
          ModalImageSrc={require("../../assets/img/51442342.png")}
          ModalbtnV={"none"}
          />
              
              <Button
                className="btn-round"
                color="info"
                style={{borderColor:"#993314",color:"#993314",fontWeight:"bold"}}
                href="#"
                outline
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("ContactUs")
                    .scrollIntoView();
                }}
                size="lg"
                target="_blank"
              >
                Contact Us
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img style={{width:"70%"}} src={require("../../assets/img/5144234.png")}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
