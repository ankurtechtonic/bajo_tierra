import Link from 'next/link'
import styles from '../public/styles/CustomCards.module.css'
import ClassNames from 'classnames';
import { Container, List, Row, Col } from 'reactstrap'
import { PlayIcon } from './Sliders'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router';
import classNames from 'classnames';


export const SimpleCard = (props) => {
    return (
        <div
            className={ClassNames({
                [styles.wrapper]: true,
                "margin-top": true,
            })}
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-once="true"
        >
            <h6>0{props.num}</h6>
            <Link href="/collection/series/[slug]" as={`/collection/series/${props.slug}`}>
                <div className="img-zoom" style={{cursor: "pointer"}}>
                    <img src={props.imgSrc} />
                </div>
            </Link>

            <div className="d-flex justify-content-between align-items-start mt-3">
                <h3> {props.name} <span> Series </span> </h3>
                <Link href="/collection/series/[slug]" as={`/collection/series/${props.slug}`}>
                    <a>
                        <button className="primary-button">
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
                    </a>
                </Link>
            </div>
        </div>
    )
}


export const SimpleCard2 = ({
    title,
    titleHighlighted,
    img,
    img2,
    text,
    video,
    videoHeight,
    inSlider,
    corporateVideo
}) => {
    return (
        <div className={styles.simpleCard2} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
            {
                corporateVideo ? (
                    <h6 className="dash1" dangerouslySetInnerHTML={{__html: title}} />
                ) : (
                    <h6 className="dash1">
                        <span>{title + ' '}</span>
                        <span>{titleHighlighted}</span>
                    </h6>
                )
            }

            {
                video && (
                    <div>
                        <ReactPlayer
                            url={video}
                            width="100%"
                            height={videoHeight}
                            playing={true}
                            controls={true}
                            light={"https://res.cloudinary.com/bajo-tierra/image/upload/v1628071382/coming_soon_copy_ucxw6r.jpg"}
                        // light={"assets/banner1.png"}
                        // playIcon={<PlayIcon />}
                        />
                    </div>
                )
            }

            <div>
                <img src={img} className={inSlider && styles.inSlider} />
            </div>

            {img2 && (
                <div>
                    <img src={img2} className="mt-2 mt-sm-4" />
                </div>
            )}
            <p className="text mt-sm-5 mt-4">{text}</p>
        </div>
    )
}


export const SimpleCard3 = ({
    title,
    img,
    text,
    from,
    serialNum,
    buttonClass,
    redirectToSection,
    url
}) => {
    return (
        <div
            className={ClassNames({
                [styles.simpleCard3]: true,
                [styles.fromWhyD]: (from == 'whyDealer')
            })}
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-once="true"
        >
            {(from == 'whyDealer') && <h6> {serialNum} </h6>}
        
            {(from != 'whyDealer') && (
                // <Link href="/factory-outlet">
                <div className="img-zoom" onClick={() => redirectToSection(url, buttonClass)}>
                    <img src={img} />
                </div>
            )}
                {/* // </Link>)} */}

            {(from == 'whyDealer') && (
                <div className="">
                    <img src={img} />
                </div>
            )}


            <div className={styles.content}>
                <div className={ClassNames({
                    "w-50": (from != 'whyDealer'),
                    "w-100": (from == 'whyDealer'),
                })}>
                    <h3> {title} </h3>
                    <p className="text"> {text} </p>
                </div>

                {(from != 'whyDealer') && (
                    <button
                        className={"primary-button " + buttonClass}
                        onClick={() => redirectToSection(url, buttonClass)}
                    >
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

                        view

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
                )}
            </div>
        </div>
    )
}

export const SimpleCard4 = ({
    img,
    footer
}) => {
    return (
        <div className={styles.simpleCard4}>
            <img src={img} />
            <div className="bottom-row" dangerouslySetInnerHTML={{ __html: footer }} />
        </div>
    )
}

