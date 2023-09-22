import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useEffect } from 'react'
import Router, { useRouter } from 'next/router';

const SearchResult = ({
    result,
    setSearchData,
    route,
    setIsSearchBarOpen,
    setSearchLoading,
    isSearchBarOpen
}) => {
    const Redirect = useRouter()
   
    const handleUrl = (parentSlug, productSlug) => {
        Redirect.push(`/collection/series/${parentSlug}/sub-page/${productSlug}`)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }
    },[isSearchBarOpen])

    return (
        <div className="search-container">
            <Container>
                <Row >
                    {
                        result.map(item => (
                            <Col
                                sm={6}
                                lg={4}
                                className="quartz-series-div"
                                key={item.id}
                            >
                                <div>
                                    <div className="header">
                                        <h6> {item.name} </h6>
                                        <h6> {item.itemNumber < 10 ? "0"+item.itemNumber : item.itemNumber} </h6>
                                    </div>

                                    <div className="img-zoom my-3" style={{cursor:"pointer"}}>
                                        <img src={item.carouselImg.url} onClick={()=> handleUrl(item.parentSlug, item.productSlug)} />
                                    </div>

                                    <div className="footer">
                                        <p> {item.itemCode} </p>
                                        {/* <Link
                                            href="/collection/series/[slug]/sub-page/[slug2]"
                                            as={`/collection/series/${item.parentSlug}/sub-page/${item.productSlug}`}
                                        > */}
                                            <button className="custom-text-btn" onClick={()=> handleUrl(item.parentSlug, item.productSlug)}>
                                                view
                                                <img
                                                    src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627394396/right-btn-arrow_qosbhj.png"
                                                    className="right-arrow-btn"
                                                />
                                            </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default SearchResult;