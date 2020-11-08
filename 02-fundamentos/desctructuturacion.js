let persona = {
    nombre: 'yeison',
    apellidos: 'aguirre osorio',
    edad: 12,
    getnombrecompleto: function() {
        return `${this.nombre} ${this.apellidos}`;
    }
}

console.log(persona, persona.getnombrecompleto());
let { nombre, apellidos, edad } = persona;
console.log(nombre, apellidos, edad);