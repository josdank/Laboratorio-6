// Fundamentos API

// Consumo de una API
fetch('https://pokeapi.co/api/v2/ability/1')
    .then(response => response.json())
    .then(json => console.log(json));

// Obtener información de una Habilidad
const obtenerHabilidad = async (idHabilidad) => {
    const peticion = await fetch(`https://pokeapi.co/api/v2/ability/${idHabilidad}`);
    const response = await peticion.json();
    console.log(`Nombre de la habilidad: ${response.name}\nEfecto: ${response.effect_entries[0].effect}`);
};

obtenerHabilidad(1);  // Ejemplo con la habilidad ID 1

// Guardar un Objeto en Local Storage
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

fetch('https://pokeapi.co/api/v2/ability/1')
    .then(response => response.json())
    .then(json => {
        let habilidadData = {
            id: json.id,
            name: json.name,
            generation: json.generation.name,
            effect: json.effect_entries[0].effect,
            pokemon: json.pokemon.map(poke => poke.pokemon.name) // Lista de Pokémon que tienen esta habilidad
        };
        guardarLocalStorage(habilidadData);
    });

const guardarLocalStorage = (data) => {
    localStorage.setItem('ability', JSON.stringify(data));
};

// Obtener un objeto en el LocalStorage
const obtenerLocalStorage = () => {
    const respuesta = localStorage.getItem('ability') ? JSON.parse(localStorage.getItem('ability')) : "No existe data";
    console.log(respuesta);
};

obtenerLocalStorage();

// Eliminar un objeto en el LocalStorage
const eliminarLocalStorage = () => {
    !localStorage.getItem('ability') ? console.log('No hay clave') : localStorage.removeItem('ability'); console.log("Objeto Eliminado");
};

eliminarLocalStorage();

// Módulos (no modificados)
const {login, LIKES} = require('./module.js');

login();
console.log(LIKES);
