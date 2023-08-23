import { styled } from 'styled-components'
import { SimpleButton } from '../simpleButton'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationButton = styled(SimpleButton)`
  background: ${({ theme }) => theme.colors['brand-purple-light']};
  color: ${({ theme }) => theme.colors['brand-purple-dark']};
  transition: all 0.2s ease;
  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
    transition: color 0.2s ease-in-out;
  }
  &:hover {
    background: ${({ theme }) => theme.colors['brand-purple']};
    color: ${({ theme }) => theme.colors['base-white']};

    svg {
      color: ${({ theme }) => theme.colors['base-white']} !important;
    }
  }
`
export const CartButtonSection = styled.div`
  position: relative;
`
export const CartButtonCounter = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  color: ${({ theme }) => theme.colors['brand-yellow-light']};
  font-size: ${({ theme }) => theme.textSizes['text-bold-s']};
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CartButton = styled(SimpleButton)`
  background: ${({ theme }) => theme.colors['brand-yellow-light']};
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  transition: all 0.2s ease;
  svg {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    transition: color 0.2s ease-in-out;
  }
  &:hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};

    svg {
      color: ${({ theme }) => theme.colors['brand-yellow-light']} !important;
    }
  }
`
