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
              tastePrice:1.00
            },
            {
              tasteName:'Taste 2',
              tastePrice:1.00
            },
            {
              tasteName:'Taste 3',
              tastePrice:1.00
            },
            {
              tasteName:'Taste 4',
              tastePrice:1.00
            },
            {
              tasteName:'Taste 5',
              tastePrice:1.00
            },
            {
              tasteName:'Taste 6',
              tastePrice:1.00
            },
            {
              tasteName:'Taste 7',
              tastePrice:1.00
            },
            {
              tasteName:'Taste 8',
              tastePrice:1.00
            },
            
          ]}
          extras={['+ Cheddar','+ Catupiry']}
          price={8}
        />
        
    
    
        
      </div>
    );
}