import '../public/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css/swiper.css';
// import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommonModal from '../components/Modal';
import { Spinner } from 'reactstrap'
import { useState, useEffect } from 'react';
import { ProductsContext } from '../Context';
import SearchResult from '../components/SearchResult';
import Router from 'next/router';


// export async function getStaticProps() { 
//   const palette = await fetch("http://139.59.9.49:1338/color-palettes").then(response => response.json());

//   return {
//       props: {
//           palette
//       },
//   }
// }

export async function getStaticProps(context) {
  const palette = await fetch("http://139.59.9.49:1338/color-palettes").then(response => response.json());

  if (!palette) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        palette
    },
  }
}

function MyApp({ Component, pageProps, router, palette }) {
  const[isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const [allProducts, setAllProducts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)

  const toggleModal = data => {
    setModalData(data);
    setOpen(!isOpen);
  }

  useEffect(() => {
    const start = () => {
      setSearchLoading(true)
    }

    const end = () => {
      setSearchResult([])
      setIsSearchBarOpen(false)
      setSearchLoading(false)
    }

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    // Router.events.on("routeChangeError", end);
    
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
    }
    
  }, [])

  return (
    <>
      { searchLoading ? <Spinner className="page-loader" type="grow" /> : (
        <>
          <ProductsContext.Provider value={{ allProducts, setAllProducts }}>
            <Header
              setSearchData={setSearchResult}
              palette={palette}
              isSearchBarOpen={isSearchBarOpen}
              setIsSearchBarOpen={setIsSearchBarOpen}
            />
            <Component
              isOpen={isOpen}
              toggleModal={toggleModal}
              {...pageProps}
            />
          </ProductsContext.Provider>

          <Footer />

          {
            searchResult.length > 0 && (
              <SearchResult
                route={router.route}
                result={searchResult}
                setSearchData={setSearchResult}
                isSearchBarOpen={isSearchBarOpen}
                setIsSearchBarOpen={setIsSearchBarOpen}
                setSearchLoading={setSearchLoading}
              />
            )  
          }
        
          <CommonModal
            isOpen={isOpen}
            modalData={modalData}
            toggleModal={toggleModal}
          />
        </>
      )}
    </>
  )
}

export default MyApp
