import { Container, Row, Col } from 'reactstrap';
import { SimpleCard } from '../../components/CustomCards'
import CounterTopsSection from '../../components/CounterTopsSection';
import FindDealer from '../../components/FindDealer';
import Link  from 'next/link'
import Head  from 'next/head'
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../../Context';


export async function getStaticProps() { 
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const colorPaletteImgs = await fetch("http://139.59.9.49:1338/color-palettes").then(response => response.json());
    const countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            collectionImgs, 
            colorPaletteImgs,
            countertopImgs
        },
    }
}




const Collection = ({collectionImgs, colorPaletteImgs, countertopImgs}) => {
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(countertopImgs) 
      }, [])

    return (
        <>
            
            <Container>
                <Row className="margin-top">
                    <Col lg={12} data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h6 className="pre-title">COLLECTION</h6>
                        <h1 className="page-title mt-4 mt-md-5">
                            Quartz Countertops <span> Collection </span>
                        </h1>
                    </Col>

                    <Col sm={6} className="mx-auto mt-2 mt-md-5">
                        <p className="text" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        Explore the stunning array of the five best quartz countertops collection designed masterfully to compliment contemporary homes. Each of these kitchen quartz countertops has a distinct visual appeal combining a striking colour palette, mood, and pattern.
                        </p>
                    </Col>
                </Row>

                <Row>
                    {collectionImgs.map(item => <Col xs={10} sm={6} lg={4} className="mx-auto mx-sm-0">
                        <SimpleCard name={item.name} imgSrc={item.collectionImg.url} num={item.itemNumber} itemNum={item.id} slug={item.slug}/>
                    </Col>)}
                    <Col xs={10} sm={6} lg={4} className="mx-auto mx-sm-0">
                        <div className="quartz-collection-img"><img src="assets/ASSETS-49.svg" /></div>
                    </Col>
                </Row>


                <hr className="divider margin-top"/>

                <Row>
                    <Col
                        lg={10}
                        className="mx-auto text-center margin-top"
                        data-aos="fade-in"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        <h1 className="title3 collection">
                            Color  <span>Palette</span>
                        </h1>

                        <p className="px-0 px-md-5 mt-3 mt-md-5 text">
                            If you are looking for classic colors of quartz countertops that never grow out of style, your search ends here. Our eclectic quartz countertops resonate the best with your kitchen, bathroom, and office space aesthetics.
                        </p>
                    </Col>
                </Row>

                {colorPaletteImgs.map(item => <Row>
                    <Col
                        lg={10}
                        className="mx-auto text-center"
                        data-aos="fade-in"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        
                        <h3 className="sub-title margin-top1 mb-sm-5 mb-3">
                            {item.color} Quartz  <span> Countertops</span>
                        </h3>

                        <div>
                            <img src={item.mainImg.url} />
                        </div>

                        <Link href="/color-palettes/series/[slug]" as={`/color-palettes/series/${item.color}`}>
                            <button className="primary-button mx-sm-auto mt-md-5 mt-4 margin-left-auto">
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
                                                fill="#fff"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            </button>
                        </Link>
                        
                    </Col>
                </Row>)}
            </Container>

            <CounterTopsSection countertopImgs={countertopImgs} />
            <FindDealer/>
        </>
    )
}

export default Collection;