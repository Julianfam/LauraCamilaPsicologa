import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="mr-5 hover:text-gray-900">
        Servicios
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-56 bg-white border rounded shadow-lg z-50">
          {/* Título Terapias */}
          <div className="px-4 py-2 text-gray-900 font-bold">Terapias</div>
          {/* Servicios principales */}
          <Link legacyBehavior href="/servicios/terapia-individual" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Terapia Individual</div>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-pareja" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Terapia de Pareja</div>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-familia" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Terapia de Familia</div>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-ninos-y-adolescentes" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Terapia de Niños y Adolescentes</div>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-grupos" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Terapia de Grupos</div>
          </Link>
          {/* Separador */}
          <div className="border-t my-2"></div>
          {/* Título Servicios Empresariales */}
          <div className="px-4 py-2 text-gray-900 font-bold">Servicios Empresariales</div>
          {/* Servicios empresariales */}
          <Link legacyBehavior href="/servicios-empresariales/bateria-de-riesgo-psicosocial" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Batería de Riesgo Psicosocial</div>
          </Link>
          <Link legacyBehavior href="/servicios-empresariales/formacion-y-capacitacion" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Formación y Capacitación</div>
          </Link>
          <Link legacyBehavior href="/servicios-empresariales/liderazgo" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Liderazgo</div>
          </Link>
          <Link legacyBehavior href="/servicios-empresariales/habilidades-blandas" passHref>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Habilidades Blandas</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
