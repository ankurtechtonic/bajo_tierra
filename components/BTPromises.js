import Link from 'next/link'
import {
    multiFrame,
    CustomArrows,
    CustomDot,
} from "./Sliders";
import Carousel from 'react-multi-carousel';
import { Row, Col } from 'reactstrap';
import styles from '../public/styles/Sliders.module.css'


const promises = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1090, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3
    }
};


const BTPromises = ({productFeature}) => {
    return (
        <Row className={styles.btPromises}>
            <Col sm={10} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <h1 className="title3 dash margin-top">
                    Bajo Tierra <span>Promises</span>
                </h1>
            </Col>
            
            <Col sm={10} md={6} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <p className="mt-sm-5 mt-3 text">
                    {productFeature[0].whyUsCarouselDesc}
                </p>
            </Col>

            <Col xs={12} sm={10} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">

                <div className="position-relative mt-6">
                    <Carousel
                        responsive={promises}
                        itemClass={styles.item}
                        arrows={false}
                        renderButtonGroupOutside={true}
                        customButtonGroup={
                            <CustomArrows
                                position="center"
                                prevIcon="assets/icons/grey-prev.png"
                                nextIcon="assets/icons/grey-next.png"
                            />
                        }
                    >
                        {productFeature.map( item => 
                            <div className="cursor-pointer">
                                <Link href="/product-feature">
                                    <div>
                                        <div className="product-feature-img">
                                            <img src={item.image.url} />
                                        </div>
                                        <p className={styles.title}> {item.text} <span> {item.textHighlighted} </span></p>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </Carousel>
                </div>

            </Col>
        </Row>
    )
}

export default BTPromises;