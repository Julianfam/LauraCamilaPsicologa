import React from 'react';
import ServiceMenu from '../components/ServiceMenu';

const businessServices = [
  { title: 'Batería de riesgo psicosocial', slug: 'bateria-riesgo-psicosocial' },
  { title: 'Formación y capacitación', slug: 'formacion-capacitacion' },
  { title: 'Liderazgo', slug: 'liderazgo' },
  { title: 'Habilidades blandas', slug: 'habilidades-blandas' },
];

const ServiciosEmpresariales = () => {
  return (
    <div className="container mx-auto py-10">
      <ServiceMenu services={businessServices} basePath="/servicios-empresariales" />
    </div>
  );
};

export default ServiciosEmpresariales;
