export class Person
{
    name: string;
    age: Number; 
    address: IAddress;
}

export class Employee
{

}

interface IAddress
{
    addressLine1: string;
    addressLine2: string;
    city: string;
}


class Order
{
    id:number;
    name: string;
}
