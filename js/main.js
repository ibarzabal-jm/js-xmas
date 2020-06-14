const $form = document.querySelector('#carta-a-santa');
$form.onsubmit =validarFormulario;




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
    const $form = document.querySelector("'#carta-a-santa");
    const errorNombre= validarNombre($form.nombre.value);
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    manejarErrores([errorNombre]);
    

    event.preventDefault();
}


