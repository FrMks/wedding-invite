import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.backgroundColor = '#480607';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';  // скролл на body
  document.documentElement.style.overflowX = 'hidden';
  document.documentElement.style.overflowY = 'auto';

  return () => {
    document.body.style.margin = '';
    document.body.style.padding = '';
    document.body.style.backgroundColor = '';
    document.body.style.overflowX = '';
    document.body.style.overflowY = '';
    document.documentElement.style.overflowX = '';
    document.documentElement.style.overflowY = '';
  };
}, []);


  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'hidden',
      gap: '32px',
    }}>

      {/* Блок: изображение + текст поверх */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
      }}>
        <img
          src="/wedding.JPG"
          alt="Максим и Елизавета"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />

        {/* Текст поверх изображения */}
        <div style={{
          position: 'absolute',
          top: '20px',
          width: '100%',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: "'Marck Script', cursive",
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            color: '#480607',
            fontWeight: 'normal',
            margin: 0,
          }}>
            Максим & Елизавета
          </h1>
          <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: '1.6', margin: 0 }}>
            Дорогие друзья
          </p>
        </div>
      </div>

    </div>
  )
}

export default App
