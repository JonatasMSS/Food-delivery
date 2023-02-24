
import '../src/styles/global.css';
import { Header } from './components/Header';
import Logo from './assets/Logo.svg';

import { BodyContent } from './components/BodyContent';
import { useState } from 'react';
import MainContext from './components/context/MainContext';


function App() {

  const [CartIconLength, setCartIconLength] = useState(0);




  return (
    <MainContext.Provider value={{value:CartIconLength,setValue:setCartIconLength}}>
      <div className='min-h-screen w-screen bg-defaultBackground flex flex-col items-center '>
        <Header />

        <div className='flex my-5 w-screen gap-2 justify-around items-center'>
          <img src={Logo} alt="Logo do Site" className='w-1/3' />
          <span className='text-white font-roboto-condensed text-left font-bold text-4xl w-1/2'>
            Comida feita com amor ❤️
          </span>
        </div>
        <BodyContent />
      </div>
    </MainContext.Provider>
  )
}

export default App
