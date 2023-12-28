import React from 'react';
import GaleriaIntro from '../components/GarleriaIntro';
import Imagen100 from '../components/Imagen100';
import SeccionConIcluidos from '@components/Icluidos';

export default function Home() {
  return (
    <>
      <Imagen100 />
      <GaleriaIntro />
      <SeccionConIcluidos />
      {/* Agrega aquí otros componentes o contenido que desees */}
    </>
  );
}
