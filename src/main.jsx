import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifAppST } from './GifAppST'
import "./styles.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifAppST />
  </StrictMode>,
)
