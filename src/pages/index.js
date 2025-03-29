import React from 'react';
import Link from 'next/link';
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
      <div className="p-6 bg-gradient-to-b from-pink-100 to-white">
        <h2 className="text-2xl font-bold mb-4 text-brown-800 text-center">Explora Nuestros Tests Psicológicos</h2>
        <p className="text-gray-700 mb-6 text-center">Descubre cómo te sientes con nuestros tests emocionales.</p>
        <div className="text-center">
          <Link href="/psychological-tests">
            <button className="px-6 py-3 bg-brown-600 text-black rounded-lg font-semibold hover:bg-brown-700 transition">Ir a Tests Psicológicos</button>
          </Link>
        </div>
      </div>
    </>
  );
}
