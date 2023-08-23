import { ReactComponent as Logo } from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

import {
  CartButton,
  LocationButton,
  HeaderContainer,
  HeaderButtonsContainer,
  CartButtonSection,
  CartButtonCounter,
} from './styled'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
export function Header() {
  const { quantity } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
        <Logo />
        <HeaderButtonsContainer>
          <LocationButton>
            <MapPin size={16} weight="fill" />
            Gamnambi, BA
          </LocationButton>
          <NavLink to="/completeOrder">
            <CartButtonSection>
              <CartButton>
                <ShoppingCart size={16} weight="fill" />
              </CartButton>
              {<CartButtonCounter>{quantity}</CartButtonCounter>}
            </CartButtonSection>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
