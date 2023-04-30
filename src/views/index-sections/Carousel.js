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

const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Inventory Management Module",
    caption: "Inventory Management Module",
    ModalButton: "",
    ModalImageSrc:"",
    ModalParagraph:"",
    ModalTitle:"",
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Sales & Customer Orders Module ",
    caption: "Sales & Customer Orders Module ",
    ModalButton: "23131",
    ModalImageSrc:"assets/img/bg3.jpg",
    ModalParagraph:<>
    okokk
    <ol>
      <li>231</li>
      <li>232</li>
    </ol>
    ijojaoijo
    </>,
    ModalTitle:"097093",
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States",
    ModalButton: "",
    ModalImageSrc:"",
    ModalParagraph:"",
    ModalTitle:"",
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
            <h2 className="title">Products</h2>
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
                      key={item.src}
                    >
                      
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
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
