import { Check } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox';
import BlackShoppingCart from '../assets/shoppingcart-black.svg';
import Bag from '../assets/bag.svg';


interface foodDialogFormProps {
    ingredients: Array<string>;
    extras?: Array<string>;
}



export function FoodDialogForm({ ingredients, extras }: foodDialogFormProps) {
    return (
        <form>
            <FoodTastes tastes={ingredients} />
            <FoodExtras extras={extras}/>
            <div className='flex flex-col w-full p-2 justify-start'>
                <label htmlFor="observation" >Observações</label>
                <textarea
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
                                    <CheckboxFoodItem key={index} value={extra} />
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
}

const FoodTastes = ({ tastes }: FoodTastesProps) => {
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
                    tastes.map(taste => (
                        <CheckboxFoodItem value={taste} />
                    ))
                }

            </div>

        </div>
    )
}




interface checkBoxFoodItem {
    value: string;
}

const CheckboxFoodItem = ({ value }: checkBoxFoodItem) => {
    return (
        <div className='flex p-1 items-center gap-2'>
            <Checkbox.Root>
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