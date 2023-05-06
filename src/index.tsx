import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.global.scss'
import App from './App/App'
import { BrowserRouter } from 'react-router-dom'

export const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
