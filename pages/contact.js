import { Container, Row, Col, Form, FormGroup, Input, List, Spinner } from 'reactstrap';
import DealerInfo from '../components/DealerInfo';
import { useEffect, useContext, useState } from 'react';
import { ProductsContext } from '../Context';
import { THANK_YOU } from '../components/modal-template';
import Head from 'next/head'

export async function getStaticProps() {
    const location = await fetch("http://139.59.9.49:1338/locations").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            location,
            Products
        },
    }
}



const Location = ({ location, Products, toggleModal }) => {
    const context = useContext(ProductsContext)


    useEffect(() => {
        context.setAllProducts(Products)
    }, [])


    return (
        <div id="location-page">
            <Head>
                <title>{location[0].SeoZone.metaTitle}</title>
                <meta name="description" content={location[0].SeoZone.metaDescription} />
            </Head>

            <Container>
                <Row className="margin-top">
                    <Col lg={12}>
                        <h6 className="pre-title">CONTACT</h6>
                        <h1 className="page-title mt-3 mt-sm-5">
                            International    <span> Outreach </span>
                        </h1>
                    </Col>

                    <Col sm={8} className="mx-auto mt-4">
                        <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1631708160/Location-image_2_wdfyit.jpg" />
                    </Col>
                </Row>

                <Row>
                    {location.map(item => (
                        <Col
                            md={6}
                            lg={4}
                            className="margin-top locations-wrapper"
                            key={item.id}
                        >
                            <div className="px-md-4">
                                <DealerInfo
                                    size="small"
                                    countryName={item.country}
                                    cities={item.cityDetails}
                                    Contact
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>


            <div className="divider3 margin-top marginT" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <p> Get  <span>connected</span> </p>
            </div>


            <Container>
                <Row>
                    <Col xs={11} lg={6} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <div className="form-container margin-top1">

                            <Form
                                className="w-100"
                                method="POST"
                                name="location"
                                id="location"
                                action="/success"
                                enctype='multipart/form-data'
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                            >
                                <input type="hidden" name="form-name" value="location" />
                                <FormGroup row>
                                    <Col sm={6}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Name*"
                                            name="firstName"
                                            required
                                        />
                                    </Col>

                                    <Col sm={6}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Phone*"
                                            name="mob"
                                            required
                                        />
                                    </Col>

                                    <Col sm={6}>
                                        <Input
                                            type="email"
                                            className="custom-form-element"
                                            placeholder="Mail*"
                                            name="email"
                                            required
                                        />
                                    </Col>

                                    <Col sm={6}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Company"
                                            name="company"
                                        />
                                    </Col>

                                    <Col sm={12} className="mb-5">
                                        <textarea
                                            className="custom-form-element w-100 h-100"
                                            rows={10}
                                            name="msg"
                                            required
                                            placeholder="Your message ..."
                                        />
                                    </Col>



                                    <Col sm={4}>
                                        <button className="form-button">
                                            submit
                                            <span className="btn-divider"></span>
                                            <img src="assets/icons/send.png" className="icon" />
                                        </button>
                                    </Col>

                                </FormGroup>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <div className="divider3 margin-top marginT" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <p> General  <span> enquiry </span> </p>
            </div>

            <div className="contact-info mt-6" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <List type="unstyled" >
                    <li>
                        <img src="assets/icons/message.svg" className="icon" />
                        International: office@bajotierra.com <br/>
                        Domestic: delhi@bajotierra.com
                    </li>

                    <li>
                        <img src="assets/icons/calling.svg" className="icon" />
                        International: +91 74034 21111 <br/>
                        Domestic: +91 85659 41111
                    </li>
                </List>
            </div> */}
        </div>
    )
}

export default Location;