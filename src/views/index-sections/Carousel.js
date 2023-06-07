import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Modal
} from "reactstrap";
import { ModalC } from "./Modal";

// core components

const P_InventoryManagementModule = [
  "Powerful and Flexible Inventory Management",
  "Multi Companies",
  "Multi branches",
  "Multi Stores",
  "Comprehensive Item Definition",
  "Categorization and Item Grouping",
  "Accurate unit costing",
  "PMC follow-up  ( fast, medium, slow, etc… )",
  "Comprehensive Daily and historical transactions follow-up",
  "Various types of documents  ( Purchase, issue, receipt, transfer, etc… )",
  "Stocktaking follow-up",
  "Facility of using Bar-code",
  "On-Line inquiry of all types of daily and historical transactions",
  "Facility of using Bar-code",
  "Integration with Purchasing, Car Service Center Management and General Ledger."
]

const P_Sales=[
  "Customer's Database detailed information",
  "Items selling price Automatic calculation",
  "Customer order preparation and follow-up",
  "Customer order to sales invoice processing",
  "Direct sales (no customer order)",
  "Sales Invoices / Return Sales Invoices",
  "Sales Taxes",
  "Other taxes and stamps",
  "Discounts (per invoice and per item)",
  "Integration with Inventory, accounts receivable, Car Service Center Management and general ledger ."
]

const P_Purching=[
  "Vendors Information",
  "Powerful ordering system to build automatic purchase order based on different and advanced ordering techniques",
  "Local market and imported ordering",
  "Partial Shipment Handling",
  "Orders Follow-up - Orders Status –:",
  "(Order confirmation, Shipping, Port arrival (for imported items), At store door, final receiving and addition to Data Base)",
  "Multi Currencies",
  "Cost sheet manual control for each received batch",
  "Automatic Costing (weighted average)",
  "Selling price recalculation and suggestion to change after receiving",
  "Selling price automatic update",
  "Vendor Back Order",
  "Integration with Inventory, Accounts Payable, and General Ledger"
]

const P_general = [
  "Flexible Chart of Account",
  "Multi companies/ multi branches / multi cost centers",
  "Multi Currency",
  "Ability to handle two years at the same time (current year, last year)",
  "Ability to access and process information for previous years",
  "On Line Transactions Checking (total debit=total credit ,etc…)",
  "Trial balance",
  "Automatic End of Year Closing",
  "Automatic New Year Opening",
  "Account balance consolidation/ reconciliation",
  "Integration with all running modules ."
]

const P_Account_PayPal =[
  "Vendors Database",
  "Maintain vendor's accounts and balances",
  "Payable Invoices follow up",
  "Payments, over due payments and aging analysis",
  "Automatic handling of invoices and payments",
  "Checks and promissory notes follow up",
  "Integrated with purchasing and general ledger modules"
]

const P_Account_Receivable = [
  "Customers Database",
  "Maintain customer's accounts and balances",
  "Receivable Invoices follow up",
  "Payments, over due payments and aging analysis",
  "Automatic handling of invoices and payments",
  "Checks and promissory notes follow up",
  "Integrated with sales and general ledger modules"
]

const P_Payroll = [
  "Payroll Control",
  "Basic salaries handling",
  "Cost centers Handling",
  "Salaries Earnings and Deductions",
  "Salaries and Salaries Slips",
  "Allowances Control",
  "Loans and different installments Control",
  "Penalties & Incentives Control",
  "Overtime Control",
  "Automatic Calculation of tax, social security, etc",
  "Integration with General Ledger"
]

const items = [
  {
    src: require("assets/product_Images/wepik-export-202305010041361.jpg"),
    altText: "Inventory Management Module",
    caption: "Inventory Management Module",
    ModalButton: "Read More",
    ModalImageSrc:require("assets/product_Images/wepik-export-20230501004136.jpeg"),
    ModalParagraph:
    P_InventoryManagementModule.map((element) => {
      return(
      <ul>
        <li>{element}</li> 
      </ul>    
      )   
    })
    ,
    ModalTitle:"Inventory Management Module",
    id:0
  },
  {
    src: require("assets/product_Images/Customer Orders1.jpg"),
    altText: "Sales & Customer Orders Module ",
    caption: "Sales & Customer Orders Module ",
    ModalButton: "Read More",
    ModalImageSrc:require("assets/product_Images/Customer Orders.jpg"),
    ModalParagraph:
    P_Sales.map((element) => {
      return(
      <ul>
        <li>{element}</li> 
      </ul>    
      )   
    }),
    ModalTitle:"Sales & Customer Orders Module",
    id:1
  },
  {
    src: require("assets/product_Images/Purchasing1.jpg"),
    altText: "Purchasing Module",
    caption: "Purchasing Module",
    ModalButton: "Read More",
    ModalImageSrc:require("assets/product_Images/Purchasing.jpeg"),
    ModalParagraph:
    P_Purching.map((element) => {
      return(
      <ul>
        <li>{element}</li> 
      </ul>    
      )   
    }),
    ModalTitle:"Purchasing Module",
    id:2
  }
  ,
  {
    src: require("assets/product_Images/General Ledger1.jpg"),
    altText: "General Ledger Module",
    caption: "General Ledger Module",
    ModalButton: "Read More",
    ModalImageSrc:require("assets/product_Images/General Ledger.jpg"),
    ModalParagraph:
    P_general.map((element) => {
      return(
      <ul>
        <li>{element}</li> 
      </ul>    
      )   
    }),
    ModalTitle:"General Ledger Module",
    id:3
  }
  ,
  {
    src: require("assets/product_Images/Accounts Payable1.jpg"),
    altText: "Accounts Payable Module ",
    caption: "Accounts Payable Module ",
    ModalButton: "Read More",
    ModalImageSrc:require("assets/product_Images/Accounts Payable.jpg"),
    ModalParagraph:
    P_Account_PayPal.map((element) => {
      return(
      <ul>
        <li>{element}</li> 
      </ul>    
      )   
    }),
    ModalTitle:"Accounts Payable Module",
    id:4
  },
  {
    src: require("assets/product_Images/Accounts Receivable1.jpg"),
    altText: "Accounts Receivable Module",
    caption: "Accounts Receivable Module",
    ModalButton: "Read More",
    ModalImageSrc:require("assets/product_Images/Accounts Receivable.jpg"),
    ModalParagraph:
    P_Account_Receivable.map((element) => {
      return(
      <ul>
        <li>{element}</li> 
      </ul>    
      )   
    }),
    ModalTitle:"Accounts Receivable Module",
    id:5
  },
  {
    src: require("assets/product_Images/wepik-export-202305010104141.jpg"),
    altText: "Payroll Module",
    caption: "Payroll Module",
    ModalButton: "Read More",
    ModalImageSrc:require("assets/product_Images/wepik-export-20230501010414.jpg"),
    ModalParagraph:
    P_Payroll.map((element) => {
      return(
      <ul>
        <li>{element}</li> 
      </ul>    
      )   
    }),
    ModalTitle:"Payroll Module",
    id:6
  }
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h2 className="title" style={{color:"#993314"}}>Products</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.id}


                    >
                      
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5 className="title">{item.caption}</h5>
                        <ModalC 
                        ModalBtnV={"none"}
                        ModalButton={item.ModalButton}
                        ModalImageSrc={item.ModalImageSrc}
                        ModalParagraph={item.ModalParagraph}
                        Modaltitle={item.ModalTitle}
                        />
                      </div>
                      
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
