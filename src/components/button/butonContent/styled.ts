import { css, styled } from 'styled-components'

type FontSizeType = 'L' | 'M' | 'S' | 'XS'

export interface IStyledButtonContent {
  fontSize: FontSizeType
  color: string
}

const fontSizeResolver = (value: FontSizeType) => {
  switch (value) {
    case 'L':
      return css`
        font-size: 2rem;

        font-weight: 700;
      `
    case 'M':
      return css`
        font-size: 1.6;

        font-weight: 400;
      `
    case 'S':
      return css`
        font-size: 1.4;

        font-weight: 400;
      `
    case 'XS':
      return css`
        font-size: 1.2;

        font-weight: 700;
      `
  }
}

export const StyledButtonContent = styled.p<IStyledButtonContent>`
  font-family: Roboto, 'sans-serif';
  line-height: 130%;
  color: ${(props) =>
    props?.color ? props.theme[props?.color] : props?.theme['base-text']};
  ${(props) => fontSizeResolver(props?.fontSize)}
`
