import { Container, Row, Col } from 'reactstrap';
import CollectionSection from '../components/CollectionSection';
import CounterTopsSection from '../components/CounterTopsSection';
import FindDealer from '../components/FindDealer';
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../Context';
import Head from 'next/head'


export async function getStaticProps() { 
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const catalogFile = await fetch("http://139.59.9.49:1338/catalog").then(response => response.json());

    return {
        props: {
            collectionImgs, 
            countertopImgs,
            catalogFile
        },
    }
}

const Catalog = ({collectionImgs, countertopImgs, catalogFile}) => {
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(countertopImgs) 
      }, [])

    return (
        <>
            <Head>
                <title>{catalogFile.SeoZone.metaTitle}</title>
                <meta name="description" content={catalogFile.SeoZone.metaDescription} />
            </Head>
            <Container>
                <Row className="margin-top">
                    <Col xs={12} className="catalog-top-section" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h1 className="page-title" > Catalog </h1>
                        <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1631009938/BT_Catalog_okzcyh.jpg" className="banner catalog-img"/>
                        <div className="bottom-bar d-none d-md-flex">
                            {/* <label>view</label> */}
                            <a href="assets/Bajo Tierra Catalog- Final_compressed.pdf" target="_blank">
                                <button className="custom-text-btn">
                                    view
                                    <span className="arrow">
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
                            </a>
                            <a href="assets/Bajo Tierra Catalog- Final.pdf" download><img src="assets/icons/download.png" className="icon" /></a>
                        </div>

                        <div className="bottom-bar d-md-none p-0 mt-2">
                        <a href={catalogFile.file.url} download>
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
                                                fill="#fff"
                                            />
                                        </g>
                                    </svg>
                                </span>
                                
                                Download
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
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="divider catalog margin-top"/>
            </Container>

            <CollectionSection collectionImgs={collectionImgs} />
            <CounterTopsSection countertopImgs={countertopImgs} />
            <FindDealer/>
        </>
    )
}

export default Catalog;