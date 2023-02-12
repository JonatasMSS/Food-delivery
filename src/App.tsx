
import '../src/styles/global.css';
import { Header } from './components/Header';
import Logo from './assets/Logo.svg';
import { Food } from './components/Food';

function App() {
  return (
    <div className='h-screen w-screen bg-defaultBackground flex flex-col items-center '>
      <Header />
      <div className='flex my-5 w-screen gap-2 justify-around items-center'>
        <img src={Logo} alt="Logo do Site" className='w-1/3' />
        <span className='text-white font-roboto-condensed text-left font-bold text-4xl w-1/2'>
          Comida feita com amor ❤️
        </span>
      </div>


      <div className='bg-softWhite flex flex-col rounded-lg p-2 w-11/12'>
        <span
          className='font-roboto-condensed text-xl font-bold border-b-2 border-b-zinc-500'
        >
          Selecione o seu pedido

        </span>
      </div>
    </div>
  )
}

export default App
