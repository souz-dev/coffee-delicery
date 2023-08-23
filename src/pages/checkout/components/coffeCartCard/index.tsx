import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/quantityInput'
import { RegularText } from '../../../../components/typografy'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { ICoffee } from '../../../../contexts/cartContext/reducer'

interface CoffeeCardCardProps {
  coffee: ICoffee
}

export function CoffeeCartCard({ coffee }: CoffeeCardCardProps) {
  const {
    onDecreaseCoffeeQuantity,
    onIncreaseCoffeeQuantity,
    onRemoveCoffeeCart,
  } = useCart()

  function handleIncrease() {
    onIncreaseCoffeeQuantity(coffee)
  }

  function handleDecrease() {
    onDecreaseCoffeeQuantity(coffee)
  }

  function handleRemove() {
    onRemoveCoffeeCart(coffee)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="Café" />

        <div>
          <RegularText color="subtitle">{'cafezinho'}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee?.quantity || 0}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
