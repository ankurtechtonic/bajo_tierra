import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState, useContext } from 'react';
import styles from '../public/styles/Header.module.css'
import { ProductsContext } from '../Context';
import { List, ListInlineItem } from 'reactstrap'
import ClassNames from 'classnames';
import Menu from './Menu';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Header = ({
    palette,
    setSearchData,
    isSearchBarOpen,
    setIsSearchBarOpen
}) => {
    const[isOpen, setOpen] = useState(false);
    // const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [searchVal, setSearchVal] = useState('');
    const searchInput = useRef(null)
    const context = useContext(ProductsContext)

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset'
        AOS.init();
    },[isOpen])
    
    useEffect(() => {
        if (isSearchBarOpen) {
            setTimeout(() => {
                searchInput.current.focus()
            },500)
        }
    }, [isSearchBarOpen, searchInput])



    const handleMenu = () => {
        setOpen(!isOpen)
    }

    const handleSearchBar = () => {
        setIsSearchBarOpen(!isSearchBarOpen)
        setSearchVal('')
        setSearchData([])
    }

    const searchHandler = e => {
        const value = e.target.value
        const _allProducts = context.allProducts;
        if (value != '') {
            const _searchedData = _allProducts.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
            setSearchVal(value)
            setSearchData(_searchedData)
        }
        else {
            setSearchVal(value)
            setSearchData([])
        }
    }


    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/styles/fonts/primary-font/woff/Butler-UltraLight.woff"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/styles/fonts/secondary-font/woff/ProximaNova-Regular.woff"
                    as="font"
                    crossOrigin=""
                />
                
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />

                <link 
                    rel = "icon" 
                    href = "https://res.cloudinary.com/bajo-tierra/image/upload/v1630492925/64_64_btdsfe.png" 
                    type = "image/x-icon" 
                />

                <meta name="google-site-verification" content="8sGTao2U3FfIglN5-qMjN-gOYH1F-DM2jVTx6cDenks" />
                {/* Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QNYMRZTZ9F" />
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)};
                    gtag("js", new Date());
                    gtag("config", "G-QNYMRZTZ9F", { page_path: window.location.pathname });
                `}} />
                
            </Head>

            <span
                className={ClassNames({
                    [styles.menu]: true,
                    [styles.close]: isOpen,
                })}
                onClick={handleMenu}
            />
            <div className={styles.header}>
                <header className="header-footer-container">
                    <div className="left-div">
                        <Link href="/">
                            <a>
                                <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627300125/logo_black_l7dtce.svg" className="logo" />
                            </a>
                        </Link>
                    </div>

                    <div className={styles.rightDiv}>
                        <List type="inline" className={styles.navList}>
                            <ListInlineItem>
                                <Link href="/collection">
                                    <a>
                                        Collection
                                    </a>
                                </Link>
                            </ListInlineItem>

                            <ListInlineItem>
                                <Link href="/quartz-countertops">
                                    <a>
                                        Countertops
                                    </a>
                                </Link>
                            </ListInlineItem>
                            
                            <ListInlineItem>
                                <Link href="/about">
                                    <a>
                                        About
                                    </a>
                                </Link>
                            </ListInlineItem>
                            
                            <ListInlineItem>
                                <Link href="/why-bajo-tierra">
                                    <a>
                                        Why Bajo Tierra
                                    </a>
                                </Link>
                            </ListInlineItem>
                            
                            <ListInlineItem>
                                <Link href="/franchise">
                                    <a>
                                        Franchise
                                    </a>
                                </Link>
                            </ListInlineItem>
                            
                            <ListInlineItem>
                                <Link href="/contact">
                                    <a>
                                        Contact
                                    </a>
                                </Link>
                            </ListInlineItem>
                        </List>

                        <div className={styles.actions}>
                            <span onClick={handleSearchBar}>
                                <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627300139/Search2_fhclfm.svg"/>
                            </span>
                            {/* <span
                                className={ClassNames({
                                    [styles.menu]: true,
                                    [styles.close]: isOpen,
                                })}
                                onClick={handleMenu}
                            /> */}
                        </div>

                    </div>
                </header>
            </div>
            
            <div className={ClassNames({
                [styles.searchBar]: true,
                [styles.show]: isSearchBarOpen
            })}>
                <input
                    ref={searchInput}
                    autoFocus
                    placeholder="Type to search..."
                    onChange={e => searchHandler(e)}
                    value={searchVal}
                />
                
                <div className="d-flex align-items-center h-100">
                    <span
                        className={ClassNames({
                            [styles.menu]: true,
                            [styles.close]: true,
                        })}
                        onClick={handleSearchBar}
                    />
                    <span
                        className={ClassNames({
                            [styles.searchIcon]: true,
                            [styles.bgActive]: (searchVal != '')
                        })}
                    >
                        <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627300139/Search2_fhclfm.svg"/>
                    </span>
                </div>
            </div>

            { isOpen && <Menu handleMenu={handleMenu} palette={palette} /> }
        </>
    )
}

export default Header;