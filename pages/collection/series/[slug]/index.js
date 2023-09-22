import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import CollectionSection from '../../../../components/CollectionSection';
import FindDealer from '../../../../components/FindDealer';
import Head  from 'next/head'
import Carousel from 'react-multi-carousel';
import {
    BannerLeftArrow,
    BannerRightArrow,
    singleFrame,
    multiFrame,
    CustomArrows,
    CustomDot,
    PlayIcon,
    HomeBannerArrow,
    CustomDots
} from "../../../../components/Sliders";
import Swiper from 'react-id-swiper';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { ProductsContext } from '../../../../Context';


const Params = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    clickable: true,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    renderPrevButton: () => <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627298783/prev-white_bkljlx.svg" className="icon swiper-button-prev" />,
    renderNextButton: () => <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627298783/next-white_sgsx6d.svg" className="icon swiper-button-next" />,
}

const bannerCarousel = {
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
      partialVisibilityGutter: 0
    }
};

export async function getStaticPaths() {
    const res = await fetch(`http://139.59.9.49:1338/collections`);
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    let slug = context.params.slug;
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const res = await fetch(`http://139.59.9.49:1338/collections?slug=${slug}`)
    const data = await res.json();

    return {
        props: {
            series: data[0].seriesCollection,
            collectionImgs,
            collection: data[0],
            parentSlug: slug,
            Products
            // serieId:id
        },
    }
}

const Series = ({ series, collectionImgs, collection, serieId, parentSlug, Products }) => {
    const [windowWidth, setWindowWidth] = useState('100%');
    const [showContent, setShowContent] = useState(false);
    const [bannersData, setBannerData] = useState([])
    const context = useContext(ProductsContext)

    const handleContent = () => {
        setShowContent(!showContent)
    }
    
    const updateSize = () => {
        const width = window.innerWidth;
        setBannerData([])

        if (width > 600) {
            const dekstopBanners = collection.seriesPageCarouselImgs
            setBannerData(dekstopBanners)
          }
          else {
            const mobileBanners = collection.seriesBannerMobileImg
            setBannerData(mobileBanners)
          }
      
        setWindowWidth(width);
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();

        context.setAllProducts(Products)

        return () => window.removeEventListener('resize', updateSize);
    }, [windowWidth])

    return (
        <>
            <Head>
                <title>{collection.SeoZone.metaTitle}</title>
                <meta name="description" content={collection.SeoZone.metaDescription} />
            </Head>
            <div id="series-pg">
                <div className="position-relative banner-slider slider common-dots small-dots">
                    {
                        bannersData.length > 0  && (

                            <Carousel
                                responsive={bannerCarousel}
                                infinite={true}
                                partialVisible={false}
                                renderButtonGroupOutside={true}
                                transitionDuration={300}
                                showDots
                                renderDotsOutside={<CustomDots />}
                                customRightArrow={<HomeBannerArrow imgUrl="https://res.cloudinary.com/bajo-tierra/image/upload/v1634211127/next_white_dbab02a6cc.svg" right={true} />}
                                customLeftArrow={<HomeBannerArrow imgUrl="https://res.cloudinary.com/bajo-tierra/image/upload/v1634211127/prev_white_c6faf6b149.svg" left={true} />}
                            >
                                {
                                    bannersData.map(item => (
                                        <div className="swiper-slide overlay" >
                                            <img src={item.url} />
                                        </div>
                                    ))
                                }
                            </Carousel>

                            // <Swiper  {...Params}>
                            //     {
                            //         bannersData.map(item => (
                            //             <div className="swiper-slide overlay" >
                            //                 <img src={item.url} />
                            //             </div>
                            //         ))
                            //     }
                            // </Swiper>                    
                        )
                    }

                    <div className="on-banner">
                        <h2> {collection.name} </h2>
                        <h3 className="seriesName"> SERIES </h3>
                        {/* <p className="w-35 mx-auto">
                            {`If you fancy this exquisite collection of ${collection.name} quartz countertops, we have more of such
                            aesthetically fascinating designs that you’d love.`}
                        </p> */}
                    </div>
                </div>

                <Container>
                    <Row>
                        <Col xs={12} md={10} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            <p
                                className={classNames({
                                    "mt-3": true,
                                    "mt-sm-5": true,
                                    "text": true,
                                })}
                                data-aos="fade-in"
                                data-aos-delay="100"
                                data-aos-once="true"
                            >
                                {collection.description}
                            </p>
                            {/* {
                                windowWidth > 600 ? (
                                    <p
                                        className={classNames({
                                            "mt-3": true,
                                            "mt-sm-5": true,
                                            "text": true,
                                        })}
                                        data-aos="fade-in"
                                        data-aos-delay="100"
                                        data-aos-once="true"
                                    >
                                        {collection.description}
                                    </p>

                                ) : (
                                    <p
                                        className={classNames({
                                            "mt-3": true,
                                            "mt-sm-5": true,
                                            "text": true,
                                            "contentBox": true,
                                            "show": showContent
                                        })}
                                        data-aos="fade-in"
                                        data-aos-delay="100"
                                        data-aos-once="true"
                                    >
                                        {collection.description}
                                    </p>
                                )
                            }



                            { (windowWidth < 600) && collection.description.length > 295 && <button className="d-flex mx-auto"
                                className={classNames({
                                    "mt-5": true,
                                    "d-flex": true,
                                    "mx-auto": true,
                                    "arrowUpward": true,
                                    "show": showContent
                                })}
                                onClick={handleContent}
                            >
                                <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627394396/down-arrow_vupb0r.png" className="icon" />
                            </button>} */}
                        </Col>
                    </Row>

                    <Row className="margin-top">
                        <Col lg={6} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            <h6 className="pre-title">PRODUCTS</h6>
                            <h1 className="title mt-4">
                                {collection.name}  <span> Quartz Counterops </span>
                            </h1>
                            {/* <p className="text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            </p> */}
                        </Col>
                    </Row>

                    <Row >
                        {series.map(item => <Col sm={6} lg={4} className="quartz-series-div" data-aos="fade-in" data-aos-delay="100" data-aos-once="true" key={item.id}>
                            <div>
                                <div className="header">
                                    <h6> {item.name} </h6>
                                    <h6> {item.itemNumber < 10 ? "0" + item.itemNumber : item.itemNumber} </h6>
                                </div>

                                <Link href="/collection/series/[slug]/sub-page/[slug2]" as={`/collection/series/${parentSlug}/sub-page/${item.productSlug}`}>
                                    <div className="img-zoom my-3" style={{ cursor: "pointer" }}>
                                        <img src={item.image.url} />
                                    </div>
                                </Link>

                                <div className="footer">
                                    <p> {item.itemCode} </p>
                                    <Link href="/collection/series/[slug]/sub-page/[slug2]" as={`/collection/series/${parentSlug}/sub-page/${item.productSlug}`}>
                                        <a>
                                            <button className="custom-text-btn">
                                                view
                                                <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627394396/right-btn-arrow_qosbhj.png" className="right-arrow-btn" />
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>)}
                    </Row>
                </Container>
                <CollectionSection collectionImgs={collectionImgs} />
                <FindDealer />
            </div >
        </>
    )
}

export default Series;