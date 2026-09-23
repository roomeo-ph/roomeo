import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListingMarket from '../pages/ListingMarket/page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListingMarket />
  </StrictMode>,
)
