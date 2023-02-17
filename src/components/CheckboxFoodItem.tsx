import * as Checkbox  from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";




export function CheckboxFoodItem({ taste,onCheckedFunction,isChecked,showPrice = false}: checkBoxFoodItem){
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
                showPrice && <span className="font-roboto-condensed text-sm font-bold whitespace-nowrap">R$ {taste.tastePrice.toFixed(2)}</span>
            }
        </div>
    )
}