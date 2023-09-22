import { useState } from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
import styles from '../public/styles/DealerInfo.module.css'
import ClassNames from 'classnames';
import InfoList from './InfoList';



const DealerInfo = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [subList, setSubList] = useState({});

    const toggle = () => setIsOpen(!isOpen);
    
    const toggleSubList = name => {
        setSubList({
            [name]: !subList[name] 
        });
    }
    
    const cities = props.cities;

    return (
        <div
            className={ClassNames({
                dealerInfo: true,
                [styles.wrapper]: true,
                [styles.Contact]: props.Contact,
                [styles.small]: (props.size == 'small')
            })}
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-once="true"
        >
            <div
                onClick={toggle}
                className={styles.header}
            >
                <h2> { props.countryName } </h2>
                
                <button
                    className={ClassNames({
                        [styles.btnOpen]: true,
                        [styles.show]: isOpen
                    })}
                >
                    <span />
                </button>
            </div>
        

            {cities.map(item => <div className={styles.topSpacing} key={item.id}>
                <Collapse isOpen={isOpen}>
                    <Card className="border-0">
                        <CardBody className="p-0">
                            <div
                                className={styles.subHeader}
                                onClick={() => toggleSubList(item.city)}
                            >
                                <button
                                    className={ClassNames({
                                        [styles.btnOpen]: true,
                                        [styles.show]: subList[item.city]
                                    })}
                                >
                                    <span />
                                </button>

                                <h4> {item.city} </h4>
                                
                            </div>

                            <div className={styles.topSpacing}>
                                <Collapse isOpen={subList[item.city]}>
                                    <Card className="border-0">
                                        <CardBody> 
                                            <Row>
                                                {
                                                    props.size == 'small' ? (
                                                    
                                                        <Col sm={12}>
                                                            <InfoList data={item} />
                                                        </Col>
                                                        

                                                    ) : (
                                                        
                                                        <>
                                                            <Col sm={12} md={4}>
                                                                <InfoList data={item} />
                                                            </Col>

                                                            {/* <Col sm={6} md={4}>
                                                                <InfoList />
                                                            </Col>

                                                            <Col sm={6} md={4}>
                                                                <InfoList />
                                                            </Col> */}
                                                        </>
                                                    )
                                                }
                                                
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>)}

        </div>
    );
}

export default DealerInfo;