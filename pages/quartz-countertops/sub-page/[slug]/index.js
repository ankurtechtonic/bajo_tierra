import { Container, Row, Col, List, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import {
    singleFrame,
    threeFrame,
    CustomArrows,
} from "../../../../components/Sliders";
import { useRef } from 'react'
import Carousel from 'react-multi-carousel';
import FindDealer from '../../../../components/FindDealer';
import SimilarProducts from '../../../../components/SimilarProducts';
import CollectionSection from '../../../../components/CollectionSection';
import { useState, useEffect, useContext } from 'react'
import ClassNames from 'classnames'
import { ProductsContext } from '../../../../Context';
import ImageGallery from 'react-image-gallery';





const green = "https://res.cloudinary.com/bajo-tierra/image/upload/v1627300390/green-check_mmyxvs.png";
const red = "https://res.cloudinary.com/bajo-tierra/image/upload/v1627300389/red-cross_rgkfi8.png"



const _mainSlider = {
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
    }
};

const _subSlider = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
    }
};

export async function getStaticPaths() {
    const res = await fetch(`http://139.59.9.49:1338/countertops`);
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { slug: `${post.productSlug}`},
    }))

    return { paths, fallback: false }

}



export async function getStaticProps(context) { 
    const { id, slug } = context.params;
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json())
    const products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    const productData =  products.filter((item) => item.productSlug === slug)
    const allProductsData =  collectionImgs.filter(item => item.slug === productData[0].parentSlug)
    const _similarProduct =  allProductsData[0].seriesCollection.filter((item) => item.itemCode !== productData[0].code)

    let similarProduct = [] 
    _similarProduct.map(item => {
        products.map((product) => {
            if (product.productSlug === item.productSlug) {
                return (
                    similarProduct = [
                        ...similarProduct,
                        {
                            ...item,
                            mainImg: product.mainImg
                        }
                    ]
                )
            }
        })  
    })

    return {
        props: {
            collectionImgs,
            product: similarProduct,
            countertop: productData[0],
            productData: productData,
            Products: products
        },
    }
}


