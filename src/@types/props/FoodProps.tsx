
interface foodDialogProps{
    foodImage?: string;
    name:string;
    description?: string;
    tastes:Array<{
        tasteName: string,
        tastePrice:number
    }>;
    price:number;
    
}
interface FoodContainerProps {
    foodImage?: string;
    description?: string;
    name: string;
    price: number;
    
}
interface foodDialogFormProps {
    foodPriceWithoutTastesAndExtras:number;
    
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
