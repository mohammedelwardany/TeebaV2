/*eslint-disable*/
import React from "react";
import "./style.css"
// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader({knowMore}) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="#000">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              // className="n-logo logomainSize"
              style={{width:"30%" , marginBottom:"3vh"}}
              src={require("assets/img/5144234w.png")}
            ></img>
            <h1 className="h1-seo">TEEBA SYSTEMS</h1>
            <h3>Empowering your digital world with seamless software solutions.</h3>
          </div>
          <h6 className="category category-absolute">
            
            <a style={{color:"white" , cursor:"pointer"}}      
                    onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView();
                  }}>
            know more
           </a>
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
