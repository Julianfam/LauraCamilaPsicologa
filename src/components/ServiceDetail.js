import React from 'react';
import Image from 'next/image';

const ServiceDetail = ({ service }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image src={service.image} alt={service.title} width={600} height={400} objectFit="cover" />
        </div>

        {/* Información */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
          <p className="mb-4">{service.description}</p>

          {/* Iconos con información */}
          <div className="mb-4">
            {service.points.map((point, index) => (
              <div className="flex items-center mb-2" key={index}>
                <point.icon className={`${point.color} mr-2`} />
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          {/* Botón de compra */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
