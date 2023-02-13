
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeft, Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Food } from './Food';
import Bag from '../assets/bag.svg';
export function FoodDialog() {
    //TODO: REFACTOR THIS CODE REMOVING EXTRAS AND TASTES FROM FOOD DIALOG
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Food

                    name='Comida de teste'
                    ingredients={['Coxinha', 'Frango com catupiry']}
                    price={8}
                    extras={['Extra 1', 'Extra 2']}
                    tastes={['Carne', 'Frango']}

                />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay
                    className='w-screen h-screen bg-black/80 fixed inset-0'
                />
                <Dialog.Content className='absolute rounded-lg w-10/12 bg-softWhite top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Dialog.Title
                        className='bg-defaultBackground pl-10 text-white p-2 font-roboto-condensed font-bold text-xl'
                    >Escolha de Pedido</Dialog.Title>
                    <Dialog.Close className='absolute top-2 left-2'>
                        <ArrowLeft size={25} weight='bold' color='white' />
                    </Dialog.Close>
                    {/* BODY CONTENT AFTER */}
                    <div className='flex flex-col items-center'>
                        <div className='w-11/12 h-40 bg-violet-800 my-5 rounded-lg' />
                        <div className='flex w-full p-2 justify-around'>
                            <div className='flex flex-col'>
                                <span className='font-roboto-condensed font-bold text-2xl'>Pastel de Carne</span>
                                <span className='font-roboto-condensed'>Ingrediente A| Ingrediente B | Ingrediente C</span>
                            </div>
                            <div className='flex justify-center items-center w-32'>
                                <span className='font-roboto-condensed font-bold text-defaultOrange text-xl'>RS 00,00</span>
                            </div>
                        </div>
                        <FoodTastes />

                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}




const FoodTastes = () => {
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
            <span className='font-roboto-condensed font-thin ml-2 mt-2'>Escolha 3 sabores includo no pacote. + RS 1.00 pela adição de sabor</span>

            <div className='grid grid-flow-row grid-rows-3 mt-2'>
                <div className='flex p-1 items-center gap-2'>
                    <Checkbox.Root>
                        <div className='w-8 h-8 border-zinc-400 border-2 rounded-lg flex items-center justify-center'>
                            <Checkbox.Indicator>
                                <Check size={24} weight='bold' />
                            </Checkbox.Indicator>
                        </div>
                    </Checkbox.Root>
                    <span className='font-roboto-condensed text-lg'>Sabor 1</span>
                </div>

            </div>

        </div>
    )
}