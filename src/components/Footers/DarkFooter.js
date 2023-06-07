import React from "react";

import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{backgroundColor:"#000"}}>
      <Container>
        <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between"  , alignItems:"center"}}>
        <div style={{display:"flex" , flexDirection:"column" , justifyContent:"space-between" }}>
        <div className="m-2" >
        <i class="now-ui-icons location_pin"></i>
        &nbsp; &nbsp; &nbsp;
        <span>9 Saudai Company Buildings,
          Nozha street,
          Cairo , Egypt</span>
        </div>
        <div className="m-2">
        <i class="now-ui-icons ui-1_email-85"></i>
        &nbsp; &nbsp; &nbsp;<span>teeba1@tedata.net.eg</span>
        </div>
        <div className="m-2">
        <i class="now-ui-icons tech_mobile"></i>
        &nbsp; &nbsp; &nbsp; <span>(202)4142191</span>
        </div>
        </div>


        <div className="copyright" id="copyright" >
          © {new Date().getFullYear()}, 
          
            BitZone
          
          .
        </div>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;