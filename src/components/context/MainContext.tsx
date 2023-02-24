import React from "react";



type CartLength = {
    value?:number;
    setValue?:React.Dispatch<React.SetStateAction<number>>
}

const MainContext = React.createContext<CartLength>({});
export default MainContext;