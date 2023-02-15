
interface FoodModel{
    name:string;
    description:string;
    basesPrice:number;
    tastes:Array<{
        name:string;
        price:number;
    }>;
}
