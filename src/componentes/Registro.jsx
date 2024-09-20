import React, { useState } from 'react'
import '../estilos/Registro.css'

function Registro() {
    const [enviar , setEnviar] = useState("")
    const [error,setError] = useState("")
    const [datos,setdatos] = useState({
        name:"",
        email:"",
        password: "",
        confirmPassword:"",
        number:"",
        
    })

const validPhoneNumber = (number)=>{
  const phoneRegex = /^\d{3} ?\d{3} ?\d{3,4}$/;
  return phoneRegex.test(number)
}

const handleChande = (e)=>{

  setdatos({
    ...datos,
    [e.target.name]: e.target.value
  })

}
const handleSubmit = (e) => {
  e.preventDefault()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = {}
  
  if(datos.name.length < 6){
    errors.name = "El nombre Tiene que tener al menos 6 Caracteres"
  }

  if(!emailRegex.test(datos.email))
  {
    errors.email = "Porfavor, Introduce un correo Valido"
   
  }
  if(datos.password.length <= 6){
    errors.password = "La contraseña Debe Tener Al menos 6 Caracteres"
   
  }

  if(datos.password !== datos.confirmPassword){
    errors.confirmPassword = "Las Contraseñas Deben Coincidir"
    
  }
  if(!validPhoneNumber(datos.number)){
    errors.number = "el numero de telefono tiene que tener por lo menos este formato 644 782 563"
   
  }

  setError(errors)
  
  if (Object.keys(errors).length === 0) {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo al backend
    console.log("Formulario enviado", datos);
    setEnviar("Formulario Enviado")
  }

}
console.log(error)


  return (
    <div className='contenedor-registrate d-flex align-items-center justify-content-center'>
      <div className='contenedor-recuadro card shadow-md p-4 col-10 col-md-8 col-lg-6 col-xl-4 d-flex align-items-center'>
        <h3>Crear Cuenta</h3>
       <form onSubmit={handleSubmit} className='form-register'>
        <div className='mb'>
          <label>Nombre</label>
          <input
          name='name'
          className='form-control'
          type='text'
          placeholder='ingrese su nombre'
          onChange={handleChande}
          value={datos.name}
          />
        </div>
      {error.name && <p className='text-danger'>{error.name}</p>}

        <div className='mb'>
          <label>Email</label>
          <input
          name='email'
          className='form-control'
          type='text'
          placeholder='ingrese su email'
          onChange={handleChande}
          value={datos.email}
          />
        </div>
        {error.email && <p className='text-danger'>{error.email}</p>}

        <div className='mb'>
          <label>Contraseña</label>
          <input
          name='password'
          className='form-control'
          type='password'
          placeholder='Ingrese Su Contraseña'
          onChange={handleChande}
          value={datos.password}
          />
        </div>

        {error.password && <p className='text-danger'>{error.password}</p>}

        <div className='mb'>
          <label>confirmar Contraseña</label>
          <input
          name='confirmPassword'
          className='form-control'
          type='password'
          placeholder='Confirmar Contraseña'
          onChange={handleChande}
          value={datos.confirmPassword}
          />
        </div>

        {error.confirmPassword && <p className='text-danger'>{error.confirmPassword}</p>}

        <div className='mb'>
          <label>Numero Tlf</label>
          <input
          name='number'
          className='form-control'
          type='text'
          placeholder='ingrese su Numero'
          onChange={handleChande}
          value={datos.number}
          />
        </div>

        {error.number && <p className='text-danger'>{error.number}</p>}

        <button className='btn btn-primary boton-registro' type='submit'>Confirmar</button>
        
        {enviar && <p className='datos-enviados'>Datos Enviados</p>}
      </form> 
      </div>   



    </div>
  )
}

export default Registro