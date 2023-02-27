import { useContext } from "react";
import { FoodToOrder } from "../models/foodModel";
import MainContext from "../components/context/MainContext";



export class LocalStorageController {
    store: Storage;
    setValueOfMainContext?: React.Dispatch<React.SetStateAction<number>> | undefined;
    constructor(setValueUseState?: React.Dispatch<React.SetStateAction<number>> | undefined) {
        this.store = localStorage;
        this.setValueOfMainContext = setValueUseState;

    }

    putDataInStorage(key: string, data: FoodToOrder[]): boolean {
        this.setValueOfMainContext?.(data.length);
        const toStringData = JSON.stringify(data);
        try {
            localStorage.setItem(key, toStringData);
            return true
        } catch (error) {
            console.log('An error has ocurred:', error);
            return false;
        }
    }
    getDataFromStorage(key: string): FoodToOrder[] | null {
        if (localStorage.getItem(key)) {
            const parsedData = JSON.parse(localStorage.getItem(key)!) as FoodToOrder[];

            this.setValueOfMainContext?.(parsedData.length);
            return parsedData;
        }
        return null
    }

    removeDataFromStorage(key: string, index: number) {
        const parsedData: FoodToOrder[] = JSON.parse(localStorage.getItem(key)!);
        const newListWithRemovedByIndex = parsedData.filter((_, i) => i !== index);

        this.setValueOfMainContext!(newListWithRemovedByIndex.length);
        const convertToPut = JSON.stringify(newListWithRemovedByIndex);
        localStorage.setItem(key, convertToPut);
    }
}