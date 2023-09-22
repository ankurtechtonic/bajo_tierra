import { Container, Row, Col, Button } from 'reactstrap';
import { BlogPostCard3, GridCard2, SimpleCard3 } from '../components/CustomCards';
import Counter from '../components/Counter';
import Carousel from 'react-multi-carousel';
import {
    singleFrame,
    socialResponsibility,
    CustomArrows,
    CustomDots,
    PlayIcon,
    meetBigRock
} from "../components/Sliders";
import { useEffect, useRef, useState, useContext } from 'react';
import ReactPlayer from 'react-player'
import CollectionSection from '../components/CollectionSection';
import CounterTopsSection from '../components/CounterTopsSection';
import FindDealer from '../components/FindDealer';
import Link from 'next/link';
import Head from 'next/head';
import { ProductsContext } from '../Context';
import $ from 'jquery';


const About = ({ bigRockImgs, csr, globalPresence, paras, collectionImgs, countertopImgs, aboutPage }) => {
    const [videoHeight, setVideoHeight] = useState('100%');
    const videoDiv = useRef(null);
    const [windowWidth, setWindowWidth] = useState('100%');
    const context = useContext(ProductsContext)

    useEffect(() => {
        let ratioVideo = 720 / 1063; // reverse the ratio for get new height
        let _videoDiv = videoDiv.current.offsetWidth;
        let height = ratioVideo * _videoDiv;
        setVideoHeight(height);
        const width = window.innerWidth;
        setWindowWidth(width);
        context.setAllProducts(countertopImgs)
    }, [])

    // useEffect(() => {
    //     $(".india").click(function () {
    //         window.location.href = '/factory-outlet';
    //         // $('html,body').animate({
    //         //     scrollTop: ($(window.location.hash).offset().top + 92)
    //         // });
    //         const urlParams = new URLSearchParams(window.location.search);

    //         const myParam = urlParams.get('id');
    //         $('html, body').animate({
    //             scrollTop: $("#india").offset().top - 92
    //         }, 1000)
    //     });
    //     $(".uae").click(function () {
    //         window.location.href = '/factory-outlet#uae';
    //     });
    //     $(".vietnam").click(function () {
    //         window.location.href = '/factory-outlet#vietnam';
    //     });
    // })

    const redirectToSection = (url, ref) => {
        window.location.href = `${url}/#${ref}`;
    }

    return (
        <>
            <Head>
                <title>{aboutPage.SeoZone.metaTitle}</title>
                <meta name="description" content={aboutPage.SeoZone.metaDescription} />
            </Head>
            <Container>
                <Row className="margin-top">
                    <Col lg={12} className="mx-auto text-center">
                        <GridCard2
                            preTitle="about"
                            title={paras[0].heading1}
                            titleHighlighted={paras[0].heading2italics}
                            text={paras[0].content}
                            subTitle=""
                            img={aboutPage.aboutUsMainImg.url}
                        />
                    </Col>
                </Row>

                <hr className="divider6" />

                <Row className="margin-top">
                    <Col sm={10} className="mx-auto">
                        <Row>
                            {
                                aboutPage.Stats.map(item => (
                                    <Col xs={4}>
                                        <Counter
                                            counts={item.Number}
                                            title={item.Title}
                                            text={item.SubTitle}
                                        />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>

                <Row className="margin-top">
                    <Col sm={10} className="mx-auto">
                        <h2 className="title4" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            {paras[1].heading1}
                            <span> {paras[1].heading2italics} </span>
                        </h2>
                    </Col>

                    <Col md={10} lg={6} className="mx-auto my-md-5">
                        <p className="text" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            {paras[1].content}
                        </p>
                    </Col>
                </Row>

                <Row className="mt-2 mt-md-5">
                    {globalPresence.map(item => <Col lg={4} md={6} className="mb-5" key={item.id}>
                        <SimpleCard3
                            img={item.image.url}
                            title={item.country}
                            text={item.description}
                            buttonClass={item.buttonClass}
                            redirectToSection={redirectToSection}
                            url='/factory-outlet'
                        />
                    </Col>)}
                </Row>

                <Row className="margin-top1">
                    <Col md={10} lg={8} className="mx-auto">
                        <h2 className="title4" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            {paras[2].heading1}
                            <span> {paras[2].heading2italics} </span>
                        </h2>

                        <div
                            className="position-relative my-md-5 mb-5 common-dots meet-big-rock small-dots"
                            data-aos="fade-in"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >
                            <Carousel
                                responsive={meetBigRock}
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
                                {bigRockImgs.map(item => (
                                    <div
                                        className=""
                                        key={item.id}
                                    >
                                        <img src={item.url} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>

                    <Col md={10} lg={7} className="mx-auto  mt-sm-5">
                        <p className="text" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            {paras[2].content}
                        </p>
                    </Col>
                </Row>

                <hr className="divider catalog about-divider-margin-top" />

                <Row className="about-margin-top">
                    <Col md={10} lg={8} className="mx-auto">
                        <h2 className="title4" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            {paras[3].heading1}
                            <span> {paras[3].heading2italics} </span>
                        </h2>
                    </Col>

                    <Col md={10} lg={8} className="mx-auto">
                        <p className="text" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            {paras[3].content}
                        </p>

                        <div ref={videoDiv} className="my-5" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            <ReactPlayer
                                url={aboutPage.videoWrapper[0].video.name}
                                width="100%"
                                height={videoHeight}
                                playing={true}
                                controls={true}
                                light={aboutPage.videoWrapper[0].videoThumbnail.url}
                            // loop={true}
                            // light={"assets/banner1.png"}
                            // playIcon={<PlayIcon />}
                            />
                        </div>
                    </Col>
                </Row>

                <hr className="divider catalog about-divider-margin-top" />

                <Row className="about-margin-top">
                    <Col md={10} lg={8} className="mx-auto">
                        <Link href="/csr">
                            <h2 className="title4" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                                Corporate Social
                                <span> Responsibility </span>
                            </h2>
                        </Link>

                        <div
                            className="position-relative my-5 common-dots socialResponsibility small-dots"
                            data-aos="fade-in"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >
                            <Carousel
                                responsive={socialResponsibility}
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
                                CustomDot={<CustomDots />}
                            >
                                {csr.map(item => <div key={item.id}>
                                    <BlogPostCard3
                                        img={item.image.url}
                                        title={item.title}
                                        num={item.id}
                                    />
                                </div>)}
                            </Carousel>
                        </div>

                    </Col>
                </Row>

                <hr className="divider catalog about-divider-margin-top" />

            </Container>

            <CollectionSection collectionImgs={collectionImgs} />
            <CounterTopsSection countertopImgs={countertopImgs} />
            <FindDealer />
        </>
    )
}

export async function getStaticProps() {
    const data = await fetch("http://139.59.9.49:1338/big-rock").then(response => response.json());
    const csr = await fetch("http://139.59.9.49:1338/csrs").then(response => response.json());
    const aboutPage = await fetch("http://139.59.9.49:1338/about-page").then(response => response.json());
    const gpData = await fetch("http://139.59.9.49:1338/global-presence").then(response => response.json());
    const paraData = await fetch("http://139.59.9.49:1338/aboutpage-paras").then(response => response.json());
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            bigRockImgs: data.images,
            csr,
            globalPresence: gpData.details,
            paras: paraData.sort((a, b) => (a.positionOnPage > b.positionOnPage) ? 1 : ((b.positionOnPage > a.positionOnPage) ? -1 : 0)),
            collectionImgs,
            countertopImgs,
            aboutPage
        },
    }
}

export default About;
