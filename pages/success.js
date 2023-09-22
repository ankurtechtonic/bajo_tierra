import Link from 'next/link'

const Success = () => {
    return (
        <div id="thankyou-page">
            <h1>Thankyou For Submission!</h1>

            <div className="mt-3">
                <Link href="/" >
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

                            Back to home
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
            </div>
        </div>
    )
}

export default Success