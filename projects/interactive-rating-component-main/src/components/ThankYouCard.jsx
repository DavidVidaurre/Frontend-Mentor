import { ArticleContainer } from './ArticleContainer'
import ThankYouImage from '../assets/images/illustration-thank-you.svg'
import '../styles/ThankYouCard.css'

export function ThankYouCard ({ rater }) {
  return (
    <ArticleContainer>
      <section className='thank-you-card__content'>
        <img src={ThankYouImage} alt='Thank you' className='thank-you-card__img' />
        <p className='thank-you-card__rater-selected'>
          You selected {rater} out of 5
        </p>
        <div className='thank-you-card__information'>
          <h1 className='thank-you-card__title'>
            Thank you!
          </h1>
          <p className='thank-you-card__text'>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </p>
        </div>
      </section>
    </ArticleContainer>
  )
}
