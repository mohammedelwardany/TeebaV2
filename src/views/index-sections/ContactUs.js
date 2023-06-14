import "./style.css"
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
    const [JobTitleText, setJobTitleText] = React.useState("");
    const [nameText, setnameText] = React.useState("");
    const [phoneText, setphoneText] = React.useState("");
    const [EmailText, setEmailText] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = () => {
      // const { First_name, Last_name, Email, Message } = values;
      // console.log({
      //   name: nameText,
      //   email: EmailText,
      //   phone: phoneText,
      //   message: message,
      //   jop: JobTitleText
      // });
      // Construct the mailto link with form values
      const mailtoLink = `mailto:info@teebasystems.com.eg?subject=Contact Form Submission&body=First Name:${JobTitleText} ${nameText}%0D%0AEmail: ${EmailText} %0D%0APhone: ${phoneText}%0D%0AMessage: ${message}`;
  
      // Open the user's email client with the mailto link
      window.location.href = mailtoLink;
    };



    return(
 <div className="section section-contact-us text-center" id="ContactUs">
<Container>
  <h2 className="title" style={{color:"#000"}}>Contact us</h2>
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
          onChange={(e)=>{setJobTitleText(e.target.value)}}
        ></Input>
      </InputGroup>
      <InputGroup
        className={
          "input-lg focusing" + (NameFocus ? " input-group-focus" : "")
        }
        style={{borderColor:"#000 !important"}}
      >
        <InputGroupAddon addonType="prepend" className="focusing" style={{borderColor:"black"}}>
          <InputGroupText>
            <i className="now-ui-icons users_circle-08"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Name..."
          type="text"
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
          onChange={(e)=>{setnameText(e.target.value)}}
        ></Input>
      </InputGroup>
      <InputGroup

        className={
          "input-lg focusing" + (EmailFocus ? " input-group-focus focusing" : "")
        }
      >
        <InputGroupAddon addonType="prepend" className="focusing">
          <InputGroupText>
            <i className="now-ui-icons ui-1_email-85"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Email..."
          type="text"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          onChange={(e)=>{setEmailText(e.target.value)}}
        ></Input>
      </InputGroup>
      <InputGroup
        className={
          "input-lg" + (PhoneFocus ? " input-group-focus" : "")
        }
        style={{borderColor:"#000"}}
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
          onChange={(e)=>{setphoneText(e.target.value)}}
        ></Input>
      </InputGroup>
      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Type a message..."
          rows="4"
          type="textarea"
          onChange={(e)=>{setMessage(e.target.value)}}
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
          onClickCapture={handleSubmit}
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