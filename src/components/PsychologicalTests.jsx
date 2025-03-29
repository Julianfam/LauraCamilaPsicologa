import Link from 'next/link';
import tests from './TestData';

export default function PsychologicalTests() {
  const testList = Object.keys(tests).map((key) => ({
    id: key,
    name: tests[key].name,
    icon: '🧠', // Puedes personalizar los íconos si lo deseas
  }));

  return (
    <div className="p-6 bg-gradient-to-b from-pink-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-brown-800 text-center">Tests Psicológicos</h1>
      <div className="grid gap-4 max-w-2xl mx-auto">
        {testList.map((test) => (
          <Link href={`/psychological-tests/test/${test.id}`} key={test.id} className="block" aria-label={`Ir al test: ${test.name}`}>
            <div className="p-4 bg-white rounded-lg shadow flex items-center gap-4 hover:bg-pink-50 transition">
              <span className="text-4xl" role="img" aria-label={test.name}>
                {test.icon}
              </span>
              <span className="text-lg font-medium text-gray-700">{test.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
