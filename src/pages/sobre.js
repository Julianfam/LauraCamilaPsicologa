import React from 'react';
import Image from 'next/image';
import imgSobre from '/public/assets/imgpsicologia/IMG_1410_0112.jpg';

const title = 'Estoy para ayudarte';
const subtitle = 'Terapia profesional';
const description =
  '{Quienes somos <br> Clínica <br> ¡Bienvenido a nuestro espacio dedicado al bienestar mental! En el corazón de Bogotá, nuestro equipo interdisciplinario se compromete a brindar apoyo y promover la salud mental. No importa dónde te encuentres, nuestras teleconsultas están diseñadas para llegar hasta ti, ofreciendo un acceso conveniente y personalizado.Con una vasta experiencia en la identificación, diagnóstico y tratamiento de una variedad de problemas emocionales, afectivos, cognitivos y de conducta, nos especializamos en atender a niños, niñas, adolescentes y adultos. Nos enorgullece nuestra capacidad para adaptar nuestros enfoques a las necesidades únicas de cada individuo.Nuestra fortaleza radica en la combinación de competencias profesionales y humanas. Creamos tratamientos a medida, aprovechando nuestra formación continua para estar a la vanguardia de las soluciones actualizadas y emergentes que el entorno demanda.En constante evolución, nuestro objetivo es acompañarte en el camino hacia el éxito en tu vida personal y profesional. Establecemos acciones efectivas para que alcances tus metas, proporcionando el apoyo necesario para cultivar tu bienestar mental.Únete a nosotros en esta travesía hacia una vida más plena y equilibrada. Tu bienestar es nuestra prioridad. ¡Descubre el poder de cuidar tu salud mental con nosotros<br >rganizacional <br> ¡Bienvenidos a nuestro equipo dedicado a potenciar la salud mental en el ámbito empresarial Nosotros somos un equipo interdisciplinario comprometido con el cuidado y promoción de la salud mental en las organizaciones, trabajando arduamente para asegurar que los colaboradores encuentren el entorno ideal para desarrollar sus funciones de manera óptima.Con una trayectoria de 10 años en el campo organizacional, nos destacamos por la aplicación de una exhaustiva batería de riesgo psicosocial y la implementación de planes de seguimiento para garantizar el acompañamiento y mejora continua. Nuestra misión incluye la promoción de la conciencia y la reducción del estigma en torno a la salud mental, creando entornos más comprensivos y receptivos. Fomentamos el equilibrio entre trabajo y vida personal, reconociendo su impacto en la salud mental. Para ello, diseñamos programas de bienestar centrados en la actividad física, la nutrición y la gestión del estrés. Nuestra capacitación en habilidades de afrontamiento ayuda a los empleados a gestionar el estrés, la ansiedad y otros desafíos emocionales de manera efectiva.Nos especializamos en la creación de ambientes de trabajo saludables mediante la promoción de la comunicación abierta, el apoyo mutuo y la empatía. Abordamos la gestión del estrés y la presión laboral, así como el desarrollo de liderazgo y culturas organizacionales que fomenten un ambiente psicológico positivo.En resumen, estamos aquí para ser su aliado estratégico en la construcción de entornos laborales que prioricen y fortalezcan la salud mental. Juntos, crearemos un camino hacia el bienestar integral en su organización. ¡Descubra cómo podemos transformar su entorno laboral hoy mismo!}';

export default function sobre() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-1/2 lg:w-1/2 md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image className="object-cover object-center rounded" alt="hero" src={imgSobre} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
            <br className="hidden lg:inline-block" />
            {subtitle}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Resuelve tus dudas</button>
          </div>
        </div>
      </div>
    </section>
  );
}
