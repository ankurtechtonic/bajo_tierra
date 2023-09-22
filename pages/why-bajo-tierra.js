import { Container, Row, Col } from 'reactstrap';
import { BlogPostCard3, GridCard2, GridCard3 } from '../components/CustomCards';
import Counter from '../components/Counter';
import Carousel from 'react-multi-carousel';
import { singleFrame, CustomArrows, PlayIcon } from "../components/Sliders";
import { useEffect, useContext } from 'react';
import ReactPlayer from 'react-player'
import CollectionSection from '../components/CollectionSection';
import CounterTopsSection from '../components/CounterTopsSection';
import FindDealer from '../components/FindDealer';
import BTPromises from '../components/BTPromises';
import Clientele from '../components/Clientele';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import styles from '../public/styles/CustomCards.module.css'
import { ProductsContext } from '../Context';
import Head from "next/head"
import $ from 'jquery';


export async function getStaticProps() { 
    const countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const productFeature = await fetch("http://139.59.9.49:1338/product-features").then(response => response.json());
    const testimonials = await fetch("http://139.59.9.49:1338/why-us-testimonials").then(response => response.json());
    const section = await fetch("http://139.59.9.49:1338/why-us-sections").then(response => response.json());
    const paras = await fetch("http://139.59.9.49:1338/why-us-para").then(response => response.json());
    const clienteleGallaries = await fetch("http://139.59.9.49:1338/clientele-gallaries").then(response => response.json());
    const certificationsImages = await fetch("http://139.59.9.49:1338/certifications-images").then(response => response.json());

    
    return {
        props: {
            countertopImgs,
            productFeature,
            testimonials,
            section,
            paras,
            clienteleGallaries,
            certificationsImages
        },
    }
}

const WhyUs = ({
    countertopImgs,
    productFeature,
    testimonials,
    section,
    paras,
    clienteleGallaries,
    certificationsImages
}) => {
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(countertopImgs) 
      }, [])

    // useEffect(() => {
    //     $(".prefab").click(function() {
    //         window.location.href = '/prefab';
    //     });
    //     $(".jumbo").click(function() {
    //         window.location.href = '/prefab#jumbo';
    //     });
    //     $(".breton").click(function() {
    //         window.location.href = '/infrastructure#breton';
    //     });
    // })

    const redirectToSection = (url, ref) => {
        switch (ref) {
            case 'prefab': window.location.href = `${url}`;
            break;

            case 'super': window.location.href = `${url}/#${ref}`;
            break;

            case 'Breton': window.location.href = `infrastructure/#${ref}`;
            break;
        }
    }

    return (
        <>
            <Head>
                <title>{section[0].SeoZone.metaTitle}</title>
                <meta name="description" content={section[0].SeoZone.metaDescription} />
            </Head>
            <Container>
                <Row className={"margin-top "+ styles.whyBTcard}>
                    <Col lg={12} className="mx-auto text-center">
                        <GridCard2 
                            title={paras.heading}
                            titleHighlighted={paras.headingHighlighted}
                            // subTitle={paras.subheading}
                            text={paras.description}
                            img={paras.image.url}
                        />
                    </Col>
                </Row>

                <hr className="divider catalog margin-top"/>


                <Row className="margin-top">
                    <Col sm={10} className="mx-auto" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h2 className="title4">
                            Cutting Edge 
                            <span> Technology </span>
                        </h2>
                    </Col>
                </Row>


                <Row>
                    <Col sm={10} className="mx-auto">
                        {section.map(item => <GridCard3
                            align={item.itemNum % 2 === 0 ? "left" : "right"}
                            img={item.image.url}
                            title={item.title}
                            text={item.description}
                            serialNum={"0"+item.itemNum}
                            num={item.id}
                            buttonClass= {item.buttonClass}
                            redirectToSection={redirectToSection}
                            url='/prefab'
                        />)}
                     </Col>
                </Row>

                <hr className="divider catalog margin-top"/>

                <BTPromises productFeature={productFeature} />

                <hr className="divider catalog margin-top"/>

                <Clientele data={clienteleGallaries} />

                <hr className="divider catalog margin-top"/>

                <Testimonials testimonials={testimonials} />

                <hr className="divider catalog margin-top"/>

                <Certifications data={certificationsImages}/>
            </Container>

            <CounterTopsSection countertopImgs={countertopImgs} />
            <FindDealer/>
        </>
    )
}

export default WhyUs;