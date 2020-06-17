function validarNombre(nombre){
    if (nombre.length === 0 ){
        return 'Este campo debe tener al menos un caracter'
    }

    if (nombre.length >=50){
        return 'Este campo debe tener cuanto mucho 50 caracteres'
    }

    if(!/^[A-z]+ [A-z]+$/.test(nombre)){
        return 'El campo solo acepta letras'
    }

    return '';
}




function validarCiudad(ciudad){
    if (!ciudad.length){
        return 'Provincia no seleccionada'
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length >= 100){
        return 'El campo es largo'
    }

    if(descripcionRegalo === ''){
        return 'No puede estar vacío'
    }

    if( !/^[A-z0-9 ,\.]+$/.test(descripcionRegalo) ){
        return "El campo descripcion solo puede tener numeros, letras o  signos de puntuación"
    }

    return '';
}



function validarFormulario(event){
    
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    
    const errorNombre = validarNombre($form.nombre.value);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);


    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }
    
    manejarErrores(errores);

    event.preventDefault();

}

function manejarErrores(errores){
    
    const llaves = Object.keys(errores);
    console.log(llaves);

   llaves.forEach(function(llave){
       const error = errores[llave];
       if(error){
           $form[llave].className="error";
       }else{
           $form[llave].className="";
       }
   });
    

}





const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;



