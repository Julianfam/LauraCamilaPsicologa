import React, { useState } from 'react';

// Componente de Tarjeta de Precio
const PriceCard = ({ title, price, features, buttonText, onPackageChange, selectedPackage }) => {
  const handleClick = () => {
    if (selectedPackage && selectedPackage !== 'default') {
      const message = `Estoy interesado en el servicio ${title} que cuesta ${price}`;
      window.open(`https://api.whatsapp.com/send?phone=573224714724&text=${encodeURIComponent(message)}`, '_blank');
    } else {
      alert('Por favor selecciona un paquete antes de continuar.');
    }
  };

  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{title}</h2>
        <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{price}</h1>
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {feature}
          </p>
        ))}
        {onPackageChange && (
          <select value={selectedPackage || 'default'} onChange={onPackageChange} className="mt-4 mb-4 p-2 border border-gray-300 rounded">
            <option disabled value="default">
              Seleccione un paquete
            </option>
            <option value="online_single">$80,000 - Consulta Online</option>
            <option value="online_2">$152,000 - Paquete Online (2 sesiones)</option>
            <option value="online_4">$288,000 - Paquete Online (4 sesiones)</option>
            <option value="online_8">$544,000 - Paquete Online (8 sesiones)</option>
            <option value="presencial_consultorio_single">$134,000 - Consulta Presencial Consultorio</option>
            <option value="presencial_consultorio_2">$254,600 - Paquete Presencial Consultorio (2 sesiones)</option>
            <option value="presencial_consultorio_4">$482,400 - Paquete Presencial Consultorio (4 sesiones)</option>
            <option value="presencial_consultorio_8">$911,200 - Paquete Presencial Consultorio (8 sesiones)</option>
            <option value="presencial_naturaleza_single">$115,000 - Consulta Presencial Naturaleza</option>
            <option value="presencial_naturaleza_2">$218,500 - Paquete Presencial Naturaleza (2 sesiones)</option>
            <option value="presencial_naturaleza_4">$414,000 - Paquete Presencial Naturaleza (4 sesiones)</option>
            <option value="presencial_naturaleza_8">$782,000 - Paquete Presencial Naturaleza (8 sesiones)</option>
          </select>
        )}
        <button onClick={handleClick} className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
          {buttonText}
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className="text-xs text-gray-500 mt-3">Te escucharé y ayudaré durante las terapias</p>
      </div>
    </div>
  );
};

