import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#480607';
    document.documentElement.style.height = '100%';

    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.backgroundColor = '';
      document.documentElement.style.height = '';
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'auto',
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
      <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: '1.6'}}>Дорогие друзья</p>
    </div>
  )
}

export default App
