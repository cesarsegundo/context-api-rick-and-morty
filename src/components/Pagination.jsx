import { useContext } from "react"
import { CharacterContext } from "../context/characterContext"
import "../styles/Pagination.css"

const Pagination = () => {
  const { actualPage, pages, goToPage, prePage, nextPage } =
    useContext(CharacterContext)
  return (
    <div className="pagination">
      <div>
        Página <span>{actualPage}</span> de <span>{pages}</span>
      </div>
      <div>
        Ir a la pagina:{" "}
        <select
          name="goTo"
          data-type="goTo"
          onChange={(e) => {
            goToPage("", e)
          }}
        >
          {Array.from(Array(pages).keys()).map((page) => (
            <option key={page} onClick={goToPage} value={page + 1}>
              {page + 1}
            </option>
          ))}
        </select>
      </div>
      <div>
        {prePage && (
          <button
            className="button"
            data-type="prev"
            onClick={(e) => goToPage(prePage, e)}
          >
            {"< "}Anterior
          </button>
        )}
        {nextPage && (
          <button
            className="button"
            data-type="next"
            onClick={(e) => goToPage(nextPage, e)}
          >
            Siguiente{" >"}
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
