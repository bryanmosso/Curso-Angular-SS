const skills: string[] = ['Bash', 'Counter',
'Healing'];

//Interfaz para que ts sepa como sera nuestro objeto
//Ayuda a definir a los objetos literales como queremos que luzcan

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //El signo es para que sea opcional
}

const strider: Character= {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']

};

//Haciendo referencia al objeto
strider.hometown= 'Rivendell';

//Otra opcion para imprimir elementos
console.table(strider);

export{};
