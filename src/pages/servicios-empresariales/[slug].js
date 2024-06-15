import React from 'react';
import { useRouter } from 'next/router';
import ServiceDetail from '../../components/ServiceDetail';
import { FaHeart, FaRegClock, FaUserFriends } from 'react-icons/fa';

// Define los detalles de cada servicio aquí
const services = {
  'bateria-de-riesgo-psicosocial': {
    title: 'Batería de Riesgo Psicosocial',
    image: '/assets/imgservicios/laura-bateria.jpg',
    description:
      'Evaluamos y prevenimos riesgos psicosociales laborales en Colombia. Identificamos factores como el estrés y el acoso, implementando planes personalizados para un entorno laboral saludable.',
    points: [
      { text: 'Evaluación y prevención de riesgos psicosociales laborales.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Implementación de planes personalizados para un entorno laboral saludable.', icon: FaRegClock, color: 'text-blue-500' },
      { text: 'Enfoque en identificar factores como el estrés y el acoso.', icon: FaUserFriends, color: 'text-green-500' },
    ],
  },
  'formacion-y-capacitacion': {
    title: 'Formación y Capacitación',
    image: '/assets/imgservicios/plan-de-formacion-en-empresas.jpg',
    description: 'Ofrecemos programas para mejorar la salud mental y el bienestar laboral, enfocados en manejo del estrés, equilibrio personal-profesional y habilidades de afrontamiento.',
    points: [
      { text: 'Programas para mejorar la salud mental y el bienestar laboral.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Enfoque en el manejo del estrés y equilibrio personal-profesional.', icon: FaRegClock, color: 'text-blue-500' },
      { text: 'Desarrollo de habilidades de afrontamiento.', icon: FaUserFriends, color: 'text-green-500' },
    ],
  },
  liderazgo: {
    title: 'Liderazgo',
    image: '/assets/imgservicios/laura-liderando.jpg',
    description:
      'Nuestros programas desarrollan habilidades de comunicación, gestión del tiempo y creación de ambientes inclusivos y motivadores, promoviendo el bienestar y potencial de los colaboradores.',
    points: [
      { text: 'Desarrollo de habilidades de comunicación y gestión del tiempo.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Creación de ambientes inclusivos y motivadores.', icon: FaRegClock, color: 'text-blue-500' },
      { text: 'Promoción del bienestar y potencial de los colaboradores.', icon: FaUserFriends, color: 'text-green-500' },
    ],
  },
  'habilidades-blandas': {
    title: 'Habilidades Blandas',
    image: '/assets/imgservicios/laura-habilidades.jpg',
    description: 'Capacitamos en comunicación, resolución de conflictos, inteligencia emocional y liderazgo, ayudando a destacar y prosperar en el entorno laboral.',
    points: [
      { text: 'Capacitación en comunicación y resolución de conflictos.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Desarrollo de inteligencia emocional y liderazgo.', icon: FaRegClock, color: 'text-blue-500' },
      { text: 'Ayuda para destacar y prosperar en el entorno laboral.', icon: FaUserFriends, color: 'text-green-500' },
    ],
  },
};

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const service = services[slug];

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  return <ServiceDetail service={service} />;
};

export default ServicePage;
