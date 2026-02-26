import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Блокируем скрол body/html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    // Убираем стандартные отступы браузера
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    // Фон body = красный: покрывает весь экран, даже за div
    document.body.style.backgroundColor = '#991B1B';
    // html высота 100%: растягивает body на весь viewport
    document.documentElement.style.height = '100%';

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.backgroundColor = '';
      document.documentElement.style.height = '';
    };
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      gap: '32px',
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        flexShrink: 0,
        width: '100%',
        margin: 0,
      }}>
        Пригласительное на свадьбу
      </h1>
    </div>
  )
}

export default App
