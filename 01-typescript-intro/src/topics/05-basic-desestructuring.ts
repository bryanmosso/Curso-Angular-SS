//Desestructuracion de objetos
//Creando interfaces
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details; //es un objeto del tipo details que tiene su interface
}

interface Details{
    author: string;
    year: number;

}

//creando una variable
const audioPlayer: AudioPlayer= {
    audioVolume:90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheran",
        year: 2020
    }
}

//Desestructuracion
const{song:anotherSong,songDuration:duration,details}=audioPlayer; //renombrando
const{author}=details;
/*
console.log('Song ', anotherSong);
console.log('Duration', duration);
console.log('Author', author);
*/

//Desestructuracion de ARREGLOS
//Para arreglos se utilizan []
const [ , ,trunks] : string[]=['Goku', 'Vegeta', 'Trunks'];
//Al inicio tenemos que respetar los espacios de lo que tenemos del arreglo

console.log('Personaje 3', trunks);





export{};