export const BlogCard = ({
    img,
    title,
    text,
    id
}) => {
    return (
        <div className={styles.blogCard} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">

            <div className={ClassNames({
                [styles.img]: true,
                "img-zoom": true
            })}>
                <img src={img} />
            </div>

            <div className={styles.content}>
                <h2> {title} </h2>
                <p> {text} </p>
                <Link href="/blog-inner/[id]" as={`/blog-inner/${id}`}>
                    <button className="primary-button"> Read More </button>
                </Link>
                {/* <button className="primary-button">
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
                                    fill="#000"
                                />
                            </g>
                        </svg>
                    </span>
                    
                    Read More

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
                                    fill="#000"
                                />
                            </g>
                        </svg>
                    </span>
                </button> */}

            </div>

        </div>
    )
}


export const BlogSliderCard = props => {
    return (
        <div className={ClassNames({
            [styles.blogSliderCard]: true,
            [styles.exhibition]: (props.type == 'exhibition')
        })}>
            {
                props.type == 'exhibition' && (
                    <div className={styles.header}>
                        <h2>{props.city}, <span>{props.country}</span></h2>
                        <span className="icon">
                            <img src="assets/icons/Star1.svg" className="icon" />
                        </span>
                        {/* <img src="assets/icons/star.png" className="icon"/> */}
                    </div>
                )
            }

            <div>
                {
                    props.type == 'exhibition' ? (
                        <img src={props.img} className="mb-3" />
                    
                        ) : (
                        <Link href="/blog-inner/[id]" as={`/blog-inner/${props.blog.id}`}>
                            <img src={props.img} className="mb-3 cursor-pointer" />
                        </Link>
                    )
                }
            </div>

            <div className={styles.middle}>
                {
                    props.type == 'exhibition' ? (
                        <>
                            <h6>{props.name}</h6>
                            <div className={ClassNames({
                                [styles.right]: true,
                                "d-none": true,
                                "d-sm-block": true
                            })}>
                                <span className="d-block">{props.hallNo}</span>
                                <span className="d-block">
                                    <label> {props.dateFrom}<sup>TH</sup>-{props.dateTo}<sup>TH</sup> </label> {props.date}
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <h6>{props.blog.blogPageHeading}</h6>
                            <div className={styles.right}>
                                <span> {props.blog.datePublished} </span>
                            </div>
                        </>
                    )
                }
            </div>
            <div className={styles.footer}>
                {props.type == 'exhibition' ? (
                    <>

                        <p>
                            {props.desc}
                        </p>

                        <div className={ClassNames({
                            [styles.right]: true,
                            "d-sm-none": true
                        })}>
                            <span className="d-block">{props.hallNo}</span>
                            <span className="d-block">
                                <label> {props.dateFrom}<sup>TH</sup>-{props.dateTo}<sup>TH</sup> </label> {props.date}
                            </span>
                        </div>
                        {/* <span className={styles.btn}>
                                view gallery
                                <span className={styles.arrow}>
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
                                                fill="#000"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            </span> */}
                    </>
                ) : (
                    <>
                        <p>
                            {props.blog.blogPageDesc}
                        </p>
                        <Link href="/blog-inner/[id]" as={`/blog-inner/${props.blog.id}`}>
                            <span className="d-flex align-items-center justify-content-end cursor-pointer">
                                view
                                <span className={styles.arrow}>
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
                                                fill="#000"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            </span>
                        </Link>
                    </>
                )
                }
            </div>
        </div>
    )
}


export const BlogPostCard = (props) => {
    return (
        <div
            className={classNames({
                [styles.blogPostCard]: true,
                [styles.CSR]: props.CSR
            })}
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-once="true"
        >
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h3>{props.title}</h3>
                <span>0{props.num}</span>
            </div>
            <div>
                <img src={props.imgSrc} />
            </div>
            <p className="my-3 my-md-5 text">
                {props.desc}
            </p>
        </div>
    )
}


export const BlogPostCard2 = ({
    img,
    serialNum,
    mainTitle,
    subTitle,
    category,
    text
}) => {

    return (
        <div className={styles.blogPostCard2} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
            <div className={styles.header}>
                <span> {serialNum} </span>
                <h3> {mainTitle} </h3>
                <label className="d-none d-sm-block"> {category} </label>
            </div>

            <div>
                <img src={img} />
            </div>

            <label className="d-sm-none"> {category} </label>
            {/* <h6> {subTitle} </h6> */}
            <p className="text mt-4"> {text} </p>
        </div>
    )
}


