import React from 'react';
import SeccionConIcluidos from '@components/Icluidos';
import SeccionConIcluidosinstitucional from '@components/Icluidosinstitucional';
import Imagen100 from '../components/Imagen100';
import Testimonials from '@components/Testimonials';

export default function Home() {
  return (
    <>
      <Imagen100 />
      <Testimonials />
      <SeccionConIcluidos />
      <SeccionConIcluidosinstitucional />

      {/* Agrega aquí otros componentes o contenido que desees */}
    </>
  );
}
