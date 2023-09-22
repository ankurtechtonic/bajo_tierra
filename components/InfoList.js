import { Container, List, Row, Col } from 'reactstrap'


const InfoList = ({data}) => {
    return (
        <div className="info-list">
            <h3 className="name">
                <label> 01 </label>
                <span>
                    {data.nameOfEstablishment}
                </span>
            </h3>
            <List type="unstyled" >
                <li className="d-flex mb-2 text text-left">
                    <label> A </label>
                    <span>
                        {data.address}
                    </span>
                </li>

                <li className="d-flex mb-2 text text-left">
                    <label> P </label>
                    {data.phone}
                </li>
                
                <li className="d-flex mb-2 text text-left">
                    <label> E </label>
                    {data.email}
                </li>
                
                <li className="d-flex mb-2 text text-left">
                    <label> W </label>
                    {data.websiteLink}
                </li>
            </List>

            <a href={data.mapLink} target="_blank">
            <button className="custom-text-btn">
                view on map
                <span className="arrow">
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
            </a>
        </div>
    )
}


export default InfoList;