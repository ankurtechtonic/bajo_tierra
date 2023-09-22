import { Container, Row, Col } from 'reactstrap';
import { BlogPostCard } from '../components/CustomCards';
import BlogSlider from '../components/BlogSlider';
import { useEffect, useContext } from 'react';
import { ProductsContext } from '../Context';

export async function getStaticProps() { 
    const csr = await fetch("http://139.59.9.49:1338/csrs").then(response => response.json());
    const data = await fetch("http://139.59.9.49:1338/blogs").then(response => response.json());
    const sliderBlogs = data.filter(el => el.blogSlider === 'true');
    const Products = await fetch("http://139.59.9.49:1338/countertops").then(response => response.json());

    return {
        props: {
            csr,
            sliderBlogs,
            Products
        },
    }
}


const CSR = ({csr, sliderBlogs, Products}) => {
    const context = useContext(ProductsContext)

    useEffect(() => {
        context.setAllProducts(Products) 
      }, [])
    
    return (
        <>
            <Container>
                <Row className="margin-top">
                    <Col
                        lg={10}
                        className="mx-auto text-center"
                        data-aos="fade-in"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        <h1 className="page-title corporate-title">
                            Corporate <br className="break" /> Social <span> Responsibility </span>
                        </h1>
                    </Col>

                    <Col
                        lg={5}
                        className="mx-auto text-center"
                        data-aos="fade-in"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        <p className="mx-auto my-2 my-md-5 text collection">
                            We have always believed in adding value to lives. This is not limited to our clients and customers but extends to our social responsibility towards giving back to the society. Because growth in business does not operate in isolation but by supporting the environment for collective progress. We actively participate in uplifting the communities through various activities.
                            
                            <p className="custom-bold">
                                Creating sturdy solutions to strengthen communities through thought-led practices.
                            </p>
                        </p>
                    </Col>
                </Row>

                <Row>
                    
                    {
                        csr.map(item => 
                            (
                                <div className="position-relative">
                                    <div id={`csr${item.id}`} className="position-absolute scroll-top" />
                                    <Col
                                        lg={10}
                                        className="mx-auto text-center margin-top1"
                                    >
                                        <BlogPostCard
                                            title={item.title}
                                            num={item.itemNumber}
                                            desc={item.description}
                                            imgSrc={item.image.url}
                                            CSR
                                        />
                                    </Col>
                                </div>
                            )
                        )
                    }
                </Row>
            </Container>

            <BlogSlider blogs={sliderBlogs} />
        </>
    )
}

export default CSR;