//Creamos nuestra clase persona utilizando prototype

/**
 * Constructor
 */
function Persona(apellido, nombre)
{
    this.apellido = apellido;
    this.nombre   = nombre;
}

/**
 * Permite obtener el apellido.
 * 
 * @return void
 */
Persona.prototype.getApellido = function()
{
    console.log(`Mi apellido es ${this.apellido}`);
};

/**
 * Permite obtener el nombre.
 * 
 * @return void.
 */
Persona.prototype.getNombre = function()
{
    console.log(`Mi nombre es ${this.nombre}`);
};

//==============================================//

/**
 * Constructor
 */
function SuperHero(apellido, nombre, powers)
{
    //Esto es el llamado al constructor de la clase 
    //Persona.
    Persona.call(this, apellido, nombre);
    this.powers = powers;
}
//Generamos la herencia
SuperHero.prototype = Object.create(Persona.prototype);
/**
 * Permite conseguir los datos de nuestro heroe
 *
 * return void.
 */
SuperHero.prototype.getSuperHero = function()
{
    //se incovan los metodos de la clase Person
    this.getNombre();
    this.getApellido();

    console.log(`Mis super poder es ${this.powers}`); 
};

//Genetamos la intacia de nuestra clase persona
let heroe = new SuperHero("Jorge", "Mendez", "Programar como loco :)");

heroe.getSuperHero();//esto no data como resultado
//Mi nombre es Mendez
//Mi apellido es Jorge
//Mis super poder es Programar como loco :)






