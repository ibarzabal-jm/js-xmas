function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos un caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
          'Este campo debe tener cuanto mucho 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();
