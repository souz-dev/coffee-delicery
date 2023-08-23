import { useCart } from '../../../../hooks/useCart'
import { TitleText } from '../../../../components/typografy'
import { CoffeeCartCard } from '../coffeCartCard'
import { ConfirmationSection } from './confirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartList } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <div className="coffee-list">
          {cartList?.map((coffee) => (
            <CoffeeCartCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