// Componente de Sección de Precios
const Producto = () => {
  const [selectedPackageIndividual, setSelectedPackageIndividual] = useState('online_single');
  const [selectedPackagePareja, setSelectedPackagePareja] = useState('presencial_consultorio_single');
  const [selectedPackageNinos, setSelectedPackageNinos] = useState('presencial_naturaleza_single');
  const [selectedPackageFamilia, setSelectedPackageFamilia] = useState('');

  const handlePackageChangeIndividual = (e) => {
    setSelectedPackageIndividual(e.target.value);
  };

  const handlePackageChangePareja = (e) => {
    setSelectedPackagePareja(e.target.value);
  };

  const handlePackageChangeNinos = (e) => {
    setSelectedPackageNinos(e.target.value);
  };

  const handlePackageChangeFamilia = (e) => {
    setSelectedPackageFamilia(e.target.value);
  };

  const priceCards = [
    {
      title: 'Terapia Individual',
      price:
        selectedPackageIndividual === 'online_single'
          ? '$80,000'
          : selectedPackageIndividual === 'online_2'
          ? '$152,000'
          : selectedPackageIndividual === 'online_4'
          ? '$288,000'
          : selectedPackageIndividual === 'online_8'
          ? '$544,000'
          : selectedPackageIndividual === 'presencial_consultorio_single'
          ? '$134,000'
          : selectedPackageIndividual === 'presencial_consultorio_2'
          ? '$254,600'
          : selectedPackageIndividual === 'presencial_consultorio_4'
          ? '$482,400'
          : selectedPackageIndividual === 'presencial_consultorio_8'
          ? '$911,200'
          : selectedPackageIndividual === 'presencial_naturaleza_single'
          ? '$115,000'
          : selectedPackageIndividual === 'presencial_naturaleza_2'
          ? '$218,500'
          : selectedPackageIndividual === 'presencial_naturaleza_4'
          ? '$414,000'
          : selectedPackageIndividual === 'presencial_naturaleza_8'
          ? '$782,000'
          : '',
      features: [
        'Mejora de la salud emocional y física al tratar depresión y ansiedad.',
        'Acompañamiento especializado para niños y adolescentes en problemas emocionales y de identidad.',
        'Estrategias personalizadas para superar el estrés y mejorar la calidad de vida.',
      ],
      buttonText: 'Contactanos',
      onPackageChange: handlePackageChangeIndividual,
      selectedPackage: selectedPackageIndividual,
    },
    {
      title: 'Terapia de Pareja',
      price:
        selectedPackagePareja === 'online_single'
          ? '$80,000'
          : selectedPackagePareja === 'online_2'
          ? '$152,000'
          : selectedPackagePareja === 'online_4'
          ? '$288,000'
          : selectedPackagePareja === 'online_8'
          ? '$544,000'
          : selectedPackagePareja === 'presencial_consultorio_single'
          ? '$134,000'
          : selectedPackagePareja === 'presencial_consultorio_2'
          ? '$254,600'
          : selectedPackagePareja === 'presencial_consultorio_4'
          ? '$482,400'
          : selectedPackagePareja === 'presencial_consultorio_8'
          ? '$911,200'
          : selectedPackagePareja === 'presencial_naturaleza_single'
          ? '$115,000'
          : selectedPackagePareja === 'presencial_naturaleza_2'
          ? '$218,500'
          : selectedPackagePareja === 'presencial_naturaleza_4'
          ? '$414,000'
          : selectedPackagePareja === 'presencial_naturaleza_8'
          ? '$782,000'
          : '',
      features: [
        'Fortalecimiento de la relación mediante herramientas para superar obstáculos.',
        'Mejora de la comunicación y comprensión mutua.',
        'Construcción de una base sólida para enfrentar desafíos juntos.',
      ],
      buttonText: 'Contrata tu Día. ',
      onPackageChange: handlePackageChangePareja,
      selectedPackage: selectedPackagePareja,
    },
    {
      title: 'Terapia de Familia',
      price:
        selectedPackageFamilia === 'presencial_consultorio_single'
          ? '$80,000'
          : selectedPackageFamilia === 'presencial_consultorio_2'
          ? '$152,000'
          : selectedPackageFamilia === 'presencial_consultorio_4'
          ? '$288,000'
          : selectedPackageFamilia === 'presencial_consultorio_8'
          ? '$544,000'
          : selectedPackageFamilia === 'presencial_naturaleza_single'
          ? '$134,000'
          : selectedPackageFamilia === 'presencial_naturaleza_2'
          ? '$254,600'
          : selectedPackageFamilia === 'presencial_naturaleza_4'
          ? '$482,400'
          : selectedPackageFamilia === 'presencial_naturaleza_8'
          ? '$911,200'
          : '',
      features: [
        'Mejora de la comunicación y comprensión mutua entre miembros de la familia.',
        'Resolución constructiva de conflictos familiares.',
        'Fortalecimiento de los lazos familiares y creación de un entorno armonioso.',
      ],
      buttonText: 'Subscribe',
      onPackageChange: handlePackageChangeFamilia,
      selectedPackage: selectedPackageFamilia,
    },
    {
      title: 'Terapia de Niños y Adolescentes',
      price:
        selectedPackageNinos === 'presencial_naturaleza_single'
          ? '$80,000'
          : selectedPackageNinos === 'presencial_naturaleza_2'
          ? '$152,000'
          : selectedPackageNinos === 'presencial_naturaleza_4'
          ? '$288,000'
          : selectedPackageNinos === 'presencial_naturaleza_8'
          ? '$544,000'
          : '',
      features: [
        'Abordaje de problemas emocionales y de comportamiento como ansiedad y depresión.',
        'Desarrollo de habilidades académicas y sociales.',
        'Colaboración con los padres para mejorar prácticas de crianza y establecer normas y límites.',
      ],
      buttonText: 'Dejanos un Mensaje',
      onPackageChange: handlePackageChangeNinos,
      selectedPackage: selectedPackageNinos,
    },
    {
      title: 'Terapia de Grupos',
      price: '$149,000',
      features: ['Red de apoyo entre personas con desafíos similares.', 'Fomento del crecimiento personal y comprensión mutua.', 'Desarrollo de habilidades colectivas para afrontar obstáculos.'],
      buttonText: 'Contactanos',
    },
    {
      title: 'Batería de riesgo psicosocial',
      price: '$288,000',
      features: ['Cumplimiento de regulaciones legales.', 'Prevención del estrés y acoso laboral.', 'Promoción del bienestar emocional de los trabajadores.'],
      buttonText: 'Contactanos',
    },
    {
      title: 'Formación y capacitación',
      price: '$300,000',
      features: ['Reducción del estrés laboral.', 'Mejora del equilibrio vida-trabajo.', 'Fomento de un entorno laboral saludable y productivo.'],
      buttonText: 'Contactanos',
    },
    {
      title: 'Liderazgo',
      price: '$300,000',
      features: ['Mejora de la comunicación efectiva.', 'Creación de un ambiente inclusivo.', 'Potenciación del bienestar y productividad de los equipos.'],
      buttonText: 'reserva tu cita',
    },
    {
      title: 'Habilidades blandas',
      price: '$300,000',
      features: ['Mejora de la inteligencia emocional y empatía.', 'Fortalecimiento del trabajo en equipo y liderazgo.', 'Desarrollo de adaptabilidad y resolución de conflictos.'],
      buttonText: 'reserva tu cita',
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {priceCards.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Producto;
