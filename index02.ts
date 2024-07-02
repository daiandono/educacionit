const nombres: string[] = [];

nombres[0] = "Luis";
nombres[1] = "Paula";
nombres.push("Pedro");
nombres.push("Maria");
nombres.push("Juan");

console.log(nombres);

for(let i: number = 0; i<nombres.length ; i++){
    console.log(nombres[i])
}

nombres.forEach((x: string)=>{
    console.log(x)
})

for(const x of nombres){
    console.log(x)
}