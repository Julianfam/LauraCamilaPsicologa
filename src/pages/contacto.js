import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import imgcard from '/public/assets/imgservicios/laura-habilidades.jpg';

const Contact = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Enfoque del título h1 cuando la página se carga
    titleRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 ref={titleRef} className="text-4xl font-bold mb-4 p-1">
        soy la Psicologa Laura Camila
      </h1>
      <h3 className="text-2xl mb-4 w-96 p-1 ">
        {' '}
        Este es mi portal de contacto, los invito a conocer un poco mas de mis servicios en la web, o contactarme directamente por whatsapp, si quieres ver tips sigueme en instagram{' '}
      </h3>
      <Image src={imgcard} alt="Tausha 3 Salsas" style={{ maxHeight: '80%', maxWidth: '400px', width: '80%', overflow: 'hidden' }} />
      <div className="flex flex-col items-center w-full py-4 ">
        <a href="https://laura-camila-psicologa.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-gray-800  font-semibold py-2 px-8 w-72  border border-gray-400 rounded-lg shadow w-90vw mb-4">WEB</button>
        </a>

        <a href="https://www.instagram.com/psicologa.lauracamila/" target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 w-72 border border-gray-400 rounded-lg shadow w-90vw mb-4">INSTAGRAM</button>
        </a>
        <a href="https://wa.me/00573224714724" target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 w-72 border border-gray-400 rounded-lg shadow w-90vw">WHATSAPP</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
