
export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Bryan'
}

const passenger2: Passenger = {
    name: 'Kevin',
    children: ['Ricardo', 'Ali']
}

const printChildren = (passenger: Passenger)=>{
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name,howManyChildren);
    return howManyChildren;
}

printChildren(passenger1);