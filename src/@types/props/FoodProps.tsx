
interface foodDialogProps{
    foodImage?: string;
    name:string;
    tastes:Array<{
        tasteName: string,
        tastePrice:number
    }>;
    price:number;
    showPrice?:boolean;

}
interface FoodProps {
    foodImage?: string;
    name: string;
    tastes: Array<string> ;
    price: number;
    showPrice?: boolean;
    
}
interface foodDialogFormProps {
    foodPriceWithoutTastesAndExtras:number
    tastes: Array<{
        tasteName:string,
        tastePrice:number
    }>;
    extras?: Array<{
        extraName:string,
        extraPrice:number
    }>;
}
interface checkBoxFoodItem {
    taste:{
        name:string,
        price:number,
    };
    onCheckedFunction(taste:string,tastePrice:number):void; 
    isChecked:boolean;
    showPrice?:boolean;
}
interface FoodTastesProps {
    tastes: Array<{
        tasteName:string,
        tastePrice:number;
    }>;
    freeTastesCheckboxedInList: Array<string>;
    pricesListToTotal: Array<number>;
    setTastesCheckboxedToList:React.Dispatch<React.SetStateAction<string[]>>; 
    setTastePriceToPriceList:React.Dispatch<React.SetStateAction<number[]>>; 
}
interface FoodExtrasProps {
    extras?: Array<{
        extraName:string,
        extraPrice:number;
    }>;
    extrasInCheckbox:Array<string>;
    putExtraToCheckboxArray:React.Dispatch<React.SetStateAction<string[]>>;
    
}

interface CardFoodContainerProps {
    foodImage?: string;
    name: string;
    price: number;
    tastes: Array<string>;
    onRemoveClicked(index:number):void;
}
