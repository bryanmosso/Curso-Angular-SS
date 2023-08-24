//Interfaz de los productos
export interface Product{
    description: string;
    price: number;
}

//Producto 1
const phone: Product={
    description: 'Nokia a1',
    price: 150.0
    
}

//Producto 2
const table: Product={
    description: 'Ipad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number
    product: Product
}

export function taxCalculation(options: TaxCalculationOptions): [number,number]{
//Desestruturacion de las opciones
    const {tax, product}=options;
    let total=0;

    //Desustructurando para sacar solo el precio(price)
    options.product.forEach(({price}) => {
        total +=price;
    });
    
    return [total, total* options.tax];


}



const shoppingCar = [phone, table];
const tax = 0.15; //Impuesto que queremos cobrar

const [total, taxTotal]= taxCalculation({
    product: shoppingCar,
    tax: tax
});

console.log('Total', total);
console.log('Tax', taxTotal);



export{};
