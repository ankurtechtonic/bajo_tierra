import { Container, Row, Col, FormGroup, Input, List } from 'reactstrap';
import { useEffect, useContext, useState } from 'react';
import { ProductsContext } from '../../../Context';


export async function getStaticPaths() {
    const baseURL = "http://139.59.9.49:1338/current-openings/";
    const res = await fetch(baseURL);
    const posts = await res.json();
        
    const paths = posts.map((post) => ({
      params: { id: `${post.id}` },
    }))

      
    return {
            paths,
            fallback: false,
        }
}



export async function getStaticProps(context) {
    const baseURL = "http://139.59.9.49:1338/current-openings/";
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());
    const { id } = context.params;
    const res = await fetch(baseURL+id);
    const data1 = await res.json()

    return {
        props: {
            job: data1,
            Products
        },
    }
    
}




const JobDetail = ({job, Products}) => {
    const context = useContext(ProductsContext)
    const [fileName, setFileName] = useState('')

    useEffect(() => {
        context.setAllProducts(Products) 
    }, [])

    const fileHandler = e => {
        const _fileName = e.target.files[0].name
        setFileName(_fileName)
    }


    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col lg={10} className="mx-auto text-center">
                        <h1 className="page-title" dangerouslySetInnerHTML={{ __html: job.jobDetailHeading }} />
                    </Col>
                </Row>

                <Row className="margin-top">
                    <Col sm={5}>
                        <Row>
                            <Col sm={12}>
                                <h3 className="sub-heading"> Job description </h3>
                                <p className="text mt-5 text-left">
                                    {job.jobDetailPageDesc}
                                </p>
                            </Col>
                        </Row>

                        <hr className="divider1 margin-top1 mx-0" />

                        <Row className="margin-top1">
                            <Col sm={12}>
                                <h3 className="sub-heading"> Responsibilities </h3>
                                <List type="unstyled" className="mt-sm-5 custom-list">
                                    {job.responsibility.map(item => <li>
                                        {item.point}
                                    </li>)}
                                </List>
                            </Col>
                        </Row>

                        <hr className="divider1 margin-top1 mx-0"/>

                        <Row className="margin-top1">
                            <Col sm={12}>
                                <h3 className="sub-heading"> General Information </h3>
                                <List type="unstyled" className="mt-sm-5 custom-list2">
                                    <li>
                                        <label>Role: </label> 
                                        <p>{job.generalInformation.role}</p> 
                                    </li>
                                    <li>
                                        <label>Job Cateogry: </label>
                                        {job.generalInformation.jobCategory}
                                    </li>
                                    <li>
                                        <label>Required Skills: </label>
                                        {job.generalInformation.skills}
                                    </li>
                                    <li>
                                        <label>Job Location: </label>
                                        {job.generalInformation.location}
                                    </li>
                                    <li>
                                        <label> Qualification: </label>
                                        {job.generalInformation.qualification}                       
                                    </li>
                                    <li>
                                        <label> Experience: </label>
                                        {job.generalInformation.experience}                       
                                    </li>
                                </List>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={5} className="offset-sm-1 mt-5 mt-sm-0">

                        <form
                            method="POST"
                            name="jobDetails"
                            id="jobDetails"
                            action="/success"
                            enctype='multipart/form-data'
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="jobDetails" />
                            <FormGroup row>
                                <Col sm={12}>
                                    <Input
                                        type="text"
                                        className="custom-form-element" 
                                        placeholder="Name"
                                        name="name"
                                        required
                                    />
                                </Col>

                                <Col sm={12}>
                                    <Input
                                        type="text"
                                        className="custom-form-element" 
                                        placeholder="Phone"
                                        name="mob"
                                        required
                                    />
                                </Col>

                                <Col sm={12}>
                                    <Input
                                        type="email"
                                        className="custom-form-element" 
                                        placeholder="Mail"
                                        name="email"
                                        required
                                    />
                                </Col>

                                <Col lg={4} xs={5}>
                                    <FormGroup className="position-relative">
                                        <div className="file-input">
                                            <Input type="file" name="file" accept=".pdf" required onChange={fileHandler} />
                                            <span className="file-placeholder"> UPLOAD YOUR CV </span>
                                            <span className='custom-file-name'> { fileName } </span>
                                        </div>
                                        <span className="field-note">
                                            * PDF format only
                                        </span>
                                    </FormGroup>
                                </Col>

                                <Col lg={12}>
                                    <button className="form-button mt-5">
                                        submit
                                        <span className="btn-divider"></span>
                                        <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1634724450/send_f420176e20.png" className="icon" />
                                    </button>
                                </Col>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default JobDetail;