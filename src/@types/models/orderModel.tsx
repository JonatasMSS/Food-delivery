




interface Address{
    address:string;
    number_address: string;
    comlement:string;
    district:string;
    reference:string;
}

interface Person{
    name:string;
    number:number;
    address:Address;
    payment_method:string;
    pay_rate:string;
}


interface OrderModel{
    person:Person;
    observation:string;
}