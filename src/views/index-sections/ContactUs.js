
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

const ContactUs = () =>{
    const [NameFocus, setNameFocus] = React.useState(false);
    const [EmailFocus, setEmailFocus] = React.useState(false);
    const [PhoneFocus, setPhoneFocus] = React.useState(false);
    const [JobTitele, setJobTitele] = React.useState(false);
    return(
 <div className="section section-contact-us text-center" id="ContactUs">
<Container>
  <h2 className="title" style={{color:"#000"}}>Contact us</h2>
  <p className="description" style={{fontWeight:"normal",color:"#000",textAlign:"start"}}>Follow our LinkedIn profile for the latest updates, industry insights, and thought leadership articles on digital transformation and emerging technologies. Join Teeba Digital Transformation in shaping the future of digital innovation.</p>
  <br/> <br/>
  {/* <p className="description" style={{fontWeight:"normal",color:"#000",textAlign:"start"}}>
  Teeba Digital Transformation <br/>
9 AL Nozha street , Nasr City , Cairo , Egypt <br/>
Phone:  + (202) 4142191<br/>
Email: info@teebasystems.com.eg<br/>

  </p> */}

  
  <Row>
    <Col className="text-center ml-auto mr-auto" lg="6" md="8">
      <InputGroup
        className={
          "input-lg" + (JobTitele ? " input-group-focus" : "")
        }
      >
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons business_badge"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="jobTitle..."
          type="text"
          onFocus={() => setJobTitele(true)}
          onBlur={() => setJobTitele(false)}
        ></Input>
      </InputGroup>
      <InputGroup
        className={
          "input-lg" + (NameFocus ? " input-group-focus" : "")
        }
      >
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons users_circle-08"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Name..."
          type="text"
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        ></Input>
      </InputGroup>
      <InputGroup
        className={
          "input-lg" + (EmailFocus ? " input-group-focus" : "")
        }
      >
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons ui-1_email-85"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Email..."
          type="text"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        ></Input>
      </InputGroup>
      <InputGroup
        className={
          "input-lg" + (PhoneFocus ? " input-group-focus" : "")
        }
      >
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons tech_mobile"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Phone..."
          type="text"
          onFocus={() => setPhoneFocus(true)}
          onBlur={() => setPhoneFocus(false)}
        ></Input>
      </InputGroup>
      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Type a message..."
          rows="4"
          type="textarea"
        ></Input>
      </div>
      <div className="send-button">
        <Button
          block
          style={{backgroundColor:"#000"}}
          className="btn-round"
          color="info"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          size="lg"
        >
          Send Message
        </Button>
      </div>
    </Col>
  </Row>
</Container>
</div> 
    )
}

export default ContactUs;