import { ReactComponent as Logo } from '../../assets/logo.svg'
import {
  CartButton,
  LocationButton,
  HeaderContainer,
  HeaderButtonsContainer,
} from './styled'
import { MapPin, ShoppingCart } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <Logo />
        <HeaderButtonsContainer>
          <LocationButton>
            <MapPin size={16} weight="fill" />
            Gamnambi, BA
          </LocationButton>
          <CartButton>
            <ShoppingCart size={16} weight="fill" />
          </CartButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
