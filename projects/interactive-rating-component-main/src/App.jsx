import { useState } from 'react'
import { RatingCard } from './components/RatingCard'
import { ThankYouCard } from './components/ThankYouCard'
import './App.css'

function App () {
  const [rater, setRater] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleClick = (index) => {
    setRater(index)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rater !== 0) {
      setSubmitted(true)
    }
  }

  return (
    <main>
      {
        !submitted
          ? <RatingCard rater={rater} handleClick={handleClick} handleSubmit={handleSubmit} />
          : <ThankYouCard rater={rater} />
      }
    </main>
  )
}

export default App
