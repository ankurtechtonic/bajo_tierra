import { Container, Row, Col } from 'reactstrap';
import ClassNames from 'classnames';
import { GridCard2, JobCard, SimpleCard4 } from '../components/CustomCards';
import Carousel from 'react-multi-carousel';
import {
    singleFrame,
    CustomArrows,
    CustomDots,
} from "../components/Sliders";
import CounterTopsSection from '../components/CounterTopsSection';
import FindDealer from '../components/FindDealer';
import { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../Context';



export const _packaging = {
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
    const countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const prefabPageData = await fetch("http://139.59.9.49:1338/prefab-page").then(response => response.json());


    return {
        props: {
            countertopImgs,
            prefabPageData
        },
    }
}


const Prefab = ({ countertopImgs, prefabPageData }) => {
    const [windowWidth, setWindowWidth] = useState('100%');
    const context = useContext(ProductsContext)

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };

        window.addEventListener('resize', updateSize);
        updateSize();

        context.setAllProducts(countertopImgs) 

        return () => window.removeEventListener('resize', updateSize);
    }, [])
    
    return (
        <div id="prefab">
            <Container>
                <Row className="margin-top">
                    <Col lg={12} className="mx-auto text-center">
                        <GridCard2 
                            title={prefabPageData.pageTitle}
                            titleHighlighted={prefabPageData.pageTitleHighlighted}
                            text={prefabPageData.pageDescp}
                            img={prefabPageData.mainImage.url}
                            name={prefabPageData.pageTitle}
                        />
                    </Col>
                </Row>
            </Container>

            {
                prefabPageData.productVarientBox.map(item => (
                    <>
                        <div className="divider3 margin-top" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            <p className="dash" dangerouslySetInnerHTML={{__html: item.sectionTitle}} /> 
                        </div>

                        {
                            item.productDetailSection.map(product => (
                                <Container>
                                    <Row className="margin-top">
                                        <Col sm={6} className="mx-auto">
                                            <div className="info-box" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                                                <h5 className="count"> { `0${product.itemNum}` } </h5>
                                                <h3 className="title"> { product.itemTitle } </h3>
                                                <p className="text" dangerouslySetInnerHTML={{__html:  product.itemDescription}} />
                                                {
                                                    product.mobileItemImg ? (
                                                        <>
                                                            <img src={product.itemImg.url} className="mt-3 d-none d-sm-block"/>
                                                            <img src={product.mobileItemImg.url} className="mt-3 d-sm-none" />
                                                        </>

                                                    ) : (
                                                        <img src={product.itemImg.url} />
                                                    )
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            ))
                        }
                    </>

                ))
            }

            
            <div className="divider3 margin-top position-relative">
                <div id="super" className="position-absolute scroll-top" />
                <p className="dash" dangerouslySetInnerHTML={{ __html: prefabPageData.jumboSlab.title }} /> 
            </div>

            <Container>
                <Row className="mt-sm-5 mt-3">
                    <Col lg={8} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="text mb-5 my-sm-5 mb-sm-0">
                            { prefabPageData.jumboSlab.descp }
                        </p>
                        <img src={prefabPageData.jumboSlab.img.url} className="margin-top1" />
                    </Col>
                </Row>
            </Container>


            <div className="divider3 margin-top" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <p dangerouslySetInnerHTML={{ __html: prefabPageData.packagingPerfectCarousel.title }} /> 
            </div>

            <Container>
                <Row className="mt-sm-5 mt-2">
                    <Col lg={5} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="text mt-sm-5 mb-sm-0 mt-2 mb-5">
                            { prefabPageData.packagingPerfectCarousel.descp }
                        </p>
                    </Col>

                    <Col sm={9} className="mx-auto no-margin-col mt-6" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <div className="position-relative common-dots packaging small-dots customZindex">
                            <Carousel
                                responsive={_packaging}
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
                                {
                                    prefabPageData.packagingPerfectCarousel.slide.map(slide => (
                                        <div>
                                            <SimpleCard4
                                                img={slide.img.url}
                                                footer={slide.descp}
                                            />
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <CounterTopsSection countertopImgs={countertopImgs} />
            <FindDealer />

        </div>
    )
}

export default Prefab;