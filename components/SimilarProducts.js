import { Container, Row, Col, List } from 'reactstrap';
import styles from '../public/styles/Sliders.module.css'
import {
    multiFrame,
    DarkSliderArrows
} from "./Sliders";
import Carousel from 'react-multi-carousel';
import ClassNames from 'classnames';
import { Link } from 'next/link';
import Router, { useRouter } from 'next/router';


const products = {
    desktop: {
      breakpoint: { max: 1920, min: 1091 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1090, min: 601 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2.3
    }
};


const SimilarProducts = ({product, parentSlug, productSlug}) => {
    console.log(parentSlug)
    console.log(productSlug)
    const Redirect = useRouter()
   
    const handleUrl = (parentSlug, productSlug) => {
        Redirect.push(`/collection/series/${parentSlug}/sub-page/${productSlug}`)
    }
    return (
        <>
            <Container>
                <Row className="margin-top" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                    <Col sm={8} className="mx-auto">
                        <h1 className="section-title"> SIMILAR PRODUCTS </h1>
                    </Col>    

                    <Col xs={12} md={6} className="mx-auto">
                        <p className="mt-2 mt-sm-5 text">
                            If you fancy this exquisite collection of {parentSlug} quartz countertops, we have more of such aesthetically fascinating designs that you'd love.
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className={ClassNames({
                [styles.darkSlider]: true,
                [styles.similarProducts]: true,
            })}
            data-aos="fade-in" data-aos-delay="100"  data-aos-once="true"
            >
                <div className="carousel-wrapper">
                    <Carousel
                        responsive={products}
                        infinite={true}
                        itemClass={styles.item}
                        arrows={false}
                        renderButtonGroupOutside={true}
                        customButtonGroup={
                            <DarkSliderArrows
                              position="center"
                              buttonTheme="black"
                              prevIcon="assets/icons/black-prev.png"
                              nextIcon="assets/icons/black-next.png"
                            />
                        }
                    >
                        {
                            product.map((item, index) =>  (
                                <div key={item.id}>
                                    <span className={styles.slideNum}>
                                        { index < 10 ? "0" + ++index : ++index }
                                    </span>
                                    {/* <Link href="/quartz-countertops/sub-page/[id]" as={`/quartz-countertops/sub-page/${item.id}`}>
                                    <div className="img-zoom">
                                        <img src={(item.topSellerImg && item.topSellerImg.url) || "https://res.cloudinary.com/bajo-tierra/image/upload/v1628188290/Rect1071_2x_0abd951d7f.jpg"} />
                                    </div>
                                    </Link> */}

                                    <div
                                        className="img-zoom"
                                        onClick={()=> handleUrl(parentSlug, item.productSlug)}
                                        style={{"cursor": "pointer"}}
                                    >
                                        <img src={item.mainImg.url || "https://res.cloudinary.com/bajo-tierra/image/upload/v1628188290/Rect1071_2x_0abd951d7f.jpg"} />
                                    </div>

                                    <h3 className={styles.slideName}>
                                        {item.name}
                                    </h3>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default SimilarProducts;