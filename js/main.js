const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciduad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre (nombre){
    if (nombre.length < 2 ){
        return 'Este campo debe tener al menos un caracter'
    }

    if (nombre.length >=50){
        return 'Este campo debe tener cuanto mucho 50 caracteres'
    }

    return '';
}