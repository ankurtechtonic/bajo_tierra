import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import CollectionSection from '../../components/CollectionSection';
import FindDealer from '../../components/FindDealer';
import classNames from 'classnames';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { ProductsContext } from '../../Context';


export async function getStaticProps() { 
    const _countertopImgs = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const countertopImgs = _countertopImgs.sort((current, nextItem) => current.itemNumber - nextItem.itemNumber)
    
    return {
        props: {
            countertopImgs,
            collectionImgs
        },
    }
}


const QuartzCounterTops = ({countertopImgs, collectionImgs}) => {
    const [showContent, setShowContent] = useState(false);
    const context = useContext(ProductsContext)

    const handleContent = () => {
        setShowContent(!showContent)
    }

    useEffect(() => {
        context.setAllProducts(countertopImgs) 
    }, [])

    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={12} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        {/* <h6 className="pre-title">ABOUT</h6> */}
                        <h1 className="page-title mt-5">
                            Quartz  <span>  Countertops <br /> Colors </span>
                        </h1>
                    </Col>

                    <Col xs={12} lg={8} className="mx-auto text-center" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <p
                            className={classNames({
                                "px-sm-5": true,
                                "px-1": true,
                                "text": true,
                                // "contentBox": true,
                                // "show": showContent
                            })}
                            data-aos="fade-in"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >
                            Explore a luxurious range of premium and the most popular quartz countertops that includes the enticingly serene white quartz countertops, the mesmerizingly gorgeous grey quartz countertops, and more. Our spectacular quartz countertops colors complement your every mood and are designed to captivate the true essence of your home aesthetics.
                        </p>

                        {/* <button className="d-flex mx-auto"
                            className={classNames({
                                "mt-4": true,
                                "arrowUpward": true,
                                "show": showContent
                            })}
                            onClick={handleContent}
                        >
                            <img src="assets/icons/down-arrow.png" className="icon" />
                        </button> */}
                    </Col>
                </Row>

                <Row className="margin-top quartz-countertops-color">
                    {countertopImgs.map(item => <Col xs={12} sm={6}>
                        <div key={item.id} className="quartz-div" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                            <div className="top-bar">
                                <h3>{item.name}</h3>
                                <span>{item.itemNumber < 10 ? "0"+item.itemNumber : item.itemNumber}</span>
                            </div>

                            <Link href="/quartz-countertops/sub-page/[slug]" as={`/quartz-countertops/sub-page/${item.productSlug}`}>
                                <div>
                                    <img src={item.mainImg.url} />
                                </div>
                            </Link>
                        </div>
                    </Col>)}
                </Row>
            </Container>
            <CollectionSection collectionImgs={collectionImgs} />
            <FindDealer />

        </>
    )
}

export default QuartzCounterTops;