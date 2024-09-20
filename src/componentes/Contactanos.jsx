import React from 'react'
import '../estilos/contactanos.css'

function Contactanos() {
  return (
    <div className='contenedor-seccion-contactanos'>
  <section id="contact" className="py-5 bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-4">
        <div className="col-lg-6">
          <h2 className="section-title">Contáctanos</h2>
          <p className="lead">¿Tienes alguna pregunta o inquietud? ¡Nos encantaría saber de ti!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre completo" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="contact-info">
            <h4 className="mb-4">Información de Contacto</h4>
            <p><i className="fas fa-map-marker-alt me-3"></i> 123 Calle Ficticia, Ciudad, País</p>
            <p><i className="fas fa-phone me-3"></i> +123 456 7890</p>
            <p><i className="fas fa-envelope me-3"></i> info@tuempresa.com</p>

            <h5 className="mt-4">Síguenos en redes sociales</h5>
            <div className="social-icons">
              <a href="#" className="btn btn-outline-dark btn-floating m-1"><i className="bi bi-facebook"></i></a>
              <a href="#" className="btn btn-outline-dark btn-floating m-1"><i className="bi bi-twitter"></i></a>
              <a href="#" className="btn btn-outline-dark btn-floating m-1"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="btn btn-outline-dark btn-floating m-1"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Contactanos