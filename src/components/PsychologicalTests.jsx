import Link from 'next/link';
import tests from './TestData';

export default function PsychologicalTests() {
  // Íconos específicos para cada test basado en el testData proporcionado
  const icons = {
    anxiety: '😰',
    stress: '🤯',
    depression: '😔',
    burnout: '😩',
    'self-esteem': '💪',
    happiness: '😊',
    focus: '🎯',
    resilience: '🛡️',
  };

  const testList = Object.keys(tests).map((key) => ({
    id: key,
    name: tests[key].name,
    icon: icons[key] || '🧠', // Ícono por defecto si no se define uno específico
  }));

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 text-center tracking-tight">Tests Psicológicos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testList.map((test) => (
          <Link href={`/psychological-tests/test/${test.id}`} key={test.id} className="block" aria-label={`Ir al test: ${test.name}`}>
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-4">
              <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                <span className="text-3xl" role="img" aria-label={test.name}>
                  {test.icon}
                </span>
              </div>
              <span className="text-lg font-semibold text-gray-900">{test.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
