import React from 'react'
import '../estilos/login.css'

function Login() {
  return (
    <div className='login-contenedor'>
    <section id="login" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-9">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="text-center mb-4">Iniciar Sesión</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                  </div>
                  <div className="text-center mt-3">
                    <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center mt-4">
              <p>¿No tienes una cuenta? <a href="/registrate" className="text-decoration-none">Regístrate aquí</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Login