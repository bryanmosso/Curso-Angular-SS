//Crear la interface para ese objeto

interface superheroe{
    nombre: string;
    edad: number;
    address: address;
        
        showAddress:()=> string;

}
/*Cuando se tiene un objeto dentro de otro objeto
es mejor separarlos en objetos pequeños
que fue lo que se hizo con address
*/
interface address{
        calle:string;
        pais:string;
        ciudad:string;
}

const  superheroe : superheroe  =  {
    nombre : 'Hombre Araña' ,
    edad : 30 ,
    address:{
        calle : 'Calle Principal' ,
        pais : 'EE.UU.' ,
        ciudad : 'Nueva York'
    } ,
    showAddress ( )  {
        return this.nombre  +  ', '  + this.address.ciudad  +  ', '  +  this.address.pais ;
    }
}


    const address= superheroe.showAddress( );
    console.log(address) ;




export{ } ;