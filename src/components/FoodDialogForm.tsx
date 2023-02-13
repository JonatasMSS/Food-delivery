import { Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';
import BlackShoppingCart from '../assets/shoppingcart-black.svg';
import Bag from '../assets/bag.svg';
import { FormEvent, useState } from "react";


interface foodDialogFormProps {
    ingredients: Array<string>;
    extras?: Array<string>;
}




export function FoodDialogForm({ ingredients, extras }: foodDialogFormProps) {

    const [tasteSelected,setTasteSelected] = useState<string[]>([]);
    const [foodObservation, setFoodObservation] = useState('');

    

    


    function sendFoodToOrder(event:FormEvent){
        event.preventDefault();
        
        console.log({
            'Foods':tasteSelected,
            'Observation': foodObservation
        });

        setTasteSelected([]);
        setFoodObservation('');

        alert('Comida adicionada ao carrinho!');
    }


    return (
        <form onSubmit={sendFoodToOrder}>
            <FoodTastes tastesInCheckbox={tasteSelected} setTastesToCheckbox={setTasteSelected} tastes={ingredients} />
            <FoodExtras extras={extras}/>
            <div className='flex flex-col w-full p-2 justify-start'>
                <label htmlFor="observation" >Observações</label>
                <textarea
                    value={foodObservation}
                    onChange={event => setFoodObservation(event.target.value)}
                    className='w-full h-32 bg-transparent border-2 border-softGrey rounded-lg placeholder:absolute placeholder:inset-0 placeholder:top-3 placeholder:left-1'
                    placeholder='Digite aqui alguma observação...'
                />
            </div>
            <div className='flex w-full p-2 justify-between items-center gap-2'>
                <span className='font-roboto-condensed font-bold text-base'>Valor Total: RS 00,00</span>
                <button className='flex p-1 gap-1 bg-softGreen items-center justify-center rounded-lg font-roboto-condensed'>
                    <img src={BlackShoppingCart} width={19} />
                    Adicionar ao carrinho
                </button>
            </div>
        </form>
    )
}



interface FoodExtrasProps {
    extras?: Array<string>;

}

const FoodExtras = ({ extras }: FoodExtrasProps) => {
    return (
        <div className='flex flex-col w-full p-2 '>
            <div className='flex items-center border-t-2 border-black pt-2'>
                <img src={Bag} alt="Bag" width={42} />
                <span
                    className='font-roboto-condensed mt-2 font-normal text-softGrey text-xl'
                >
                    Adicionais

                </span>
            </div>


            {
                extras ?
                    <>
                        <span className='font-roboto-condensed font-thin ml-2 mt-2'>Escolha os sabores adicionais. + RS 1.00 pela adição de sabor</span>
                        <div className='grid grid-flow-row grid-cols-2 mt-2 gap-2 '>
                            {
                                extras.map((extra, index) => (
                                    ''
                                ))
                            }
                        </div>
                    </>
                    :
                    <span className="font-roboto-condensed my-3 text-defaultRed font-bold">Nenhum adicional para o pedido</span>

            }

        </div>
    )
}



interface FoodTastesProps {
    tastes: Array<string>;
    tastesInCheckbox: Array<string>;
    setTastesToCheckbox:React.Dispatch<React.SetStateAction<string[]>>; 
}

const FoodTastes = ({ tastes,tastesInCheckbox,setTastesToCheckbox}: FoodTastesProps) => {

    function putFoodSelected(taste:string){
        if(tastesInCheckbox.includes(taste)){
            const newFoodSelectedWithRemovedOne = tastesInCheckbox.filter(food => food !== taste);
            setTastesToCheckbox(newFoodSelectedWithRemovedOne);
        }
        else{
            const newFoodList = [...tastesInCheckbox,taste];
            setTastesToCheckbox(newFoodList);
        }
    }

    return (
        <div className='flex flex-col w-full p-2 '>
            <div className='flex items-center border-t-2 border-black pt-2'>
                <img src={Bag} alt="Bag" width={42} />
                <span
                    className='font-roboto-condensed mt-2 font-normal text-softGrey text-xl'
                >
                    Sabores

                </span>
            </div>
            <span className='font-roboto-condensed font-thin ml-2 mt-2'>Escolha 3 sabores includo no pacote.</span>

            <div className='grid grid-flow-row grid-cols-2 mt-2 gap-2 '>
                {
                    tastes.map((taste,index) => (
                        <CheckboxFoodItem isChecked={tastesInCheckbox.includes(taste)} onCheckedFunction={putFoodSelected} value={taste} key={index}/>
                    ))
                }

            </div>

        </div>
    )
}




interface checkBoxFoodItem {
    value: string;
    onCheckedFunction(value:string):void; 
    isChecked:boolean;
}

const CheckboxFoodItem = ({ value,onCheckedFunction,isChecked }: checkBoxFoodItem) => {
    return (
        <div className='flex p-1 items-center gap-2'>
            <Checkbox.Root
                onCheckedChange={() => onCheckedFunction(value)}
                checked={isChecked}
            >
                <div className='w-8 h-8 border-zinc-400 border-2 rounded-lg flex items-center justify-center'>
                    <Checkbox.Indicator>
                        <Check size={24} weight='bold' />
                        
                    </Checkbox.Indicator>
                </div>
            </Checkbox.Root>
            <span className='font-roboto-condensed text-lg'>{value}</span>
        </div>
    )
}