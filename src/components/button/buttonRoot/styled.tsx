import { styled } from 'styled-components'

export interface IButtonStyled {
  backgroud?: string
}

export const ButtonRootContainer = styled.button<IButtonStyled>`
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) =>
    props?.backgroud
      ? props.theme[props?.backgroud]
      : props?.theme['base-button']};
`
