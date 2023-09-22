import {
    threeFrame,
    CustomArrows
} from "./Sliders";
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'reactstrap';
import styles from '../public/styles/Sliders.module.css'
import ClassNames from "classnames";
import { useEffect, useState } from 'react';
import Link from "next/link";


const CounterTopsSection = ({countertopImgs}) => {
    const [windowWidth, setWindowWidth] = useState('100%');
    const sorted = countertopImgs.sort((current, nextItem) => current.itemNumber - nextItem.itemNumber)
    const countertop = sorted.filter(el => el.carousel == true)
    console.log(countertop);
    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, [])

    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={8} className="mx-auto mt-5 mt-md-0">
                        <h2 className="section-title countertop-title" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            COUNTERTOPS
                        </h2>
                        <p className="text mt-3 mt-md-5" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        Explore an expansive range of quartz countertop colours to elevate your kitchen and bathroom spaces with the choicest quartz slabs and countertops.
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className={styles.counterTopsSlider} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <div className="position-relative counter-tops-slider">
                    <Carousel
                        responsive={threeFrame}
                        infinite={true}
                        itemClass={styles.item}
                        arrows={false}
                        renderButtonGroupOutside={true}
                        customButtonGroup={
                            <CustomArrows
                                position="bottom"
                                prevIcon={windowWidth < 600 ? "assets/icons/ASSETS-05.svg" : "assets/icons/ASSETS-07.svg"}
                                nextIcon={windowWidth < 600 ? "assets/icons/ASSETS-06.svg" : "assets/icons/ASSETS-08.svg"}
                            />
                        }
                    >
                        {countertop.map(item => <div key={item.id} className="collectionSlider">
                            <span className={styles.slideNum}> {item.itemNumber < 10 ? "0"+item.itemNumber : item.itemNumber} </span>
                            <Link href="/quartz-countertops/sub-page/[slug]" as={`/quartz-countertops/sub-page/${item.productSlug}`}>
                            <div>
                                <img src={item.carouselImg.url} />
                            </div>
                            </Link>
                            <h3 className={styles.slideName} style={{textTransform: "capitalize"}}>
                                {item.name}  <span>Quartz</span>
                            </h3>
                        </div>)}
                    </Carousel>
                </div>

                <Link href="/quartz-countertops">
                <button className={ClassNames({
                    [styles.primaryButton]: true,
                    "primary-button": true
                })}>
                    <span className="left-arrow-btn">
                        {/* <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 18.000000 24.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                                fill="#000000"
                                stroke="none"
                            >
                                <path
                                    d="M39 178 l32 -58 -32 -58 -33 -57 29 19 c101 65 135 90 135 96 0 6
                                        -34 31 -135 96 l-29 19 33 -57z"
                                    fill="#fff"
                                />
                            </g>
                        </svg> */}
                        <img src="assets/right-btn-arrow.svg" />
                    </span>

                    Gallery

                    <span className="right-arrow-btn">
                        {/* <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 18.000000 24.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                                fill="#000000"
                                stroke="none"
                            >
                            <path
                                d="M39 178 l32 -58 -32 -58 -33 -57 29 19 c101 65 135 90 135 96 0 6
                                    -34 31 -135 96 l-29 19 33 -57z"
                                fill="#fff"
                            />
                            </g>
                        </svg> */}
                        <img src="assets/right-btn-arrow.svg" />
                    </span>
                </button>
                </Link>

            </div>
        </>
    )
}

export default CounterTopsSection;