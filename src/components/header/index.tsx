import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Button } from '../button'
import { StyledContainerHeader } from './styled'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
export function Header() {
  return (
    <StyledContainerHeader>
      <Logo />
      <div>
        <Button.Root backgroud="purple-light">
          <Button.Icon>
            <MapPin size={18} color="purple" weight="fill" />
          </Button.Icon>
          <Button.Content
            color="purple-dark"
            fontSize="M"
            text="Gamnambi, BA"
          />
        </Button.Root>
        <Button.Root backgroud="yellow-light">
          <Button.Icon>
            <ShoppingCart size={18} color="#C47F17" weight="fill" />
          </Button.Icon>
        </Button.Root>
      </div>
    </StyledContainerHeader>
  )
}
