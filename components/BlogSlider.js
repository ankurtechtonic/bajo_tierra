import Carousel from 'react-multi-carousel';
import { BlogSliderCard } from './CustomCards';
import { threeFrame, BannerRightArrow, BannerLeftArrow } from "./Sliders";
import styles from '../public/styles/Sliders.module.css'
import { Container } from 'reactstrap';


export const _blogSlider = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 
    }
};


const BlogSlider = ({blogs}) => {
    return (
        <div data-aos="fade-in" data-aos-delay="100"  data-aos-once="true" className="position-relative overflow-hidden">
            {/* <img src="/assets/diamond.svg" className="diamond-illustration" /> */}
            <Container>
                <div className="text-center margin-top">
                    <span className="divider2"> BLOGS </span>
                </div>
            </Container>
          
            <div className={styles.blogSlider}>
                <div className="position-relative mt-3 mt-md-5" id="blog-slider">
                    <Carousel
                        responsive={_blogSlider}
                        infinite={true}
                        itemClass={styles.item}
                        customRightArrow={<BannerRightArrow blogSlider />}
                        customLeftArrow={<BannerLeftArrow blogSlider />}
                    >
                        {blogs.map(item => <div key={item.id}>
                            <BlogSliderCard blog={item} img={item.blogPageImg.url}/>
                        </div>)}
                    </Carousel>

                </div>
            </div>
        </div>
    )
}

export default BlogSlider;