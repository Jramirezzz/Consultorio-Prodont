import ReactDOM from 'react-dom/client'
import {
  BrowserRouter
} from "react-router-dom"

import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </BrowserRouter>,
)
