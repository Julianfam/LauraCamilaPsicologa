import React from 'react';

// Componente de Tarjeta de Precio
const PriceCard = ({ title, price, features, buttonText }) => (
  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{title}</h2>
      <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{price}</h1>
      {features.map((feature, index) => (
        <p key={index} className="flex items-center text-gray-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {feature}
        </p>
      ))}
      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
        {buttonText}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven&apos;t heard of them jean shorts.</p>
    </div>
  </div>
);

// Componente de Sección de Precios
const producto = () => {
  // Datos de cada tarjeta de precio
  const priceCards = [
    {
      title: 'FOTOGRAFÍA GASTRONOMICA CON MAQUILLAJE DE ALIMENTOS',
      price: 'desde $200,000',
      features: ['Iluminación', 'Fotografo y Maquillador de alimentos', 'Fotografía HD, Video HD Texturas'],
      buttonText: 'Contactanos',
    },
    {
      title: 'Día COMPLETO de Fotografía O Reels',
      price: '$800,000',
      features: ['Dia completo de Producción', 'La planeación y Edición van incluidas', 'Montaje de Platos recomendado'],
      buttonText: 'Contrata tu Día. ',
    },
    {
      title: 'MANEJO de REDES, Planeación de Campañas',
      price: 'desde $300,000',
      features: ['Por  meses o por Campaña', 'desde 8 publicaciones'],
      buttonText: 'Subscribe',
    },
    {
      title: 'Solicitud Especializada',
      price: 'desde $300,000',
      features: ['Escenografía personalizada', 'Hecho a la medida '],
      buttonText: 'Dejanos un Mensaje',
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* ... Contenido previo ... */}
        <div className="flex flex-wrap -m-4">
          {priceCards.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default producto;
