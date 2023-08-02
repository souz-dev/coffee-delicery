import { IStyledButtonContent, StyledButtonContent } from './styled'

interface IButtonContent extends IStyledButtonContent {
  text: string
}

export function ButtonContent({
  fontSize,
  text,
  color,
  ...rest
}: IButtonContent) {
  return (
    <StyledButtonContent {...rest} color={color} fontSize={fontSize}>
      {text}
    </StyledButtonContent>
  )
}
