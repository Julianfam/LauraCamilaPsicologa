import { useState } from 'react';
import { useRouter } from 'next/router';
import testData from './TestData';

export default function TestPage({ id }) {
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const router = useRouter();

  if (!id || !testData[id]) {
    return <div className="p-4 text-gray-700">Test no encontrado (ID: {id})</div>;
  }

  const { name, questions } = testData[id];
  const score = answers.reduce((acc, val) => acc + val, 0);
  const maxScore = questions.length * 3;
  const scorePercentage = (score / maxScore) * 100;

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleFinish = () => setFinished(true);
  const handlePrint = () => window.print();
  const handleSend = () => {
    const message = encodeURIComponent(`Hola, Psicóloga Laura Camila. Aquí están mis resultados del test "${name}": Puntaje ${score}/${maxScore}. ${getResultMessage(scorePercentage, id)}`);
    window.open(`https://wa.me/00573224714724?text=${message}`, '_blank');
  };
  const handleBack = () => router.push('/psychological-tests');

  const getAnswerLabel = (value) => {
    if (value === 0) return 'No';
    if (value === 1) return 'A veces';
    if (value === 2) return 'Sí';
    return 'Mucho';
  };

  // Sistema de calificación mejorado: Mensajes personalizados por test y más niveles (bajo, moderado bajo, moderado alto, alto)
  const getResultMessage = (percentage, testId) => {
    let level = '';
    let advice = '';
    let specificTip = '';

    if (percentage <= 25) {
      level = 'Bajo';
      advice = '¡Excelente! Parece que estás manejando bien esta área de tu vida emocional. Sigue cultivando hábitos positivos para mantenerte así.';
    } else if (percentage <= 50) {
      level = 'Moderado Bajo';
      advice = 'Hay algunas señales leves, pero nada alarmante. Pequeños ajustes en tu rutina podrían ayudarte a sentirte aún mejor.';
    } else if (percentage <= 75) {
      level = 'Moderado Alto';
      advice = 'Podrías estar experimentando un impacto notable. Es un buen momento para reflexionar y quizás incorporar técnicas de manejo.';
    } else {
      level = 'Alto';
      advice = 'Esto podría indicar un área que necesita atención. No estás solo, y buscar apoyo profesional puede marcar una gran diferencia positiva.';
    }

    // Consejos específicos por test para hacerlo más personalizado y menos genérico
    switch (testId) {
      case 'anxiety':
        specificTip = 'Prueba técnicas de respiración profunda o mindfulness para calmar la mente. Si persiste, una conversación con un experto puede liberarte.';
        break;
      case 'stress':
        specificTip = 'Intenta priorizar tareas y tomar breaks cortos. El ejercicio o hobbies pueden reducir la tensión acumulada.';
        break;
      case 'depression':
        specificTip = 'Conecta con amigos o familia, y considera actividades que te den alegría. Un profesional puede guiarte hacia la luz.';
        break;
      case 'burnout':
        specificTip = 'Establece límites en el trabajo y dedica tiempo a recargarte. Delegar o pausar puede prevenir el agotamiento total.';
        break;
      case 'self-esteem':
        specificTip = 'Practica afirmaciones positivas y celebra tus logros pequeños. La auto-compasión es clave para construir confianza.';
        break;
      case 'happiness':
        specificTip = 'Cultiva gratitud diaria y busca momentos de conexión. Pequeños actos de bondad hacia ti mismo elevan el ánimo.';
        break;
      case 'focus':
        specificTip = 'Usa técnicas como Pomodoro para mejorar la concentración. Elimina distracciones y asegúrate de dormir bien.';
        break;
      case 'resilience':
        specificTip = 'Desarrolla resiliencia mediante reflexión sobre éxitos pasados. Apóyate en tu red de soporte para superar obstáculos.';
        break;
      default:
        specificTip = 'Recuerda que estos tests son orientativos. Siempre es positivo explorar más con un profesional.';
    }

    return `Nivel: ${level} (${percentage.toFixed(0)}%). ${advice} ${specificTip}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white p-6">
      <div className="max-w-lg mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <button
            type="button"
            onClick={handleBack}
            className="p-2 bg-brown-600 text-black rounded-full hover:bg-brown-700 transition flex items-center gap-2"
            aria-label="Volver a la página de tests"
          >
            <span>←</span> Atrás
          </button>
          <h1 className="text-3xl font-bold text-center text-brown-800">{name}</h1>
          <div className="w-16" />
        </div>

        {/* Test Questions Section */}
        {!finished ? (
          <div className="space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="p-6 bg-white rounded-xl shadow-md border-l-4 border-pink-300">
                <p className="mb-4 text-gray-700 font-medium">{question.text}</p>
                <div className="flex gap-3 flex-wrap">
                  {[0, 1, 2, 3].map((value) => (
                    <button
                      type="button"
                      key={`answer-${question.id}-${value}`}
                      onClick={() => handleAnswer(questions.indexOf(question), value)}
                      className={`px-4 py-2 rounded-lg font-semibold transition ${
                        answers[questions.indexOf(question)] === value ? 'bg-red-500 text-white' : 'bg-pink-200 text-gray-700 hover:bg-red-500 hover:text-white'
                      }`}
                      aria-label={`Seleccionar respuesta: ${getAnswerLabel(value)} para la pregunta ${question.text}`}
                    >
                      {getAnswerLabel(value)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-3 bg-brown-600 text-black rounded-lg font-semibold hover:bg-brown-700 transition disabled:bg-gray-400"
              disabled={answers.length !== questions.length}
              aria-label="Finalizar el test"
            >
              Finalizar
            </button>
          </div>
        ) : (
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4 text-brown-800">Resultado</h2>
            <p className="text-gray-700 mb-2">
              Tu puntaje: <span className="font-bold">{score}</span> de {maxScore}
            </p>
            <p className="mb-6 text-gray-700">{getResultMessage(scorePercentage, id)}</p>
          </div>
        )}

        {finished && (
          <div className="flex flex-col gap-4 justify-center items-center mt-6">
            <div className="flex gap-4">
              <button type="button" onClick={handlePrint} className="px-4 py-2 bg-brown-600 text-black rounded-lg hover:bg-brown-700 transition" aria-label="Imprimir resultados">
                Imprimir
              </button>
              <button
                type="button"
                onClick={handleSend}
                className="px-4 py-2 bg-pink-400 text-black rounded-lg hover:bg-pink-500 transition"
                aria-label="Enviar resultados a la psicóloga vía WhatsApp"
              >
                Enviar a psicóloga
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
