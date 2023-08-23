import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import { RegularText, TitleText } from '../typografy'
import { QuantityInput } from '../quantityInput'
import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cartContext'
export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState(1)
  const { onAddToCart } = useContext(CartContext)

  function handleIncrease() {
    setAmount((prev) => prev + 1)
  }

  function handleDecrease() {
    setAmount((prev) => prev - 1)
  }

  function clearAmount() {
    setAmount(1)
  }
  const formattedPrice = coffee.price?.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  function handleAddToCart() {
    console.log('chamou')
    onAddToCart({ ...coffee, quantity: amount })
    clearAmount()
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={amount}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
