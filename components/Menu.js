import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { List, Collapse, Card, CardBody } from 'reactstrap'
import ClassNames from 'classnames';
import styles from '../public/styles/Menu.module.css'


const Menu = ({ handleMenu, palette }) => {
    const [dropdown, setDropdown] = useState({})
    const router = useRouter();
    // console.log(palette);
    const dropdownHandler = item => {
        setDropdown({
            // ...dropdown,
            [item]: !dropdown[item]
        })
    }

    const navigationHandler = url => {
        router.push(url)
        handleMenu();
    }

    return (
        <div className={`${styles.wrapper} animate__animated animate__fadeIn animate-delay-0_1`}>
            <div className={styles.left} />

            <div className={styles.right}>
                <Link href="/">
                    <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627300125/logo_black_l7dtce.svg" className="logo" />
                </Link>

                <div className={styles.listWrapper}>
                    <aside className={styles.list} >
                        <List type="unstyled" >
                            <Link href="/" onClick={() => router.reload()} scroll={true}>
                                <li
                                    className="animate__animated animate__fadeInUp animate-delay-0_1"
                                    onClick={() => navigationHandler('/')}
                                >
                                    <a>
                                        Home
                                    </a>
                                </li>
                            </Link>

                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                <span
                                    className={ClassNames({
                                        [styles.subMenuToggler]: true,
                                        [styles.show]: dropdown.collection
                                    })}
                                    onClick={() => dropdownHandler('collection')}
                                >
                                    Collection
                                    <img src={"https://res.cloudinary.com/bajo-tierra/image/upload/v1627298783/black-next_fxtxek.png"} className={`icon ${[styles.menuArrow]}`} />
                                </span>

                                <Collapse isOpen={dropdown.collection}>
                                    <List type="unstyled" className={styles.subMenu} >
                                        <Link href="/collection" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Collection
                                            </li>
                                        </Link>

                                        <Link href="/top-sellers" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Top Sellers
                                            </li>
                                        </Link>

                                        <li className={`${styles.title} animate__animated animate__fadeInUp animate-delay-0_1`}>
                                            Color Pallete
                                        </li>

                                        <Link href="/color-palettes/series/White" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                White Quartz
                                            </li>
                                        </Link>

                                        <Link href="/color-palettes/series/Grey" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Grey Quartz
                                            </li>
                                        </Link>

                                        <Link href="/color-palettes/series/Beige" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Beige Quartz
                                            </li>
                                        </Link>
                                    </List>
                                </Collapse>
                            </li>

                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                <span
                                    className={ClassNames({
                                        [styles.subMenuToggler]: true,
                                        [styles.show]: dropdown.countertops
                                    })}
                                    onClick={() => dropdownHandler('countertops')}
                                >

                                    About
                                    <img src={"https://res.cloudinary.com/bajo-tierra/image/upload/v1627298783/black-next_fxtxek.png"} className={`icon ${[styles.menuArrow]}`} />
                                </span>

                                <Collapse isOpen={dropdown.countertops}>
                                    <List type="unstyled" className={styles.subMenu} >
                                        <Link href="/about" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                About
                                            </li>
                                        </Link>

                                        <Link href="/why-bajo-tierra" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Why Bajo Tierra
                                            </li>
                                        </Link>

                                        <Link href="/infrastructure" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Infrastructure
                                            </li>
                                        </Link>

                                        <Link href="/exhibition" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Exhibition
                                            </li>
                                        </Link>


                                        <Link href="/corporate-video" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Corporate Video
                                            </li>
                                        </Link>
                                    </List>
                                </Collapse>
                            </li>


                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                <span
                                    className={ClassNames({
                                        [styles.subMenuToggler]: true,
                                        [styles.show]: dropdown.about
                                    })}
                                    onClick={() => dropdownHandler('about')}
                                >
                                    Countertops
                                    <img src={"https://res.cloudinary.com/bajo-tierra/image/upload/v1627298783/black-next_fxtxek.png"} className={`icon ${[styles.menuArrow]}`} />
                                </span>

                                <Collapse isOpen={dropdown.about}>
                                    <List type="unstyled" className={styles.subMenu} >
                                        <Link href="/quartz-countertops" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Countertops
                                            </li>
                                        </Link>

                                        <Link href="/prefab" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Prefab
                                            </li>
                                        </Link>

                                        <Link href="/product-feature" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_1">
                                                Product Features
                                            </li>
                                        </Link>

                                        <Link href="/quartz-granite" onClick={() => router.reload()} scroll={true}>
                                            <li className="animate__animated animate__fadeInUp animate-delay-0_3">
                                                Quartz vs. Granite
                                            </li>
                                        </Link>

                                    </List>
                                </Collapse>
                            </li>

                            <Link href="/catalog" onClick={() => router.reload()} scroll={true}>
                                <li
                                    className="animate__animated animate__fadeInUp animate-delay-0_1"
                                    onClick={() => navigationHandler('/catalog')}
                                >
                                    Catalog
                                </li>
                            </Link>

                        </List>
                    </aside>

                    <div className={styles.list} id={styles.list2}>
                        <List type="unstyled" >
                            <Link href="/job-listing" onClick={() => router.reload()} scroll={true}>
                                <li
                                    className="animate__animated animate__fadeInUp animate-delay-0_1"
                                    onClick={() => navigationHandler('/job-listing')}
                                >
                                    Careers
                                </li>
                            </Link>

                            <Link href="/blogs" onClick={() => router.reload()} scroll={true}>
                                <li
                                    className="animate__animated animate__fadeInUp animate-delay-0_1"
                                    onClick={() => navigationHandler('/blogs')}
                                >
                                    Blogs
                                </li>
                            </Link>

                            <Link href="/factory-outlet" onClick={() => router.reload()} scroll={true}>
                                <li
                                    className="animate__animated animate__fadeInUp animate-delay-0_1"
                                    onClick={() => navigationHandler('/factory-outlet')}
                                >
                                    Outlets
                                </li>
                            </Link>

                            <Link href="/contact" onClick={() => router.reload()} scroll={true}>
                                <li
                                    className="animate__animated animate__fadeInUp animate-delay-0_1"
                                    onClick={() => navigationHandler('/contact')}
                                >
                                    Contact
                                </li>
                            </Link>
                        </List>

                        <div className={styles.actionWidget}>
                            <div
                                className={ClassNames({
                                    [styles.customLink]: true,
                                    "animate__animated animate__fadeInUp ": true,
                                    "animate-delay-0_1": true
                                })}
                                onClick={() => navigationHandler('/franchise')}
                            >
                                <a> Own a Franchise </a>
                                <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1629652921/ASSETS-50_bk70f7.svg" />
                            </div>

                            <div className={styles.icons}>
                                <legend className="animate__animated animate__fadeInUp animate-delay-0_1"> Social </legend>
                                <div className="animate__animated animate__fadeInUp animate-delay-0_1">
                                    <a href="https://www.facebook.com/bajotierra.quartz/" target="_blank">
                                        <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1629652333/fb_bxyml6.svg" className="icon" />
                                    </a>

                                    <a href="https://www.instagram.com/bajotierra.quartz/?hl=en" target="_blank">
                                        <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1629652333/insta_tbkwwj.svg" className="icon" />
                                    </a>

                                    <a href="https://www.linkedin.com/in/bajo-tierra" target="_blank">
                                        <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1629652333/linkedin_hlznlp.svg" className="icon" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu;