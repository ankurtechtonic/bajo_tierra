import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

const FindDealer = () => {
    return (
        <Container>
            <Row>
                <Col lg={10} className="location margin-top" data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627300389/navigation_ov0esh.png" className="nav-icon"/>
                    <h1 className="title3 mt-4 text-center">
                        Locate the<span> showroom near you </span> 
                    </h1>
                    <Link href="/franchise">
                    <button className="primary-button collection-explore mx-auto mt-5">
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
            </Row>
        </Container>
    )
}

export default FindDealer;