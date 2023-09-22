import { useEffect, useRef, useState, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import { Container, Row, Col, Form, FormGroup, Input, Spinner } from 'reactstrap';
import { ProductsContext } from '../Context';
import styles from '../public/styles/Home.module.css'
import CardGrid from '../components/CardGrid'
import {
  BannerLeftArrow,
  BannerRightArrow,
  singleFrame,
  multiFrame,
  CustomArrows,
  CustomDot,
  PlayIcon,
  CustomRightArrow,
  HomeBannerArrow,
  CustomDots
} from "../components/Sliders";
import classNames from 'classnames';
import Carousel from 'react-multi-carousel';
import ReactPlayer from 'react-player'
import Swiper from 'react-id-swiper';
import { THANK_YOU } from '../components/modal-template';
import { ColorPaletteCard } from '../components/CustomCards';
import styles1 from '../public/styles/Sliders.module.css'



const Params = {
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  speed: 1000,
  clickable: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },

  renderPrevButton: () => <img src="assets/icons/prev-white.svg" className="icon icon-prev swiper-button-prev" />,
  renderNextButton: () => <img src="assets/icons/next-white.svg" className="icon icon-next swiper-button-next" />,
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

const colorPallete = {
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


export async function getStaticProps() {
  const productFeature = await fetch("http://139.59.9.49:1338/product-features").then(response => response.json());
  const colorPalette = await fetch("http://139.59.9.49:1338/color-palettes").then(response => response.json());
  const paraData = await fetch("http://139.59.9.49:1338/homepage-paras").then(response => response.json());
  const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
  const homeBanner = await fetch("http://139.59.9.49:1338/home-banners").then(response => response.json());
  const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
  const clienteleGallaries = await fetch("http://139.59.9.49:1338/clientele-gallaries").then(response => response.json());


  return {
    props: {
      productFeature,
      colorPalette,
      paras: paraData.sort((a, b) => (a.positionOnPage > b.positionOnPage) ? 1 : ((b.positionOnPage > a.positionOnPage) ? -1 : 0)),
      collectionImgs,
      homeBanner,
      Products,
      clienteleGallaries
    },
  }
}


const Home = ({
  isOpen,
  toggleModal,
  productFeature,
  colorPalette,
  paras,
  collectionImgs,
  homeBanner,
  Products,
  clienteleGallaries
}) => {

  const [videoHeight, setVideoHeight] = useState('100%');
  const videoDiv = useRef(null);
  const [showContent, setShowContent] = useState(false)
  const [focusActive, setFocusActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(false)
  const [emailLoader, setEmailLoader] = useState(false)
  const [error, setError] = useState({ emailError: "" })
  const [contactForm, updateContactForm] = useState({ email: "" });
  const [bannersData, setBannerData] = useState([])

  const context = useContext(ProductsContext)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileRegex = /^(\+\d{1,3}[-]?)?\d{10}$/;


  const handleContent = () => {
    setShowContent(!showContent)
  }

  const mailSubmit = () => {
    // const errors = formValidation();
    // if(errors.isValid)
    toggleModal(THANK_YOU)
  }   
  

  const focusHandler = state => {
    setFocusActive(state)
  }

  useEffect(() => {
    context.setAllProducts(Products)
  }, [])

  const updateSize = () => {
    setBannerData([])
    const ratioVideo = 720 / 1063; // reverse the ratio for get new height
    const _videoDiv = videoDiv.current.offsetWidth;
    const height = ratioVideo * _videoDiv;
    const width = window.innerWidth;
    
    if (width > 600) {
      const dekstopBanners = homeBanner.map(item => (
        {
          imgUrl: item.desktopImg.url,
          headingHighlighted: item.headingHighlighted,
          desc: item.desc,
          exploreLink: item.exploreLink
        }
      ))
      setBannerData(dekstopBanners)
    }
    else {
      const mobileBanners = homeBanner.map(item => (
        {
          imgUrl: item.mobileImg.url,
          headingHighlighted: item.headingHighlighted,
          desc: item.desc,
          exploreLink: item.exploreLink
        }
      ))
      setBannerData(mobileBanners)
    }

    setVideoHeight(height);
    setWindowWidth(width);
  };


  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [windowWidth])


  const handleChange = e => {
    const { name, value } = e.target;
    updateContactForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailLoader(true)
    const errors = formValidation();
    console.log(errors.isValid)
    if (errors.isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "newsletter",
          "email": contactForm.email,
        })
      })
      .then(() => {
        toggleModal(THANK_YOU)
        setEmailLoader(false)
      })
    }
    else if (errors.emailError) {
      alert(errors.emailError)
      setEmailLoader(false)
    }
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const formValidation = () => {
    const error = { emailError: "", isValid: true }
    if (!contactForm.email.trim().match(emailRegex)) {
      error.emailError = "Please enter a valid email.";
      error.isValid = false;
    }
    setError(error);
    console.log(error)
    return error;
  }


  return (
    <>
      <Head>
        <title>{homeBanner[0].SeoZone.metaTitle}</title>
        <meta name="description" content={homeBanner[0].SeoZone.metaDescription} />
      </Head>
      <div className={styles.sliderWrapper}>
        <div className="position-relative banner-slider slider common-dots small-dots">
          { bannersData.length > 0  &&
            <>
              <Carousel
                    responsive={bannerCarousel}
                    infinite={true}
                    partialVisible={false}
                    renderButtonGroupOutside={true}
                    transitionDuration={300}
                    showDots
                    renderDotsOutside={<CustomDots />}
                    customRightArrow={<HomeBannerArrow imgUrl="assets/icons/next-white.svg" right={true} />}
                    customLeftArrow={<HomeBannerArrow imgUrl="assets/icons/prev-white.svg" left={true} />}
                    // arrows={true}
                    // itemClass="color-pallete-slider"
                  >
                    {
                  bannersData.map(item => (
                    <div className="swiper-slide" >
                      <div className="overlay">
                        <img src={item.imgUrl} />
                      </div>
                      <div className={styles.onBanner}>
                        <h2>
                          {item.headingHighlighted}
                          {/* <span>
                            {item.headingHighlighted}
                          </span> */}
                        </h2>

                        <p> {item.desc} </p>
                        <Link href={item.exploreLink}>
                          <button className="primary-button mx-auto">
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

                            Explore

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
                      </div>
                    </div>
                  ))
                }
                  </Carousel>
                  <>
              {/* <Swiper  {...Params}>
                {
                  bannersData.map(item => (
                    <div className="swiper-slide" >
                      <div className="overlay">
                        <img src={item.imgUrl} />
                      </div>
                      <div className={styles.onBanner}>
                        <h2>
                          {item.headingHighlighted}
                          <span>
                            {item.headingHighlighted}
                          </span>
                        </h2>

                        <p> {item.desc} </p>
                        <Link href={item.exploreLink}>
                          <button className="primary-button mx-auto">
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

                            Explore

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
                      </div>
                    </div>
                  ))
                }
              </Swiper> */}
              </>
            </>

          }


        </div>
      </div>

      <Container className="site-container margin-top" >
        <Row>
          <Col lg={6} className="mx-auto text-center" >
            <h1 className="title" data-aos="fade-in" data-aos-delay="100" data-aos-once="true" dangerouslySetInnerHTML={{ __html: (paras[0].heading) }} />
            <p className="text" data-aos="fade-in" data-aos-delay="100" data-aos-once="true" >
              {paras[0].content}
            </p>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col lg={12}>
            <section className={styles.gridSection}>
              <h2 className="section-title collection-title"> collection </h2>
              {collectionImgs.map(item => (
                <CardGrid
                  text={item.description}
                  name={item.name}
                  imgSrc={item.homeImg.url}
                  num={item.itemNumber}
                  align={item.itemNumber % 2 === 0 ? "right" : "left"}
                  key={item.id}
                  itemNum={item.id}
                  slug={item.slug}
                />
              ))}
            </section>
          </Col>
        </Row>



        <hr className="divider catalog margin-top" />

        <Row className={styles1.colorPaletteBanner} >
          <Col md={8} lg={10} className="mx-auto text-center margin-top">
            <h1 className="section-title color-title" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
              <span> color palette </span>
            </h1>

            {/* <h3 className="sub-title margin-top mb-3 mb-md-5" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
              {colorPalette.color} <span> Quartz Countertops</span>
            </h3>

            <p className="mb-5 text d-none d-md-block" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
              {colorPalette.description}
            </p> */}

            <div className="position-relative">
              <Carousel
                responsive={colorPallete}
                infinite={true}
                arrows={false}
                partialVisible={false}
                itemClass="color-pallete-slider"
                renderButtonGroupOutside={true}
                transitionDuration={300}
                customButtonGroup={
                  <CustomArrows
                    position="center"
                    prevIcon={windowWidth < 600 ? "assets/icons/ASSETS-05.svg" : "assets/icons/ASSETS-07.svg"}
                    nextIcon={windowWidth < 600 ? "assets/icons/ASSETS-06.svg" : "assets/icons/ASSETS-08.svg"}
                  />
                }
              >
                {
                  colorPalette.map((item, index) => (
                    <ColorPaletteCard
                      color={item.color}
                      description={item.description}
                      url={item.mainImg.url}
                      num={item.id}
                      key={index}
                    />
                  )
                  )}
              </Carousel>
            </div>
          </Col>
        </Row>


        <hr className="divider catalog margin-top" />


        <Row>
          <Col lg={10} className="mx-auto text-center">
            <h1
              className="title3 margin-top1"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-once="true"
              dangerouslySetInnerHTML={{ __html: (paras[1].heading) }}
            />

            <div
              ref={videoDiv}
              className="my-3 my-md-5"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <ReactPlayer
                url={homeBanner[0].videoWrapper[0].video.name}
                width="100%"
                height={videoHeight}
                playing={true}
                controls={true}
                light={homeBanner[0].videoWrapper[0].videoThumbnail.url}
                // loop={true}
              // playIcon="assets/BT_Homepage_Video-Thumbnail.png"
              // playIcon={<PlayIcon />}
              />
            </div>

            {/* {
              windowWidth > 600 ? ( */}
                <p
                  className={classNames({
                    "px-sm-5": true,
                    "px-1": true,
                    "text": true,
                  })}
                  data-aos="fade-in"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  {paras[1].content}
              </p>

              {/* ) : (
                <p
                  className={classNames({
                    "px-sm-5": true,
                    "px-1": true,
                    "text": true,
                    "contentBox": true,
                    "show": showContent
                  })}
                  data-aos="fade-in"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  {paras[1].content}
                </p>
              )
          } */}

            

            {/* {(windowWidth < 600) && paras && paras[1].content.length > 270 && (
              <button
                className={classNames({
                  "mt-4": true,
                  "arrowUpward": true,
                  "show": showContent
                })}
                onClick={handleContent}
              >
                <img src="assets/icons/down-arrow.png" className="icon" />
              </button>
            )} */}

          </Col>
        </Row>


        <hr className="divider catalog margin-top" />

        <Row>
          <Col md={8} lg={10} className="mx-auto text-center">
            <h1 className="title3 dash margin-top1" data-aos="fade-in" data-aos-delay="100" data-aos-once="true" dangerouslySetInnerHTML={{ __html: (paras[2].heading) }} />
            <p className="px-sm-5 px-1 my-5 text" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
              {paras[2].content}
            </p>

            <div id="bt-promises" className={styles.slider3} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
              <div className="position-relative">
                <Carousel
                  responsive={promises}
                  itemClass={styles.slider3Items}
                  infinite={true}
                  arrows={false}
                  transitionDuration={100}
                  renderButtonGroupOutside={true}
                  customButtonGroup={
                    <CustomArrows
                      position="center"
                      prevIcon="assets/icons/grey-prev.png"
                      nextIcon="assets/icons/grey-next.png"
                    />
                  }
                >
                  {productFeature.map(item => <div key={item.id}>
                    <Link href="/product-feature">
                      <div>
                        <div className="product-feature-img">
                          <img src={item.image.url} />
                        </div>
                        <p className={styles.title}> {item.text} <span> {item.textHighlighted} </span></p>
                      </div>
                    </Link>
                  </div>)}

                </Carousel>
              </div>
            </div>

          </Col>
        </Row>

        <hr className="divider catalog margin-top" />


        <Row className="margin-top">
          <Col lg={10} className="mx-auto text-center">
            <h2 className={styles.sectionTitle + " clientele-title"}>Clientele</h2>
            <div className={styles.brandImgWrapper}>
            {
              clienteleGallaries.map((item) => (
                <div className={classNames({
                  [styles.img]: true
                })}>
                  <img
                    src={item.ClientGallaryData.url}
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-once="true"
                  />
                </div>
              ))
            }

            </div>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col lg={6} className="mx-auto text-center">
            <p className={classNames({
              [styles.preTitle]: true,
              "mb-4": true,
            })}
              data-aos="fade-in"
              data-aos-delay="100"
            >
              NEWSLETTER
            </p>

            <h1 className="title3 text-center mb-4" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
              Get the latest updates <span> straight in your inbox </span>
            </h1>

            <Form className={styles.emailWrapper} data-aos="fade-in" data-aos-delay="100" data-aos-once="true" method="POST" name="newsletter" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="newsletter" />
              <FormGroup>
                <Input
                  placeholder="Enter your email*"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onFocus={() => focusHandler(true)}
                  onBlur={() => focusHandler(false)}
                />
                <button
                  className={classNames({
                    "icon": true,
                    "form-button": true,
                    [styles.active]: focusActive
                  })}
                  disabled={emailLoader}

                >
                  {
                    emailLoader ? (
                      <Spinner color="light" size="sm" children=""/>
                    ) : (
                      <img src="assets/icons/send.png" />
                    )
                  }
                </button>
              </FormGroup>
            </Form>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Home;
