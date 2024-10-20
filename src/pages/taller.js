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
  const [reflexionMiedo, setReflexionMiedo] = useState('');
  const [reflexionMiedo2, setReflexionMiedo2] = useState('');
  const [reflexionMiedo3, setReflexionMiedo3] = useState('');
  const [descubrimientoFinal, setDescubrimientoFinal] = useState('');

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
    if (step === 3 && (!reflexionMiedo || !reflexionMiedo2 || !reflexionMiedo3)) {
      alert('Debes escribir tu reflexión sobre el miedo para avanzar.');
      return;
    }
    if (step === 4 && (!experienciaNegativa || !creenciasCulturales || !faltaConocimiento || !miedoInesperado || !exageracionMediatica)) {
      alert('Debes completar todos los campos para avanzar.');
      return;
    }
    if (step === 5 && !descubrimientoFinal) {
      alert('Debes responder la pregunta final antes de enviar el taller.');
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
    const message = `Resumen del Taller de Fobias
      Nombre: ${name}
      ID: ${id}
      Fobia seleccionada: ${selectedFobia}
      Reflexión sobre el miedo: ${reflexionMiedo}
      Reflexión sobre el miedo 2: ${reflexionMiedo2}
      Reflexión sobre el miedo 3: ${reflexionMiedo3}
      Experiencia negativa: ${experienciaNegativa}
      Creencias culturales: ${creenciasCulturales}
      Falta de conocimiento: ${faltaConocimiento}
      Miedo a lo inesperado: ${miedoInesperado}
      Exageración mediática: ${exageracionMediatica}
      Descubrimiento sobre mi miedo: ${descubrimientoFinal}
      `;
    const whatsappNumber = '+573224714724';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="p-6 bg-white max-w-md mx-auto">
      {step === 1 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Bienvenida al Taller de Fobias</h1>
          <p className="mb-4">Soy la psicóloga Laura Camila, y estaré a tu lado durante este proceso. Nuestro equipo estará disponible para resolver cualquier duda que tengas.</p>
          <p className="mb-4">Este taller se divide en cinco sesiones. En esta primera sesión, el objetivo es crear conciencia sobre las fobias y los miedos.</p>
          <label className="block mb-2" htmlFor="nombre">
            ¿Cuál es tu nombre?
          </label>
          <input id="nombre" type="text" className="border p-2 rounded w-full mb-4" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleNextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
            Siguiente
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Paso 1: Selecciona tu fobia</h2>
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

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Paso 2: Reflexiona sobre tu miedo</h2>
          <label htmlFor="reflexionMiedo" className="block mb-2">
            Escribe tu reflexión sobre el miedo:
          </label>
          <textarea id="reflexionMiedo" className="border p-2 rounded w-full mb-2" rows="3" value={reflexionMiedo} onChange={(e) => setReflexionMiedo(e.target.value)} />
          <label htmlFor="reflexionMiedo2" className="block mb-2">
            Escribe otra reflexión:
          </label>
          <textarea id="reflexionMiedo2" className="border p-2 rounded w-full mb-2" rows="3" value={reflexionMiedo2} onChange={(e) => setReflexionMiedo2(e.target.value)} />
          <label htmlFor="reflexionMiedo3" className="block mb-2">
            Escribe otra reflexión:
          </label>
          <textarea id="reflexionMiedo3" className="border p-2 rounded w-full mb-2" rows="3" value={reflexionMiedo3} onChange={(e) => setReflexionMiedo3(e.target.value)} />
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

      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Paso 3: Reflexiona sobre tus experiencias</h2>
          <label htmlFor="experienciaNegativa" className="block mb-2">
            Escribe tu experiencia negativa:
          </label>
          <textarea id="experienciaNegativa" className="border p-2 rounded w-full mb-2" rows="3" value={experienciaNegativa} onChange={(e) => setExperienciaNegativa(e.target.value)} />
          <label htmlFor="creenciasCulturales" className="block mb-2">
            Creencias culturales:
          </label>
          <textarea id="creenciasCulturales" className="border p-2 rounded w-full mb-2" rows="3" value={creenciasCulturales} onChange={(e) => setCreenciasCulturales(e.target.value)} />
          <label htmlFor="faltaConocimiento" className="block mb-2">
            Falta de conocimiento:
          </label>
          <textarea id="faltaConocimiento" className="border p-2 rounded w-full mb-2" rows="3" value={faltaConocimiento} onChange={(e) => setFaltaConocimiento(e.target.value)} />
          <label htmlFor="miedoInesperado" className="block mb-2">
            Miedo a lo inesperado:
          </label>
          <textarea id="miedoInesperado" className="border p-2 rounded w-full mb-2" rows="3" value={miedoInesperado} onChange={(e) => setMiedoInesperado(e.target.value)} />
          <label htmlFor="exageracionMediatica" className="block mb-2">
            Exageración mediática:
          </label>
          <textarea id="exageracionMediatica" className="border p-2 rounded w-full mb-2" rows="3" value={exageracionMediatica} onChange={(e) => setExageracionMediatica(e.target.value)} />
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

      {step === 5 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Paso 4: PREGUNTA FINAL</h2>
          <label htmlFor="descubrimientoFinal" className="block mb-2">
            Escribe tu descubrimiento sobre tu miedo:
          </label>
          <textarea id="descubrimientoFinal" className="border p-2 rounded w-full mb-4" rows="3" value={descubrimientoFinal} onChange={(e) => setDescubrimientoFinal(e.target.value)} />
          <div className="mt-4 flex justify-between">
            <button onClick={handlePrevStep} className="px-4 py-2 bg-gray-500 text-white rounded">
              Regresar
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
              Enviar
            </button>
          </div>
        </div>
      )}

      {showSummary && (
        <div>
          <h2 className="text-xl font-bold mb-4">Resumen del Taller</h2>
          <p>Nombre: {name}</p>
          <p>ID: {id}</p>
          <p>Fobia seleccionada: {selectedFobia}</p>
          <p>Reflexión sobre el miedo: {reflexionMiedo}</p>
          <p>Reflexión sobre el miedo 2: {reflexionMiedo2}</p>
          <p>Reflexión sobre el miedo 3: {reflexionMiedo3}</p>
          <p>Experiencia negativa: {experienciaNegativa}</p>
          <p>Creencias culturales: {creenciasCulturales}</p>
          <p>Falta de conocimiento: {faltaConocimiento}</p>
          <p>Miedo a lo inesperado: {miedoInesperado}</p>
          <p>Exageración mediática: {exageracionMediatica}</p>
          <p>Descubrimiento sobre mi miedo: {descubrimientoFinal}</p>
        </div>
      )}
    </div>
  );
};

export default Taller;