export const BlogPostCard3 = ({
    img,
    title,
    num
}) => {
    const router = useRouter()
    const redirectTo = (num) => {
        window.location.href = '/csr#csr' + num;
        // router.push('/csr#csr' + num);
    }

    return (
        <div className={styles.blogPostCard3}>
            <img src={img} />
            <div className="d-flex justify-content-between align-items-start mt-4 bottom-row">
                <h3>{title}</h3>
                {/* <Link href={"/csr#"+num} onClick={()=>redirectTo(num)}></Link> */}
                
                <span onClick={() => redirectTo(num)} className="bottom-row">View More</span>
            </div>
        </div>
    )
}

export const GridCard2 = ({
    preTitle,
    title,
    titleHighlighted,
    subTitle,
    text,
    img,
    name
}) => {
    return (
        <div className={styles.gridCard2 + " " + name}>
            <div className={styles.left} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                {preTitle && <label> {preTitle} </label>}
                <h1>
                    <span>{title}</span>
                    <span className="d-block">{titleHighlighted}</span>
                </h1>

                {subTitle && <h4 className="d-none d-md-block mt-4"> {subTitle} </h4>}
                <p className="text d-none d-md-block">{text}</p>
            </div>

            <div className={styles.right} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                <img src={img} />
                {subTitle && <h4 className="text-left d-md-none mt-4"> {subTitle} </h4>}
                <p className="text d-md-none mt-4"> {text} </p>
            </div>
        </div>
    )
}


export const GridCard3 = ({
    align,
    serialNum,
    title,
    text,
    img,
    num,
    buttonClass,
    redirectToSection,
    url
}) => {
    return (
        <div className={ClassNames({
            [styles.gridCard3]: true,
            [styles.right]: align == 'right',
            "margin-top": true
        })}
            data-aos="fade-in" data-aos-delay="100" data-aos-once="true"
        >
            <div className={styles.content}>
                <p className={styles.serialNum}> {serialNum} </p>
                <h3 className={styles.title}> {title} </h3>
                <p className={styles.text}> {text}  </p>
                {/* <Link href={"/prefab#" + buttonClass}>
                
                </Link> */}
                <button className={"primary-button " + buttonClass} onClick={() => redirectToSection(url, buttonClass)}>
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
                                    fill="#000"
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
                                    fill="#000"
                                />
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
            <div className={ClassNames({
                [styles.imgWrapper]: true
            })}>
                <img src={img} />
            </div>
        </div>
    )
}


export const JobCard = ({
    postName,
    qualification,
    experience,
    location,
    num
}) => {
    return (
        <div className={styles.jobCard} data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
            <Link href="/job-detail/[id]" as={`/job-detail/${num}`}>
                <div className={styles.header} dangerouslySetInnerHTML={{ __html: postName }} style={{cursor: "pointer"}} />
            </Link>
            <div className={styles.body}>
                <List type="unstyled" >
                    <li> Qualification: {qualification}</li>
                    <li> Experience: {experience}</li>
                </List>
            </div>
            <div className={styles.footer}>
                <Link href="/job-detail/[id]" as={`/job-detail/${num}`}>
                    <button className="primary-button">
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

                        know more
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
                <div>
                    <p>Location</p>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    )
}

