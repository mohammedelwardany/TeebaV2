import React from "react";
// reactstrap components
import "./style.css"
import { Button, Container, Row, Col } from "reactstrap";
import { ModalC } from "./Modal";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons" id="aboutUs">
        <Container>
              <h2 className="title title-center-md" style={{color:"#000"}}>About Us</h2>
          <Row>
            <Col lg="6" md="24">
              <h5 className="description" style={{color:"#000",fontWeight:"normal"}}>
              Teeba Digital Transformation is a reputable and experienced company with a proven track record of 25 years in the field of digital transformation. We specialize in helping organizations embrace digital technologies and leverage them to drive innovation, enhance operational efficiency, and achieve sustainable growth.              </h5>
              Our mission is to empower businesses across industries to navigate the ever-evolving digital landscape and thrive in the digital age. With a team of seasoned professionals and a deep understanding of emerging technologies, we deliver tailored solutions that enable our clients to stay ahead of the competition and capitalize on new opportunities.

              
              
              {/* <h5 className="description">
              </h5> */}

            </Col>
            <Col lg="6" md="24" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div className="icons-container displaynonemd" >
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




// <ModalC
// ModalButton={"Know More"}
// Modaltitle={"About Us"}
// ModalParagraph={<>

// Our mission is to empower businesses across industries to navigate the ever-evolving digital landscape and thrive in the digital age. With a team of seasoned professionals and a deep understanding of emerging technologies, we deliver tailored solutions that enable our clients to stay ahead of the competition and capitalize on new opportunities.

// </>}
// ModalImageSrc={require("../../assets/img/51442342.png")}
// ModalbtnV={"none"}
// />
    
//     <Button
//       className="btn-round"
//       color="info"
//       style={{borderColor:"#000",color:"#000",fontWeight:"bold"}}
//       href="#"
//       outline
//       onClick={(e) => {
//         e.preventDefault();
//         document
//           .getElementById("ContactUs")
//           .scrollIntoView();
//       }}
//       size="lg"
//       target="_blank"
//     >
//       Contact Us
//     </Button>