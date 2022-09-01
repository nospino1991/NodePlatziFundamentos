const fs= require("fs")


const fn_readFile=(ruta,callback)=>{
         fs.readFile(ruta,(err,data)=>{
            if (err) 
                 console.log(err)
            else
            callback(data.toString())
                
         })
}

const fn_createFile=(ruta,contenido,callback)=>{
     fs.writeFile(ruta,contenido,(err)=>{

        if (err) 
            console.log(err)
        else 
           callback("Archivo creado con exito")
            
     })

}

const fn_delete=(ruta,callback)=>{
        fs.unlink(ruta,(err)=>{
        if(err)
           console.log("error")

        else 
          callback("Archivo creado con exito")
        })
          
}

fn_delete(__dirname+'/archivo.txt',console.log)
// fn_createFile(__dirname+'/archivo1.txt',"Archivo nuevo",console.log)
// fn_readFile(__dirname+'/archivo.txt',console.log)


const fn_createPrmise=(ruta,contenido)=>{

       return new Promise((resolve,reject)=>{
        
          fs.writeFile(ruta,contenido,(err)=>{

              if (err)
                   reject("Error al crear el archivo",err)
              else 
                 resolve("Archivo creado con exito")
          })

       })
}


fn_createPrmise(__dirname+'/archivo.txt','Contenido del archivo')
  .then((response)=>{
      console.log(response)
  })
  .catch((err)=>{
    console.log(err)
  })