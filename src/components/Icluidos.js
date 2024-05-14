import React from 'react';

// Textos modificables
const pitchforkTitle = 'Especializados en Gastronomia y Producto, Potenciamos la edicion con IA';
const pitchforkDescription =
  'Potencia tu presencia culinaria con nuestro servicio integral. Desde estilismo profesional hasta ediciones personalizadas con Inteligencia Artificial, ofrecemos la combinación perfecta para que tus platos destaquen. Con nosotros, tu gastronomía se convierte en una narrativa visual cautivadora. ';

const cardTitles = ['Consulta Virtual', 'Consulta Presencial', 'Consulta Pareja', 'Solicitud Especializada', 'Profesionalismo Garantizado', 'Devolución Gratuita'];

const cardContents = [
  'Vive la experiencia de nuestra Consulta Virtual con iluminación profesional, maquillador de alimentos y grabación en alta definición. ¡Contacta para reservar tu sesión ahora!',
  'Sumérgete en un día completo de producción, planificación y edición incluidas. Contrata tu día y transforma tu visión en realidad.',
  'Descubre la magia de nuestras Consultas para Parejas, disponibles por meses o campañas. Suscríbete para contar tu historia de manera encantadora.',
  'Crea recuerdos inolvidables con escenografía personalizada. Deja un mensaje y hagamos realidad tu visión única.',
  'Confía en nuestro equipo de profesionales dedicados a capturar momentos únicos con experiencia y habilidades excepcionales.',
  'Nos comprometemos a tu satisfacción. Si no estás satisfecho con los resultados, te ofrecemos una devolución gratuita. Tu confianza es nuestra prioridad.',
];

const buttonText = 'Button';

const SeccionConIcluidos = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pitchforkTitle}</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{pitchforkDescription}</p>
        </div>

        <div className="flex flex-wrap -m-4">
          {/* Cards con estilos personalizados */}
          {cardTitles.map((title, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                {/* Icono */}
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                {/* Título */}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
                {/* Contenido */}
                <p className="leading-relaxed text-base">{cardContents[index]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón */}
        <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">{buttonText}</button>
      </div>
    </section>
  );
};

export default SeccionConIcluidos;
