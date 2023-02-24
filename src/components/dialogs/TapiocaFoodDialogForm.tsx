import Bag from '../../assets/bag.svg';
import { FormEvent, useContext, useState } from "react";
import { CheckboxFoodItem } from "../CheckboxFoodItem";
import BlackShoppingCart from '../../assets/shoppingcart-black.svg';
import { LocalStorageController } from '../../data/localDataStorageController';
import { FoodToOrder } from '../../models/foodModel';
import MainContext from '../context/MainContext';


export function TapiocaFoodDialogForm({tastes,baseTasteName,foodPriceWithoutTastesAndExtras}:foodDialogFormProps){


    const {setValue} = useContext(MainContext);

    const localDataStorage = new LocalStorageController(setValue);
    


    const [tasteSelected,setTasteSelected] = useState<Array<{
        tasteName:string,
        tastePrice:number
    }>>([]);

    const [foodObservation, setFoodObservation] = useState('');
    const [totalValue, setTotalValue] = useState(foodPriceWithoutTastesAndExtras);

    function sendFoodToOrder(event:FormEvent){
        event.preventDefault();
        
        
        const newFoodToCart:FoodToOrder = {
            name:baseTasteName,
            tastes:tasteSelected.map(taste => taste.tasteName),
            totalPrice:totalValue,
            observation:foodObservation
        }
        
        const getFoodsInCart = localDataStorage.getDataFromStorage('foods');
        const newFoodsInCart = [...getFoodsInCart?? [], newFoodToCart];
        
        localDataStorage.putDataInStorage('foods',newFoodsInCart);

        // console.log({
        //     'Foods':tasteSelected,
        //     'Observation': foodObservation,
        //     'Total Value': totalValue
        // });

        setTasteSelected([]);
        setFoodObservation('');
        setTotalValue(foodPriceWithoutTastesAndExtras);
        alert('Comida adicionada ao carrinho!');
    }


    function verifyIsInTasteSelected(tasteName:string){
      
        const tasteNames = tasteSelected.map(e => e.tasteName);
        return tasteNames.includes(tasteName)
    }

    function putToSelectedList(taste:{tasteName:string, tastePrice: number}){
        
        if(verifyIsInTasteSelected(taste.tasteName)){
            const newTasteSelectedListWithRemovedOne = tasteSelected.filter(prevTaste => prevTaste !== taste);
            const newTotalValue = totalValue > 0 ? (totalValue - taste.tastePrice) : 0
            setTotalValue(newTotalValue);
            setTasteSelected(newTasteSelectedListWithRemovedOne);

        }else{
            const newTasteSelectedList = [...tasteSelected,taste];
            setTasteSelected(newTasteSelectedList);
            const newTotalValue = totalValue + taste.tastePrice;
            setTotalValue(newTotalValue);
        }

    }

    return(
        <form onSubmit={sendFoodToOrder}>
           
        {/* FOOD TASTES  */}

        <div className='flex flex-col w-full p-2 '>
         <div className='flex items-center border-t-2 border-black pt-2'>
             <img src={Bag} alt="Bag" width={42} />
             <span
                 className='font-roboto-condensed mt-2 font-normal text-softGrey text-xl'
             >
                 Sabores

             </span>
         </div>
        

         <div className='grid grid-flow-row grid-cols-1 mt-2 ml-1 gap-5 '>
             {
                tastes.map((tastel,index) => (
                    <CheckboxFoodItem
                        taste={tastel}
                        key={index}
                        isChecked={verifyIsInTasteSelected(tastel.tasteName)}
                        onCheckedFunction={putToSelectedList}
                        showPrice
                    />
                ))
             }

         </div>

     </div>


         <div className='flex flex-col w-full p-2 justify-start'>
             <label htmlFor="observation" className='font-roboto-condensed font-semibold'>Observações</label>
             <textarea
                 value={foodObservation}
                 onChange={event => setFoodObservation(event.target.value)}
                 className='w-full h-32 p-2 bg-transparent border-2 border-softGrey rounded-lg placeholder:absolute placeholder:inset-0 placeholder:top-3 placeholder:left-1'
                 placeholder='Digite aqui alguma observação...'
             />
         </div>
         <div className='flex w-full p-2 justify-between items-center gap-3'>
             <span className='font-roboto-condensed font-bold text-base'>Valor Total: RS {totalValue.toFixed(2)}</span>
             <button
            disabled={tasteSelected.length === 0}
             className='flex p-1 disabled:bg-softGreen/60 disabled:text-gray-500 bg-softGreen items-center justify-center rounded-lg font-roboto-condensed'>
                 <img src={BlackShoppingCart} width={19} />
                 Adicionar ao carrinho
             </button>
         </div>
     </form>
    )
}