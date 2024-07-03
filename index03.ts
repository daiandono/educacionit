interface Persona{
    nombre: string;
    edad: number;
    afiliado: boolean;
}

const persona: Persona = {
    nombre: "Enzo",
    edad: 56,
    afiliado: true
}

//console.log(persona)

const personas: Persona[] = []

personas.push(persona)

const persona2: Persona ={
    nombre: "Pedro",
    edad: 25,
    afiliado: false
}

personas.push(persona2)

const persona3: Persona ={
    nombre: "Julio",
    edad: 18,
    afiliado: true
}

personas.push(persona3)

console.log(personas)

for(let i:number = 0; i<personas.length; i++){
    let str: string = personas[i].afiliado? "Si" : "No" ;
    console.log(personas[i].nombre+" "+personas[i].edad+" Afiliado: "+str)
}

personas.forEach((x: Persona)=>{
    console.log(x.nombre+" "+x.edad+" Afiliado: "+(x.afiliado?"Si":"No"))
})

for(const x of personas){
    console.log(x.nombre+" "+x.edad+" Afiliado: "+(x.afiliado?"Si":"No"))
}

//comentario para una prueba de git