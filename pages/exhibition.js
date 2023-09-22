import { Container, Row, Col } from 'reactstrap';
import { BlogSliderCard, PrevExhibitionCard } from '../components/CustomCards';
import Carousel from 'react-multi-carousel';
import {
    BannerLeftArrow,
    BannerRightArrow,
    singleFrame,
    multiFrame,
    CustomArrows,
    CustomDot,
    CustomDots
} from "../components/Sliders";
import FindDealer from '../components/FindDealer';
import BlogSlider from '../components/BlogSlider';
import { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../Context';



export const prevExhibition = {
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
    const data = await fetch("http://139.59.9.49:1338/exhibition").then(response => response.json());
    const data1 = await fetch("http://139.59.9.49:1338/blogs").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const sliderBlogs = data1.filter(el => el.blogSlider === 'true');
    return {
        props: {
            upcoming: data.upcoming,
            previous: data.previous,
            sliderBlogs,
            Products
        },
    }
}

const Exhibition = ({upcoming, previous, sliderBlogs, Products}) => {
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
                    <Col md={9} lg={10} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <h1 className="page-title dash">Upcoming  <span> Exhibitions </span></h1>
                    </Col>
                    <Col md={9} lg={4} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <p className="my-md-5 text">
                            {upcoming.mainDesc}
                        </p>
                    </Col>
                </Row>

                <Row className="margin-top">
                    <Col md={9} lg={10} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <BlogSliderCard
                            type="exhibition"
                            img={upcoming.image.url}
                            name={upcoming.name}
                            date={upcoming.date}
                            dateFrom={upcoming.dateFrom}
                            dateTo={upcoming.dateTo}
                            desc={upcoming.descOfEvent}
                            city={upcoming.city}
                            country={upcoming.country}
                            hallNo={upcoming.hallNumber}
                        />
                    </Col>
                </Row>

                <hr className="divider catalog margin-top" />

                <Row className="margin-top">
                    <Col md={9} lg={10} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <h1 className="page-title dash">Previous   <span> Exhibitions </span></h1>
                    </Col>

                    <Col md={9} lg={4} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <p className="my-md-5 text">
                            {previous[0].mainDesc}
                        </p>
                    </Col>
                </Row>

                <Row className="margin-top">
                    <Col md={9} lg={10} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <div className="position-relative common-dots prev-exhibition small-dots">

                            <Carousel
                                responsive={prevExhibition}
                                infinite={true}
                                arrows={false}
                                renderButtonGroupOutside={true}
                                // showDots={true}
                                // renderDotsOutside={true}
                                customButtonGroup={
                                    <CustomArrows
                                        position="center"
                                        prevIcon={windowWidth < 600 ? "assets/icons/ASSETS-05.svg" : "assets/icons/ASSETS-07.svg"}
                                        nextIcon={windowWidth < 600 ? "assets/icons/ASSETS-06.svg" : "assets/icons/ASSETS-08.svg"}
                                    />
                                }
                                // customDot={
                                //     <CustomDot
                                //         outerColor="#fff"
                                //         fillColor="#000"
                                //     />
                                // }
                                showDots
                                renderDotsOutside={<CustomDots />}
                            >
                                {previous.map(item => <div key={item.id}>
                                    <PrevExhibitionCard
                                        type="exhibition"
                                        img={item.image.url}
                                        name={item.name}
                                        date={item.date}
                                        dateFrom={item.dateFrom}
                                        dateTo={item.dateTo}
                                        desc={item.descOfEvent}
                                        city={item.city}
                                        country={item.country}
                                        hallNo={item.hallNumber}
                                    />
                                </div>)}
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>

            <FindDealer />
            <div className="marginT">
                <BlogSlider blogs={sliderBlogs} />
            </div>
        </>
    )
}

export default Exhibition;