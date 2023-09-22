import styles from '../public/styles/Sliders.module.css'
import Carousel from 'react-multi-carousel';
import ClassNames from 'classnames';


export const singleFrame = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1.8,
    // partialVisibilityGutter: 100
  }
};

export const socialResponsibility = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    // partialVisibilityGutter: 100
  }
};

export const meetBigRock = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    // partialVisibilityGutter: 100
  }
};

export const threeFrame = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export const multiFrame = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1090, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
};

export const BannerLeftArrow = ({ onClick, blogSlider, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button 
      onClick={() => onClick()}
      className={ClassNames({
        [styles.leftArrow]: true,
        [styles.blogSlider]: blogSlider,
        "zoomIn": true,
      })}
    >
      <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627298783/prev-white_bkljlx.svg"  className="icon"/>
    </button>
  )
};

export const BannerRightArrow = ({ onClick, blogSlider, ...rest }) => {
  const {
      onMove,
      carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
      <button 
      onClick={() => onClick()}
      className={ClassNames({
        [styles.rightArrow]: true,
        [styles.blogSlider]: blogSlider,
        "zoomIn": true
      })}
      >
      <img src="https://res.cloudinary.com/bajo-tierra/image/upload/v1627298783/next-white_sgsx6d.svg"  className="icon"/>
      </button>
  )
};

export const CustomArrows = ({
  next,
  previous,
  goToSlide,
  nextIcon,
  prevIcon,
  showSlide,
  position,
  corporateMainSlider,
  ...rest
}) => {
  const { carouselState: { currentSlide } } = rest;

  const clickHandler = (e, btnType) => {

    if (btnType == 'prev') {
      e.preventDefault()
      e.target.style.transform = 'scale(1.2)';
      setTimeout(() => {
        e.target.style.transform = 'scale(1)';
      },500)
      previous();
      showSlide && showSlide(currentSlide)
    }
    else {
      e.preventDefault()
      e.target.style.transform = 'scale(1.2)';
      setTimeout(() => {
        e.target.style.transform = 'scale(1)';
      },500)
      next()
      showSlide && showSlide(currentSlide)
    }
  }

  return (
    <div className={ClassNames({
      "carousel-button-group": true,
      [styles.videoSlider]: (position == "videoSlider"),
      [styles.center]: (position == "center"),
      [styles.bottom]: (position == "bottom"),
    })}> 
      <button 
        className={ClassNames({
          "disable": (currentSlide === 0), 
          "custom-arrow-left": true,
          [styles.corporateMainSlider]: corporateMainSlider,
          [styles.leftArrow]: (position == "videoSlider"),
        })}
        // disabled={(currentSlide === 0)}
        onClick={(e) => clickHandler(e, 'prev')}
      >
        <img src={prevIcon} className="icon" />
      </button>
      
      <button
        className={ClassNames({
          "disable" : (currentSlide === 0), 
          "custom-arrow-right" : true,
          [styles.rightArrow]: (position == "videoSlider"),
          [styles.corporateMainSlider]: corporateMainSlider
        })}
        // disabled={(currentSlide === 0)}
        onClick={(e) => clickHandler(e, 'next')}
      >
        <img src={nextIcon}  className="icon"/>
      </button>
    </div>
  );
};


export const DarkSliderArrows = ({
  next,
  previous,
  buttonTheme,
  nextIcon,
  prevIcon,
  ...rest
}) => {

  const { carouselState: { currentSlide } } = rest;
  
  const clickHandler = (e, btnType) => {

    if (btnType == 'prev') {
      e.preventDefault()
      e.target.style.transform = 'scale(1.2)';
      setTimeout(() => {
        e.target.style.transform = 'scale(1)';
      },500)
      previous();
    }
    else {
      e.preventDefault()
      e.target.style.transform = 'scale(1.2)';
      setTimeout(() => {
        e.target.style.transform = 'scale(1)';
      },500)
      next()
    }
  }

  return (
    <div className={ClassNames({
      "carousel-button-group": true,
      [styles.darkSliderArrows]: true,
      [styles.similarProducts]: (buttonTheme == 'black')
    })}> 
      <button 
        className={ClassNames({
          "disable" : (currentSlide === 0), 
          [styles.arrow] : true
        })}
        // disabled={(currentSlide === 0)}
        onClick={(e) => clickHandler(e, 'prev')}
      >
       <span className="d-block">
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
                d="M88 179 c-43 -29 -78 -55 -78 -59 0 -6 34 -30 135 -96 l29 -19 -33
                  57 -32 58 31 55 c17 30 30 55 28 55 -2 0 -38 -23 -80 -51z"
                fill="#fff"
              />

            </g>
          </svg>
        </span>
      </button>
      
      <button
        className={ClassNames({
          "disable" : (currentSlide === 0), 
          [styles.arrow] : true
        })}
        // disabled={(currentSlide === 0)}
        onClick={(e) => clickHandler(e, 'next')}
      >
        <span className="d-block">
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
    </div>
  );
};

export const CustomDots = ({ onClick, outerColor, fillColor, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return ( 
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
      style={_styles}
    />
  );
};

export const ImageDots = ({ onClick, slides, outerColor, fillColor, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;

  console.log(slides, 'slder');
  const _styles = active ? { borderColor: outerColor } : { backgroundColor: fillColor};
  return (
    <div className={styles.customDot}>
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
        style={_styles}
      >
        <img src={slides[index]} /> 
      </button>
    </div>
  );
};

export const PlayIcon = () => {
  return (
    <img src="assets/icons/play.svg" className={styles.playIcon}/>
  )
}


export const HomeBannerArrow = ({ left, right, imgUrl, onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <span
      className={ClassNames({
        'left': left,
        'right': right
      })}
      onClick={()=> onClick()}
    >
      <img src={imgUrl} />
    </span>
  )
};




