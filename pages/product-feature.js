import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import CollectionSection from '../components/CollectionSection';
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../Context';


export async function getStaticProps() { 
    const products = await fetch("http://139.59.9.49:1338/product-features").then(response => response.json());
    const collectionImgs = await fetch("http://139.59.9.49:1338/collections").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            products,
            collectionImgs,
            Products
        },
    }
}

const ProductFeature = ({products, collectionImgs, Products}) => {
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(Products) 
      }, [])

    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={12} data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h1 className="page-title mt-5">
                        Advantages of    <span> Quartz Countertops </span>
                        </h1>
                    </Col>
                    
                    <Col xs={12} sm={4} className="mx-auto" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">    
                        <p className="text mt-2 mt-sm-5">
                        Bajo Tierra prides in the superior functionality and immaculate style of its quartz slabs. Here are the features and benefits of quartz countertops that make them unparalleled in performance:
                        </p>
                    </Col>
                </Row>

                <Row className="margin-top">
                    {products.map(item => <Col sm={6} md={4} key={item.id}>
                        <div className="product-wrapper" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                            <img src={item.image.url} />
                            <div className="content">
                                <h3 className="title"> {item.title} </h3>
                                <p className="text">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Col>)}
                </Row>

                <hr className="divider margin-top" />

            </Container>
            <CollectionSection collectionImgs={collectionImgs} />

        </>
    )
}

export default ProductFeature;