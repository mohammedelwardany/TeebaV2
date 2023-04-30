import React from "react";

import {
    Button,
    FormGroup,
    Container,
    Modal,
    ModalBody,
    Row,
    Col,
    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,
  } from "reactstrap";
  

const AboutUsModal = ({ModalButton,Modaltitle,ModalImageSrc,ModalParagraph}) =>{
    const [modal1, setModal1] = React.useState(false);
    return (
        <>
        <Button
        color="info"
        className="mr-1"
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
                  style={{maxWidth:450}}
                  src={ModalImageSrc}
                ></img>
                </div>
                  <p>
                    {ModalParagraph}
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="default" type="button">
                    Nice Button
                  </Button>
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

export {AboutUsModal}