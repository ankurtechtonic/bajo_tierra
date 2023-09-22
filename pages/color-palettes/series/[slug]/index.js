import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import CollectionSection from '../../../../components/CollectionSection';
import FindDealer from '../../../../components/FindDealer';
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
    const baseURL = "http://139.59.9.49:1338/color-palettes/";
    const res = await fetch(baseURL);
    const posts = await res.json();
        
    const paths = posts.map((post) => ({
      params: { slug: `${post.color}` },
    }))

      
    return {
            paths,
            fallback: false,
        }
}


export async function getStaticProps(context) {
    console.log(context, 'http://139.59.9.49:1338/color-palettes/');
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    let baseURL = "http://139.59.9.49:1338/color-palettes/";
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const { id, slug } = context.params;
    const res = await fetch(baseURL);
    const _res = await res.json();
    const data = _res.filter( item => item.color == slug)
    return {
        props: {
            series: data[0].products,
            collectionImgs,
            colorPalette: data[0],
            serieId: slug,
            Products
        },
    }
}

// export async function getServerSideProps(context) {
//     const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
//     let baseURL = "http://139.59.9.49:1338/color-palettes/";
//     const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
//     const { id, slug } = context.query;
//     const res = await fetch(baseURL);
//     const _res = await res.json();
//     const data = _res.filter( item => item.color === slug)
//     return {
//         props: {
//             series: data[0].products,
//             collectionImgs,
//             colorPalette: data[0],
//             serieId: slug,
//             Products
//         },
//     }
// }

// // // This function gets called at build time
// export async function getStaticPaths() {
// //   // Call an external API endpoint to get posts
//     const res = await fetch(`http://139.59.9.49:1338/color-palettes/`);
//     const posts = await res.json();

//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//     params: { id: post.id},
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     console.log(paths, 'path');
//     return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps(context) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     let slug = context.params.slug;
//     const res = await fetch(`${baseUrl}/localities?slug=${slug}`)
//     const location = await res.json()
//     const res1 = await fetch(baseUrl + "/localities");
//     const allLocations = await res1.json();

//     // Pass post data to the page via props
//     return { props: { location,allLocations } }
// }

const Series = ({ series, collectionImgs, colorPalette, serieId, Products }) => {
    const [windowWidth, setWindowWidth] = useState('100%');
    const [showContent, setShowContent] = useState(false);
    const context = useContext(ProductsContext)

    const handleContent = () => {
        setShowContent(!showContent)
    }

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };

        window.addEventListener('resize', updateSize);
        updateSize();

        context.setAllProducts(Products)

        return () => window.removeEventListener('resize', updateSize);
    }, [windowWidth])

    return (
        <div id="series-pg">
            <div className="position-relative banner-slider slider common-dots small-dots">
                {
                    windowWidth < 600 ? (
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
                                colorPalette.seriesBannerMobileImg.map(item => (
                                    <div className="swiper-slide overlay" >
                                        <img src={item.url} />
                                    </div>
                                ))
                            }
                        </Carousel>
                        // <Swiper  {...Params}>
                        //     {
                        //         colorPalette.seriesBannerMobileImg.map(item => (
                        //             <div className="swiper-slide overlay" >
                        //                 <img src={item.url} />
                        //             </div>
                        //         ))
                        //     }
                        // </Swiper>

                    ) : (
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
                                colorPalette.seriesBannerDesktopImg.map(item => (
                                    <div className="swiper-slide overlay" >
                                        <img src={item.url} />
                                    </div>
                                ))
                            }
                        </Carousel>
                        // <Swiper  {...Params}>
                        //     {
                        //         colorPalette.seriesBannerDesktopImg.map(item => (
                        //             <div className="swiper-slide overlay" >
                        //                 <img src={item.url} />
                        //             </div>
                        //         ))
                        //     }
                        // </Swiper>
                    )
                }

                <div className="on-banner">
                    <h2> {colorPalette.color} Quartz </h2>
                    <h3 className="seriesName"> countertops </h3>
                    {/* <p> Adding a touch of luxury to living surfaces </p> */}
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
                                // "contentBox": true,
                                // "show": showContent
                            })}
                            data-aos="fade-in"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >
                            {colorPalette.seriesPageDesc}
                        </p>

                        {/* {colorPalette.seriesPageDesc.length > 295 && <button className="d-flex mx-auto"
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
                        {colorPalette.color}  <span> Quartz Counterops </span>
                        </h1>
                        {/* <p className="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        </p> */}
                    </Col>
                </Row>

                <Row >
                    {series.map((item, index) => (
                        <Col sm={6} lg={4} className="quartz-series-div" data-aos="fade-in" data-aos-delay="100" data-aos-once="true" key={item.id}>
                            <div>
                                <div className="header">
                                    <h6> {item.name} </h6>
                                    <h6> { index < 9 ? `0${++index}`: ++index } </h6>
                                </div>

                                <Link href="/color-palettes/series/[slug]/sub-page/[slu2]" as={`/color-palettes/series/${serieId}/sub-page/${item.productSlug}`}>
                                <img src={(item.seriesPageImg && item.seriesPageImg.url) || "https://res.cloudinary.com/bajo-tierra/image/upload/v1628233006/1_Hermosa_Blanco_20c24defb5.jpg"} className="my-3" style={{ cursor: "pointer" }} />
                                </Link>

                                <div className="footer">
                                    <p> {item.itemCode} </p>
                                    <Link href="/color-palettes/series/[slug]/sub-page/[slug2]" as={`/color-palettes/series/${serieId}/sub-page/${item.productSlug}`}>
                                        <button className="custom-text-btn">
                                            view
                                            <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627394396/right-btn-arrow_qosbhj.png" className="right-arrow-btn" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <CollectionSection collectionImgs={collectionImgs} />
            <FindDealer />
        </div>
    )
}

export default Series;