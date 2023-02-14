
import {Hamburger,X} from 'phosphor-react';


interface CardFoodContainerProps{
    foodImage?:string;
    name:string;
    price:number;
}



export function CartFoodContainer({foodImage,name,price}:CardFoodContainerProps){
    return(
        <div className=" flex w-full justify-between items-center gap-2 p-2 bg-white border-2 border-extraSoftGrey rounded-lg">
                            <div className='w-12 h-12 rounded-lg'>
                                <Hamburger weight='fill' size={'width:100%'} />
                            </div>
                            <span className="font-roboto-condensed font-bold ">{name}</span>
                            <span className="font-roboto-condensed font-bold text-defaultOrange">R$ {price.toFixed(2)}</span>
                            <button className="text-center bg-defaultRed p-2 rounded-full">
                                <X weight="bold" color="white"/>
                            </button>
                        </div>
    )
}