import React, { useState, Children, useEffect, useRef } from "react";
import arrowBtn from "../../assests/arrow.png";
import "./rewardSlider.scss";
const widthSpan = 100;
const RewardSlider2 = ({
  children,
  smallSlider,
  Infinite,
  noarrow,
  indicator,
}) => {
  const carouselRef = useRef(0);
  const itemRef = useRef([]);

  const itemRefHandle = (el) => {
    if (el && !itemRef.current.includes(el)) {
      itemRef.current.push(el);
    }
  };

  const [sliderPosition, setSliderPosition] = useState(0);
  const [touchStartPos, setTouchStartPos] = useState(0);
  const [touchEndPos, setTouchEndPos] = useState(0);
  const [touch, setTouch] = useState(false);
  const [swiper, setSwiper] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideHandler();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [sliderPosition]);

  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    } else if (Infinite) {
      newPosition = children?.length - 1;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };
  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < children?.length - 1) {
      newPosition = newPosition + 1;
    } else if (
      newPosition > children?.length - 1 &&
      newPosition < children?.length
    ) {
      newPosition = 0;
    } else if (Infinite) {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };
  const touchStartHandler = (e) => {
    setTouchStartPos(e.targetTouches[0].clientX);
    setTouchEndPos(e.targetTouches[0].clientX);
    setTouch(true);
  };
  const touchMoveHandler = (e) => {
    setTouchEndPos(e.targetTouches[0].clientX);
    const frameWidth = carouselRef?.current?.offsetWidth;
    const translateDist = ((touchEndPos - touchStartPos) / frameWidth) * 100;
    translatePartialSlides(translateDist);
    if (touch === true) {
      setSwiper(true);
    }
  };
  const touchEndHandler = (e) => {
    if (swiper) {
      if (touchStartPos - touchEndPos > 75) {
        nextSlideHandler();
      } else if (touchStartPos - touchEndPos < -75) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setTouch(false);
    setSwiper(false);
  };
  const jumpToSlideHandler = (index) => {
    translateFullSlides(index);
    setSliderPosition(index);
  };
  const translatePartialSlides = (toTranslate) => {
    let currentTranslate = -sliderPosition * widthSpan;
    let totalTranslate = currentTranslate + toTranslate;
    itemRef?.current?.forEach((elem) => {
      elem.style.transform = `translateX(${totalTranslate}%)`;
    });
  };
  const translateFullSlides = (newPos) => {
    let toTranslate = -widthSpan * newPos;
    itemRef?.current?.forEach((elem) => {
      elem.style.transform = `translateX(${toTranslate}%)`;
    });
  };
  const arrayChildren = Children.toArray(children);
  return (
    <>
      <div className={"main-slider-carousel new-carousel-width"}>
        {arrayChildren?.length != 1 && !noarrow && (
          <img
            style={{ zIndex: 99 }}
            className="right-arrow"
            onClick={prevSlideHandler}
            src={arrowBtn}
            alt=""
          />
        )}
        <div
          className={
            smallSlider ? "slider-carousel smallSlider" : "slider-carousel"
          }
          ref={carouselRef}
          onTouchStart={(e) => {
            touchStartHandler(e);
          }}
          onTouchMove={(e) => {
            touchMoveHandler(e);
          }}
          onTouchEnd={(e) => {
            touchEndHandler(e);
          }}
        >
          {Children.map(arrayChildren, (child, index) => {
            return (
              <div key={index} className="rewards-slider-main">
                <div>
                  <div className="single-reward-container" ref={itemRefHandle}>
                    {child}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {arrayChildren?.length != 1 && !noarrow && (
          <img
            className="left-arrow"
            onClick={nextSlideHandler}
            src={arrowBtn}
            alt=""
          />
        )}
      </div>
      {indicator && (
        <div className="indicator-container">
          {Children?.map(arrayChildren, (child, index) => {
            return (
              <div
                className={
                  sliderPosition === index ? "indicator active" : "indicator"
                }
                onClick={() => {
                  jumpToSlideHandler(index);
                }}
              ></div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default RewardSlider2;
