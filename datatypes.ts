let a: string;

a = "test";

let age: number;

let isSelected: boolean;

class Product implements IProduct {
    productId: number;
    productName: string;
    qty: number;
    placeOrder(): number {
        return 1;
    }

    getOrder(id: number) {
        return id;
    }

}

interface IProduct {
    placeOrder(): number;
    getOrder(id: number);
}

interface ResponseData<T> {
    data: T;
}

let result: ResponseData<string>;


let addResult: ResponseData<number>;

let product: Product = new Product();


let products: ResponseData<Product[]>;

let arrayNumber = [5, 10, 15, 45];

arrayNumber.forEach(data => console.log(data));

arrayNumber.filter(data => data > 5);


let resultdata = arrayNumber.reduce((a, b) => a + b);
console.log(resultdata);




