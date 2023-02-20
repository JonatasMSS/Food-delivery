import { HTMLInputTypeAttribute } from "react";
import clsx from "clsx";


interface InputComponentProps{
    htmlFor?:string;
    placeholder?:string;
    label:string;   
    type?:HTMLInputTypeAttribute | undefined;
    inputSize?: inputSize | undefined;
}


type inputSize = | "sm" | "md" | "lg";






export function InputComponent({...allData}:InputComponentProps) {

    
    return (
        <div className={
            clsx("flex flex-col  max-w-fit ",{
                'w-[33%]':allData.inputSize === "sm",
                'w-[66%]':allData.inputSize === "md",
                'w-full':allData.inputSize === "lg" || undefined,
            })
        }>
            <label htmlFor={allData.htmlFor} className="font-roboto-condensed mb-2 font-semibold ">{allData.label}</label>
            <input id={allData.htmlFor} type={allData.type ?? 'text'}
               className="bg-gray-200 w-full border-2 flex-initial items-end border-gray-400/50 rounded-lg py-1 px-2 placeholder:font-roboto-condensed placeholder:pl-1 placeholder:text-gray-600"
                placeholder={allData.placeholder}

            />
        </div>
    )
}