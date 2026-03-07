import React from 'react';

const Banner = () => {
  return (
    <div className="bg-red-100 text-red-500 p-4 text-center relative overflow-hidden">
      <p className="single-line">
        <span>Anuncio importante: ¡Oferta especial 2026! ¡Hasta un 15% de descuento!</span>
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
