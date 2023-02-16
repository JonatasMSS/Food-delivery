import { Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';
import BlackShoppingCart from '../../assets/shoppingcart-black.svg';
import Bag from '../../assets/bag.svg';
import { FormEvent, useEffect, useState } from "react";

export function FoodDialogForm({tastes,foodPriceWithoutTastesAndExtras }: foodDialogFormProps) {

    const [tasteSelected,setTasteSelected] = useState<Array<{
        tasteName:string;
        tastePrice:number;
    }>>([]);
    
    const [foodObservation, setFoodObservation] = useState('');
   

    function sendFoodToOrder(event:FormEvent){
        event.preventDefault();
        
        console.log({
            'Foods':tasteSelected,
            'Observation': foodObservation,
        });

        setTasteSelected([]);
        setFoodObservation('');
        alert('Comida adicionada ao carrinho!');
    }

    

    return (
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
            <span className='font-roboto-condensed font-thin ml-2 mt-2'>Escolha 3 sabores includo no pacote.<span className="font-roboto-condensed font-bold">+ R$ 1,00 por escolha adicional</span></span>

            <div className='grid grid-flow-row grid-cols-2 mt-2 gap-2 '>
                {
                   
                }

            </div>

        </div>

                
            <div className='flex flex-col w-full p-2 justify-start'>
                <label htmlFor="observation" >Observações</label>
                <textarea
                    value={foodObservation}
                    onChange={event => setFoodObservation(event.target.value)}
                    className='w-full h-32 bg-transparent border-2 border-softGrey rounded-lg placeholder:absolute placeholder:inset-0 placeholder:top-3 placeholder:left-1'
                    placeholder='Digite aqui alguma observação...'
                />
            </div>
            <div className='flex w-full p-2 justify-between items-center gap-3'>
                <span className='font-roboto-condensed font-bold text-base'>Valor Total: RS 00,00</span>
                <button className='flex p-1  bg-softGreen items-center justify-center rounded-lg font-roboto-condensed'>
                    <img src={BlackShoppingCart} width={19} />
                    Adicionar ao carrinho
                </button>
            </div>
        </form>
    )
}

const CheckboxFoodItem = ({ taste,onCheckedFunction,isChecked,showPrice = false}: checkBoxFoodItem) => {
    return (
        <div className='flex justify-start items-center gap-2'>
            <Checkbox.Root
                onCheckedChange={() => onCheckedFunction(taste)}
                checked={isChecked}
            >
                <div className='w-8 h-8 border-zinc-400 border-2 rounded-lg flex items-center justify-center'>
                    <Checkbox.Indicator>
                        <Check size={24} weight='bold' />
                        
                    </Checkbox.Indicator>
                </div>
            </Checkbox.Root>
            <span className='font-roboto-condensed text-lg '>{taste.tasteName}</span>
            {
                showPrice && <span className="font-roboto-condensed text-sm whitespace-nowrap">R$ {taste.tastePrice.toFixed(2)}</span>
            }
        </div>
    )
}