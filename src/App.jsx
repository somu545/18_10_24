import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DetailsPage from './components/DetailsPage/DetailsPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DetailsPage />
    </div>
  )
}

export default App
