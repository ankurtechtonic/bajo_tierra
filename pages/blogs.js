import { Container, Row, Col } from 'reactstrap';
import { BlogCard } from '../components/CustomCards'
import BlogSearchResult from '../components/BlogSearchResult';
import styles from '../public/styles/Sliders.module.css'
import { DarkSliderArrows } from "../components/Sliders";
import Carousel from 'react-multi-carousel';
import { useEffect, useState, useContext, useRef } from 'react';
import ClassNames from 'classnames';
import Link from 'next/link';
import Head from 'next/head';
import { ProductsContext } from '../Context';
import Router from 'next/router';


const _blogFeatured = {
    desktop: {
        breakpoint: { max: 1920, min: 1091 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1090, min: 601 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};


export async function getStaticProps() {
    const data = await fetch("http://139.59.9.49:1338/blogs").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const blogs = data.filter(el => el.blogSlider != true);
    const popular = data.filter(el => el.popularBlog === 'true')

    return {
        props: {
            blogs,
            Products,
            allBlog: data,
            popular
        },
    }
}


const Blogs = ({ blogs, Products, allBlog, router, popular }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    const context = useContext(ProductsContext)
    const [searchResult, setSearchResult] = useState([])
    const [searchLoading, setSearchLoading] = useState(false)
    const [blogsOnload, setBlogsOnload] = useState([])
    const [searchVal, setSearchVal] = useState('');
    const searchInput = useRef(null)
    const [loadMore, setLoadMore] = useState(false)
    


    useEffect(() => {
      const start = () => {
        setSearchLoading(true)
      }
  
      const end = () => {
        setSearchResult([])
        setSearchLoading(false)
      }
  
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      // Router.events.on("routeChangeError", end);
      
      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
      }
      
    }, [])

    useEffect(() => {
        const updateSize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', updateSize);
        updateSize();
        context.setAllProducts(Products)

        const _blogsOnload = popular.filter((item, index) => index > 1)
        setBlogsOnload(_blogsOnload)

        return () => window.removeEventListener('resize', updateSize);
    }, [])

    

    const handleSearchBar = () => {
        setSearchVal('')
        setSearchResult([])
    }

    const searchHandler = e => {
        const value = e.target.value
        const _allBlogs = allBlog;
        if (value != '') {
            const _searchedData = _allBlogs.filter(item => item.blogPageHeading.toLowerCase().includes(value.toLowerCase()))
            setSearchVal(value)
            setSearchResult(_searchedData)
        }
        else {
            setSearchVal(value)
            setSearchResult([])
        }
    }


    return (
        <div id="blog">
            <Head>
                <title>{blogs[0].SeoZone.metaTitle}</title>
                <meta name="description" content={blogs[0].SeoZone.metaDescription} />
            </Head>
            <Container>
                <Row className="margin-top">
                    <Col lg={12} data-aos="fade-in" data-aos-delay="100" data-aos-once="true" >
                        <h6 className="pre-title">BLOGS</h6>
                        <h1 className="page-title mt-4 mt-md-5">
                            Discover <span> Latest News </span>
                        </h1>
                    </Col>

                    <Col lg={6} className="mx-auto mt-2 mt-md-5" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        {/* <div className="search-wrapper">
                            <input placeholder="Search For Blogs" />
                            <span>
                                <img src="assets/icons/search(fixed).svg" />
                            </span>
                        </div> */}

                        <div className="search-wrapper">
                            <input
                                ref={searchInput}
                                autoFocus
                                placeholder="Search for Blogs"
                                onChange={e => searchHandler(e)}
                                value={searchVal}
                            />

                                <span
                                    className={ClassNames({
                                        "blog-search": true,
                                        [styles.bgActive]: (searchVal != '')
                                    })}
                                    onClick={handleSearchBar}
                                >
                                    <img src="assets/icons/search(fixed).svg" />
                                </span>
                        </div>

                        {
                            searchResult.length > 0 && (
                                <BlogSearchResult
                                    result={searchResult}
                                    setSearchData={setSearchResult}
                                    setSearchLoading={setSearchLoading}
                                />
                            )
                        }
                    </Col>
                </Row>
            </Container>

            <div className="blog-featured-slider margin-top" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <div className="carousel-wrapper position-relative">
                    <Carousel
                        responsive={_blogFeatured}
                        infinite={true}
                        arrows={false}
                        itemClass="item"
                        renderButtonGroupOutside={true}
                        // centerMode={true}
                        centerMode={(windowWidth > 1100)}
                        customButtonGroup={
                            <DarkSliderArrows
                                buttonTheme="black"
                                position="center"
                                prevIcon="assets/icons/black-prev.png"
                                nextIcon="assets/icons/black-next.png"
                            />
                        }
                    >
                        {blogs.map(item => <div className="slide">
                            <span className="title"> featured </span>

                            <div className="position-relative img-zoom overlay1">
                                <img src={item.blogPageImg.url} />
                                <div className="content">
                                    <h2>
                                        {item.blogPageHeading}
                                    </h2>

                                    <div className="footer">
                                        <div>
                                            <p>
                                                {item.blogPageDesc}
                                            </p>
                                            <span style={{color: "#fff"}}>{item.blogPageDesc.length > 240 && "..."}</span>
                                        </div>

                                        <span>
                                            {item.datePublished}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/blog-inner/[id]" as={`/blog-inner/${item.id}`}>
                                <button className="primary-button">
                                    <span className="left-arrow-btn">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 18.000000 24.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <g
                                                transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path
                                                    d="M39 178 l32 -58 -32 -58 -33 -57 29 19 c101 65 135 90 135 96 0 6
                                                    -34 31 -135 96 l-29 19 33 -57z"
                                                    fill="#000"
                                                />
                                            </g>
                                        </svg>
                                    </span>

                                    Read More

                                    <span className="right-arrow-btn">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 18.000000 24.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <g
                                                transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >

                                                <path
                                                    d="M39 178 l32 -58 -32 -58 -33 -57 29 19 c101 65 135 90 135 96 0 6
                                                    -34 31 -135 96 l-29 19 33 -57z"
                                                    fill="#000"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                        </div>)}

                    </Carousel>
                </div>
            </div>

            <div className="divider5 margin-top blog-text-divider" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <p> popular </p>
            </div>


            <div className="blogs-container">
                {popular.map((item, index) => {
                    if (index < 2 ) {

                        return (
                            <div className="wrapper">
                                <BlogCard
                                    img={item.blogPageImg.url}
                                    title={item.blogPageHeading}
                                    text={item.blogPageDesc}
                                    id={item.id}
                                />
                            </div>
                        )
                    }
                })}

                    {
                        loadMore && blogsOnload.map((item, index) => (
                            <div className="wrapper">
                                <BlogCard
                                    img={item.blogPageImg.url}
                                    title={item.blogPageHeading}
                                    text={item.blogPageDesc}
                                    id={item.id}
                                />
                            </div>
                        ))
                    }
            </div>
            


            <button className="blog-loadMore" onClick={() => setLoadMore(!loadMore)}>
                { !loadMore ? 'LOAD MORE...' : 'Show Less...'}
            </button>

        </div>
    )
}

export default Blogs;