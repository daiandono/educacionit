function obtenerPromesa_o_Error(){
    const unaPromesa = new Promise((resolve,reject)=>{
        //const bandera = true
        const bandera = false
        
        if(bandera){
            setTimeout(()=>{resolve("Promesa resuelta")},3000)
        }else{
            reject(new Error("Algo salió mal"))
        }     
        
    })
    return unaPromesa
}
console.log(obtenerPromesa_o_Error())

//cuando se resuelve
obtenerPromesa_o_Error()
.then((x)=>{console.log(x)})
.catch((error)=>{console.log("Error: "+error.message)})