import { Food } from "./Food";
import { FoodDialog } from "./FoodDialog";
import Eu from '../assets/Eu.jpeg';
export function BodyContent(){

    

    return(
        <div className='bg-softWhite my-6 flex flex-col rounded-lg p-2 w-11/12'>
        <span
          className='font-roboto-condensed text-xl font-bold border-b-2 border-b-zinc-500'
        >
          Selecione o seu pedido

        </span>

        <FoodDialog
          
          name="Pastel frito na hora"
          ingredients={['Frango','Calabresa','Catupiry','Outro sabor']}
          extras={['+ Cheddar','+ Catupiry']}
          price={8}
        />
        <FoodDialog
          
          name="Hamburguer"
          ingredients={['Frango','Calabresa','Catupiry','Outro sabor']}
          extras={['Frango','Calabresa','Catupiry','Carne extra']}
          price={8}
        />
    
    
        
      </div>
    );
}