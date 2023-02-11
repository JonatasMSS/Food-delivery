
import '../src/styles/global.css';
import Whatsapp from './assets/whatsapp.svg';
import Instagram from './assets/instagram.svg';
import Logo from './assets/Logo.svg';
function App() {
  
  

  return (
   <div className='h-screen w-screen bg-defaultBackground flex flex-col items-center '>
      <div className='flex justify-between w-screen bg-zinc-800 p-4'>
        <div className='flex gap-2 '>
          <img src={Whatsapp} className='w-8'/>
          <img src={Instagram} className='w-8'/>
        </div>
        <div>
          <img src={Logo} alt="Logo do app" />
        </div>
        <div className='flex bg-softWhite'>
          <span className='font'>Carrinho</span>
        </div>
      </div>
   </div>
  )
}

export default App
