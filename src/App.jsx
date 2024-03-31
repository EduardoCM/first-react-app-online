import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inicio } from './components/Inicio'
import { Tierra } from './components/Tierra'
import { Agua } from './components/Agua'
import { Fuego } from './components/Fuego'
import { Aire } from './components/Aire'
import { AppRoutes } from './routes/AppRoutes'
import DrawerAppBar from './components/DrawerAppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DrawerAppBar />
      <AppRoutes />
    </>
  )
}

export default App
