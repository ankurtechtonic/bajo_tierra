import Image from 'next/image'
import Link  from 'next/link'
import styles from '../public/styles/Footer.module.css'
import { List, ListInlineItem, Collapse } from 'reactstrap'
import ClassNames from 'classnames';
import { useState } from 'react';



const Footer = ({ data }) => {
    const [isSubListOpen, setIsSubListOpen] = useState({});
    
    const handleSubMenu = (name) => {
        // e.preventDefault();
        // e.stopPropagation()
        console.log( name, '[');
        setIsSubListOpen({
            [name]: !isSubListOpen[name]
        })
    };

    return (
        <footer className="margin-top">
            <div className={styles.topBand}>
                <Link href="/contact">
                    <div className="header-footer-container cursor-pointer">
                        <h1>Get a quote</h1>
                        <span className={styles.nextBtn}>
                            <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1629652717/ASSETS-11_pgsgsf.svg" />
                        </span>
                    </div>
                </Link>
            </div>

            <div className={styles.footer}>
                <div className="header-footer-container align-items-start">
                    <List type="unstyled" >
                        <li>
                            <Link href="/about"> About </Link>
                        </li>

                        <li>
                            <Link href="/why-bajo-tierra"> Why Bajo Tierra </Link>
                        </li>
                        
                        <li>
                            <Link href="/csr"> CSR </Link>
                        </li>
                        
                        <li>
                            <Link href="/job-listing"> Careers </Link>
                        </li>

                        <li
                            className={ClassNames({
                                [styles.open]: (isSubListOpen.location),
                                "d-none": true,
                                "d-sm-block": true,
                            })}
                        >
                            <span
                                className="d-flex w-100 position-relative line-height"
                                onClick={(e) => handleSubMenu('location')}
                            >
                                Locations
                            </span>

                            <div className={ClassNames({
                                [styles.locations]: true,
                                [styles.open]: isSubListOpen.location,
                                "animate__animated animate__fadeInUp animate-delay-0_1": true
                            })}>
                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.location
                                })}>
                                    <h2 className={styles.title}> india </h2>
                                    <p className={styles.email}>
                                        <a href="https://www.google.com/maps/dir//Bajo+Tierra+Pvt+Ltd+(Head+Office),+B-2,+near+Metro+Pillar+Number+379,+Block+B,+Rajouri+Garden,+New+Delhi,+Delhi+110027/@28.6508275,77.1242538,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d03f9c4c8bda7:0x21ce1f630ee39d18!2m2!1d77.1264425!2d28.6508228" >
                                            Delhi
                                        </a>
                                    </p>
                                    <p>Bajo Tierra Pvt ltd., Ground Floor, block-E, Mansarowar Garden, New Delhi -110015</p>
                                    {/* <p>Mansarowar Garden, New Delhi -110015</p> */}
                                </div>

                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.location
                                })}>
                                    <h2 className={styles.title}> U.A.E </h2>
                                    <p className={styles.email}> 
                                        <a href="https://www.google.com/maps/dir/28.6071518,77.332278/Atlas+Marble+%26+Granite+Tr.+Industrial+Area+No.+11+Sharjah,+U.A.E./@26.664313,57.3630798,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5eef2fd305fd:0x918cdd0c56cd0f2f!2m2!1d55.434062!2d25.2954497">
                                            Sharjah
                                        </a>
                                    </p>
                                    <p>Atlas Marble & Granite Tr. Industrial Area No. 11 Sharjah, U.A.E.</p>
                                    {/* <p>9428451254575</p> */}
                                </div>

                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_2": isSubListOpen.location
                                })}>
                                    <h2 className={styles.title}> vietnam </h2>
                                    <p className={styles.email}>
                                        <a href="https://www.google.com/maps/dir/28.6071518,77.332278/58%2F2A+QL1A,+%E1%BA%A5p+Ti%E1%BB%81n+L%C3%A2n+1,+B%C3%A0+%C4%90i%E1%BB%83m,+H%C3%B3c+M%C3%B4n,+HCM+(g%E1%BA%A7n+ng%C3%A3+t%C6%B0+B%C3%A0+%C4%90i%E1%BB%83m)/@18.7938297,73.6476511,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31752baa38cc6421:0x51f61b20373db0b0!2m2!1d106.605787!2d10.8327931" >
                                            Ho Chi Minh
                                        </a>
                                    </p>
                                    <p>58/2A QL1A, ấp Tiền Lân 1, Bà Điểm, Hóc Môn, HCM (gần ngã tư Bà Điểm)</p>
                                    {/* <p>9428451254575</p> */}
                                </div>
                            </div>
                        
                            {/* <Collapse isOpen={isSubListOpen.location}>
                                <div className={styles.locations}>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p>Opp. Udaipur-Bhilwara Highway, Chittorghar Rajasthan, 312001</p>
                                    </div>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p>Opp. Udaipur-Bhilwara Highway, Chittorghar Rajasthan, 312001</p>
                                    </div>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p>Opp. Udaipur-Bhilwara Highway, Chittorghar Rajasthan, 312001</p>
                                    </div>
                                </div>
                            </Collapse> */}
                        </li>
                    </List>                    

                    <List type="unstyled" >
                        <li>
                            <Link href="/blogs"> Blogs </Link>
                        </li>

                        <li>
                            <Link href="/factory-outlet"> Outlets </Link>
                        </li>

                        <li>
                            <Link href="/contact"> Contact </Link>
                        </li>

                        <li>
                            <Link href="/quartz-countertops"> Countertops </Link>
                        </li>

                        <li
                            className={ClassNames({
                                [styles.open]: (isSubListOpen.contact),
                                "d-none": true,
                                "d-sm-block": true,
                            })}
                        >
                            <span
                                className="d-flex w-100 position-relative line-height"
                                onClick={e => handleSubMenu('contact')}
                            >
                                Contacts
                            </span>

                            <div className={ClassNames({
                                [styles.contact]: true,
                                [styles.open]: isSubListOpen.contact,
                                "animate__animated animate__fadeInUp animate-delay-0_1": true
                            })}>
                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.contact
                                })}>
                                    <h2 className={styles.title}> india </h2>
                                    <p className={styles.email}>
                                        <a href="mailto:export@bajotierra.com">
                                            export@bajotierra.com
                                        </a>
                                    </p>
                                    <p>+91 74034 21111</p>
                                    <p>+91 85659 41111</p>
                                </div>

                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.contact
                                })}>
                                    <h2 className={styles.title}> U.A.E </h2>
                                    <p className={styles.email}>
                                        <a href="mailto:atlasmarble2016@gmail.com">
                                            atlasmarble2016@gmail.com
                                        </a>
                                    </p>
                                    <p>+971 54 4211331</p>
                                    {/* <p>9428451254575</p> */}
                                </div>

                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_2": isSubListOpen.contact
                                })}>
                                    <h2 className={styles.title}> vietnam </h2>
                                    <p className={styles.email}> 
                                        <a href="mailto:Bajotierra.vn@gmail.com">
                                            Bajotierra.vn@gmail.com
                                        </a>
                                    </p>
                                    <p>0981118130</p>
                                    {/* <p>9428451254575</p> */}
                                </div>
                            </div>

                            {/* <Collapse isOpen={isSubListOpen.contact}>
                                <div className={styles.contact}>
                                    <div className={`${styles.div} animate__animated animate__fadeInUp animate-delay-0_1`}>
                                        <h2 className={styles.title}> india </h2>
                                        <p className={styles.email}> info@bajotierra.com </p>
                                        <p>9428451254575</p>
                                        <p>9428451254575</p>
                                    </div>
                                    <div className={`${styles.div} animate__animated animate__fadeInUp animate-delay-0_2`}>
                                        <h2 className={styles.title}> india </h2>
                                        <p className={styles.email}> info@bajotierra.com </p>
                                        <p>9428451254575</p>
                                        <p>9428451254575</p>
                                    </div>
                                    <div className={`${styles.div} animate__animated animate__fadeInUp animate-delay-0_3`}>
                                        <h2 className={styles.title}> india </h2>
                                        <p className={styles.email}> info@bajotierra.com </p>
                                        <p>9428451254575</p>
                                        <p>9428451254575</p>
                                    </div>
                                </div>
                            </Collapse> */}
                        </li>
                    </List>

                    <List
                        type="unstyled"
                        className={ClassNames({
                            "d-sm-none": true,
                            [styles.dropdownList]: true
                        })}
                    >
                        <li
                            className={ClassNames({
                                [styles.open]: (isSubListOpen.location),
                                [styles.dropdown]: true
                            })}
                        >
                            <span
                                className="d-flex w-100 position-relative line-height"
                                onClick={e => handleSubMenu('location')}
                            >
                                Locations
                            </span>

                            <div className={ClassNames({
                                [styles.locations]: true,
                                [styles.open]: isSubListOpen.location,
                                "animate__animated animate__fadeInUp animate-delay-0_1": true
                            })}>
                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.location
                                })}>
                                    <h2 className={styles.title}> india </h2>
                                    <p className={styles.email}>
                                        <a href="https://www.google.com/maps/dir//Bajo+Tierra+Pvt+Ltd+(Head+Office),+B-2,+near+Metro+Pillar+Number+379,+Block+B,+Rajouri+Garden,+New+Delhi,+Delhi+110027/@28.6508275,77.1242538,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d03f9c4c8bda7:0x21ce1f630ee39d18!2m2!1d77.1264425!2d28.6508228" >
                                            Delhi
                                        </a>
                                    </p>
                                    <p>Bajo Tierra Pvt ltd., Ground Floor, block-E, Mansarowar Garden, New Delhi -110015</p>
                                </div>

                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.location
                                })}>
                                    <h2 className={styles.title}> U.A.E </h2>
                                    <p className={styles.email}>
                                        <a href="https://www.google.com/maps/dir/28.6071518,77.332278/Atlas+Marble+%26+Granite+Tr.+Industrial+Area+No.+11+Sharjah,+U.A.E./@26.664313,57.3630798,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5eef2fd305fd:0x918cdd0c56cd0f2f!2m2!1d55.434062!2d25.2954497">
                                            Sharjah
                                        </a>
                                    </p>
                                    <p>Atlas Marble & Granite Tr. Industrial Area No. 11 Sharjah, U.A.E.</p>
                                </div>


                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_2": isSubListOpen.location
                                })}>
                                    <h2 className={styles.title}> vietnam </h2>
                                    <p className={styles.email}> Ho Chi Minh </p>
                                    <p>58/2A QL1A, ấp Tiền Lân 1, Bà Điểm, Hóc Môn, HCM (gần ngã tư Bà Điểm)</p>
                                </div>
                            </div>

                        
                            {/* <Collapse isOpen={isSubListOpen.location} >
                                <div className={styles.locations}>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p>Opp. Udaipur-Bhilwara Highway, Chittorghar Rajasthan, 312001</p>
                                    </div>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p>Opp. Udaipur-Bhilwara Highway, Chittorghar Rajasthan, 312001</p>
                                    </div>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p>Opp. Udaipur-Bhilwara Highway, Chittorghar Rajasthan, 312001</p>
                                    </div>
                                </div>
                            </Collapse> */}
                        </li>


                        <li
                            className={ClassNames({
                                [styles.open]: (isSubListOpen.contact),
                                [styles.dropdown]: true
                            })}
                        >
                            <span
                                className="d-flex w-100 position-relative line-height"
                                onClick={e => handleSubMenu('contact')}
                            >
                                Contacts
                            </span>

                            <div className={ClassNames({
                                [styles.contact]: true,
                                [styles.open]: isSubListOpen.contact,
                                "animate__animated animate__fadeInUp animate-delay-0_1": true
                            })}>
                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.contact
                                })}>
                                    <h2 className={styles.title}> india </h2>
                                    <p className={styles.email}>
                                        <a href="mailto:export@bajotierra.com">
                                            export@bajotierra.com
                                        </a>
                                    </p>
                                    <p>+91 74034 21111</p>
                                    <p>+91 85659 41111</p>
                                </div>
                                
                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_1": isSubListOpen.contact
                                })}>
                                    <h2 className={styles.title}> u.a.e </h2>
                                    <p className={styles.email}>
                                        <a href="mailto:atlasmarble2016@gmail.com">
                                            atlasmarble2016@gmail.com
                                        </a>
                                    </p>
                                    <p>+971 54 4211331</p>
                                </div>


                                <div className={ClassNames({
                                    [styles.div]: true,
                                    "animate__animated animate__fadeInUp animate-delay-0_2": isSubListOpen.contact
                                })}>
                                    <h2 className={styles.title}> vietnam </h2>
                                    <p className={styles.email}>
                                        <a href="mailto:Bajotierra.vn@gmail.com">
                                            Bajotierra.vn@gmail.com
                                        </a>
                                    </p>
                                    <p>0981118130</p>
                                </div>
                            </div>

                            {/* <Collapse isOpen={isSubListOpen.contact}>
                                <div className={styles.contact}>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p className={styles.email}> info@bajotierra.com </p>
                                        <p>9428451254575</p>
                                        <p>9428451254575</p>
                                    </div>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p className={styles.email}> info@bajotierra.com </p>
                                        <p>9428451254575</p>
                                        <p>9428451254575</p>
                                    </div>
                                    <div className={styles.div}>
                                        <h2 className={styles.title}> india </h2>
                                        <p className={styles.email}> info@bajotierra.com </p>
                                        <p>9428451254575</p>
                                        <p>9428451254575</p>
                                    </div>
                                </div>
                            </Collapse> */}
                        </li>
                    </List>

                    <List type="unstyled" >
                        <li>
                            <Link href="/">
                                <a>
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628243245/logo_white_dukgnl.svg"  className={styles.logo}/>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <label> Email us </label>
                            <a href="mailto:export@bajotierra.com">
                                export@bajotierra.com
                            </a>
                        </li>
                        <li className={styles.socialIconsDiv}>
                            <span className="icon">
                                <a href="https://www.facebook.com/bajotierra.quartz/" target="_blank">
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628243441/fb_cuhwkp.svg" />
                                </a>
                            </span>

                            <span className="icon">
                                <a href="https://www.instagram.com/bajotierra.quartz/?hl=en" target="_blank">
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628243441/insta_zm5nqs.svg" />
                                </a>
                            </span>

                            <span className="icon">
                                <a href="https://www.linkedin.com/in/bajo-tierra" target="_blank">
                                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1628243441/linkedin_g0xgz2.svg" />
                                </a>
                            </span>
                        </li>
                    </List>
                </div>

                <div className={ClassNames({
                    [styles.descp]: true,
                    // "margin-top": true,
                })}>
                    <p>Copyright © Bajo Tierra 2021-2022 All Rights Reserved</p>
                    <p className="m-0">
                    Bajo Tierra is a manufacturer of premium quartz surfaces across a range of applications such as quartz kitchen countertops, vanity countertops, quartz countertops, bathroom countertops, backsplash, etc., besides many other bespoke solutions.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;