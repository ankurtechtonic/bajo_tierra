import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import CollectionSection from '../components/CollectionSection';
import FindDealer from '../components/FindDealer';
import CounterTopsSection from '../components/CounterTopsSection';
import Link from 'next/link';
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../Context';


export async function getStaticProps() { 
    const data = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            collectionImgs: data,
            countertopImgs
        },
    }
}

const TopSellers = ({collectionImgs, countertopImgs}) => {
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(countertopImgs) 
      }, [])

    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={12}>
                        <h1 className="page-title mt-md-5 mt-0" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            Top   <span>  Sellers  </span>
                        </h1>
                    </Col>

                    <Col xs={12} md={8} className="mx-auto" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="text mt-0">
                            Our most loved quartz collection
                        </p>
                    </Col>
                </Row>

                <Row className="margin-top">
                    {collectionImgs.map(el=> el.seriesCollection.map(item => item.topSeller === "yes" ? <Col xs={12} md={6} className="mx-auto mx-md-0" key={item.id}>
                        <div className="quartz-div topseller" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            <div className="top-bar">
                                <h3> {item.name} </h3>
                                <span className="font-style-normal"> {item.itemCode} </span>
                            </div>

                            <div className="">
                                <img src={item.topSellerImg.url} />
                            </div>
    
                            <Link href="/collection/series/[slug]/sub-page/[slug2]" as={`/collection/series/${el.slug}/sub-page/${item.productSlug}`}>
                                <button className="primary-button mx-auto mt-5">
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
                                                    fill="#fff"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    
                                    view
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
                                                    fill="#fff"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </Col> : ""))}
                </Row>

                <hr className="divider margin-top"/>
            </Container>

            <CollectionSection collectionImgs={collectionImgs} />
            <CounterTopsSection countertopImgs={countertopImgs} />
            <FindDealer />
        </>
    )
}

export default TopSellers;