import { ReactNode, ButtonHTMLAttributes } from 'react'
import { ButtonRootContainer, IButtonStyled } from './styled'

interface IButtonRoot
  extends IButtonStyled,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonRoot({ children, backgroud, ...rest }: IButtonRoot) {
  return (
    <ButtonRootContainer backgroud={backgroud} {...rest}>
      {children}
    </ButtonRootContainer>
  )
}
