import { Row, Col } from 'reactstrap';


const Clientele = ({ data }) => {
    return (
        <Row className="margin-top">
            <Col lg={10} className="mx-auto text-center">
                <h2 className="section-title clientele-title"> Clientele </h2>

                <div className="brand-img-wrapper">
                    {
                        data.map((item) => (
                            <div className="img">
                                <img
                                    src={item.ClientGallaryData.url}
                                    data-aos="zoom-in"
                                    data-aos-delay="100" 
                                    data-aos-once="true"
                                />
                            </div>
                        ))
                    }
                </div>
            </Col>
        </Row>
    )
}

export default Clientele;