export const CountryCard = ({
    name,
    img,
    desc,
    contact,
    buttonClass,
    mapLink
}) => {
    return (
        <div
            className={styles.countryCard}
            // id={buttonClass}
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-once="true"
        >
            <div className={ClassNames({
                [styles.divider]: true,
                "margin-top": true
            })}>
                <p> {name} </p>
            </div>

            <Container>
                <Row>
                    <Col sm={10} className="mx-auto mt-sm-5 mt-4">
                        <div>
                            <img src={img} />
                        </div>
                        <div className={styles.des} dangerouslySetInnerHTML={{ __html: desc }} />

                        <div className={styles.footer}>
                            <div className={styles.list}>
                                <h5> CONTACT </h5>
                                <List type="unstyled" >
                                    <li> {contact.email} </li>
                                    <li> {contact.phone} </li>
                                    <li> {contact.mobile} </li>
                                </List>
                            </div>

                            <div className="pt-2">
                                <span className={styles.divider} />
                            </div>

                            <div className={styles.list}>
                                <h5> OFFICE </h5>
                                <p dangerouslySetInnerHTML={{__html: contact.address}} /> 
                            </div>
                        </div>

                        <a href={mapLink} target="_blank">
                            <button>
                                view on map
                                <img src="assets/icons/right-btn-arrow.png" className="right-arrow-btn" />
                            </button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export const ColorPaletteCard = ({
    color,
    description,
    url,
    num
}) => {
    return (
        <div>
            <h3 className="sub-title margin-top1 mb-3 mb-md-5" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                {color} <span> Quartz Countertops</span>
            </h3>

            <p className="mb-5 text d-none d-md-block" data-aos="fade-in" data-aos-delay="100" data-aos-once="true">
                {description}
            </p>

            <div>
                <Link href="/color-palettes/series/[slug]" as={`/color-palettes/series/${color}`}>
                    <a>
                        <img src={url} />
                    </a>
                </Link>
            </div>

            <Link href="/color-palettes/series/[slug]" as={`/color-palettes/series/${color}`}>
                <a>
                    <button className="primary-button mx-sm-auto mt-5 mr-auto">
                        <span className="left-arrow-btn">
                            {/* <svg
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
                    </svg> */}
                            <img src="assets/right-btn-arrow.svg" />
                        </span>

                        Explore
                        <span className="right-arrow-btn">
                            {/* <svg
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
                    </svg> */}
                            <img src="assets/right-btn-arrow.svg" />
                        </span>
                    </button>
                </a>
            </Link>
        </div>
    )
}

export const PrevExhibitionCard = props => {
    return (
        <div className={ClassNames({
            [styles.blogSliderCard]: true,
            [styles.exhibition]: (props.type == 'exhibition')
        })}>
            {
                props.type == 'exhibition' && (
                    <div className={styles.header}>
                        <h2>{props.city}, <span>{props.country}</span></h2>
                        {/* <span className="icon">
                            <img src="assets/icons/Star1.svg" className="icon" />
                        </span> */}
                        {/* <img src="assets/icons/star.png" className="icon"/> */}
                    </div>
                )
            }
            <div>
                <img src={props.img} className={styles.prevExhibitionImg} />
            </div>

            <div className={styles.middle}>
                {
                    props.type == 'exhibition' ? (
                        <>
                            <h6 className="bottom-row">{props.name}</h6>
                            <div className={ClassNames({
                                [styles.right]: true,
                                [styles.rightHighlighted]: true,
                                "d-none": true,
                                "d-sm-block": true,
                                "bottom-row": true
                            })}>
                                <span className="d-block">{props.hallNo}</span>
                                <span className="d-block">
                                    <label> {props.dateFrom}<sup>TH</sup>-{props.dateTo}<sup>TH</sup> </label> {props.date}
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <h6>{props.blog.blogPageHeading}</h6>
                            <div className={styles.right}>
                                <span> {props.blog.datePublished} </span>
                            </div>
                        </>
                    )
                }
            </div>

            <div className={styles.footer}>
                {props.type == 'exhibition' ? (
                    <>

                        <p className="bottom-row">
                            {props.desc}
                        </p>

                        <div className={ClassNames({
                            [styles.right]: true,
                            "d-sm-none": true
                        })}>
                            <span className="d-block">{props.hallNo}</span>
                            <span className="d-block">
                                <label> {props.dateFrom}<sup>TH</sup>-{props.dateTo}<sup>TH</sup> </label> {props.date}
                            </span>
                        </div>
                        {/* <span className={styles.btn}>
                                view gallery
                                <span className={styles.arrow}>
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
                                                fill="#000"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            </span> */}
                    </>
                ) : (
                    <>
                        <p>
                            {props.blog.blogPageDesc}
                        </p>
                        <Link href="/blog-inner/[id]" as={`/blog-inner/${props.blog.id}`}>
                            <span className="d-flex align-items-center justify-content-end">
                                view
                                <span className={styles.arrow}>
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
                                                fill="#000"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            </span>
                        </Link>
                    </>
                )
                }
            </div>
        </div>
    )
}