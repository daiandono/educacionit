function obtenerPromesa_o_Error(){
    const unaPromesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Promesa resuelta")},3000)
        
    })
    return unaPromesa
}
console.log(obtenerPromesa_o_Error())

//cuando se resuelve
obtenerPromesa_o_Error().then((x)=>{console.log(x)})