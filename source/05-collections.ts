let nombres: string[] = ["Luis", "Kate", "Eva"];
console.log(nombres);

let mixto: any[] = ["Hola", 42, true];
console.log(mixto);

interface Persona {
    nombre: string;
    edad: number;
    desarrollador: boolean;
}

let personas: Persona[] = [
    {
        nombre: "Luis",
        edad: 35,
        desarrollador: true
    }
];

// Podemos añadir elementos que cumplan con la interfaz
personas.push({
    nombre: "Kate",
    edad: 30,
    desarrollador: false
});

console.log(personas);

let personaTupla: [string, number, boolean] = ["Luis", 35, true];
console.log(personaTupla);

let [nombre, edad, desarrollador] = personaTupla;
console.log(nombre);
console.log(edad);
console.log(desarrollador);

enum DiaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
}

let dia: DiaSemana = DiaSemana.Domingo;
console.log(dia); // Muestra: 6 (índice numérico)
console.log(DiaSemana[dia]); // Muestra: "Domingo" (nombre)

// Esto generaría un error
// let diaInvalido: DiaSemana = DiaSemana.Enero;