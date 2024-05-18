import React from 'react';
import Image from 'next/image';
import imgcard1 from '/public/assets/imgpsicologia/imgterapiapsi.jpg';

// Textos modificables
const pitchforkTitle = 'Especializada en Psicología de seguridad y salud en el trabajo';
const pitchforkDescription =
  'Nos especializamos en problemas y trastornos psicológicos, incluyendo depresión, ansiedad, trastornos de alimentación, procesos suicidas, trastornos del sueño y adicciones. Además, también trabajamos con parejas y familias que están lidiando con problemas de relación y dinámicas disfuncionales. A través del proceso terapéutico, nuestro objetivo es ayudar a las personas a identificar los patrones de interacción y comunicación disfuncionales que están causando su malestar y fomentar la resolución de los problemas que enfrentan. Utilizamos el enfoque sistémico para ver a las personas como parte de un sistema más amplio en el que interactúan con otros individuos, grupos y organizaciones, para así identificar las relaciones y patrones de interacción que están afectando el bienestar emocional del consultante';

const cardTitles = ['Consulta Virtual', 'Consulta Presencial', 'Consulta Pareja', 'Solicitud Especializada', 'Profesionalismo Garantizado', 'Devolución Gratuita'];

const cardContents = [
  'Vive la experiencia de nuestra Consulta Virtual con iluminación profesional, maquillador de alimentos y grabación en alta definición. ¡Contacta para reservar tu sesión ahora!',
  'Sumérgete en un día completo de producción, planificación y edición incluidas. Contrata tu día y transforma tu visión en realidad.',
  'Descubre la magia de nuestras Consultas para Parejas, disponibles por meses o campañas. Suscríbete para contar tu historia de manera encantadora.',
  'Crea recuerdos inolvidables con escenografía personalizada. Deja un mensaje y hagamos realidad tu visión única.',
  'Confía en nuestro equipo de profesionales dedicados a capturar momentos únicos con experiencia y habilidades excepcionales.',
  'Nos comprometemos a tu satisfacción. Si no estás satisfecho con los resultados, te ofrecemos una devolución gratuita. Tu confianza es nuestra prioridad.',
];

const cardImages = [imgcard1, imgcard1, imgcard1, imgcard1, imgcard1, imgcard1];

const cardLinks = ['/consulta-virtual', '/consulta-presencial', '/consulta-pareja', '/solicitud-especializada', '/profesionalismo-garantizado', '/devolucion-gratuita'];

const buttonText = 'Más información';

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
                {/* Imagen */}
                <div className="w-full h-40 mb-4 relative">
                  <Image src={cardImages[index]} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                {/* Título */}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
                {/* Contenido */}
                <p className="leading-relaxed text-base">{cardContents[index]}</p>
                {/* Botón */}
                <a href={cardLinks[index]} className="flex mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeccionConIcluidos;
