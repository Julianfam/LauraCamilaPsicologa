import React from 'react';
import Image from 'next/image';
import imgcard1 from '/public/assets/imgpsicologia/imgterapiapsi.jpg';
import imgi from '/public/assets/imgservicios/individual.jpg';
import imgf from '/public/assets/imgservicios/terapia-familiar.webp';
import imgg from '/public/assets/imgservicios/terapia-grupal.jpg';
import imgp from '/public/assets/imgservicios/terapia-pareja.jpg';

// Textos modificables
const pitchforkTitle = 'Especializada en Psicología de seguridad y salud en el trabajo';
const pitchforkDescription =
  'Nos especializamos en problemas y trastornos psicológicos, incluyendo depresión, ansiedad, trastornos de alimentación, procesos suicidas, trastornos del sueño y adicciones. Además, también trabajamos con parejas y familias que están lidiando con problemas de relación y dinámicas disfuncionales. A través del proceso terapéutico, nuestro objetivo es ayudar a las personas a identificar los patrones de interacción y comunicación disfuncionales que están causando su malestar y fomentar la resolución de los problemas que enfrentan. Esto se debe resumir';

const cardTitles = ['Terapia Individual', 'Terapia Pareja', 'Terapia Familiar', 'Terapia Niños y adolecentes', 'Terapia de Grupos'];

const cardContents = [
  'Tratamos depresión, ansiedad y estrés. En niños y adolescentes, abordamos problemas emocionales y conductuales como acoso escolar y cambios de humor con estrategias personalizadas.',
  'Mejoramos la comunicación y superamos obstáculos en la relación. Fomentamos la comprensión mutua y construimos una base sólida para enfrentar desafíos juntos.',
  'Mejoramos la comunicación y resolución de conflictos en la familia. Fortalecemos los lazos familiares y creamos un entorno armonioso con técnicas especializadas.',
  'Tratamos ansiedad, depresión y dificultades académicas. Ofrecemos apoyo integral y asesoramos a los padres en prácticas de crianza para un desarrollo saludable.',
  'Proporcionamos apoyo y conexión en un entorno confidencial. Los participantes comparten experiencias, fomentando el crecimiento personal y la comprensión mutua.',
];

const cardImages = [imgi, imgp, imgf, imgcard1, imgg];

const cardLinks = ['/servicios/terapia-individual', '/servicios/terapia-de-pareja', '/servicios/terapia-de-familia', '/servicios/terapia-de-ninos-y-adolescentes', '/servicios/terapia-de-grupos'];

const buttonText = 'Más información';

const SeccionConIcluidos = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pitchforkTitle}</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{pitchforkDescription}</p>
        </div>
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"> Servicios para todos</h1>
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
                <p className="leading-relaxed text-justify text-base">{cardContents[index]}</p>
                {/* Botón */}
                <a href={cardLinks[index]} className="flex mx-auto justify-center mt-4 text-black bg-red-100 border-0 py-2 px-8 focus:outline-none hover:bg-red-300 rounded text-lg">
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
