'use client';
import { useLayoutEffect, useState } from "react";
import { reviewsMock } from "../mock/mock";
import { REVIEWS_COUNT_END, REVIEWS_COUNT_END_TABLET, REVIEWS_COUNT_START } from "../consts";

function Reviews() {
  const [startIndex, setStartIndex] = useState<number>(REVIEWS_COUNT_START);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const reviewsMockLength = reviewsMock.length;

  useLayoutEffect(() => {
    const handleResize = () => {
      const isTabletSize = window.innerWidth <= 768;
      if (isTabletSize) {
        setIsTablet(isTabletSize);
        setIsDesktop(false)
      } else {
        setIsDesktop(true);
        setIsTablet(false);
      }
    };
  
    handleResize();
  
    let resizeTimer: NodeJS.Timeout;
  
    const debounceResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 250);
    };
  
    window.addEventListener('resize', debounceResize);
  
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const handleNext = () => {
    const nextIndex = Math.min(startIndex + REVIEWS_COUNT_END, reviewsMockLength);
    setStartIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(startIndex - REVIEWS_COUNT_END, REVIEWS_COUNT_START);
    setStartIndex(prevIndex);
  };

  const handlePaginationDotClick = (index: number) => {
    if (isTablet === true) {
      setStartIndex(index * REVIEWS_COUNT_END_TABLET);
    } else {
      setStartIndex(index * REVIEWS_COUNT_END);
    }
  };

  const remainingReviews = reviewsMockLength - startIndex;
  const visibleReviews = Math.min(isTablet === true ? REVIEWS_COUNT_END_TABLET
    : REVIEWS_COUNT_END, remainingReviews);

  return (
    <div className="main__reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__content">
        <div 
          className={startIndex === REVIEWS_COUNT_START ? `reviews__arrow reviews__arrow--left` : 'reviews__arrow reviews__arrow--left reviews__arrow--active'}
          onClick={handlePrev}></div>
          {reviewsMock.slice(startIndex, startIndex + visibleReviews).map((review) => 
            <div key={review.id} className="reviews__card">
              <div className="reviews__card-container">
                <div className="reviews__card-info">
                  <picture>
                    <img className="reviews__card-image" width={44} height={44} src="/img/avatar.svg" alt="аватарка."/>
                  </picture>
                  <div className="reviews__card-people">
                    <p className="reviews__card-name">{review.name}</p>
                    <p className="reviews__card-city">{review.city}</p>
                  </div>
                </div>
                <p className="reviews__card-description">{review.description}</p>
              </div>
            </div>
          )}
        <div 
          className={startIndex + REVIEWS_COUNT_END >= reviewsMockLength ? `reviews__arrow reviews__arrow--right` : 'reviews__arrow reviews__arrow--right reviews__arrow--active'}
          onClick={startIndex + REVIEWS_COUNT_END >= reviewsMockLength ? undefined : handleNext}>
        </div>
      </div>
      <div className="pagination">
        {isDesktop && Array.from({ length: Math.ceil(reviewsMockLength / REVIEWS_COUNT_END) }, (_, i) => (
          <span key={i} className={`pagination__dot ${startIndex / REVIEWS_COUNT_END === i ? 'pagination__dot--active' : ''}`} 
          onClick={() => handlePaginationDotClick(i)}></span>
        ))}
        {isTablet && Array.from({ length: Math.ceil(reviewsMockLength / REVIEWS_COUNT_END_TABLET) }, (_, i) => (
          <span key={i} className={`pagination__dot ${startIndex / REVIEWS_COUNT_END_TABLET === i ? 'pagination__dot--active' : ''}`} 
          onClick={() => handlePaginationDotClick(i)}></span>
        ))}
      </div>
    </div>
  )
}

export default Reviews;
