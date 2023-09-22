import styles from '../public/styles/CardGrid.module.css';
import classNames from 'classnames';
import Link from 'next/link';

const CardGrid = props => {
    return (
        <div className={classNames({
            [styles.grid]: true,
            [styles.right]: props.align == 'right',
            "margin-top": true
        })
        }>
            <div className={styles.content} data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
                <p className={styles.serialNum}> 0{props.num} </p>
                <h3 className={styles.subTitle}> {props.name} <span> Series </span></h3>
                <p className="text">
                    {props.text}
                </p>
                <Link href="/collection/series/[slug]" as={`/collection/series/${props.slug}`}>
                    <a>
                        <button className="primary-button collection-explore d-none d-sm-flex">
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
                                <img src="assets/right-btn-arrow.svg" />
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
                            </span>
                        </button>
                    </a>
                </Link>
            </div>
            <div
                className={styles.imgWrapper}
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-once="true"
            >
                <Link href="/collection/series/[slug]" as={`/collection/series/${props.slug}`}>
                    <a>
                        <div className={"img-zoom"}><img src={props.imgSrc}/></div>
                    </a>
                </Link>
        
                <Link href="/collection/series/[slug]" as={`/collection/series/${props.slug}`}>
                    <a>
                        <button className="primary-button d-sm-none">
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

export default CardGrid;