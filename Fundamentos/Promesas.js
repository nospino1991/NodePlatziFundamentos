const PrimerPromesa=(params)=>{
   return new Promise((resolve, reject) => {

            setTimeout(()=>{
                resolve("Primera Promesa  ejecutada con exito")
        },1000)

   })
}

const SegundaPromesa=(params)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Segunda")
             resolve("Segunda Promesa ejecutada con exito"+params)
        },1000)
    })
}

const TercerPromesa=(Tercer)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Tercera ejecutada con exito")
            Tercer();
        },1000)
    })
}



PrimerPromesa("Parametro")
.then(SegundaPromesa)
.then((params)=>{
   
    console.log(params)
})
.catch((err)=>{
   console.log("Error al anidar promesas")
})