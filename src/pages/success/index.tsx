import { useTheme } from 'styled-components'
import { RegularText, TitleText } from '../../components/typografy'
import {
  ButtonRedirect,
  OrderConfirmedContainer,
  OrderDetailsContainer,
} from './styles'
import { InfoWithIcon } from '../../components/infoWithIcon'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import confirmedOrderIllustration from '../../assets/images/confirmation-illustration.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { paymentMethods } from '../../pages/checkout/components/completeOrderForm/paymentMethod'
import { OrderData } from '../../pages/checkout'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  function backToHome() {
    navigate('/', {
      state: null,
    })
  }

  useEffect(() => {
    if (!state) {
      backToHome()
    }
  }, [])

  if (!state) {
    return null
  }

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconColor={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="" />
      </section>

      <footer>
        <ButtonRedirect onClick={backToHome}>
          Voltar para pagina inicial
        </ButtonRedirect>
      </footer>
    </OrderConfirmedContainer>
  )
}
