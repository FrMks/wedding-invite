export function HeroImage() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
      <img
        src="/wedding.JPG"
        alt="Максим и Елизавета"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />

      <h1
        style={{
          position: 'absolute',
          top: '20px',
          left: 0,
          right: 0,
          textAlign: 'center',
          fontFamily: "'Marck Script', cursive",
          fontSize: 'clamp(5rem, 8vw, 7.5rem)',
          color: '#480607',
          fontWeight: 'normal',
          margin: 0,
        }}
      >
        Максим & Елизавета
      </h1>
    </div>
  )
}
