//esta funcion permite limpiar una cadena para usarla en una url
String.prototype.cleanString = function () {
    var ascii   = 0;
    var char    = '';
    var request = '';
    var special = {'á' : 'a', 'é' : 'e',
                   'í' : 'i', 'ó' : 'o',
                   'ú' : 'u', 'ñ' : 'n'};
    var string  = this.toLowerCase();

    for (var i in string)
    {
        char = string[i];
        char = (typeof special[char] !== "undefined") ?  special[char] : char;
        if (typeof char !== "function")
        {
            ascii    = char.charCodeAt();
            request += (ascii === 32 || (ascii >= 48  && ascii <= 57) || (ascii >= 97 && ascii <= 122)) ? char : "";
        }
    }
    request = request.split(" ");
    request = request.filter(Boolean);
    request = request.join("-");
    return request;
};//String.prototype.cleanString = function () 

//utilizando nuestro nuevo metodo del objeto string
let cadena = "Jórgé Méndéz Ortega @*#$ 1 2 3".cleanString();
console.log(cadena);// esto nosda como resultado "jorge-mendez-ortega-1-2-3"