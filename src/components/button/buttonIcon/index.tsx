import { ReactNode } from 'react'

interface IIcons {
  children: ReactNode
}

export function ButtonIcons({ children }: IIcons) {
  return <>{children}</>
}
