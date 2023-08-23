import { TitleText } from '../../../../components/typografy'
import { CoffeeList, OurCoffeesContainer } from './styles'
import { coffees } from '../../../../mock/coffee'
import { CoffeeCard } from '../../../../components/coffeeCard'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
