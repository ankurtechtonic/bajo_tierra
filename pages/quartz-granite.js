import { Container, Row, Col } from 'reactstrap';
import { BlogPostCard2 } from '../components/CustomCards';
import {
    singleFrame,
    CustomArrows,
    CustomDots,
} from "../components/Sliders";
import Carousel from 'react-multi-carousel';
import BlogSlider from '../components/BlogSlider';
import { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../Context';


export const quartzGranite = {
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
    const data = await fetch("http://139.59.9.49:1338/blogs").then(response => response.json());
    const points = await fetch("http://139.59.9.49:1338/quartz-granites").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    const sliderBlogs = data.filter(el => el.blogSlider === 'true');

    return {
        props: {
            sliderBlogs,
            points,
            Products
        },
    }
}

const QuartzGranite = ({sliderBlogs, points, Products}) => {
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
                    <Col lg={10} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h1 className="page-title" >
                            <span style={{ fontStyle: 'normal' }}>
                                Quartz Vs Granite
                            </span> 
                        </h1>

                        <div className="position-relative my-sm-5 common-dots quartz-granite" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            <div className="">
                                <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628237474/Banner_prkkhz.jpg" />
                            </div>

                            {/* <Carousel
                                responsive={quartzGranite}
                                infinite={true}
                                arrows={false}
                                renderButtonGroupOutside={true}
                                customButtonGroup={
                                    <CustomArrows
                                    position="center"
                                    prevIcon={windowWidth < 600 ? "assets/icons/prev-white.png" : "assets/icons/black-prev.png"}
                                    nextIcon={windowWidth < 600 ? "assets/icons/next-white.png" : "assets/icons/black-next.png"}
                                    />
                                }
                                showDots
                                renderDotsOutside={<CustomDots />}
                            >
                                <div className="img-zoom">
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628237474/Banner_prkkhz.jpg" />
                                </div>
                                <div className="img-zoom">
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628237474/Banner_prkkhz.jpg" />
                                </div>
                                <div className="img-zoom">
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628237474/Banner_prkkhz.jpg" />
                                </div>
                                <div className="img-zoom">
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628237474/Banner_prkkhz.jpg" />
                                </div>
                            </Carousel> */}
                        </div>                  
                    </Col>

                    <Col xs={12} sm={10} className="mx-auto text-center mt-4 mt-sm-0">
                        <p className="text">
                        An immaculate blend of aesthetics and functionality ushers in a sense of self-assurance in your space of heightened sophistication, be it your home or commercial environments. Explore the varying qualities of both quartz countertops and granite to arrive at your own conclusion regarding the granite vs quartz debate as it is always important to thoroughly examine the options available to you when it comes to making the right choice.
                        </p>
                    </Col>

                    {points.map(item => <Col lg={10} className="mx-auto margin-top" key={item.id}>
                        <BlogPostCard2
                            serialNum={"0"+item.itemNumber}
                            mainTitle={item.title}
                            subTitle={item.subtitle}
                            category="Qaurtz Vs Granite"
                            text={item.description}
                            img={item.image.url}/>
                    </Col>)}
                </Row>
            </Container>

            <BlogSlider imgSrc="assets/blogSliderItem.png" blogs={sliderBlogs} />
        </>
    )
}

export default QuartzGranite;