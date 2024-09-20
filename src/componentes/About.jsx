import React from 'react'
import '../estilos/about.css'


function About() {
  return (
    <div>
        <section id="about-us">
  <div className="container">
    <div className="row about-content">
      <div className="col-12 col-xs-12 about-text">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una empresa dedicada a ofrecer soluciones innovadoras y personalizadas para nuestros clientes.
          Nuestro equipo está compuesto por profesionales apasionados y altamente capacitados, comprometidos con
          la excelencia y la satisfacción de nuestros usuarios. Creemos en la mejora continua y nos esforzamos por
          estar a la vanguardia en todas nuestras áreas de especialización.
        </p>
        <p>
          Con años de experiencia en la industria, hemos logrado construir una sólida reputación basada en la confianza,
          la calidad y los resultados. Nuestro objetivo es hacer que cada proyecto sea único, y trabajamos
          incansablemente para superar las expectativas de nuestros clientes.
        </p>
        <a href="/contact" className="btn">Contáctanos</a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About