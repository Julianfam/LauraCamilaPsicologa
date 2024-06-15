import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="mr-5 hover:text-gray-900">
        Servicios
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-56 bg-white border rounded shadow-lg z-50">
          {/* Título Terapias */}
          <div className="px-4 py-2 text-gray-900 font-bold text-left">Terapias</div>
          {/* Servicios principales */}
          <Link legacyBehavior href="/servicios/terapia-individual" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Terapia Individual
            </button>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-pareja" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Terapia de Pareja
            </button>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-familia" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Terapia de Familia
            </button>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-ninos-y-adolescentes" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Terapia de Niños y Adolescentes
            </button>
          </Link>
          <Link legacyBehavior href="/servicios/terapia-de-grupos" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Terapia de Grupos
            </button>
          </Link>
          {/* Separador */}
          <div className="border-t my-2"></div>
          {/* Título Servicios Empresariales */}
          <div className="px-4 py-2 text-gray-900 font-bold text-left">Servicios Empresariales</div>
          {/* Servicios empresariales */}
          <Link legacyBehavior href="/servicios-empresariales/bateria-de-riesgo-psicosocial" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Batería de Riesgo Psicosocial
            </button>
          </Link>
          <Link legacyBehavior href="/servicios-empresariales/formacion-y-capacitacion" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Formación y Capacitación
            </button>
          </Link>
          <Link legacyBehavior href="/servicios-empresariales/liderazgo" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Liderazgo
            </button>
          </Link>
          <Link legacyBehavior href="/servicios-empresariales/habilidades-blandas" passHref>
            <button onClick={closeDropdown} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-left">
              Habilidades Blandas
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
