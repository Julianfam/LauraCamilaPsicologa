import React from 'react';

const Banner = () => {
  return (
    <div className="bg-blue-500 text-red-500 p-4 text-center relative overflow-hidden">
      <p className="single-line">
        <span>Anuncio importante: ¡Oferta especial 2025! ¡Hasta un 30% de descuento!</span>
      </p>
      <style jsx>
        {`
          .single-line {
            white-space: normal;
            overflow: hidden;
            animation: moveBanner 17s linear infinite;
            width: 100%;
          }

          @keyframes moveBanner {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
