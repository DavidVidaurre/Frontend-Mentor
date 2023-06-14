import { ArticleContainer } from './ArticleContainer'
import IconStar from '../assets/images/icon-star.svg'
import '../styles/RatingCard.css'

export function RatingCard ({ rater, handleClick, handleSubmit }) {
  return (
    <ArticleContainer>
      <form className='rating-card__form' onSubmit={handleSubmit}>
        <picture className='rating-card__img'>
          <img src={IconStar} alt='Star' />
        </picture>
        <section className='rating-card__content'>
          <h1 className='rating-card__title'>
            How did we do?
          </h1>
          <p className='rating-card__text'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <div className='rating-card__rating'>
            {
                [...Array(5)].map((_, i) => {
                  const ratingValue = i + 1
                  return (
                    <label key={i} onClick={() => handleClick(ratingValue)} className={ratingValue === rater ? 'rating-card__star active' : 'rating-card__star'}>
                      <span className='rating-card__star--text'>
                        {ratingValue}
                      </span>
                      <input type='radio' name='rating' id={`rating-${ratingValue}`} value={ratingValue} />
                    </label>
                  )
                })
              }
          </div>
        </section>
        <button className='rating-card__button'>
          SUBMIT
        </button>
      </form>
    </ArticleContainer>
  )
}
