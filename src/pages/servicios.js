import React from 'react';
import ServiceMenu from '../components/ServiceMenu';

const services = [
  { title: 'Terapia Individual', slug: 'terapia-individual' },
  { title: 'Terapia de Pareja', slug: 'terapia-de-pareja' },
  { title: 'Terapia de Familia', slug: 'terapia-de-familia' },
  { title: 'Terapia de Niños y Adolescentes', slug: 'terapia-de-ninos-y-adolescentes' },
  { title: 'Terapia de Grupos', slug: 'terapia-de-grupos' },
];

const Servicios = () => {
  return (
    <div className="container mx-auto py-10">
      <ServiceMenu services={services} basePath="/servicios" />
    </div>
  );
};

export default Servicios;
