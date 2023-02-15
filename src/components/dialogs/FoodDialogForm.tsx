import { Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';
import BlackShoppingCart from '../../assets/shoppingcart-black.svg';
import Bag from '../../assets/bag.svg';
import { FormEvent, useEffect, useState } from "react";

export function FoodDialogForm({ tastes,foodPriceWithoutTastesAndExtras }: foodDialogFormProps) {

    const [freeTasteSelected,setTasteSelected] = useState<string[]>([]);
    const [foodObservation, setFoodObservation] = useState('');
    const [extraSelected,setExtraSelected] = useState<string[]>([]);
    const [priceListToTotal,setPriceListToTotal] = useState<number[]>([]);

    useEffect(()=>{
        setPriceListToTotal([foodPriceWithoutTastesAndExtras]);
    },[]);


    function sendFoodToOrder(event:FormEvent){
        event.preventDefault();
        
        console.log({
            'Foods':freeTasteSelected,
            'Observation': foodObservation,
            'Extras':extraSelected,
            'Valor total Pedido':priceListToTotal.reduce((a,b)=> a+b ,0)
        });

        setTasteSelected([]);
        setFoodObservation('');
        setExtraSelected([]);
        alert('Comida adicionada ao carrinho!');
    }


    return (
        <form onSubmit={sendFoodToOrder}>
            <FoodTastes freeTastesCheckboxedInList={freeTasteSelected} pricesListToTotal={priceListToTotal} setTastePriceToPriceList={setPriceListToTotal} setTastesCheckboxedToList={setTasteSelected} tastes={tastes} />
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


//TODO: TO REMOVE
const FoodExtras = ({extras,extrasInCheckbox,putExtraToCheckboxArray}:FoodExtrasProps) => {

    function putFoodSelected(taste:string){
        if(extrasInCheckbox.includes(taste)){
            const newFoodSelectedWithRemovedOne = extrasInCheckbox.filter(food => food !== taste);
            putExtraToCheckboxArray(newFoodSelectedWithRemovedOne);
        }
        else{
            const newFoodList = [...extrasInCheckbox,taste];
            putExtraToCheckboxArray(newFoodList);
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
                    extras!.map((extra,index) => {
                        const {extraName,extraPrice} = extra;

                        return <CheckboxFoodItem key={index} taste={{name:extraName,price:extraPrice}} onCheckedFunction={putFoodSelected} isChecked={extrasInCheckbox.includes(extraName)}/>
                    })
                }

            </div>

        </div>
    )
}

const FoodTastes = ({ tastes,freeTastesCheckboxedInList,pricesListToTotal,setTastesCheckboxedToList,setTastePriceToPriceList}: FoodTastesProps) => {

    function putFoodSelected(taste:string,tastePrice:number){
        if(freeTastesCheckboxedInList.includes(taste)){
            const newFoodSelectedWithRemovedOne = freeTastesCheckboxedInList.filter(food => food !== taste);
            const newPriceListWithRemovedOne = pricesListToTotal.filter(price => price !== tastePrice);
            setTastesCheckboxedToList(newFoodSelectedWithRemovedOne);
            setTastePriceToPriceList(newPriceListWithRemovedOne);
        }
        else{
            const newFoodList = [...freeTastesCheckboxedInList,taste];
            const newPriceList = [...pricesListToTotal,tastePrice];
            setTastesCheckboxedToList(newFoodList);
            setTastePriceToPriceList(newPriceList);
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
            <span className='font-roboto-condensed font-thin ml-2 mt-2'>Escolha 3 sabores includo no pacote.<span className="font-roboto-condensed font-bold">+ R$ 1,00 por escolha adicional</span></span>

            <div className='grid grid-flow-row grid-cols-2 mt-2 gap-2 '>
                {
                    tastes.map((taste,index) => {
                        const {tasteName,tastePrice} = taste;

                        return <CheckboxFoodItem key={index}  taste={{name:tasteName,price:tastePrice}} onCheckedFunction={putFoodSelected} isChecked={freeTastesCheckboxedInList.includes(tasteName)}/>
                    })
                }

            </div>

        </div>
    )
}

const CheckboxFoodItem = ({ taste,onCheckedFunction,isChecked,showPrice = false }: checkBoxFoodItem) => {
    return (
        <div className='flex justify-start items-center gap-2'>
            <Checkbox.Root
                onCheckedChange={() => onCheckedFunction(taste.name,taste.price)}
                checked={isChecked}
            >
                <div className='w-8 h-8 border-zinc-400 border-2 rounded-lg flex items-center justify-center'>
                    <Checkbox.Indicator>
                        <Check size={24} weight='bold' />
                        
                    </Checkbox.Indicator>
                </div>
            </Checkbox.Root>
            <span className='font-roboto-condensed text-lg whitespace-nowrap'>{taste.name}</span>
            {
                showPrice && <span className="font-roboto-condensed text-sm whitespace-nowrap">R$ {taste.price.toFixed(2)}</span>
            }
        </div>
    )
}