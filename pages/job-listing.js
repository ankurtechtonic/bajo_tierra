import { Container, Row, Col, Form, FormGroup, Input, List, Label, FormText } from 'reactstrap';
import ClassNames from 'classnames';
import { Slider } from '../components/Sliders';
import { BlogPostCard2, BlogSliderCard, GridCard2, JobCard, SimpleCard2 } from '../components/CustomCards';
import styles from '../public/styles/CustomCards.module.css'
import { useEffect, useRef, useState, useContext } from 'react';
import { ProductsContext } from '../Context';
import { THANK_YOU } from '../components/modal-template';
import Head from 'next/head'

export async function getStaticProps() {
    const jobOpening = await fetch("http://139.59.9.49:1338/current-openings").then(response => response.json());
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            jobOpening,
            Products
        },
    }
}





const JobListing = ({ jobOpening, Products, toggleModal }) => {
    const context = useContext(ProductsContext)
    const [windowWidth, setWindowWidth] = useState(1920)
    const [fileName, setFileName] = useState('')
    const [formBanner, setFormBanner] = useState('/assets/job-listing.jpeg')



    useEffect(() => {
        const getScreenSize = () => {
            const _windowWidth = window.innerWidth
            setWindowWidth(_windowWidth)
            if (_windowWidth > 480) {
                setFormBanner('/assets/job-listing.jpeg')
            }
            else {
                setFormBanner('/assets/job-listing-mob.jpeg')
            }
        }

        getScreenSize()
        window.addEventListener('resize', getScreenSize)

        return(()=>{
            window.removeEventListener('resize', getScreenSize)
        })

    },[windowWidth])


    useEffect(() => {
        context.setAllProducts(Products)
    }, [])


    const fileHandler = e => {
        const _fileName = e.target.files[0].name
        setFileName(_fileName)
    }



    return (
        <>
            <Head>
                <title>{jobOpening[0].SeoZone.metaTitle}</title>
                <meta name="description" content={jobOpening[0].SeoZone.metaDescription} />
            </Head>
            <Container>
                <Row className={"margin-top " + styles.jobcard}>
                    <Col lg={12} className="mx-auto text-center">
                        <GridCard2
                            preTitle="jobs"
                            title="Work"
                            titleHighlighted="With Us"
                            subTitle=""
                            text="A great work culture teamed with a strong sense of togetherness determines the Bajo Tierra family. We inspire and help each other to be their best self, thus, inviting the brightest minds in the business to shape breakthroughs in innovation. We would love to learn from you and help you tap into your greatest potential."
                            img="https://res.cloudinary.com/bajo-tierra/image/upload/v1628234293/work-with-us_oyaosn.jpg"
                        />
                    </Col>
                </Row>
            </Container>

            <div className="divider3 margin-top" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <p className="dash"> Current <span>openings</span> </p>
            </div>

            <Container>
                <Row className="margin-top jobCard-container">
                    {jobOpening.map(item => <Col xs={11} md={6} lg={4} className="mx-auto mx-md-0" key={item.id}>
                        <JobCard
                            postName={item.headingFormatted}
                            qualification={item.qualification}
                            experience={item.experience}
                            location={item.location}
                            num={item.id}
                        />
                    </Col>)}
                </Row>

                <Row className="margin-top">
                    <Col xs={12} lg={8} className="mx-auto" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                        <div className="form-container">
                            {/* <div className="form-header jobApplyContainer">
                                <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1631195720/ASSETS-48_co3qda.svg" className="jobApplyImg" />
                                <h3 className="form-title">
                                    Apply <span>for other jobs</span>
                                </h3>
                            </div> */}
                                <div className="mb-5">
                                    <img src={formBanner} />
                                </div>
                            <Form
                                className="w-100"
                                method="POST"
                                name="jobListing"
                                id="jobListing"
                                action="/success"
                                enctype='multipart/form-data'
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                            >
                                <input type="hidden" name="form-name" value="jobListing" />
                                <FormGroup row className="formGroup">
                                    <Col sm={{ size: 5, offset: 1 }}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Name*"
                                            name="name"
                                            required
                                        />
                                    </Col>

                                    <Col sm={5}>
                                        <Input
                                            type="email"
                                            className="custom-form-element"
                                            placeholder="Mail*"
                                            name="email"
                                            required
                                        />
                                    </Col>

                                    <Col sm={{ size: 5, offset: 1 }}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Phone*"
                                            name="mob"
                                            required
                                        />
                                    </Col>

                                    <Col sm={5}>
                                        <Input
                                            type="text"
                                            className="custom-form-element"
                                            placeholder="Applied for*"
                                            name="position"
                                            required
                                        />
                                    </Col>

                                    <Col sm={{ size: 5, offset: 1 }}>
                                        <legend className="col-form-label list-title">Preferred Location*</legend>
                                        <FormGroup check>
                                            <Label check className="radio-label">
                                                <Input type="radio" name="radio2" required />{' '}
                                                Chittorgarh (India)
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check className="radio-label">
                                                <Input type="radio" name="radio2" required />{' '}
                                                Sharjah (U.A.E.)
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check className="radio-label">
                                                <Input type="radio" name="radio2" required />{' '}
                                                Ho Chi Minh (Vietnam)
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm={3} className="mt-5 mt-sm-0">
                                        <Row>
                                            <Col xs={5} lg={12}>
                                                <FormGroup className="position-relative">
                                                    <div className="file-input">
                                                        <input
                                                            type="file"
                                                            name="file"
                                                            accept=".pdf"
                                                            onChange={fileHandler}
                                                            required
                                                        />
                                                        <span className="file-placeholder"> UPLOAD YOUR CV </span>
                                                        <span className='custom-file-name'> { fileName } </span>
                                                    </div>
                                                    <span className="field-note">
                                                        * PDF format only
                                                    </span>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row className="mt-5">
                                            <Col lg={12}>
                                                <button className="form-button">
                                                    submit
                                                    <span className="btn-divider"></span>
                                                    <img src="assets/icons/send.png" className="icon" />
                                                </button>
                                            </Col>
                                        </Row>
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

export default JobListing;