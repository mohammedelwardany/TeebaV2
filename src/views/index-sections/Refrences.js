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


function Refrences() {
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    
    return (
    <>
    <div className="section section-team text-center " style={{marginTop:80,marginBottom:80,backgroundColor:"#5d9a24"}}>
          <Container>
            <h2 className="title" style={{color:"#fff"}}>Refrences</h2>
            <div className="team">
              <Row>
                <Col md="6">
                  <div className="team-player mt-5">
       
                    <h4 className="title">Magar Brothers</h4>
                    <p className="category text-white">Distributor for OPEL, ISUZU, GMC & BEDFORD</p>

                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player mt-5 ">

                    <h4 className="title">SUZUKI Trading</h4>
                    <p className="category text-white"> Sole Distributor for SUZUKI in Egypt</p>
                    
                  </div>
                </Col>

              </Row>
              <Row>
              <Col md="6">
                  <div className="team-player mt-5">
          
                    <h4 className="title">ETDCO-Sharkawy Group</h4>
                    <p className="category text-white">Distributor for MERCEDES BENZ</p>
                    
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player mt-5">
                    <h4 className="title">MASRIA</h4>
                    <p className="category text-white">Sole Distributor for MITSUBISHI</p>
                    
                  </div>
                </Col>
              </Row>

            </div>
          </Container>
        </div>
      </>
    );
  }
  
  export default Refrences;
  





