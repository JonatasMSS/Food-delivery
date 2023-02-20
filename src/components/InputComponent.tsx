import { HTMLInputTypeAttribute, useState } from "react";
import clsx from "clsx";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowDown } from "phosphor-react";
interface InputComponentProps {
    htmlFor?: string;
    placeholder?: string;
    label: string;
    type?: HTMLInputTypeAttribute | undefined;
    inputSize?: inputSize | undefined;
    reactCompType?: reactCompType | undefined;
}


type inputSize = | "sm" | "md" | "lg";
type reactCompType = | "obs" | "mChoose" | "default";







export function InputComponent({ ...allData }: InputComponentProps) {

    const [districtItemValue, setDistrictItemValue] = useState<string | undefined>();

    const ListDistrict:Array<ItemSelectorProps> = [
        {
            text:'Jardim Aeroporto',
            value:1,
            onSelected: (value,text) => {
                setDistrictItemValue(text);
            }
        },
        {
            text:'Alto Boa Vista',
            value:2,
            onSelected:(value,text) =>{
                setDistrictItemValue(text)
            }
        }
    ]


    if (allData.reactCompType === "obs") {
        return (
            <div className=" flex flex-col w-full">
                <label className="font-roboto-condensed mb-2 font-semibold" >{allData.label}</label>
                <textarea name={allData.htmlFor} id={allData.htmlFor}
                    className="bg-gray-200 w-full border-2 border-gray-400/50 rounded-lg h-32
                    placeholder:text-gray-600 px-2 py-2"
                    placeholder={allData.placeholder}
                />


            </div>
        )
    } else if (allData.reactCompType == 'mChoose') {
        return (
            <div className=" flex flex-col w-full">
                <label className="font-roboto-condensed mb-2 font-semibold" >{allData.label}</label>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <button className="bg-gray-200 w-full  flex border-2 flex-initial items-start border-gray-400/50 rounded-lg py-1 px-2 gap-2 ">
                            <span className="font-roboto-condensed truncate">{districtItemValue ?? 'Bairro para taxa'}</span>
                            <ArrowDown weight="fill" size={22} />
                        </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="bg-white border-2 border-softWhite rounded-lg p-2 flex-col flex w-fit ">
                            <DropdownMenu.Label className="font-roboto-condensed font-semibold">
                                Bairros
                            </DropdownMenu.Label>
                            <DropdownMenu.Separator className="h-[1px] my-2 bg-gray-300" />
                                {
                                  ListDistrict.map((district,i) => (
                                    <ItemSelector
                                        key={i}
                                        text={district.text}
                                        value={district.value}
                                        onSelected={district.onSelected}
                                    />
                                  ))  
                                }
                            <DropdownMenu.Arrow className="fill-softWhite" />
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
        )
    }

    return (
        <div className={
            clsx("flex flex-col", {
                'w-[33%]': allData.inputSize === "sm",
                'w-[66%]': allData.inputSize === "md",
                'w-full': allData.inputSize === "lg" || undefined,
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




interface ItemSelectorProps {
    value?: string | number;
    text?: string;
    onSelected?(prop?:string|number, text?:string): void;
}

function ItemSelector({ ...allItemProps }: ItemSelectorProps) {
    return (
        <DropdownMenu.Item
            textValue={allItemProps.value?.toString()}
            onSelect={() => {
                allItemProps.onSelected!(allItemProps.value,allItemProps.text) 
            }}
            className="flex items-center justify-between">
              <span className="font-roboto-condensed"> {allItemProps.text}</span>
              <span className="font-roboto-condensed mx-2"> + </span>
              <span className="font-roboto-condensed">R${allItemProps.value},00</span>
        </DropdownMenu.Item>

    )
}