//Creamos nuestra clase persona utilizando emacscript 2016
class Persona 
{
    /**
     * constructor
     */
     constructor(apellido, nombre)
     {
        this.apellido = apellido;
        this.nombre   = nombre;
     }

    /**
     * Permite obtener el apellido.
     * 
     * @return void
     */
     getApellido()
     {
        console.log(`Mi apellido es ${this.apellido}`);
     }

    /**
     * Permite obtener el nombre.
     * 
     * @return void.
     */
     getNombre()
     {
        console.log(`Mi nombre es ${this.nombre}`);
     }
}

//==============================================//

//En este caso ya estamos generando la herencia
class SuperHero extends Persona
{
    /**
     * constructor
     */
     constructor(apellido, nombre, powers)
     {
        //se realiza el llamado al contructro de la clase
        //Persona
        super(apellido, nombre);
        this.powers = powers;
     }
    /**
     * Permite conseguir los datos de nuestro heroe
     *
     * return void.
     */
    getSuperHero()
    {
        //se incovan los metodos de la clase Person
        this.getNombre();
        this.getApellido();
        
        console.log(`Mis super poder es ${this.powers}`); 
    }
}

//Genetamos la intacia de nuestra clase persona
let heroe = new SuperHero("Jorge", "Mendez", "Programar como loco :)");

heroe.getSuperHero();//esto no data como resultado
//Mi nombre es Mendez
//Mi apellido es Jorge
//Mis super poder es Programar como loco :)