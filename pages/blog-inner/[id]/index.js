import { Container, Row, Col } from 'reactstrap';
import BlogSlider from '../../../components/BlogSlider';
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../../Context';
import classNames from 'classnames';

export async function getStaticPaths() {
    const baseURL = "http://139.59.9.49:1338/blogs/";
    const res = await fetch(baseURL);
    const posts = await res.json();
        
    const paths = posts.map((post) => ({
      params: { id: `${post.id}` },
    }))

      
    return {
            paths,
            fallback: false,
        }
}

export async function getStaticProps(context) { 
    const data = await fetch("http://139.59.9.49:1338/blogs").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const sliderBlogs = data.filter(el => el.blogSlider === 'true');

    let baseURL = "http://139.59.9.49:1338/blogs/";
    const { id } = context.params;
    const res = await fetch(baseURL + id);
    const data1 = await res.json()

    return {
        props: {
            blog: data1,
            sliderBlogs,
            Products,
            content: data1.blogInnerDetails
        },
    }
    
}

// export async function getServerSideProps(context) { 
//     const data = await fetch("http://139.59.9.49:1338/blogs").then(response => response.json());
//     const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
//     const sliderBlogs = data.filter(el => el.blogSlider === 'true');

//     let baseURL = "http://139.59.9.49:1338/blogs/";
//     const { id } = context.query;
//     const res = await fetch(baseURL+id);
//     const data1 = await res.json()
//     return {
//         props: {
//             blog: data1,
//             sliderBlogs,
//             Products,
//             content: data1.blogInnerDetails
//         },
//     }
    
// }

