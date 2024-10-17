import React, { useState } from 'react';

const Taller = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [id] = useState(`ID-${Math.floor(Math.random() * 10000)}`);
  const [selectedFobia, setSelectedFobia] = useState('');

  const [showSummary, setShowSummary] = useState(false);
  const [experienciaNegativa, setExperienciaNegativa] = useState('');
  const [faltaConocimiento, setFaltaConocimiento] = useState('');
  const [miedoInesperado, setMiedoInesperado] = useState('');
  const [exageracionMediatica, setExageracionMediatica] = useState('');
  const [creenciasCulturales, setCreenciasCulturales] = useState('');

  const [reflexionMiedo, setReflexionMiedo] = useState(''); // Campo para reflexión sobre el miedo

  const fobiasList = [
    'Acrofobia (miedo a las alturas)',
    'Agelastía (miedo a no poder reír)',
    'Agorafobia (miedo a los espacios abiertos)',
    'Atychiphobia (miedo al fracaso)',
    'Anthophobia (miedo a las flores)',
    'Antrofobia (miedo a la gente)',
    'Aracnofobia (miedo a las arañas)',
    'Cacofobia (miedo a los sonidos desagradables)',
    'Claustrofobia (miedo a los espacios cerrados)',
    'Cenophobia (miedo a los espacios vacíos)',
    'Chocofobia (miedo a lo que está relacionado con el chocolate)',
    'Cibermisofobia (miedo a las computadoras y la tecnología)',
    'Cremnofobia (miedo a los acantilados)',
    'Dendrofobia (miedo a los árboles)',
    'Echofobia (miedo a los ecos)',
    'Entomofobia (miedo a los insectos)',
    'Espectrofobia (miedo a fantasmas)',
    'Fobia a los espacios abiertos (miedo a estar en lugares públicos)',
    'Fobia a las agujas (miedo a las inyecciones)',
    'Fobofobia (miedo al miedo)',
    'Fobia a los objetos punzantes (miedo a objetos afilados)',
    'Hemofobia (miedo a la sangre)',
    'Hesperofobia (miedo a la noche)',
    'Hidrofobia (miedo al agua)',
    'Hypochondria (miedo a estar enfermo)',
    'Kleptofobia (miedo a ser robado)',
    'Logofobia (miedo a hablar en público)',
    'Mastigofobia (miedo a ser golpeado)',
    'Merinthofobia (miedo a ser atado)',
    'Misofobia (miedo a la suciedad o los gérmenes)',
    'Neofobia (miedo a lo nuevo)',
    'Necrofobia (miedo a la muerte)',
    'Nomofobia (miedo a no tener el teléfono móvil)',
    'Nyctofobia (miedo a la oscuridad)',
    'Osmofobia (miedo a los olores)',
    'Ofidiofobia (miedo a las serpientes)',
    'Ornitofobia (miedo a los pájaros)',
    'Pediophobia (miedo a los muñecos)',
    'Pogonofobia (miedo a las barbas)',
    'Paraskavedekatriafobia (miedo a los viernes 13)',
    'Rupofobia (miedo a la tierra)',
    'Sanguinofobia (miedo a ver sangre)',
    'Sociophobia (miedo a las interacciones sociales)',
    'Sociopatía (miedo a la sociedad)',
    'Somniphobia (miedo a dormir)',
    'Technofobia (miedo a la tecnología)',
    'Tachofobia (miedo a la velocidad)',
    'Triscaidecafobia (miedo al número 13)',
    'Triskaidekafobia (miedo al número 13)',
    'Venustrafobia (miedo a las mujeres hermosas)',
    'Xenofobia (miedo a los extranjeros)',
    'Zoología (miedo a los animales)',
    'Otro',
  ];

  const handleNextStep = () => {
    if (step === 2 && !selectedFobia) {
      alert('Debes seleccionar una fobia para avanzar.');
      return;
    }
    if (step === 3 && !reflexionMiedo) {
      // Verifica que la reflexión esté escrita
      alert('Debes escribir tu reflexión sobre el miedo para avanzar.');
      return;
    }
    if (step === 4 && (!experienciaNegativa || !creenciasCulturales || !faltaConocimiento || !miedoInesperado || !exageracionMediatica)) {
      // Verifica que los campos no estén vacíos
      alert('Debes completar todos los campos para avanzar.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowSummary(true);
    sendWhatsAppMessage();
  };

  const sendWhatsAppMessage = () => {
    const message = `
      Resumen del Taller de Fobias
      Nombre: ${name}
      ID: ${id}
      Fobia seleccionada: ${selectedFobia}
      Reflexión sobre el miedo: ${reflexionMiedo}
      Experiencia negativa: ${experienciaNegativa}
      Creencias culturales: ${creenciasCulturales}
      Falta de conocimiento: ${faltaConocimiento}
      Miedo a lo inesperado: ${miedoInesperado}
      Exageración mediática: ${exageracionMediatica}
    `;
    const whatsappNumber = '+573224714724';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="p-6 bg-white max-w-md mx-auto">
      {/* Bienvenida */}
      {step === 1 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Bienvenida al Taller de Fobias</h1>
          <p className="mb-4">Soy la psicóloga Laura Camila, y estaré a tu lado durante este proceso. Nuestro equipo estará disponible para resolver cualquier duda que tengas.</p>
          <p className="mb-4">
            Este taller se divide en cinco sesiones, y hoy es el primer día. En esta primera sesión, el objetivo es crear conciencia sobre las fobias y los miedos, identificar su origen y su impacto
            en tu vida diaria.
          </p>
          <label className="block mb-2" htmlFor="nombre">
            ¿Cuál es tu nombre?
          </label>
          <input id="nombre" type="text" className="border p-2 rounded w-full mb-4" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleNextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
            Siguiente
          </button>
        </div>
      )}

      {/* Paso 1 - Selección de Fobia */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Paso 1: Selecciona tu fobia</h2>
          <p className="mb-4">¿Qué situaciones te paralizan o te causan ansiedad extrema?</p>
          <label className="block mb-2" htmlFor="fobiaSeleccionada">
            Selecciona tu fobia
          </label>
          <select id="fobiaSeleccionada" className="border p-2 rounded w-full mb-4" value={selectedFobia} onChange={(e) => setSelectedFobia(e.target.value)}>
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

      {/* Paso 2 - Reflexión sobre el miedo */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Paso 2: Reflexiona sobre tu miedo</h2>
          <p className="mb-4">Escribe tus pensamientos sobre el miedo que sientes al enfrentarte a esta situación:</p>
          <textarea className="border p-2 rounded w-full mb-4" rows={4} value={reflexionMiedo} onChange={(e) => setReflexionMiedo(e.target.value)} />
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

      {/* Paso 3 - Autoevaluación */}
      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Paso 3: Autoevaluación</h2>
          <p className="mb-4">Responde a las siguientes preguntas:</p>
          <div className="mb-4">
            <label htmlFor="experienciaNegativa" className="block mb-1">
              ¿Has tenido alguna experiencia negativa relacionada con tu fobia?
            </label>
            <textarea id="experienciaNegativa" className="border p-2 rounded w-full" rows={3} value={experienciaNegativa} onChange={(e) => setExperienciaNegativa(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="creenciasCulturales" className="block mb-1">
              ¿Creencias culturales que influyen en tu miedo?
            </label>
            <textarea id="creenciasCulturales" className="border p-2 rounded w-full" rows={3} value={creenciasCulturales} onChange={(e) => setCreenciasCulturales(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="faltaConocimiento" className="block mb-1">
              ¿Falta de conocimiento sobre tu miedo?
            </label>
            <textarea id="faltaConocimiento" className="border p-2 rounded w-full" rows={3} value={faltaConocimiento} onChange={(e) => setFaltaConocimiento(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="miedoInesperado" className="block mb-1">
              ¿Miedo a lo inesperado?
            </label>
            <textarea id="miedoInesperado" className="border p-2 rounded w-full" rows={3} value={miedoInesperado} onChange={(e) => setMiedoInesperado(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="exageracionMediatica" className="block mb-1">
              ¿Exageración mediática de tu miedo?
            </label>
            <textarea id="exageracionMediatica" className="border p-2 rounded w-full" rows={3} value={exageracionMediatica} onChange={(e) => setExageracionMediatica(e.target.value)} />
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={handlePrevStep} className="px-4 py-2 bg-gray-500 text-white rounded">
              Regresar
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
              Finalizar y Enviar
            </button>
          </div>
        </div>
      )}

      {/* Resumen */}
      {showSummary && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Resumen del Taller</h2>
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
            <strong>Reflexión sobre el miedo:</strong> {reflexionMiedo}
          </p>
          <p>
            <strong>Experiencia negativa:</strong> {experienciaNegativa}
          </p>
          <p>
            <strong>Creencias culturales:</strong> {creenciasCulturales}
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
        </div>
      )}
    </div>
  );
};

export default Taller;
