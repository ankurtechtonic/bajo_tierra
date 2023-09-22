import {
    singleFrame,
    CustomArrows,
    CustomDots,
} from "./Sliders";
import Carousel from 'react-multi-carousel';
import { Row, Col } from 'reactstrap';
import styles from '../public/styles/Sliders.module.css'



const _testimonial = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1090, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
};

const Testimonials = ({testimonials}) => {
    return (
        <Row className={styles.testimonials}>
            <Col xs={12} sm={10}  className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <h2 className="section-title color-title"> TESTIMONIALS </h2>

                <div className="position-relative mt-6 margin-top common-dots testimonials small-dots" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true"> 
                    <Carousel
                        responsive={_testimonial}
                        infinite={true}
                        arrows={false}
                        itemClass={styles.item}
                        renderButtonGroupOutside={true}
                        customButtonGroup={
                            <CustomArrows
                                position="center"
                                prevIcon="assets/icons/black-prev.png"
                                nextIcon="assets/icons/black-next.png"
                            />
                        }
                        showDots
                        renderDotsOutside={<CustomDots />}
                    >
                        {testimonials.map(item => <div>
                            <h4> 0{item.itemNumber} </h4>
                            <h2 className={styles.title}> {item.mainQuote} </h2>
                            <p className="text"> 
                                {item.description}
                            </p>
                            <div className={styles.footer}>
                                <p> - {item.testimonialBy} <span> {item.company} </span> </p>
                            </div>
                        </div>)}
                    </Carousel>
              </div>

            </Col>
        </Row>
    )
}

export default Testimonials;