const gato = require('./gato');
const perro = require('./perro');

// Crear instancias de las clases gato y perro
const gatoEleccion = new gato();
const perroEleccion = new perro();

// Llamar al método preguntas para recopilar información del usuario
gatoEleccion.preguntas();
perroEleccion.preguntas();
