import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: 'Maria',
    role: '24 años',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg',
    quote:
      'Decidí buscar terapia después de pasar por una serie de dificultades emocionales. Sentía que no podía manejar mi ansiedad por mi cuenta y estaba afectando mi trabajo y mis relaciones. Durante las sesiones de terapia, aprendí a identificar mis pensamientos y a desarrollar estrategias para manejarlos. Mi terapeuta también me ayudó a entender las raíces de mi ansiedad y a trabajar en ellas. Hoy en día, me siento mucho más capaz de enfrentar los desafíos de la vida gracias a la terapia',
    rating: 5,
  },
  {
    name: 'Ana',
    role: '32 años',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg',
    quote:
      'Había estado lidiando con depresión durante años, pero nunca había buscado ayuda profesional. Finalmente, una amiga me animó a probar la terapia. Fue una decisión que cambió mi vida. Al inicio fue difícil. A través de las sesiones, pude hablar sobre mis sentimientos sin miedo a ser juzgado. Mi terapeuta me ayudó a comprender que no estaba solo. Con el tiempo, comencé a mejorar en mi estado de ánimo y en mi capacidad para funcionar en mi vida diaria.',
    rating: 5,
  },
  {
    name: 'Carlos',
    role: '22 años',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
    quote:
      'Solía ​​sentir una profunda sensación de vacío y falta de propósito en mi vida. Aunque aparentemente tenía todo bajo control, por dentro me sentía perdido, no sabía cual era mi camino o como sentirme parte de mi propia vida. La terapia me brindó un espacio seguro para explorar mis emociones y descubrir qué era lo que realmente quería en la vida. A través de conversaciones significativas con mi terapeuta, pude entender mis valores, identificar mis metas y tomar medidas concretas para alcanzarlas. Hoy en día, me siento más conectado conmigo mismo y tengo una mayor claridad sobre mi camino hacia la felicidad y la realización.',
    rating: 5,
  },
  {
    name: 'Laura',
    role: '35 años',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
    quote:
      'Después de experimentar una pérdida devastadora en mi vida, me encontré luchando contra la tristeza y la desesperación. Sentía que no podía seguir adelante y me cerraba emocionalmente a todos. La terapia me ayudó a atravesar el proceso de duelo de una manera saludable y constructiva. Mi terapeuta me proporcionó el apoyo y la comprensión que tanto necesitaba durante ese difícil período. Aprendí a aceptar y conocer mis emociones, a permitirme sentir. La terapia me ayudó a sanar y a encontrar la esperanza nuevamente.',
    rating: 5,
  },
  {
    name: 'Laura',
    role: '35 años',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
    quote:
      'Después de experimentar una pérdida devastadora en mi vida, me encontré luchando contra la tristeza y la desesperación. Sentía que no podía seguir adelante y me cerraba emocionalmente a todos. La terapia me ayudó a atravesar el proceso de duelo de una manera saludable y constructiva. Mi terapeuta me proporcionó el apoyo y la comprensión que tanto necesitaba durante ese difícil período. Aprendí a aceptar y conocer mis emociones, a permitirme sentir. La terapia me ayudó a sanar y a encontrar la esperanza nuevamente.',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-4 text-warning">
    <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-5">
    <path fill="currentColor" d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
  </svg>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="max-w-xs mx-auto bg-white p-4 rounded-lg shadow-md">
    <div className="mb-4 flex justify-center"></div>
    <h5 className="mb-2 text-base font-bold">{testimonial.name}</h5>
    <h6 className="mb-2 text-sm font-medium text-primary dark:text-primary-400">{testimonial.role}</h6>
    <p className="mb-4 text-sm">
      {testimonial.quote}
      <QuoteIcon />
    </p>
    <ul className="flex justify-center">
      {[...Array(testimonial.rating)].map((_, index) => (
        <li key={index}>
          <StarIcon />
        </li>
      ))}
    </ul>
  </div>
);

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    let direction = 1;

    const moveSwiper = () => {
      if (swiperInstance) {
        if (swiperInstance.isEnd) {
          direction = -1;
        } else if (swiperInstance.isBeginning) {
          direction = 1;
        }
        swiperInstance.slideTo(swiperInstance.activeIndex + direction, 2000);
      }
    };

    const interval = setInterval(moveSwiper, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-12 mx-auto md:px-6">
      <section className="mb-12 text-center">
        <h2 className="mb-8 text-2xl font-bold">Testimonios</h2>
        <h3 className="mb-8 text-lg">
          Nuestro propósito es ayudarlos,Laura Camila Cuenta con más de 100 pacientes atendidos, aquí tenemos unos de los testimonios de las personas que han logrado mejorar su vida gracias a la
          terapia, los nombres los cambié por privacidad.
        </h3>
        <Swiper ref={swiperRef} spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
