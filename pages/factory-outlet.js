import { Container, Row, Col } from 'reactstrap';
import { CountryCard } from '../components/CustomCards'
import FindDealer from '../components/FindDealer';
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../Context';
import Head from 'next/head'

export async function getStaticProps() { 
    const globalPresence = await fetch("http://139.59.9.49:1338/global-presence").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            globalPresence,
            Products
        },
    }
}

const FactoryOutlet = ({globalPresence, Products}) => {
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(Products) 
      }, [])
    return (
        <>
            <Head>
                <title>{globalPresence.SeoZone.metaTitle}</title>
                <meta name="description" content={globalPresence.SeoZone.metaDescription} />
            </Head>
            <Container>
                <Row className="margin-top">
                    <Col lg={12} data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <h6 className="pre-title">OUTLETS</h6>
                        <h1 className="page-title mt-3 mt-sm-5" dangerouslySetInnerHTML={{__html: (globalPresence.heading)}} />
                    </Col>
                    <Col xs={12} sm={8} className="mx-auto" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                        <p className="text mt-sm-2">
                            {globalPresence.description}
                        </p>
                    </Col>
                </Row>
            </Container>

            {globalPresence.details.map(item => (
                <div className="position-relative">
                    <div id={item.buttonClass} className="position-absolute scroll-top" />
                    <CountryCard key={item.id}
                        name={item.country}
                        img={item.factoryOutletImg.url}
                        contact={{
                            email: item.email,
                            phone: item.phoneNo1,
                            mobile: item.phoneNo2,
                            address: item.address,
                        }}
                        desc={item.description}
                        buttonClass={item.buttonClass}
                        mapLink={item.mapLink}
                    />
                </div>
            ))}

            <FindDealer/>
        </>
    )
}

export default FactoryOutlet;