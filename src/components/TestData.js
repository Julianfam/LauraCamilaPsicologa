const testData = {
  anxiety: {
    name: '¿Tengo ansiedad?',
    questions: [
      {
        id: 'anxiety-1',
        text: '¿Sientes mariposas en el estómago sin razón aparente?',
      },
      {
        id: 'anxiety-2',
        text: '¿Te cuesta dormir pensando en cosas que podrían salir mal?',
      },
      {
        id: 'anxiety-3',
        text: '¿Evitas situaciones porque te ponen nervioso?',
      },
      {
        id: 'anxiety-4',
        text: '¿Tu corazón late rápido cuando piensas en el futuro?',
      },
      {
        id: 'anxiety-5',
        text: '¿Te sientes inquieto como si no pudieras relajarte?',
      },
    ],
  },
  stress: {
    name: '¿Estoy estresado?',
    questions: [
      { id: 'stress-1', text: '¿Te sientes abrumado por tus tareas diarias?' },
      {
        id: 'stress-2',
        text: '¿Tienes dolores de cabeza o tensión muscular a menudo?',
      },
      { id: 'stress-3', text: '¿Te irritas fácilmente por cosas pequeñas?' },
      { id: 'stress-4', text: '¿Sientes que no tienes tiempo para ti?' },
      {
        id: 'stress-5',
        text: '¿Te cuesta desconectar del trabajo o problemas?',
      },
    ],
  },
  depression: {
    name: '¿Me siento deprimido?',
    questions: [
      {
        id: 'depression-1',
        text: '¿Te sientes triste la mayor parte del día?',
      },
      {
        id: 'depression-2',
        text: '¿Has perdido interés en cosas que antes disfrutabas?',
      },
      { id: 'depression-3', text: '¿Te sientes cansado todo el tiempo?' },
      {
        id: 'depression-4',
        text: '¿Te cuesta encontrar motivación para levantarte?',
      },
      { id: 'depression-5', text: '¿Sientes que no vales lo suficiente?' },
    ],
  },
  burnout: {
    name: '¿Tengo burnout?',
    questions: [
      {
        id: 'burnout-1',
        text: '¿Te sientes agotado emocionalmente por el trabajo?',
      },
      {
        id: 'burnout-2',
        text: '¿Dudas de tu capacidad para hacer bien las cosas?',
      },
      {
        id: 'burnout-3',
        text: '¿Sientes que trabajas sin parar y no avanzas?',
      },
      {
        id: 'burnout-4',
        text: '¿Te cuesta encontrar energía para tus hobbies?',
      },
      { id: 'burnout-5', text: '¿Te sientes desconectado de lo que haces?' },
    ],
  },
  'self-esteem': {
    name: '¿Cómo está mi autoestima?',
    questions: [
      { id: 'self-esteem-1', text: '¿Te comparas mucho con los demás?' },
      { id: 'self-esteem-2', text: '¿Sientes que no mereces elogios?' },
      { id: 'self-esteem-3', text: "¿Te cuesta decir 'no' a los demás?" },
      {
        id: 'self-esteem-4',
        text: '¿Te hablas mal a ti mismo cuando cometes errores?',
      },
      {
        id: 'self-esteem-5',
        text: '¿Evitas mirarte al espejo por inseguridad?',
      },
    ],
  },
  happiness: {
    name: '¿Qué tan feliz estoy?',
    questions: [
      { id: 'happiness-1', text: '¿Sonríes o ríes varias veces al día?' },
      { id: 'happiness-2', text: '¿Te sientes agradecido por lo que tienes?' },
      { id: 'happiness-3', text: '¿Disfrutas pasar tiempo con otros?' },
      { id: 'happiness-4', text: '¿Sientes que tu vida tiene sentido?' },
      {
        id: 'happiness-5',
        text: '¿Te emocionan los pequeños momentos del día?',
      },
    ],
  },
  focus: {
    name: '¿Puedo concentrarme?',
    questions: [
      {
        id: 'focus-1',
        text: '¿Te distraes fácilmente con ruidos o pensamientos?',
      },
      { id: 'focus-2', text: '¿Dejas tareas a medias porque pierdes el hilo?' },
      { id: 'focus-3', text: '¿Te cuesta recordar lo que acabas de leer?' },
      {
        id: 'focus-4',
        text: '¿Sientes que tu mente está en mil lugares a la vez?',
      },
      {
        id: 'focus-5',
        text: '¿Tardas en empezar algo porque no sabes por dónde?',
      },
    ],
  },
  resilience: {
    name: '¿Soy resiliente?',
    questions: [
      { id: 'resilience-1', text: '¿Recuperas el ánimo tras un mal día?' },
      { id: 'resilience-2', text: '¿Buscas soluciones en lugar de rendirte?' },
      {
        id: 'resilience-3',
        text: '¿Aprendes de los errores sin obsesionarte?',
      },
      { id: 'resilience-4', text: '¿Pides ayuda cuando la necesitas?' },
      {
        id: 'resilience-5',
        text: '¿Sientes que puedes superar retos difíciles?',
      },
    ],
  },
};

export default testData;
