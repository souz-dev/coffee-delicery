import { Hero } from './components/hero'
import { OurCoffees } from './components/ourcoffees'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <OurCoffees />
    </HomeContainer>
  )
}
