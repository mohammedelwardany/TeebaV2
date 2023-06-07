import React from "react";

import {
    Button,
    FormGroup,
    Container,
    Modal,
    ModalBody,
    Card,  CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody,
    Row,
    Col,
    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,
  } from "reactstrap";
  

const ModalC = ({ModalButton,Modaltitle,ModalImageSrc,ModalParagraph,ModalbtnV,ModalBtnV}) =>{
    const [modal1, setModal1] = React.useState(false);
    return (
        <>
        <Button
        color="info"
        className="mr-1"
        onClick={() => setModal1(true)}
        style={{display:ModalbtnV,backgroundColor:"#5d9a24"}}
      >
        {ModalButton}
      </Button>

      <Button
                className="btn-round mr-1"
                color="info"
                size="lg"
                target="_blank"
                style={{display:ModalBtnV,backgroundColor:"#993314"}}
                onClick={() => setModal1(true)}
              >
                {ModalButton}
              </Button>

      <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">{Modaltitle}</h4>

                </div>
                <ModalBody>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:10}}>

                <img
                  alt="..."
                  className="rounded"
                  style={{maxWidth:300}}
                  src={ModalImageSrc}
                ></img>
                </div>
                  <p>
                    {ModalParagraph}
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <div>
                    
                  </div>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
      </>
    )
}

export {ModalC}