


class LocalStorageController{
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

}