
interface foodDialogProps{
    foodImage?: string;
    name:string;
    description?: string;
    tastes:Array<{
        tasteName: string,
        tastePrice:number
    }>;
    price:number;
        showPrice?:boolean;

}
interface FoodContainerProps {
    foodImage?: string;
    description?: string;
    name: string;
    price: number;
    showPrice?: boolean;
    
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
        tasteName:string;
        tastePrice:number;
        isFree:boolean;
    };
    
    onCheckedFunction(taste:{tasteName:string, tastePrice:number}):void; 
    isChecked:boolean;
    showPrice?:boolean;
}
interface CardFoodContainerProps {
    foodImage?: string;
    name: string;
    price: number;
    tastes: Array<string>;
    onRemoveClicked(index:number):void;
}
