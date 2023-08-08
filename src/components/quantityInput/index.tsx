import {
  IconWrapper,
  QuantityInputContainer,
  QuantityInputContainerStylesProps,
} from './styles'

import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps extends QuantityInputContainerStylesProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  size = 'medium',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
