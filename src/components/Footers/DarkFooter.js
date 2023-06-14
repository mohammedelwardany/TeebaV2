import React from "react";
import "./style.css"
import { Container } from "reactstrap";
import {
  NavLink,
} from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{backgroundColor:"#000"}}>
      <Container>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between"  , alignItems:"center" ,flexWrap:"wrap"}}>
        <div style={{display:"flex" , flexDirection:"column" , justifyContent:"space-between" }} className="w-50">
        <div className="m-2">
    
<p className="FooterText">
        Follow our LinkedIn profile for the latest updates, industry insights, and thought leadership articles on digital transformation and emerging technologies. Join Teeba Digital Transformation in shaping the future of digital innovation.
</p>
<a
        href="https://www.linkedin.com/company/teeba-digital-transformation"
        target="_blank"
         id="twitter-tooltip"
         style={{textDecoration:"none"}}
          >
          <i className="fab fa-linkedin"></i>&nbsp; &nbsp; &nbsp; Teeba Digital Transformation

                </a>

                

        </div>
  
        </div>

        <div style={{display:"flex" , flexDirection:"column" , justifyContent:"space-between" }}>

        <div className="m-2" >
        Teeba Digital Transformation

        </div>

        <div className="m-2" >
        <i class="now-ui-icons location_pin"></i>
        &nbsp; &nbsp; &nbsp;
        <span>9 AL Nozha street , Nasr City , Cairo , Egypt</span>
        </div>
        <div className="m-2">
        <i class="now-ui-icons ui-1_email-85"></i>
        &nbsp; &nbsp; &nbsp;<span>info@teebasystems.com.eg</span>
        </div>
        <div className="m-2">
        <i class="now-ui-icons tech_mobile"></i>
        &nbsp; &nbsp; &nbsp; <span>+ (202) 4142191</span>
        </div>
        </div>

        {/* <div className="copyright" id="copyright" >
          © {new Date().getFullYear()}, 
          
            BitZone
          
          .
        </div> */}
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;