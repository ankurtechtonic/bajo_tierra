import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useEffect } from 'react'
import Router, { useRouter } from 'next/router';

const BlogSearchResult = ({
    result,
    setSearchData,
    setIsSearchBarOpen,
    setSearchLoading
}) => {
    const Redirect = useRouter()
   
    const handleUrl = (num) => {
        Redirect.push(`/blog-inner/${num}`)
    }

    return (
        <div className="blog-search-container">
            <Container>
                <Row >
                    {
                        result.map(item => <div onClick={() => handleUrl(item.id)} className="blog-search-result">{item.blogPageHeading}</div>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default BlogSearchResult;