const BlogInner = ({blog, sliderBlogs, Products, content}) => {
    const [windowWidth, setWindowWidth] = useState(false)
    const [copyText, setCopyText] = useState('')
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(Products) 
    }, [])

    const updateSize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
    
        return () => window.removeEventListener('resize', updateSize);
    }, [windowWidth])


    const shareToNetwork = type => {
        const url =  window.location.href

        switch (type) {
            case "fb":
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
                break;
       
            case "wa":
                window.open(`https://api.whatsapp.com/send?phone=&text=${url}`);
                break;

            case "share":
                navigator.clipboard.writeText(url);
                setCopyText('copied to clipboard');

                setTimeout(() => {
                    setCopyText('')
                }, 5000)
                break;
    
            default:
                break;
        }
    }


    return (
        <div id="blog-page">
            <Container>
                <Row className="margin-top">
                    <Col md={10} className="mx-auto" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h2 className="title5" dangerouslySetInnerHTML={{__html: blog.blogInnerPageHeading}} />
                    </Col>
                </Row>           
         
                {
                    windowWidth < 600 && (

                        <Row className="my-5">
                            <Col md={12} className="mx-auto">
                                <Row>
                                    <Col xs={6} className="mt-auto">
                                        <p className="blog-inner-date-text">
                                            { blog.datePublished }
                                        </p>
                                    </Col>

                                    <Col xs={6}>
                                        <ul className="blog-social-icons">
                                            <li onClick={() => shareToNetwork('fb')}>
                                                <svg
                                                    version="1.1"
                                                    id="Layer_1"
                                                    className="fb"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 10.3 20"
                                                    style={{ enableBackground:'new 0 0 10.3 20'}}
                                                    xmlSpace="preserve"
                                                >
                                                    <path
                                                        style={{ fill:'none', stroke:'#010101', strokeWidth: 1, strokeMiterlimit:10 }}
                                                        d="M9.4,11.1l0.5-3.3H6.7V5.7c0-0.9,0.4-1.8,1.9-1.8H10V1.1c0,0-1.3-0.2-2.5-0.2c-2.6,0-4.3,1.6-4.3,4.4v2.5H0.3
                                                        v3.3h2.9v8h3.6v-8H9.4z"
                                                    />
                                                </svg>
                                            </li>

                                            <li onClick={() => shareToNetwork('wa')}>
                                                <svg
                                                    version="1.1"
                                                    id="Layer_2"
                                                    className="whats-app"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 16 20"
                                                    style={{ enableBackground:'new 0 0 16 20', strokeWidth: 0.5  }}
                                                    xmlSpace="preserve"
                                                >
                                                    <g>
                                                        <path
                                                            style={{ fill: '#010101', strokeWidth: 1 }}
                                                            d="M16,9.6c0-4.4-3.6-8-8-8s-8,3.6-8,8c0,1.3,0.3,2.7,1,3.9l0.1,0.1L0,17.7l4.1-1.1l0.1,0.1c1.2,0.6,2.5,1,3.8,1
                                                            C12.4,17.6,16,14,16,9.6z M8,16.8c-1.3,0-2.6-0.4-3.7-1l-0.2-0.1l-3,0.8l0.8-3l-0.1-0.2c-0.7-1.1-1.1-2.4-1.1-3.7
                                                            c0-4,3.2-7.2,7.2-7.2s7.2,3.2,7.2,7.2C15.1,13.5,11.9,16.8,8,16.8z"
                                                        />
                                                        
                                                        <path
                                                            style={{ fill: '#010101', strokeWidth: 1 }}
                                                            d="M11.1,11.2l-0.2-0.1c-0.3-0.2-0.6-0.3-0.9-0.2c-0.1,0-0.3,0.3-0.3,0.4c-0.1,0.1-0.1,0.2-0.2,0.3
                                                            c-0.2,0.3-0.5,0.3-0.8,0.2c-1.3-0.5-2.3-1.4-3-2.5C5.6,9.1,5.5,8.8,5.8,8.4C6,8.1,6.2,8,6.2,7.8S6.1,7.2,6,7.1V6.9
                                                            C5.8,6.6,5.7,6.3,5.5,6.2c-0.1,0-0.1,0-0.2,0C5.1,6.2,5,6.3,4.9,6.4C4.5,6.6,4.3,7.1,4.3,7.7c0,0.2,0,0.3,0.1,0.4
                                                            c0.1,0.3,0.2,0.7,0.5,1.1C5,9.4,5.1,9.7,5.3,10c0.6,0.8,1.4,1.5,2.2,2c0.5,0.3,0.9,0.5,1.4,0.6H9c0.5,0.2,0.9,0.3,1.4,0.2
                                                            s1-0.4,1.2-0.9c0-0.1,0.1-0.2,0.1-0.4C11.6,11.5,11.3,11.3,11.1,11.2z"
                                                        />
                                                    </g>
                                                </svg>
                                            </li>

                                            <li
                                                className="copy-wrapper"
                                                onClick={() => shareToNetwork('share')}
                                            >
                                                <svg
                                                    version="1.1"
                                                    id="Layer_3"
                                                    className="share"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 15.8 20"
                                                    style={{ enableBackground:'new 0 0 15.8 20' }}
                                                    xmlSpace="preserve"
                                                >

                                                    <g transform="translate(0,-952.36218)">
                                                        <path
                                                            style={{ fill: '#010101', strokeWidth: 1 }}
                                                            strokewidth="1"
                                                            d="M13.1,953.3c-1.5,0-2.7,1.2-2.7,2.7c0,0.3,0.1,0.7,0.2,1l-5.9,3.6c-0.5-0.6-1.2-0.9-2-0.9
                                                            c-1.5,0-2.7,1.2-2.7,2.7s1.2,2.7,2.7,2.7c0.8,0,1.5-0.4,2-0.9l5.9,3.6c-0.1,0.3-0.2,0.6-0.2,1c0,1.5,1.2,2.7,2.7,2.7
                                                            s2.7-1.2,2.7-2.7s-1.2-2.7-2.7-2.7c-0.8,0-1.6,0.4-2.1,1l-5.9-3.6c0.1-0.3,0.2-0.7,0.2-1.1c0-0.4-0.1-0.7-0.2-1.1l5.9-3.6
                                                            c0.5,0.6,1.3,1,2.1,1c1.5,0,2.7-1.2,2.7-2.7S14.6,953.3,13.1,953.3z M13.1,954.1c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9
                                                            s-1.9-0.8-1.9-1.9S12.1,954.1,13.1,954.1z M2.6,960.5c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9s-1.9-0.8-1.9-1.9S1.6,960.5,2.6,960.5z
                                                            M13.1,966.9c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9s-1.9-0.8-1.9-1.9c0-0.3,0.1-0.6,0.2-0.9c0,0,0,0,0-0.1
                                                            C11.8,967.3,12.4,966.9,13.1,966.9z"
                                                        />
                                                    </g>
                                                </svg>
                                                <span className="copy-div">
                                                    {copyText}
                                                </span>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
                }
            </Container>

            <div className="mt-3 mt-sm-5" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <img src={blog.blogInnerBanner.url} />
            </div>

            <Container>
                        {
                            windowWidth > 600 && (
                                <Row className="mt-4">
                                    <Col md={10} className="mx-auto">
                                <Row>
                                    <Col md={6} className="mt-auto">
                                        <p className="blog-inner-date-text">
                                            { blog.datePublished }
                                        </p>
                                    </Col>

                                    <Col md={6}>
                                        <ul className="blog-social-icons">
                                            <li onClick={() => shareToNetwork('fb')}>
                                                <svg
                                                    version="1.1"
                                                    id="Layer_1"
                                                    className="fb"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 10.3 20"
                                                    style={{ enableBackground:'new 0 0 10.3 20'}}
                                                    xmlSpace="preserve"
                                                >
                                                    <path
                                                        style={{ fill:'none', stroke:'#010101', strokeWidth: 1, strokeMiterlimit:10 }}
                                                        d="M9.4,11.1l0.5-3.3H6.7V5.7c0-0.9,0.4-1.8,1.9-1.8H10V1.1c0,0-1.3-0.2-2.5-0.2c-2.6,0-4.3,1.6-4.3,4.4v2.5H0.3
                                                        v3.3h2.9v8h3.6v-8H9.4z"
                                                    />
                                                </svg>
                                            </li>

                                            <li onClick={() => shareToNetwork('wa')}>
                                                <svg
                                                    version="1.1"
                                                    id="Layer_2"
                                                    className="whats-app"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 16 20"
                                                    style={{ enableBackground:'new 0 0 16 20', strokeWidth: 0.5  }}
                                                    xmlSpace="preserve"
                                                >
                                                    <g>
                                                        <path
                                                            style={{ fill: '#010101', strokeWidth: 1 }}
                                                            d="M16,9.6c0-4.4-3.6-8-8-8s-8,3.6-8,8c0,1.3,0.3,2.7,1,3.9l0.1,0.1L0,17.7l4.1-1.1l0.1,0.1c1.2,0.6,2.5,1,3.8,1
                                                            C12.4,17.6,16,14,16,9.6z M8,16.8c-1.3,0-2.6-0.4-3.7-1l-0.2-0.1l-3,0.8l0.8-3l-0.1-0.2c-0.7-1.1-1.1-2.4-1.1-3.7
                                                            c0-4,3.2-7.2,7.2-7.2s7.2,3.2,7.2,7.2C15.1,13.5,11.9,16.8,8,16.8z"
                                                        />
                                                        
                                                        <path
                                                            style={{ fill: '#010101', strokeWidth: 1 }}
                                                            d="M11.1,11.2l-0.2-0.1c-0.3-0.2-0.6-0.3-0.9-0.2c-0.1,0-0.3,0.3-0.3,0.4c-0.1,0.1-0.1,0.2-0.2,0.3
                                                            c-0.2,0.3-0.5,0.3-0.8,0.2c-1.3-0.5-2.3-1.4-3-2.5C5.6,9.1,5.5,8.8,5.8,8.4C6,8.1,6.2,8,6.2,7.8S6.1,7.2,6,7.1V6.9
                                                            C5.8,6.6,5.7,6.3,5.5,6.2c-0.1,0-0.1,0-0.2,0C5.1,6.2,5,6.3,4.9,6.4C4.5,6.6,4.3,7.1,4.3,7.7c0,0.2,0,0.3,0.1,0.4
                                                            c0.1,0.3,0.2,0.7,0.5,1.1C5,9.4,5.1,9.7,5.3,10c0.6,0.8,1.4,1.5,2.2,2c0.5,0.3,0.9,0.5,1.4,0.6H9c0.5,0.2,0.9,0.3,1.4,0.2
                                                            s1-0.4,1.2-0.9c0-0.1,0.1-0.2,0.1-0.4C11.6,11.5,11.3,11.3,11.1,11.2z"
                                                        />
                                                    </g>
                                                </svg>
                                            </li>

                                            <li
                                                className="copy-wrapper"
                                                onClick={() => shareToNetwork('share')}
                                            >
                                                <svg
                                                    version="1.1"
                                                    id="Layer_3"
                                                    className="share"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 15.8 20"
                                                    style={{ enableBackground:'new 0 0 15.8 20' }}
                                                    xmlSpace="preserve"
                                                >

                                                    <g transform="translate(0,-952.36218)">
                                                        <path
                                                            style={{ fill: '#010101', strokeWidth: 1 }}
                                                            strokewidth="1"
                                                            d="M13.1,953.3c-1.5,0-2.7,1.2-2.7,2.7c0,0.3,0.1,0.7,0.2,1l-5.9,3.6c-0.5-0.6-1.2-0.9-2-0.9
                                                            c-1.5,0-2.7,1.2-2.7,2.7s1.2,2.7,2.7,2.7c0.8,0,1.5-0.4,2-0.9l5.9,3.6c-0.1,0.3-0.2,0.6-0.2,1c0,1.5,1.2,2.7,2.7,2.7
                                                            s2.7-1.2,2.7-2.7s-1.2-2.7-2.7-2.7c-0.8,0-1.6,0.4-2.1,1l-5.9-3.6c0.1-0.3,0.2-0.7,0.2-1.1c0-0.4-0.1-0.7-0.2-1.1l5.9-3.6
                                                            c0.5,0.6,1.3,1,2.1,1c1.5,0,2.7-1.2,2.7-2.7S14.6,953.3,13.1,953.3z M13.1,954.1c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9
                                                            s-1.9-0.8-1.9-1.9S12.1,954.1,13.1,954.1z M2.6,960.5c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9s-1.9-0.8-1.9-1.9S1.6,960.5,2.6,960.5z
                                                            M13.1,966.9c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9s-1.9-0.8-1.9-1.9c0-0.3,0.1-0.6,0.2-0.9c0,0,0,0,0-0.1
                                                            C11.8,967.3,12.4,966.9,13.1,966.9z"
                                                        />
                                                    </g>
                                                </svg>

                                                <span className="copy-div">
                                                    {copyText}
                                                </span>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                            ) 
                        }
                <Row className="margin-top">
                    <Col md={12} className="mx-auto" >
                        {content.map((item, index) => (
                            <div
                                className={classNames({
                                    'blog-inner-card': true,
                                    'center': index == 0
                                })}
                                data-aos="fade-in"
                                data-aos-delay="100"
                                data-aos-once="true"
                            >
                                <div className="content">
                                    <h2>{item.blogInnerHeading}</h2>
                                    <p className="text" dangerouslySetInnerHTML={{__html: item.blogInnerContent}} />
                                </div>
                                {
                                    item.blogInnerImg &&
                                    <img src={item.blogInnerImg.url} className="img-wrapper" />
                                }
                                {/* <p className="text d-sm-none" dangerouslySetInnerHTML={{__html: item.blogInnerContent}} /> */}
                            </div>
                        ))}
                    </Col>
                </Row>               
            </Container>

            <div className="marginT">
                <BlogSlider imgSrc="../assets/blogSliderItem.png" blogs={sliderBlogs}  />
            </div>
        </div>
    )
}

export default BlogInner;