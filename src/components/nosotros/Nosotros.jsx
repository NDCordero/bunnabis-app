import React from 'react';
import { Link } from 'react-router-dom';
import './nosotros.css';

const Nosotros = () => {
  return (
    <div className='ajuste-footer'>
      <h3 className='m-3 mb-5 text-success'>Proyecto Bunnabis</h3>
      <h4 className='m-3 mt-4 mb-2 text-success'>¿Quien soy?</h4>
      <p className='m-3'>Soy un estudiante de ingeniería industrial y diplomado en cannabis, un amante de la naturaleza, la cocina y los fermentos. Creo firmemente en los poderes terapéuticos de las plantas y en una industria saludable, sustentable y sostenible. Me apasiona el cultivo regenerativo, la conexión con la tierra y los procesos naturales. Abogo por una alimentación más saludable y el bienestar a partir de la concientización de nuestros hábitos de consumo. Estoy comprometido con la comunidad compartiendo mis conocimientos y experiencias con el objetivo de ayudar e inspirar a otros a adoptar un estilo de vida más saludable y en armonía con la naturaleza fomentando una comunidad más verde y conectada. Mención especial para todos los que forman parte de nuestro equipo en Bunnabis y a todos los que nos acompañan en este camino, quiero expresarles mi más sincero agradecimiento. Su participación en la investigación, redefinición y comunicación de nuestras ideas nos impulsa a seguir creciendo. ¡Muchas gracias por formar parte de este proyecto!</p>

      <h4 className='m-3 mt-5 mb-2 text-success'>Misión</h4>
      <p className='m-3'>Nuestra misión es cultivar una conexión más profunda entre las personas y la naturaleza, promoviendo un cambio consciente a través de productos agroecológicos. Nos dedicamos a mejorar el bienestar de todos, desde el suelo hasta la piel, utilizando bioinsumos y prácticas de cultivo regenerativo para cuidar nuestros suelos y obtener materias primas naturales de alta calidad. Nos esforzamos por ofrecer productos de uso diario libres de químicos dañinos, inspirando un estilo de vida más saludable y en armonía con el planeta.</p>

      <h4 className='m-3 mt-5 mb-2 text-success'>Visión</h4>
      <p className='m-3 '>Nos visualizamos como agentes del cambio en la promoción de un estilo de vida sostenible y en armonía con la naturaleza. Buscamos revolucionar consciencias para construir un mundo donde la regeneración del ecosistema sea la norma y donde los productos naturales sean accesibles para todos. Nuestra visión es crear un futuro donde la comunidad y el medio ambiente prosperen juntos, inspirando a otros a adoptar prácticas respetuosas con el planeta y a vivir en equilibrio con la Tierra.</p>

      <h4 className='m-3 mt-5 mb-2 text-success'>Valores</h4>
      <p className='m-3'>Estamos compromeidos con la sostenibilidad en todas nuestras actividades, desde el cultivo hasta la produccion y distribucion con el objetivo de reducir al maximo nuestro impacto ambiental mediante practicas que regeneren el ecosistema y el suelo. Valoramos el bienestar integral de las personas y del planeta, creyendo en el poder curativo de las plantas y esforzándonos por ofrecer productos que promuevan la salud y el equilibrio físico y emocional. Reconocemos la profunda interconexión entre todas las formas de vida y nos esforzamos por cultivar una relación armoniosa con la naturaleza, inspirándonos en su belleza y sabiduría para guiar nuestras acciones. Abrazamos el concepto de economía circular, utilizando los recursos de manera eficiente y cerrando el ciclo de vida de nuestros productos para crear un sistema más justo y sostenible. Valoramos la construcción de comunidad y la colaboración, compartiendo conocimientos, recursos y experiencias para enriquecer nuestras vidas colectivamente.</p>  
      
      <p className='m-3'>Los invitamos a nuestra biblioteca virtual para seguir aprendiendo juntos:
      </p>
      <Link to="https://drive.google.com/drive/folders/1nJG8-ABIbC99iX0Xi6r4_0Wl8aadeUp4?usp=sharing" target="_blank" className="btn btn-success ms-3 mt-4">Acceso a Biblioteca Virtual
      </Link>
    </div>
  )
}

export default Nosotros
