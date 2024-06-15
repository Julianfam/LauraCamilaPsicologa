import React from 'react';
import Link from 'next/link';

const ServiceMenu = ({ services, basePath }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Nuestros Servicios</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index} className="mb-2">
            <Link legacyBehavior href={`${basePath}/${service.slug}`}>
              <div>
              <a className="text-indigo-600 hover:underline">{service.title}</a>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceMenu;
