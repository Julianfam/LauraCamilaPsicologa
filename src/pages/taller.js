import React, { useState } from 'react';

const TallerMiedos = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [id] = useState(`ID-${Math.floor(Math.random() * 10000)}`);
  const [selectedFobia, setSelectedFobia] = useState('');
  const [autoEvaluacion, setAutoEvaluacion] = useState(3); // Default value for auto-evaluation
  const [showSummary, setShowSummary] = useState(false);
  const [experienciaNegativa, setExperienciaNegativa] = useState('');
  const [faltaConocimiento, setFaltaConocimiento] = useState('');
  const [miedoInesperado, setMiedoInesperado] = useState('');
  const [exageracionMediatica, setExageracionMediatica] = useState('');

  const fobiasList = [
    'Ofidiofobia',
    'Aracnofobia',
    'Claustrofobia',
    'Acrofobia',
    'Agorafobia',
    'Miedo a las alturas',
    'Miedo a volar',
    'Miedo a los espacios cerrados',
    'Miedo a las multitudes',
    'Miedo a los perros',
    'Miedo a los gatos',
    'Miedo a las arañas',
    'Miedo a los ratones',
    'Miedo a las serpientes',
    'Miedo a las tormentas',
    'Miedo al agua',
    'Miedo a los hospitales',
    'Miedo al fracaso',
    'Miedo al rechazo',
    'Miedo a los cambios',
    'Miedo a las críticas',
    'Miedo a la oscuridad',
    'Miedo a los exámenes',
    'Miedo a hablar en público',
    'Miedo a la soledad',
    'Miedo a perder el control',
    'Miedo a la muerte',
    'Miedo a los insectos',
    'Miedo a los payasos',
    'Miedo a los espacios abiertos',
    'Miedo a los ruidos fuertes',
    'Miedo a la falta de dinero',
    'Miedo a lo desconocido',
    'Miedo a los fantasmas',
    'Miedo a las serpientes',
    'Miedo a los animales salvajes',
    'Miedo a los lugares altos',
    'Miedo a la invasión de la privacidad',
    'Miedo a la agorafobia',
    'Miedo a la claustrofobia',
    'Miedo a las agujas',
    'Miedo a las profundidades',
    'Miedo a la mentira',
    'Miedo a perder a un ser querido',
    'Miedo a los cambios climáticos',
    'Miedo a las crisis',
    'Miedo a las amenazas externas',
    'Miedo a las enfermedades',
    'Miedo a los accidentes',
    'Miedo a las sombras',
    'Miedo a la tecnología',
    'Miedo a las experiencias traumáticas',
    'Miedo a la pobreza',
    'Miedo a las decisiones importantes',
    'Miedo a ser juzgado',
    'Miedo a la guerra',
    'Miedo a los eventos públicos',
    'Miedo a los vínculos emocionales',
  ]; // Fobias

  const handleNextStep = () => {
    if (step === 2 && !selectedFobia) {
      alert('Debes seleccionar una fobia para avanzar.');
      return;
    }
    if (step === 3 && !experienciaNegativa) {
      alert('Debes escribir tu experiencia negativa para avanzar.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowSummary(true);
  };

  return (
    <div className="p-6 bg-white max-w-md mx-auto">
      {/* Nombre del participante */}
      {name && <h2 className="text-xl font-bold mb-4">{name}&apos;s Taller</h2>}
      <h1 className="text-2xl font-bold mb-4">Taller: Conociendo tus Miedos</h1>

      {/* Step 1 - Nombre e ID */}
      {step === 1 && (
        <div>
          <label className="block mb-2">
            <input>¿Cuál es tu nombre?</input>
          </label>
          <input type="text" className="border p-2 rounded w-full mb-4" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleNextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
            Siguiente
          </button>
        </div>
      )}

      {/* Step 2 - Selección de Fobia */}
      {step === 2 && (
        <div>
          <label className="block mb-2">
            <input>Selecciona tu fobia</input>
          </label>
          <select className="border p-2 rounded w-full mb-4" value={selectedFobia} onChange={(e) => setSelectedFobia(e.target.value)}>
            <option value="">Selecciona una fobia</option>
            {fobiasList.map((fobia, index) => (
              <option key={index} value={fobia}>
                {fobia}
              </option>
            ))}
          </select>
          <div className="mt-4 flex justify-between">
            <button onClick={handlePrevStep} className="px-4 py-2 bg-gray-500 text-white rounded">
              Regresar
            </button>
            <button onClick={handleNextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
              Siguiente
            </button>
          </div>
        </div>
      )}

      {/* Step 3 - Mapa del Miedo */}
      {step === 3 && (
        <div>
          <h2 className="mb-4">Mapa del Miedo</h2>
          <p className="mb-2">
            Dibuja o escribe un mapa donde reflejes las situaciones, lugares o personas que te generan miedo o ansiedad. Ubica tu miedo en el centro y alrededor, escribe o dibuja las razones que lo
            alimentan. Luego, traza una línea hacia una posible solución.
          </p>
          <label className="block mb-2">
            <input>Mi miedo central es:</input>
          </label>
          <input
            type="text"
            className="border p-2 rounded w-full mb-4"
            placeholder="Ejemplo: Fobia a las serpientes"
            value={selectedFobia} // Display selected fobia
            readOnly // Make it read-only
          />
          <label className="block mb-2">
            <input>Factores que lo alimentan:</input>
          </label>
          <input
            type="text"
            className="border p-2 rounded w-full mb-4"
            placeholder="Experiencia negativa previa"
            value={experienciaNegativa}
            onChange={(e) => setExperienciaNegativa(e.target.value)}
          />
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="Falta de conocimiento" value={faltaConocimiento} onChange={(e) => setFaltaConocimiento(e.target.value)} />
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="Miedo a lo inesperado" value={miedoInesperado} onChange={(e) => setMiedoInesperado(e.target.value)} />
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="Exageración mediática" value={exageracionMediatica} onChange={(e) => setExageracionMediatica(e.target.value)} />
          <div className="mt-4 flex justify-between">
            <button onClick={handlePrevStep} className="px-4 py-2 bg-gray-500 text-white rounded">
              Regresar
            </button>
            <button onClick={handleNextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
              Siguiente
            </button>
          </div>
        </div>
      )}

      {/* Step 4 - Autoevaluación */}
      {step === 4 && (
        <div>
          <h2 className="mb-4">Autoevaluación</h2>
          <p className="mb-2">Evalúa cómo te sientes con respecto a tu fobia:</p>
          <div className="flex justify-between mb-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <input type="range" min="1" max="5" value={autoEvaluacion} onChange={(e) => setAutoEvaluacion(Number(e.target.value))} className="w-full" />
          <div className="mt-4 flex justify-between">
            <button onClick={handlePrevStep} className="px-4 py-2 bg-gray-500 text-white rounded">
              Regresar
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
              Finalizar
            </button>
          </div>
        </div>
      )}

      {/* Resumen */}
      {showSummary && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Resumen de tu Taller</h2>
          <p>
            <strong>Nombre:</strong> {name}
          </p>
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Fobia seleccionada:</strong> {selectedFobia}
          </p>
          <p>
            <strong>Experiencia negativa:</strong> {experienciaNegativa}
          </p>
          <p>
            <strong>Falta de conocimiento:</strong> {faltaConocimiento}
          </p>
          <p>
            <strong>Miedo a lo inesperado:</strong> {miedoInesperado}
          </p>
          <p>
            <strong>Exageración mediática:</strong> {exageracionMediatica}
          </p>
          <p>
            <strong>Puntuación de autoevaluación:</strong> {autoEvaluacion}
          </p>
        </div>
      )}
    </div>
  );
};

export default TallerMiedos;
