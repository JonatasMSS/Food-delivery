import { Food } from "./Food";
import { FoodDialog } from "./dialogs/FoodDialog";
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
          tastes={[
            {
              tasteName:'Taste 1',
              tastePrice:8.50
            },
            {
              tasteName:'Taste 2',
              tastePrice:9.50
            },
            
          ]}
          extras={['+ Cheddar','+ Catupiry']}
          price={8}
        />
        
    
    
        
      </div>
    );
}