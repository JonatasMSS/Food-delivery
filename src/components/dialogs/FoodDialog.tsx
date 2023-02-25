
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeft } from 'phosphor-react';
import { Hamburger } from "phosphor-react";
import { Food } from '../Food';
import { PastelFoodDialogForm } from './PastelFoodDialogForm';
import { TapiocaFoodDialogForm } from './TapiocaFoodDialogForm';
import { HamburguerFoodDialogForm } from './HamburguerFoodDialogForm';



export function FoodDialog({foodImage,name,tastes,price,description,showPrice = false, type}:foodDialogProps) {

    function FoodDialogController(type:string){
        if(type === 'PASTEL'){
            return (
                <PastelFoodDialogForm
                    foodPriceWithoutTastesAndExtras={price}
                    tastes={tastes}
                    baseTasteName={name}
                />
            )
        }
        else if(type === 'TAPIOCA'){
            return (
                <TapiocaFoodDialogForm
                    tastes={tastes}
                    foodPriceWithoutTastesAndExtras={price}
                    baseTasteName={name}
                />
            )
        }
        else if(type === 'HAMBURGUER' || type === 'BEBIDA'){
            return(
                <HamburguerFoodDialogForm 
                    tastes={tastes}
                    foodPriceWithoutTastesAndExtras={price}
                    baseTasteName={name}
                />
            )
        }
        
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Food
                    
                    foodImage={foodImage}
                    name={name}
                    description={description}
                    price={price}
                    showPrice={showPrice}

                />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay
                    className=' w-screen h-screen bg-black/80 fixed inset-0'
                />
                <Dialog.Content className='fixed  max-h-vh-90 overflow-y-auto rounded-lg w-10/12 bg-softWhite top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Dialog.Title
                        className='bg-defaultBackground pl-10 text-white p-2 font-roboto-condensed font-bold text-xl'
                    >Escolha de Pedido</Dialog.Title>
                    <Dialog.Close className='absolute top-2 left-2'>
                        <ArrowLeft size={25} weight='bold' color='white' />
                    </Dialog.Close>
                    {/* BODY CONTENT AFTER */}
                    <div className='flex flex-col items-center pb-5 '>
                        {
                            foodImage ? <img src={foodImage} alt="Imagem da comida" className='w-11/12 h-40  my-5 rounded-lg'/>:
                            <Hamburger size={90} weight='bold' className='mt-4'/>
                        }
                        <div className='flex w-full p-2 justify-around'>
                            <div className='flex flex-col w-full text-start '>
                                <span className='font-roboto-condensed font-bold text-2xl'>{name}</span>
                                <span className='font-roboto-condensed'>{
                                    description
                                }
                                </span>
                            </div>
                            <div className='flex justify-center items-center w-32'>
                               {
                                type === 'pastel' ?  <span className='font-roboto-condensed font-bold text-defaultOrange text-xl'>R$ {price.toFixed(2)}</span>:
                                <span className='font-roboto-condensed text-defaultOrange font-bold text-xl'> Escolha o sabor</span>
                               }
                            </div>
                        </div>
                        {
                            FoodDialogController(type.toUpperCase())
                        }
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}



