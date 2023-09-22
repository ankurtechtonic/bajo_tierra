import { Container, Row, Col, Form, FormGroup, Input, Spinner } from 'reactstrap';
import DealerInfo from '../components/DealerInfo';
import { useEffect, useContext, useState } from 'react';
import { ProductsContext } from '../Context';
import { THANK_YOU } from '../components/modal-template';
import Link from 'next/link';
import Head from 'next/head';



export async function getStaticProps() {
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const franchise = await fetch("http://139.59.9.49:1338/franchise").then(response => response.json());


    return {
        props: {
            Products,
            franchise
        },
    }
}



const Dealer = ({ size, Products, toggleModal, franchise }) => {

    const context = useContext(ProductsContext)


    useEffect(() => {
        context.setAllProducts(Products)
    }, [])


    return (
        <>
            <Head>
                <title>{franchise.SeoZone.metaTitle}</title>
                <meta name="description" content={franchise.SeoZone.metaDescription} />
            </Head>
            <Container>
                <Row className="margin-top">
                    <Col lg={12} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <h6 className="pre-title">LOCATIONS</h6>
                        <h1 className="page-title mt-5">
                            Showroom   <span> Locator </span>
                        </h1>
                    </Col>
                    <Col xs={12} sm={8} lg={6} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <p className="text mt-3 mt-md-5">
                            Bajo Tierra is now available for your service through its various Showrooms. Find the nearest location from the country-wise locators below.
                        </p>
                    </Col>

                    <Col sm={12} className="margin-top">
                        <DealerInfo
                            size={size}
                            countryName="india"
                            cities={[{
                                city: "Delhi",
                                nameOfEstablishment: "Bajo Tierra",
                                address: "Bajo Tierra Pvt ltd., Ground Floor, block-E, Mansarowar Garden, New Delhi - 110015",
                                phone: "+91 85659 41111",
                                email: "info@bajotierra.com",
                                websiteLink: "bajotierra@gmail.com",
                                mapLink: "https://www.google.com/maps/dir//Bajo+Tierra+Pvt+Ltd+(Head+Office),+B-2,+near+Metro+Pillar+Number+379,+Block+B,+Rajouri+Garden,+New+Delhi,+Delhi+110027/@28.6508275,77.1242538,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d03f9c4c8bda7:0x21ce1f630ee39d18!2m2!1d77.1264425!2d28.6508228"
                            }]}
                        />

                        <DealerInfo
                            size={size}
                            countryName="u.a.e"
                            cities={[{
                                city: "Sharjah",
                                nameOfEstablishment: "Atlas Marble & Granite Tr.",
                                address: "Atlas Marble & Granite Tr. Industrial Area No. 11 Sharjah, U.A.E.",
                                phone: "+971 54 4211331",
                                email: "atlasmarble2016@gmail.com",
                                websiteLink: "bajotierra@gmail.com",
                                mapLink: "https://www.google.com/maps/dir/28.6071518,77.332278/Atlas+Marble+%26+Granite+Tr.+Industrial+Area+No.+11+Sharjah,+U.A.E./@26.664313,57.3630798,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5eef2fd305fd:0x918cdd0c56cd0f2f!2m2!1d55.434062!2d25.2954497"
                            }]}
                        />

                        <DealerInfo
                            size={size}
                            countryName="vietnam"
                            cities={[{
                                city: "Ho Chi Minh",
                                nameOfEstablishment: "Kho Da Bajo Tierra",
                                address: "58/2A QL1A, ấp Tiền Lân 1, Bà Điểm, Hóc Môn, HCM (gần ngã tư Bà Điểm)",
                                phone: "0981118130",
                                email: "Bajotierra.vn@gmail.com",
                                websiteLink: "bajotierra@gmail.com",
                                mapLink: "https://www.google.com/maps/dir/28.6071518,77.332278/58%2F2A+QL1A,+%E1%BA%A5p+Ti%E1%BB%81n+L%C3%A2n+1,+B%C3%A0+%C4%90i%E1%BB%83m,+H%C3%B3c+M%C3%B4n,+HCM+(g%E1%BA%A7n+ng%C3%A3+t%C6%B0+B%C3%A0+%C4%90i%E1%BB%83m)/@18.7938297,73.6476511,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31752baa38cc6421:0x51f61b20373db0b0!2m2!1d106.605787!2d10.8327931"
                            }]}
                        />

                    </Col>

                    <Col lg={7} className="mx-auto margin-top" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <div className="form-container">
                            <div className="form-header">
                                <h3 className="form-title">
                                    Want to open <span>a Franchise?</span>

                                    <button className="button-2 mx-auto d-sm-none">
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
                                                        fill="#7d7d7d"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                        learn more
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
                                                        fill="#7d7d7d"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <Link href="/why-franchise">
                                    <button className="button-2 mx-auto d-none d-sm-block">
                                        <span className="left-arrow-btn d-inline-block">
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
                                                        fill="#7d7d7d"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                        learn more
                                        <span className="right-arrow-btn d-inline-block">
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
                                                        fill="#7d7d7d"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                            </div>

                            <Form
                                className="w-100"
                                method="POST"
                                name="franchise"
                                id="franchise"
                                action="/success"
                                enctype='multipart/form-data'
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                            >
                                <input type="hidden" name="form-name" value="franchise" />
                                <FormGroup row>
                                    <Col sm={6}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Name*"
                                            name="name"
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
                                            required
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="City*"
                                            name="city"
                                            required
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Country*"
                                            name="country"
                                            required
                                        />
                                    </Col>

                                    <Col sm={12}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Existing showroom area*"
                                            name="showroom"
                                            required
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <button className="form-button">
                                            submit
                                            <span className="btn-divider" />
                                            <img src="assets/icons/send.png" className="icon" />
                                        </button>
                                    </Col>

                                </FormGroup>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dealer;