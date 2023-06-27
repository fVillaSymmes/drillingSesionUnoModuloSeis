var mascotasJson = [
    {
    "nombre": "fluffy",
    "mascota": "true",
    "animal": "gato",
    "edadHumana": "7"
    },
    {
    "nombre": "Balto",
    "mascota": "true",
    "animal": "perro",
    "edadHumana": "11"
    },
    {
        "nombre": "Mandibulas",
        "mascota": "false",
        "animal": "tiburon",
        "edadHumana": "50"
        }
]

console.log(mascotasJson);

for (let index = 0; index < mascotasJson.length; index++) {
mascotasJson.pop()
console.log(mascotasJson);
if (mascotasJson = []) {
    console.log("No quedan más items en el array.");
}
}