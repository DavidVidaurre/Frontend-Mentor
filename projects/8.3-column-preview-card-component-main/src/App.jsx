import './App.css'
import { Container } from './components/StyledComponents'
import ColumCard from './components/ColumCard'
// import { Luxury, Sedans, Suvs } from './components/Icons'
import * as Icons from './components/Icons'
import { colors } from './styles/colors'
import cardsData from './data/cardsData.json'

function App () {
  return (
    <Container>
      <section>
        {
          cardsData.cards.map(card => {
            const IconComponent = Icons[card.icon]
            const bgColor = colors[card.bgColor]

            return (
              <ColumCard
                key={card.title}
                Icon={IconComponent}
                title={card.title}
                text={card.description}
                bgColor={bgColor}
              />
            )
          })
        }
      </section>
    </Container>
  )
}

export default App
