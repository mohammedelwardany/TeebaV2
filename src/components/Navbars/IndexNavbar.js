import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import logoImg from "../../assets/img/5144234w.png"

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{backgroundColor:"#5d9a24"}}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
            >
              <img src={logoImg} width={70} />
            </NavbarBrand>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  {/* <i className="now-ui-icons design_app mr-1"></i> */}
                  <p>services</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        .scrollIntoView();
                    }}
                    tag={Link}>
                    Applications Software Development
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        .scrollIntoView();
                    }}
                    tag={Link}>
                    Technical Support
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        .scrollIntoView();
                    }}
                    tag={Link}>
                    Training for the users
                  </DropdownItem>

                  {/* <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  {/* <i className="now-ui-icons design_app mr-1"></i> */}
                  <p>products</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("carousel")
                        .scrollIntoView();
                    }}

                    tag={Link}>
                    Inventory Management
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("carousel")
                        .scrollIntoView();
                    }}
                    tag={Link}>
                    Sales & Customer Orders
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("carousel")
                        .scrollIntoView();
                    }} tag={Link}>
                    Purchasing
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("carousel")
                        .scrollIntoView();
                    }} tag={Link}>
                    General Ledger
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("carousel")
                        .scrollIntoView();
                    }} tag={Link}>
                    Accounts Payable
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("carousel")
                        .scrollIntoView();
                    }} tag={Link}>
                    Accounts Receivable
                  </DropdownItem>
                  <DropdownItem to=""
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("carousel")
                        .scrollIntoView();
                    }} tag={Link}>
                    Payroll
                  </DropdownItem>
                  {/* <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("specefecations")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>specefecation</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#specefecations"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("specefecations")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Refrences</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("aboutUs")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>About Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  style={{backgroundColor:"#fff",color:"#5d9a23"}}
                  color="info"
                  href=""
                  id="upgrade-to-pro"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("ContactUs")
                      .scrollIntoView();
                  }}
                >
                  {/* <i className="now-ui-icons arrows-1_share-66 mr-1"></i> */}
                  <p>Contact Us</p>
                </Button>

              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
