import { Product, taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product[]=[
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'Ipad',
        price: 250
    }
]

//import { taxCalculation } from "./06-function-destructuring";

const [total, tax] = taxCalculation({
    product: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);






