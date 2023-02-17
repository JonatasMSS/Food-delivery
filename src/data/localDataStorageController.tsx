import { FoodToOrder } from "../models/foodModel";



export class LocalStorageController{
    store: Storage;
    constructor(){
        this.store = localStorage;
    }
    
     putDataInStorage(key:string,data:string):boolean{
        try {  
            localStorage.setItem(key, data);
            return true
        } catch (error) {
            console.log('An error has ocurred:',error);
            return false;
        }
    }
    getDataFromStorage(key:string):FoodToOrder[] | null{
        const parsedData = JSON.parse(localStorage.getItem(key)!);
        return parsedData;
    }

    removeDataFromStorage(key:string,index:number){
        const parsedData:FoodToOrder[] = JSON.parse(localStorage.getItem(key)!);
        const newListWithRemovedByIndex = parsedData.filter((_,i) => i !== index);
        const convertToPut = JSON.stringify(newListWithRemovedByIndex);
        localStorage.setItem(key,convertToPut);
    }
}