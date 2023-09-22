import { Container, Row, Col } from 'reactstrap';
import CollectionSection from '../components/CollectionSection';
import FindDealer from '../components/FindDealer';
import CounterTopsSection from '../components/CounterTopsSection';
import Carousel from 'react-multi-carousel';
import {
    singleFrame,
    CustomArrows,
    CustomDots,
} from "../components/Sliders";
import { SimpleCard3 } from '../components/CustomCards';
import { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../Context';



export const _dealer = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      // partialVisibilityGutter: 100
    }
};

export async function getStaticProps() { 
    const data = await fetch("http://139.59.9.49:1338/why-dealers").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            whyDealers:data,
            bannerImgs: data.carouselImgs,
            Products
        },
    }
}

const WhyDealers = ({whyDealers, bannerImgs, Products}) => {
    const [windowWidth, setWindowWidth] = useState('100%');
    const context = useContext(ProductsContext)

  useEffect(() => {
    const updateSize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
      };

    window.addEventListener('resize', updateSize);
    updateSize();

    context.setAllProducts(Products) 

    return () => window.removeEventListener('resize', updateSize);
  }, [])
    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={12}>
                        <h1 className="page-title mt-5">
                           Why Own <span> a Franchise?  </span>
                        </h1>
                    </Col>
                    
                    <Col sm={10} className="mx-auto mt-sm-5 mt-0">
                        <div className="position-relative common-dots why-dealer small-dots">
                            <Carousel
                                responsive={_dealer}
                                infinite={true}
                                arrows={false}
                                renderButtonGroupOutside={true}
                                customButtonGroup={
                                    <CustomArrows
                                    position="center"
                                    prevIcon={windowWidth < 600 ? "assets/icons/ASSETS-05.svg" : "assets/icons/ASSETS-07.svg"}
                                    nextIcon={windowWidth < 600 ? "assets/icons/ASSETS-06.svg" : "assets/icons/ASSETS-08.svg"}
                                    />
                                }
                                showDots
                                renderDotsOutside={<CustomDots />}
                            >
                                {bannerImgs.map(item => <div key={item.id}> <img src={item.url} /> </div>)}
                            </Carousel>
                        </div>
                    </Col>
                </Row>

                <Row className="margin-top margin-top-xs">
                    <Col sm={10} className="mx-auto">
                        <Row>
                           {whyDealers.details.map(item =>  <Col sm={6} key={item.id}>
                                <div className="quartz-div">
                                    <SimpleCard3
                                        serialNum={item.itemNumber < 10 ? "0" + item.itemNumber : item.itemNumber}
                                        img={(item.image && item.image.url) || "assets/why-dealer-pg-img.svg"}
                                        title={item.title}
                                        from="whyDealer"
                                        text={item.description}
                                    />
                                </div>
                            </Col>)}
                        </Row>
                    </Col>

                </Row>

            </Container>

        </>
    )
}

export default WhyDealers;