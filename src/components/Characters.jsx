import { useContext } from "react"
//Context
import { CharacterContext } from "../context/characterContext"
import CardCharacter from "./CardCharacter"

import "../styles/Character.css"

const Characters = () => {
  const { characters } = useContext(CharacterContext)
  return (
    <div className="container">
      {characters.map((character) => (
        <CardCharacter
          key={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </div>
  )
}

export default Characters
