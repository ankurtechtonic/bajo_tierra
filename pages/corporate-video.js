import { Container, Row, Col } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import { CustomArrows, singleFrame, PlayIcon, CustomDots } from "../components/Sliders";
import CollectionSection from '../components/CollectionSection';
import CounterTopsSection from '../components/CounterTopsSection';
import ReactPlayer from 'react-player'
import { useEffect, useRef, useState, useContext } from 'react';
import { ProductsContext } from '../Context';


export const livingSpaces = {
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
      items: 1
      // partialVisibilityGutter: 100
    }
};

export async function getStaticProps() { 
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const pageData = await fetch("http://139.59.9.49:1338/corporate-video-page").then(response => response.json());


    return {
        props: {
            collectionImgs, 
            countertopImgs,
            pageData
        },
    }
}

const Corporate = ({ collectionImgs, countertopImgs, pageData}) => {
    const [videoHeight, setVideoHeight] = useState('100%');
    const [windowWidth, setWindowWidth] = useState('100%');
    const videoDiv = useRef(null);
    const context = useContext(ProductsContext)

    useEffect(() => {
        let ratioVideo = 0.567; // reverse the ratio for get new height
        let _videoDiv = videoDiv.current.offsetWidth;
        let height = ratioVideo * _videoDiv;
        const width = window.innerWidth;
        setVideoHeight(height);
        setWindowWidth(width);
        context.setAllProducts(countertopImgs) 
    },[])

    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={8} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h1 className="page-title" dangerouslySetInnerHTML={{ __html: pageData.pageTitle }} />
                    </Col>

                    <Col xs={12} lg={7} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="my-md-5 text">
                            { pageData.pageDescp }
                        </p>
                    </Col>

                    <Col lg={8} className="mx-auto text-center p-0 px-sm-3" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        
                        <div className="position-relative common-dots living-spaces small-dots">
                            <Carousel
                                responsive={livingSpaces}
                                infinite={true}
                                arrows={false}
                                renderButtonGroupOutside={true}
                                customButtonGroup={
                                    <CustomArrows
                                        corporateMainSlider
                                        position="videoSlider"
                                        prevIcon={windowWidth < 600 ? "assets/icons/ASSETS-05.svg" : "assets/icons/ASSETS-07.svg"}
                                        nextIcon={windowWidth < 600 ? "assets/icons/ASSETS-06.svg" : "assets/icons/ASSETS-08.svg"}
                                    />
                                }
                                showDots
                                renderDotsOutside={<CustomDots />}
                            >
                                {
                                    pageData.mainSlider.map(item => (
                                        <div className="my-3 my-md-5">
                                            <ReactPlayer
                                                url={item.video.name}
                                                width="100%"
                                                height={videoHeight}
                                                playing={true}
                                                controls={true}
                                                light={item.videoThumbnail.url}
                                                // light={"assets/banner1.png"}
                                                // playIcon={<PlayIcon />}
                                            />
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>

                        {/* <button className="primary-button mt-5">
                            Explore
                            <img src="assets/icons/right-btn-arrow.png" className="right-arrow-btn"/>
                        </button> */}
                    </Col>
                </Row>

                <hr className="divider catalog margin-top"/>

                <Row className="margin-top">
                    <Col lg={8} className="mx-auto text-center mt-4 mt-sm-0 p-0 px-sm-3" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h1 className="page-title dash mb-md-5 mb-3 px-3 px-sm-0" dangerouslySetInnerHTML={{ __html: pageData.corporateFilm.title }} />
                         
                        <div ref={videoDiv}>
                            {/* <ReactPlayer
                                url="https://techtonic.ams3.cdn.digitaloceanspaces.com/Bajo-Tierra-2-1.m4v"
                                width="100%"
                                height={videoHeight}
                                playing={true}
                                controls={true}
                                light={"https://res.cloudinary.com/bajo-tierra/image/upload/v1628071382/coming_soon_copy_ucxw6r.jpg"}
                                // light={"assets/banner1.png"}
                                // playIcon={<PlayIcon />}
                            /> */}
                            <img src={pageData.corporateFilm.videoThumbnail.url} />
                        </div>
                    </Col>

                    <Col lg={8} className="mx-auto" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="my-5 text">
                            { pageData.corporateFilm.descp }
                        </p>
                    </Col>

                </Row>


                <hr className="divider catalog margin-top"/>

                <Row className="margin-top" >
                    <Col lg={8} className="mx-auto text-center p-0 px-sm-3" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h1 className="page-title teaser-title mb-md-5 mb-3 dash px-3 px-sm-0" dangerouslySetInnerHTML={{ __html: pageData.luxuryUnfolds.title }} />
                       
                        <div>
                            <ReactPlayer
                                url={pageData.luxuryUnfolds.video.name}
                                width="100%"
                                height={videoHeight}
                                playing={true}
                                controls={true}
                                light={pageData.luxuryUnfolds.videoThumbnail.url}
                                // light={"assets/banner1.png"}
                                // playIcon={<PlayIcon />}
                            />
                        </div>
                    </Col>

                    <Col lg={8} className="mx-auto" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="my-5 text">
                            { pageData.luxuryUnfolds.descp } 
                        </p>
                    </Col>

                </Row>

                <hr className="divider catalog margin-top"/>
            </Container>

            <CounterTopsSection countertopImgs={countertopImgs} />    
            <CollectionSection collectionImgs={collectionImgs} />
        </>
    )
};

export default Corporate;