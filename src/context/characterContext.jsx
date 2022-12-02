import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const CharacterContext = createContext()

export const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [prePage, setPrePage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        const { results, info } = response.data
        setCharacters(results)
        setPages(info.pages)
        setPrePage(info.prev)
        setNextPage(info.next)
      })
  }, [])
  const goToPage = (api, e) => {
    const type = e.target.dataset.type
    switch (type) {
      case "prev":
        setActualPage(actualPage - 1)
        break
      case "next":
        setActualPage(actualPage + 1)
        break
      case "goTo":
        const number = Number(e.target.value)
        api = `https://rickandmortyapi.com/api/character/?page=${number}`
        setActualPage(number)
        break
      default:
        return
    }
    axios.get(api).then((response) => {
      const { results, info } = response.data
      setCharacters(results)
      setPrePage(info.prev)
      setNextPage(info.next)
    })
  }
  return (
    <CharacterContext.Provider
      value={{
        characters,
        actualPage,
        pages,
        prePage,
        nextPage,
        goToPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
