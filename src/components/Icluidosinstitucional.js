import React from 'react';
import Image from 'next/image';
import imgb from '/public/assets/imgservicios/laura-bateria.jpg';
import imgl from '/public/assets/imgservicios/laura-liderando.jpg';
import imgh from '/public/assets/imgservicios/laura-habilidades.jpg';
import imgf from '/public/assets/imgservicios/plan-de-formacion-en-empresas.jpg';
import Link from 'next/link'; // Importar Link de next.js para la navegación

// Textos modificables
const pitchforkTitle = 'Servicios Institucionales';
const pitchforkDescription =
  'Nos especializamos en problemas y trastornos psicológicos, incluyendo depresión, ansiedad, trastornos de alimentación, procesos suicidas, trastornos del sueño y adicciones. Además, también trabajamos con parejas y familias que están lidiando con problemas de relación y dinámicas disfuncionales.';

const cardTitles = ['Batería de riesgo Psicosocial', 'Formación y capacitación', 'Liderazgo', 'Habilidades blandas'];

const cardContents = [
  'Evaluamos y prevenimos riesgos psicosociales laborales en Colombia. Identificamos factores como el estrés y el acoso, implementando planes personalizados para un entorno laboral saludable.',
  'Ofrecemos programas para mejorar la salud mental y el bienestar laboral, enfocados en manejo del estrés, equilibrio personal-profesional y habilidades de afrontamiento.',
  'Nuestros programas desarrollan habilidades de comunicación, gestión del tiempo y creación de ambientes inclusivos y motivadores, promoviendo el bienestar y potencial de los colaboradores.',
  'Capacitamos en comunicación, resolución de conflictos, inteligencia emocional y liderazgo, ayudando a destacar y prosperar en el entorno laboral.',
];

const cardImages = [imgb, imgf, imgl, imgh];

const cardLinks = [
  '/servicios-empresariales/bateria-de-riesgo-psicosocial',
  '/servicios-empresariales/formacion-y-capacitacion',
  '/servicios-empresariales/liderazgo',
  '/servicios-empresariales/habilidades-blandas',
];

const buttonText = 'Más información';

const SeccionConIcluidosInstitucional = () => {
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
                <p className="leading-relaxed text-justify text-base">{cardContents[index]}</p>
                {/* Botón */}
                <Link href={cardLinks[index]} passHref>
                  <a className="flex mx-auto justify-center mt-4 text-black bg-red-100 border-0 py-2 px-8 focus:outline-none hover:bg-red-300 rounded text-lg">{buttonText}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeccionConIcluidosInstitucional;
