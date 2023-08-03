import { ButtonHTMLAttributes, ReactNode } from 'react'
import { SimplesButton } from './styles'

interface ISimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function SimpleButton({ children, ...args }: ISimpleButtonProps) {
  return <SimplesButton {...args}>{children}</SimplesButton>
}
