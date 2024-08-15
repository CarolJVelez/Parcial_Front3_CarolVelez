import React, { useState } from 'react'
import Card from './Card'
import formStyles from "../Styles/Formulario.module.css"

const Form = () => {

  const [show, setShow] = useState(false) 
    const [error, setError] = useState(false) 
    const [customer, setCustomer] = useState({ 
        name: "",
        age: "",
        car: ""
    })
    const handleChange = (event) => { 
        setCustomer({...customer, [event.target.name] : event.target.value}) 
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        if(customer.age > 0 
          && customer.name.trim().length > 3 
          && customer.car.length >= 6
          && customer.car.length !== ''
          && customer.name.length !== '') {
            setShow(true) 
            setError(false) 
        } else {
            setError(true) 
        }
    }

    const reset = () => {
        setCustomer({ 
            name: "",
            age: "",
            car: ""
        })
        setError(false)
    }

  return (
    <div className={formStyles.container}>
    {show ? <Card customer={customer} setShow={setShow}/> : 
    <form  onSubmit={handleSubmit}> 
        <label htmlFor="">Nombre:</label>
        <input name="name" value={customer.name} type="text" onChange={handleChange}/> 
        <label htmlFor="">Edad:</label>
        <input name="age" value={customer.age} type="number" onChange={handleChange}/>
        <label htmlFor="">¿Cual es tu marca de carro favorita?:</label>
        <input name="car" value={customer.pokemon} type="text" onChange={handleChange}/>
        <button className={formStyles.submit}>Enviar</button> 
        <button className={formStyles.reset} onClick={reset} type='button'>Reset</button> 
    </form>
    }
    {error && 
    <h4 className={formStyles.error}>Por favor chequea que la información sea correcta</h4>
    }
    </div>
  )
}

  

export default Form