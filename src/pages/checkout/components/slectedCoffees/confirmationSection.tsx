import { ConfirmationButton, ConfirmationSectionContainer } from './styles'
import { RegularText } from '../../../../components/typografy'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartList } = useCart()

  const totalPricer = cartList?.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.quantity!
  }, 0)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatMoney(totalPricer)}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatMoney(DELIVERY_PRICE)}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formatMoney(totalPricer + DELIVERY_PRICE)}
        </RegularText>
      </div>

      <ConfirmationButton disabled={false} type="submit">
        Confirmar
      </ConfirmationButton>
    </ConfirmationSectionContainer>
  )
}
