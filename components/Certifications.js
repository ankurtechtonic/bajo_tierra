import { Row, Col } from 'reactstrap';
import Link from 'next/link'


const Certifications = ({ data }) => {
    return (
        <Row className="margin-top">
            <Col lg={10} className="mx-auto text-center" id="certifications">
                <h2 className="section-title certifications-title"> CERTIFICATIONS </h2>
                <div className="wrapper">
                    {
                        data.map((item) => {
                            <img
                                src={item.url}
                                data-aos="zoom-in"
                                data-aos-delay="100"
                                data-aos-once="true"
                            />
                        })
                    }
                </div>

                <Link href="/">
                    <button
                        className="primary-button mx-auto"
                        data-aos="fade-in"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        Home
                    </button>
                </Link>
            </Col>
        </Row>
    )
}

export default Certifications;