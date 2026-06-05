import { useRef } from 'react';
import ChatBot from 'react-chatbotify';


export const ChatBotWsp = () => {
  const formRef = useRef({ name: '', email: '', message: '' });
  
  const setting: any = {
    general: { 
      embedded: false,
      showFooter: false,
    },
    chatHistory: {
      disabled: true,
    },
    audio: { disabled: true },
    notification: { disabled: true },
    header: {
      title: 'ChatBot El Avellano',
      avatar: '/favicon.ico',
      buttons: { close: true },
    },
    chatButton: {
      visible: true,
      position: 'bottom-right',
      icon: '/favicon.ico',
    },
    tooltip: { mode: 'CLOSE', text: 'Click to me!' },
    chatInput: { botDelay: 500 },
  };

  const styles: any = {
    // Header
    headerStyle: {
      background: '#a07030',
      color: '#ffffff',
      fill: '#ffffff',
    },
    // Burbuja del bot
    botBubbleStyle: {
      background: '#a07030',
      color: '#ffffff',
      borderRadius: '16px',
      fontSize: '14px',
    },
    // ✅ Burbuja del usuario — key correcta en v2
    userBubbleStyle: {
      background: '#1a1a1a',
      color: '#ffffff',
      borderRadius: '16px',
      fontSize: '14px',
    },
    // Fondo del chat
    chatWindowStyle: {
      background: '#ffffff',
      width: '300px',
      height: '420px',
    },
    // ✅ Botón de enviar con color y rounded
    sendButtonStyle: {
      background: '#a07030',
      fill: '#ffffff',
      borderRadius: '50%',
      padding: '8px',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Options
    optionStyle: {
      background: '#ffffff',
      color: '#a07030',
      border: '1.5px solid #a07030',
      borderRadius: '20px',
    },
    optionHoveredStyle: {
      background: '#a07030',
      color: '#ffffff',
      borderRadius: '20px',
    },
    // ✅ Botón flotante del chatbot (cuando está cerrado)
    chatButtonStyle: {
      background: '#a07030',
      fill: '#ffffff',
      borderRadius: '50%',
      boxShadow: '0 4px 12px rgba(160, 112, 48, 0.5)',
    },
    // Input area
    chatInputAreaStyle: {
      background: '#ffffff',
      borderTop: '1px solid #e5e5e5',
    },
    chatInputAreaFocusedStyle: {
      background: '#ffffff',
      outline: 'none',
      border: 'none',
    },
    tooltipStyle: {
      background: '#a07030',
      color: '#ffffff',      
      borderRadius: '8px',
      padding: '6px 12px',
      fontSize: '15px',
      marginBottom: '32px',
      fontWeight: '500',
    },
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const flow: any = {
    start: {
      message: '¡Hola! ¿En qué puedo ayudarte?',
      chatDisabled: true,
      options: ['Quiero más información'],
      path: 'askName',
    },
    askName: {
      message: '¡Genial! Para enviarte la información, ¿podrías decirme tu nombre?',
      function: (params: { userInput: string }) => {
        formRef.current.name = params.userInput;
      },
      path: async (params: { userInput: string, injectMessage: (message: string) => Promise<void> }) => {
        if (params.userInput.trim().length < 4) {
          await params.injectMessage('Por favor, ingresa un nombre válido (más de 4 caracteres).');
          return ;
        }
        return 'askEmail';
      },
    },
    askEmail: {
      message: () =>
        `Gracias, ${formRef.current.name}. Ahora, ¿cuál es tu correo electrónico?`,
      // path como función: valida el email y decide si avanza o repite
      path: (params: { userInput: string }) => {
        const input = params.userInput.trim();
        if (isValidEmail(input)) {
          formRef.current.email = input;
          return 'askTopic';
        }
        return 'askEmailInvalid';
      },
    },
    // Step intermedio que muestra el error y vuelve a pedir el correo
    askEmailInvalid: {
      message: 'El correo ingresado no es válido. Por favor, ingresa un correo con el formato correcto (ej: nombre@google.com).',
      path: (params: { userInput: string }) => {
        const input = params.userInput.trim();
        if (isValidEmail(input)) {
          formRef.current.email = input;
          return 'askTopic';
        }
        return 'askEmailInvalid';
      },
    },
    askTopic: {
      message: () =>
        `Perfecto, ${formRef.current.name}. ¿Sobre qué terreno te gustaría recibir información?`,
      options: ['El Avellano - Los Muermos', 'El Avellano - Pasajes del Rio'],
      chatDisabled: true,
      function: (params: { userInput: string }) => {
        formRef.current.message = params.userInput;
      },
      path: 'checkInfo',
    },
    checkInfo: {
      message: () =>
        `¡Gracias ${formRef.current.name}! Su información es la siguiente:\n\n` +
        `Nombre: ${formRef.current.name}\n` +
        `Email: ${formRef.current.email}\n` +
        `Interés en: ${formRef.current.message}`,
      chatDisabled: true,
      options: ['Sí, es correcta', 'No, quiero corregirla'],
      path: async (params: { userInput: string }) => {
        if (params.userInput === 'Sí, es correcta') {
          const { name, email, message } = formRef.current;
          const wspMessage = `Hola, me gustaría recibir información sobre ${message}. \n` + 
                              `Mi nombre es ${name} y mi correo es ${email}.`;
          const encodedMessage = encodeURIComponent(wspMessage);
          window.open(`https://wa.me/56912345678?text=${encodedMessage}`, '_blank');
          formRef.current = { name: '', email: '', message: '' };
          return 'end';
        } else {
          formRef.current = { name: '', email: '', message: '' };
          return 'askName';
        }
      },
    },
    end: {
      message:
        '¡Gracias por usar nuestro chatbot! Si tienes más preguntas, no dudes en contactarnos.',
      chatDisabled: true,
      path: () => {
        formRef.current = { name: '', email: '', message: '' };
        return 'start';
      },
    },
  };

  return <ChatBot  settings={setting} styles={styles} flow={flow} />;
};