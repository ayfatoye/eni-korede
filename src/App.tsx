import './App.css'
import NavComponent from './components/NavComponent'
import CenterPageNames from './components/CenterPageNames.tsx'

function App() {
  

  return (
    <>
        <NavComponent />
        <img src="/eni-kore-1.jpg" alt='the bride and groom' className='w-full h-[80vh] object-cover object-left' />
        <CenterPageNames />
        
    </>
  )
}

export default App
