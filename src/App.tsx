import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';  // Блокирует скролл body/html
    document.documentElement.style.overflow = 'hidden'; 
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#991B1B';  // Красный фон body
    document.documentElement.style.height = '100%';   // html на весь экран

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
    <div className="h-screen w-screen bg-[#991B1B] flex flex-col items-center justify-center text-white overflow-hidden px-0">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center drop-shadow-lg px-4 md:px-8 flex-shrink-0">
        Пригласительное на свадьбу
      </h1>
      <p className="text-xl md:text-2xl text-center max-w-2xl drop-shadow-md px-4 md:px-8 flex-1">
        Здесь будет дата, место и детали... (добавьте много текста — скролл не появится)
      </p>
    </div>
  )
}

export default App
