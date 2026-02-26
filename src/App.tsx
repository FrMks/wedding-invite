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
    // Высота и ширина 100%
    // Красный фон
    // Гибкий макет
    // Элементы вертикально
    // Горизонтальное центрирование
    // Вертикальное центрирование
    // Белый текст
    // Скрывает контент за границами div
    // Нет боковых отступов
    <div className="
        h-screen
        w-screen
        bg-[#991B1B]
        flex
        flex-col
        items-center
        justify-center
        text-white
        overflow-hidden px-0">
      <h1 className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        font-bold
        mb-4
        sm:mb-8
        text-center
        drop-shadow-lg
        px-2 
        sm:px-4
        md:px-8
        flex-shrink-0">
        Пригласительное на свадьбу
      </h1>
      <p className="
        text-lg sm:text-xl md:text-2xl lg:text-3xl
        text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl
        drop-shadow-md px-4 md:px-8 flex-1 leading-relaxed">
        Здесь будет дата, место и детали... (добавьте много текста — скролл не появится)
      </p>
    </div>
  )
}

export default App
