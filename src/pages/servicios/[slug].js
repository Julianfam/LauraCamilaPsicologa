import React from 'react';
import { useRouter } from 'next/router';
import ServiceDetail from '../../components/ServiceDetail';
import { FaHeart, FaRegClock, FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';

// Define los detalles de cada servicio aquí
const services = {
  'terapia-individual': {
    title: 'Terapia Individual',
    image: '/assets/imgservicios/individual.jpg',
    description:
      'Ofrecemos terapia psicológica individual para tratar depresión, ansiedad y estrés, mejorando la salud emocional y física. En niños y adolescentes, abordamos problemas emocionales, conductuales y de identidad, como acoso escolar y cambios de humor, con apoyo estratégico y experto.',
    points: [
      { text: 'Mejora de la salud emocional y física al tratar depresión y ansiedad.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Acompañamiento especializado para niños y adolescentes en problemas emocionales y de identidad.', icon: FaUserFriends, color: 'text-green-500' },
      { text: 'Estrategias personalizadas para superar el estrés y mejorar la calidad de vida.', icon: FaRegClock, color: 'text-blue-500' },
    ],
  },
  'terapia-de-pareja': {
    title: 'Terapia de Pareja',
    image: '/assets/imgpsicologia/imgterapiapsi.jpg',
    description:
      'Nuestra terapia de pareja está diseñada para ayudar a mejorar la comunicación y resolver conflictos dentro de la relación. Ofrecemos un espacio seguro y confiable para que las parejas trabajen en sus desafíos y fortalezcan su conexión emocional.',
    points: [
      { text: 'Mejora de la comunicación y la comprensión mutua', icon: FaHeart, color: 'text-red-500' },
      { text: 'Sesiones de 60 minutos', icon: FaRegClock, color: 'text-blue-500' },
      { text: 'Enfoque en la resolución de conflictos', icon: FaUserFriends, color: 'text-green-500' },
      { text: 'Precio: $80 por sesión', icon: FaMoneyBillWave, color: 'text-yellow-500' },
    ],
  },
  'terapia-de-familia': {
    title: 'Terapia de Familia',
    image: '/assets/imgservicios/terapia-familiar.webp',
    description:
      'La terapia familiar mejora la comunicación y la comprensión mutua dentro del núcleo familiar. Ayudamos a resolver conflictos constructivamente y fortalecemos los lazos familiares, creando un entorno saludable y armonioso mediante técnicas especializadas.',
    points: [
      { text: 'Mejora de la comunicación y comprensión mutua entre miembros de la familia.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Resolución constructiva de conflictos familiares.', icon: FaUserFriends, color: 'text-green-500' },
      { text: 'Fortalecimiento de los lazos familiares y creación de un entorno armonioso.', icon: FaRegClock, color: 'text-blue-500' },
    ],
  },
  'terapia-de-ninos-y-adolescentes': {
    title: 'Terapia de Niños y Adolescentes',
    image: '/assets/imgservicios/terapia-jovenes.jpg',
    description:
      'Abordamos problemas emocionales y de comportamiento en niños y adolescentes, como ansiedad, depresión y dificultades académicas. Ofrecemos apoyo integral y trabajamos con los padres en prácticas de crianza, estableciendo normas y límites para un desarrollo saludable.',
    points: [
      { text: 'Abordaje de problemas emocionales y de comportamiento como ansiedad y depresión.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Desarrollo de habilidades académicas y sociales.', icon: FaUserFriends, color: 'text-green-500' },
      { text: 'Colaboración con los padres para mejorar prácticas de crianza y establecer normas y límites.', icon: FaRegClock, color: 'text-blue-500' },
    ],
  },
  'terapia-de-grupos': {
    title: 'Terapia de Grupos',
    image: '/assets/imgservicios/terapia-grupal.jpg',
    description:
      'La terapia en grupo proporciona apoyo y conexión entre personas con desafíos similares. En un entorno confidencial y colaborativo, los participantes comparten experiencias personales, fomentando el crecimiento personal, la comprensión mutua y el desarrollo de habilidades para afrontar obstáculos.',
    points: [
      { text: 'Red de apoyo entre personas con desafíos similares.', icon: FaHeart, color: 'text-red-500' },
      { text: 'Fomento del crecimiento personal y comprensión mutua.', icon: FaUserFriends, color: 'text-green-500' },
      { text: 'Desarrollo de habilidades colectivas para afrontar obstáculos.', icon: FaRegClock, color: 'text-blue-500' },
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
