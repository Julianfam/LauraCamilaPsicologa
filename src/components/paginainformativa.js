import React from 'react';
import Image from 'next/image';
import { FaHeart, FaRegClock, FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';
import image1 from '/public/assets/imgpsicologia/imgterapiapsi.jpg'; // Usamos una imagen existente

export default function PaginaInformativa() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image src={image1} alt="Terapia de Pareja" width={600} height={400} objectFit="cover" />
        </div>

        {/* Información */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Terapia de Pareja</h2>
          <p className="mb-4">
            Nuestra terapia de pareja está diseñada para ayudar a mejorar la comunicación y resolver conflictos dentro de la relación. Ofrecemos un espacio seguro y confiable para que las parejas
            trabajen en sus desafíos y fortalezcan su conexión emocional.
          </p>

          {/* Iconos con información */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FaHeart className="text-red-500 mr-2" />
              <span>Mejora de la comunicación y la comprensión mutua</span>
            </div>
            <div className="flex items-center mb-2">
              <FaRegClock className="text-blue-500 mr-2" />
              <span>Sesiones de 60 minutos</span>
            </div>
            <div className="flex items-center mb-2">
              <FaUserFriends className="text-green-500 mr-2" />
              <span>Enfoque en la resolución de conflictos</span>
            </div>
            <div className="flex items-center">
              <FaMoneyBillWave className="text-yellow-500 mr-2" />
              <span>Precio: $80 por sesión</span>
            </div>
          </div>

          {/* Botón de compra */}
          <div>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">Comprar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}
