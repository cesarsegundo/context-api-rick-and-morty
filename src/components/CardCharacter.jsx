import "../styles/Character.css"
const CardCharacter = ({ name, image, species }) => {
  return (
    <div className="item">
      <p className="info">{name}</p>
      <p className="info">Especie: {species}</p>
      <img src={image} alt={`imagen de ${name}`} />
    </div>
  )
}

export default CardCharacter
