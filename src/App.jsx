import { useState } from "react"
import "./styles/App.css"
import Characters from "./components/Characters"
import Pagination from "./components/Pagination"
import { CharacterContextProvider } from "./context/characterContext"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="title">Rick and Morty</h1>
      <CharacterContextProvider>
        <Pagination />
        <Characters />
      </CharacterContextProvider>
    </div>
  )
}

export default App
