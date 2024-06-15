import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import imgc1 from '/public/assets/clientes/divinacomedia.jpg';
import imgc2 from '/public/assets/clientes/El_porto.jpg';
import imgc3 from '/public/assets/clientes/fisa-logo-1595870600.jpg';
import imgc4 from '/public/assets/clientes/logo-SanducheR-e1699038261984.png';

// Textos modificables
const sectionTitle = 'EXPERIENCIA';
const sectionDescription = 'Algunos de los que han pasado por nuestro lente. ';

const teamMembers = [
  {
    name: 'Divina Comedia',
    role: 'Fotografía de Alimentos',
    imageSrc: imgc1,
  },
  {
    name: 'El Porto Restaurante Bar ',
    role: 'Diseño de Menú y Fotografíade Alimentos',
    imageSrc: imgc2,
  },
  {
    name: 'TromoPlas SA',
    role: 'Fotografía de producto',
    imageSrc: imgc3,
  },
  {
    name: 'San Duche',
    role: 'Fotografía con Maquillaje de Alimentos ',
    imageSrc: imgc4,
  },
];

const clientes = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">{sectionTitle}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{sectionDescription}</p>
        </div>

        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.imageSrc}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', overflow: 'none' }}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex">
                    <Link href="/" legacyBehavior>
                      <button className="text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </button>
                    </Link>
                    <Link href="/" legacyBehavior>
                      <button className="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </button>
                    </Link>
                    <Link href="/" legacyBehavior>
                      <button className="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default clientes;
