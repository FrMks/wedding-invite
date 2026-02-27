import { useEffect } from 'react'
import './App.css'
import { HeroImage } from './Components/HeroImage'
import { InviteText } from './Components/InviteText'

function App() {
  useEffect(() => {
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.backgroundColor = '#480607'
    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'auto'
    document.documentElement.style.overflowX = 'hidden'
    document.documentElement.style.overflowY = 'auto'

    return () => {
      document.body.style.margin = ''
      document.body.style.padding = ''
      document.body.style.backgroundColor = ''
      document.body.style.overflowX = ''
      document.body.style.overflowY = ''
      document.documentElement.style.overflowX = ''
      document.documentElement.style.overflowY = ''
    }
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      paddingTop: '16px',
      paddingBottom: '32px',
    }}>
      <HeroImage />
      <InviteText />
    </div>
  )
}

export default App
