import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import SplitText  from './SplitText'
import Thread  from './Thread'
import PillNav from './components/PillNav'
import LudoBoard from './LudoBoard'

function App() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/Work" },
    { label: "Contact", href: "/contact" }
  ];


  return (
    <>
      {/* Thread Background - Full Page Width */}
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }}>
        <Thread
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* PillNav - Fixed at Top */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '1.5rem 0'
      }}>
        <PillNav
         
          items={items}
          activeHref="/"
          className="custom-nav"
          ease="power3.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '2rem',
        paddingTop: '8rem',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          color: '#646cff',
          marginBottom: '3rem',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <SplitText
            text="Hello!"
            animateOn="view"
            revealDirection="center"
            speed={40}
            maxIterations={15}
            sequential={true}
            className="revealed-char"
            encryptedClassName="encrypted-char"
          />
        </div>
      
        <Counter/>
        <LikeButton/>
      </div>
    </>
  )
}

export default App