const SubPage = ({collectionImgs, product, countertop, productData, Products}) => {
    const slider1 = useRef(null);
    const [windowWidth, setWindowWidth] = useState('100%');
    const [activeTab, setActiveTab] = useState('1');
    const context = useContext(ProductsContext)
    const [sliderImages, setSliderImages] = useState([])


    const showSlide = index => {
        slider1.current.goToSlide(index)
    }


    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
          };

        const _array = [];

        productData[0].subPageCarouselImgs.map(item => {
            _array.push({
                original: item.url,
                thumbnail: item.url,
                fullscreen: false
            })
        })

        setSliderImages(_array)

        window.addEventListener('resize', updateSize);
        updateSize();

        context.setAllProducts(Products) 

        return () => window.removeEventListener('resize', updateSize);
    },[])



    return (
        <div id="sub-page">
            <Container>
                <Row>

                    <Col lg={8} className="mx-auto text-center mt-4">
                        <ImageGallery
                            items={sliderImages}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            additionalClass="product-gallery"
                        />
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg={10} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h3 className="sub-title mt-sm-5 mb-sm-4">
                            {productData[0].name.split(' ')[0]}
                            <span className="ml-3">
                                { productData[0].name.split(' ').splice(1)}
                            </span>
                        </h3>
                    </Col>

                    <Col lg={8} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="mb-5 text">
                            {productData[0].subPageDesc}
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className="divider4 mt-5" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <p> Product Specification </p>
            </div>

            <Container>
                <Row className="margin-top">
                    <Col sm={12}>
                        <section className="product-spec-container d-none d-sm-flex" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            <List type="unstyled" className="specs">
                                <li className="list-title">
                                    specs
                                </li>    
                                
                                <li>
                                    PRIMARY COLOR(S)
                                    <span> { productData[0].primaryColor || 'N/A' } </span>
                                </li>

                                <li>
                                    STYLE
                                    <span> { productData[0].style || 'N/A' }</span>
                                </li>

                                <li>
                                    AVAILABLE FINISHES
                                    {
                                        productData[0].availableFinishes2 ? (
                                            <span dangerouslySetInnerHTML={{__html: productData[0].availableFinishes2}} />                                             
                                        ) : (
                                            <span />
                                        )
                                    }
                                    {/* <span> { productData[0].availableFinishes || 'N/A' } </span> */}
                                </li>

                                <li>
                                    BOOK MATCH
                                    <span> { productData[0].bookMatch || 'N/A' } </span>
                                </li>

                                <li>
                                    VARIATIONS
                                    <span> { productData[0].variations || 'N/A' } </span>
                                </li>
                            </List>

                                      
                            <List type="unstyled" className="sizes">
                                <li className="list-title">
                                    sizes
                                </li>    
                                
                                <li>
                                    <h6> { `Super Jumbo Slab (${productData[0].itemCode})` }  </h6>
                                    <legend>
                                                            Thickness:
                                                            <span>2cm</span>
                                                        </legend>
                                                        
                                                        <p>
                                                            Weight:
                                                            <span> 340Kg </span>
                                                        </p>

                                                        <p>
                                                            Size:
                                                            <span> 138 x 78 In 350x198cm 3500 X 1980 mm </span>    
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <legend>
                                                            Thickness:
                                                            <span> 3cm </span>
                                                        </legend>
                                                        
                                                        <p>
                                                            Weight:
                                                            <span> 510Kg </span>
                                                        </p>
                                                        
                                                        <p> 
                                                            Size:
                                                            <span> 138 x 78 In <br/> 350x198cm <br/> 3500x 1980mm </span>
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <h6> Standard Sizes </h6>
                                                        <legend>
                                                            Countertop:
                                                            <span> 97 X 26 X 1.2 In </span>
                                                        </legend>
                                                        
                                                        <p> 245x65x3 cm <br/> 2450 X 650X 30 mm </p>
                                                    </li>

                                                    <li>
                                                        <legend> Island Countertop </legend>
                                                        <p>  76.8 X 40.15 X 1.2 In <br/> 195x102x3cm <br/> 1950 X 1020 X 30 mm </p>
                                                    </li>

                                                    <li>
                                                        <legend> Backsplash </legend>
                                                        <p>  97 X 3.93 X 0.78 In <br/> 245x10x2cm <br/> 2450 X 100 X 20 mm </p>
                                                    </li>
                            </List>


                            <List type="unstyled" className="apps">
                                <li className="list-title">
                                    applications
                                </li>    
                                
                                <li>
                                    <h6> Residential </h6>
                                    <img src={productData[0].residentialType ? green : red} className="icon" />
                                </li>

                                <li>
                                    <h6> Commercial </h6>
                                    <img src={productData[0].commercialType ? green : red} className="icon" />
                                </li>

                                <li>
                                    <h6> Exterior Usage </h6>
                                    <img src={productData[0].exteriorUsageType ? green : red} className="icon" />
                                </li>

                                <li>
                                    <h6> Interior Usage </h6>
                                    {/* <img src={productData[0].exteriorUsageType ? green : red} className="icon" /> */}
                                </li>

                                <li>
                                    Kitchen :
                                    <img src={productData[0].kitchenType ? green : red} className="icon" />
                                </li>

                                <li>
                                    Bathroom :
                                    <img src={productData[0].bathroomType ? green : red} className="icon" />
                                </li>

                                <li>
                                    Countertops :
                                    <img src={productData[0].countertopType ? green : red} className="icon" />
                                </li>

                                <li>
                                    Vanity tops :
                                    <img src={productData[0].vanityTopsType ? green : red} className="icon" />
                                </li>

                                <li>
                                    Flooring :
                                    <img src={productData[0].flooringType ? green : red} className="icon" />
                                </li>

                                <li>
                                    Backsplash :
                                    <img src={productData[0].backsplashType ? green : red} className="icon" />
                                </li>

                                <li>
                                    Bathroom Walls :
                                    <img src={productData[0].bathroomWallsType ? green : red} className="icon" />
                                </li>

                                <li>
                                    Luxury :
                                    <img src={productData[0].luxuryType ? green : red} className="icon" />
                                </li>
                            </List>
                        </section>

                        <section className="product-spec-container d-sm-none" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            <div className="w-100">
                                <Nav tabs className="w-100 d-flex justify-content-between align-items-center">
                                    <NavItem>
                                        <NavLink
                                            className={ClassNames({
                                                active: activeTab === '1',
                                                "list-title": true
                                            })}
                                            onClick={() => toggle('1')}
                                        >
                                            SPECS
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            className={ClassNames({
                                                active: activeTab === '2',
                                                "list-title": true
                                            })}
                                            onClick={() => toggle('2')}
                                        >
                                            SIZES
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            className={ClassNames({
                                                active: activeTab === '3',
                                                "list-title": true
                                            })}
                                            onClick={() => toggle('3')}
                                        >
                                            APPLICATIONS
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xs="12">
                                                <List type="unstyled" className="specs">
                                                    <li>
                                                        PRIMARY COLOR(S)
                                                        <span> { productData[0].primaryColor || 'N/A' } </span>
                                                    </li>

                                                    <li>
                                                        STYLE
                                                        <span> { productData[0].style || 'N/A' }</span>
                                                    </li>

                                                    <li>
                                                        AVAILABLE FINISHES
                                                        {
                                                            productData[0].availableFinishes2 ? (
                                                                <span dangerouslySetInnerHTML={{__html: productData[0].availableFinishes2}} />                                             
                                                            ) : (
                                                                <span />
                                                            )
                                                        }
                                                        {/* <span> { productData[0].availableFinishes || 'N/A' } </span> */}
                                                    </li>

                                                    <li>
                                                        BOOK MATCH
                                                        <span> { productData[0].bookMatch || 'N/A' } </span>
                                                    </li>

                                                    <li>
                                                        VARIATIONS
                                                        <span> { productData[0].variations || 'N/A' } </span>
                                                    </li>
                                                </List>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="2">
                                        <Row>
                                            <Col xs="12">
                                                <List type="unstyled" className="sizes">
                                                <li>
                                                        <h6> { `Super Jumbo Slab (${productData[0].itemCode})` }  </h6>
                                                        <legend>
                                                            Thickness:
                                                            <span>2cm</span>
                                                        </legend>
                                                        
                                                        <p>
                                                            Weight:
                                                            <span> 340Kg </span>
                                                        </p>

                                                        <p>
                                                            Size:
                                                            <span> 138 x 78 In 350x198cm 3500 X 1980 mm </span>    
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <legend>
                                                            Thickness:
                                                            <span> 3cm </span>
                                                        </legend>
                                                        
                                                        <p>
                                                            Weight:
                                                            <span> 510Kg </span>
                                                        </p>
                                                        
                                                        <p> 
                                                            Size:
                                                            <span> 138 x 78 In <br/> 350x198cm <br/> 3500x 1980mm </span>
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <h6> Standard Sizes </h6>
                                                        <legend>
                                                            Countertop:
                                                            <span> 97 X 26 X 1.2 In </span>
                                                        </legend>
                                                        
                                                        <p> 245x65x3 cm <br/> 2450 X 650X 30 mm </p>
                                                    </li>

                                                    <li>
                                                        <legend> Island Countertop </legend>
                                                        <p>  76.8 X 40.15 X 1.2 In <br/> 195x102x3cm <br/> 1950 X 1020 X 30 mm </p>
                                                    </li>

                                                    <li>
                                                        <legend> Backsplash </legend>
                                                        <p>  97 X 3.93 X 0.78 In <br/> 245x10x2cm <br/> 2450 X 100 X 20 mm </p>
                                                    </li>
                                                </List>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="3">
                                        <Row>
                                            <Col xs="12">
                                                <List type="unstyled" className="apps">                                                    
                                                    <li>
                                                        <h6> Residential </h6>
                                                        <img src={productData[0].residentialType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        <h6> Commercial </h6>
                                                        <img src={productData[0].commercialType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        <h6> Exterior Usage </h6>
                                                        <img src={productData[0].exteriorUsageType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        <h6> Interior Usage </h6>
                                                        {/* <img src={productData[0].exteriorUsageType ? green : red} className="icon" /> */}
                                                    </li>

                                                    <li>
                                                        Kitchen :
                                                        <img src={productData[0].kitchenType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        Bathroom :
                                                        <img src={productData[0].bathroomType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        Countertops :
                                                        <img src={productData[0].countertopsType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        Vanity tops :
                                                        <img src={productData[0].vanityTopsType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        Flooring :
                                                        <img src={productData[0].flooringType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        Backsplash :
                                                        <img src={productData[0].backsplashType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        Bathroom Walls :
                                                        <img src={productData[0].bathroomWallsType ? green : red} className="icon" />
                                                    </li>

                                                    <li>
                                                        Luxury :
                                                        <img src={productData[0].luxuryType ? green : red} className="icon" />
                                                    </li>
                                                </List>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>

            <FindDealer/>
            <SimilarProducts product={product} parentSlug={countertop.parentSlug} productSlug={productData[0].productSlug} />
            <CollectionSection collectionImgs={collectionImgs} />

        </div>
    )
};

export default SubPage;