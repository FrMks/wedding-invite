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
    <div className="
        h-screen
        w-screen
        flex
        flex-col
        items-center
        justify-start
        overflow-hidden px-0 gap-8">
      <h1 className="
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        text-white
        font-bold text-left
        px-2 sm:px-4 md:px-8
        flex-shrink-0">
        Пригласительное на свадьбу
      </h1>
    </div>
  )
}

export default App
