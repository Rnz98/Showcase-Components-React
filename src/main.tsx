import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter.tsx'
import TitleComponent from './components/Title-component.tsx'
import FilterComponent from './components/FilterComponent.tsx'
import ShoppingCart from './components/Shopping-cart.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TitleComponent />
    <Counter />
    <FilterComponent/>
    <ShoppingCart />
  </StrictMode>,
)
