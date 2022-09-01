
const Fn_DatosPersonas=()=>{
     
    return new Promise((resolve,reject)=>{
           let Persona=[{"dni":5415,"Nombre":"Jose","Direccion":"San Martin de Porres"}]

           if (Persona.length) 
                resolve(Persona)
           else 
              reject("No se Obtuvo ninguna persona")
    })
}

const DatosSAcademicos=(Persona)=>{
    
     return new Promise((resolve,reject)=>{
        let DatosAcademicos=[{"dni":5415,"Carrera":"Ingenieria de sistemas"}]
        
        if (DatosAcademicos.length  && Persona.length){
                Persona[0].Carrera=DatosAcademicos[0].Carrera
                resolve(Persona)
        }else{ 
              reject("No se Obtuvo datos academicos")
        }

     })

}


Fn_DatosPersonas()
   .then(DatosSAcademicos)
   .then((respuesta)=>{
       console.log("Respuesta",respuesta)
   })
   .catch((err)=>{
       console.log("Error",err)
   })
