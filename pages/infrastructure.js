import { Container, Row, Col } from 'reactstrap';
import { SimpleCard2 } from '../components/CustomCards';
import Carousel from 'react-multi-carousel';
import {
    singleFrame,
    CustomArrows,
    CustomDots,
} from "../components/Sliders";
import { useEffect, useRef, useState, useContext } from 'react';
import { ProductsContext } from '../Context';


export const machinery = {
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
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const pageData = await fetch("http://139.59.9.49:1338/infrastructure-page").then(response => response.json());

    return {
        props: {
            Products,
            pageData
        },
    }
}

const Infrastructure = ({ Products, pageData }) => {
    const [videoHeight, setVideoHeight] = useState('100%');
    const [windowWidth, setWindowWidth] = useState('100%');
    const videoDiv = useRef(null);
    const context = useContext(ProductsContext)

    useEffect(() => {
        let ratioVideo = 720 / 1063; // reverse the ratio for get new height
        let _videoDiv = videoDiv.current.offsetWidth;
        let height = ratioVideo * _videoDiv;
        const width = window.innerWidth;
        setVideoHeight(height);
        setWindowWidth(width);
        context.setAllProducts(Products) 
    }, [])

    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={8} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <h1 className="page-title" dangerouslySetInnerHTML={{__html: pageData.pageTitle}} /> 
                        {/* Unparalleled <span> Infrastructure </span></h1> */}
                    </Col>

                    <Col xs={12} sm={5} className="mx-auto text-center">
                        <p className="text mt-sm-2" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            { pageData.pageDescp }
                        </p>
                    </Col>
                </Row>

                {
                    pageData.multiImageSectionDescp.map((item, index) => (
                        <Row className="margin-top" >
                            <Col lg={10} className="mx-auto text-center position-relative" >
                            <div id={item.title} className="position-absolute scroll-top" />
                                {
                                    (pageData.multiImageSectionDescp.length - 1) != index && (
                                        <SimpleCard2
                                            img={item.sectionImgs[0].url}
                                            img2={item.sectionImgs[1] ? item.sectionImgs[1].url : ''}
                                            title={item.title}
                                            titleHighlighted={item.titleHighlighted}
                                            text={item.sectionDescp}
                                        />
                                    )  
                                }
                            </Col>
                        </Row>

                    ))
                }


                {
                    pageData.videoWrapper && (
                        <Row className="margin-top">
                            <Col lg={10} className="mx-auto text-center" >
                                <div ref={videoDiv}>
                                    <SimpleCard2
                                        img={pageData.videoWrapper[0].videoThumbnail.url}
                                        videoHeight={videoHeight}
                                        title={pageData.videoWrapper[0].title}
                                        text={pageData.videoWrapper[0].descp}
                                        corporateVideo
                                        // titleHighlighted="Film"
                                        // video="https://techtonic.ams3.cdn.digitaloceanspaces.com/Bajo-Tierra-2-1.m4v"
                                    />
                                </div>
                            </Col>
                        </Row>
                    )
                }

                {
                    pageData.multiImageSectionDescp.map((item, index) => (
                        (pageData.multiImageSectionDescp.length - 1) === index && (
                            <Row className="margin-top">
                                <Col lg={10} className="mx-auto text-center" >
                                    {
                                            <SimpleCard2
                                                img={item.sectionImgs[0].url}
                                                // img2={item.sectionImgs[1] ? item.sectionImgs[1].url : ''}
                                                title={item.title}
                                                titleHighlighted={item.titleHighlighted}
                                                text={item.sectionDescp}
                                            />
                                        }
                                </Col>
                            </Row>
                        )  

                    ))
                }

              
            </Container>
        </>
    )
}

export default Infrastructure;