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

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleFinish = () => setFinished(true);
  const handlePrint = () => window.print();
  const handleSend = () => alert('Resultados enviados a tu psicóloga (simulación).');
  const handleBack = () => router.push('/psychological-tests');

  const getAnswerLabel = (value) => {
    if (value === 0) return 'No';
    if (value === 1) return 'A veces';
    if (value === 2) return 'Sí';
    return 'Mucho';
  };

  const getResultMessage = (scoreValue, maxScoreValue) => {
    if (scoreValue <= maxScoreValue * 0.3) {
      return '¡Parece que estás bien en esta área! No parece haber señales preocupantes.';
    }
    if (scoreValue <= maxScoreValue * 0.6) {
      return 'Podrías estar experimentando algo de esto. Hablar con un amigo o un profesional puede ayudarte a sentirte mejor.';
    }
    return 'Esto podría ser un tema para ti. Considera buscar apoyo de un psicólogo para explorar cómo te sientes.';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white p-6">
      <div className="max-w-lg mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <button
            type="button"
            onClick={handleBack}
            className="p-2 bg-brown-600 text-white rounded-full hover:bg-brown-700 transition flex items-center gap-2"
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
                        answers[questions.indexOf(question)] === value ? 'bg-pink-400 text-white' : 'bg-pink-200 text-gray-700 hover:bg-pink-300'
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
              className="w-full py-3 bg-brown-600 text-white rounded-lg font-semibold hover:bg-brown-700 transition disabled:bg-gray-400"
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
            <p className="mb-6 text-gray-700">{getResultMessage(score, maxScore)}</p>
            <div className="flex gap-4 justify-center">
              <button type="button" onClick={handlePrint} className="px-4 py-2 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition" aria-label="Imprimir resultados">
                Imprimir
              </button>
              <button type="button" onClick={handleSend} className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition" aria-label="Enviar resultados a la psicóloga">
                Enviar a psicóloga
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
