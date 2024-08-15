
const Card = ({customer, setShow}) => {
  const {name, age, car} = customer

  const handleClick = (event) => {
    setShow(false);
  }

  return (
    <div>
        <h4>Bienvenid@, {name}. Tu edad es: {age} </h4>
        <h5>{car} Esa marca de carro es increible.!!</h5>
        <button type="button" onClick={handleClick}>Volver</button>
    </div>
  )
}

export default Card
