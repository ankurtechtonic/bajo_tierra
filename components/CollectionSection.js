import {
    multiFrame,
    DarkSliderArrows,
} from "./Sliders";
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'reactstrap';
import styles from '../public/styles/Sliders.module.css'
import Link  from 'next/link'


const darkSlider = {
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


const CollectionSection = ({collectionImgs}) => {
    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={8} className="mx-auto">
                        <h2 className="section-title collection-title" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            collection
                        </h2>
                        <p className="text collection mt-3 mt-md-5" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            {collectionImgs[0].carouselDesc}
                        </p>
                    </Col>
                </Row>
            </Container>
            
            <div className={styles.darkSlider} data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <div className="carousel-wrapper position-relative">
                    <Carousel
                        responsive={darkSlider}
                        infinite={true}
                        arrows={false}
                        itemClass={styles.item}
                        renderButtonGroupOutside={true}
                        customButtonGroup={
                            <DarkSliderArrows
                              position="center"
                              prevIcon="assets/icons/black-prev.png"
                              nextIcon="assets/icons/black-next.png"
                            />
                        }
                    >
                        {collectionImgs.map(item => <div key={item.id} className="collectionSlider">
                            <span className={styles.slideNum}> 0{item.itemNumber} </span>
                            <Link href="/collection/series/[slug]" as={`/collection/series/${item.slug}`}>
                                <div className="img-zoom">
                                    <img src={item.carouselImg.url} />
                                </div>
                            </Link>
                            <h3 className={styles.slideName}>
                                {item.name} <span>Series</span>
                            </h3>
                        </div>)}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default CollectionSection;