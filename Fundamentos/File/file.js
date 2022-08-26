const fs= require("fs")


const fn_readFile=(ruta,callback)=>{
         fs.readFile(ruta,(err,data)=>{
            if (err) 
                 console.log(err)
            else
            callback(data.toString())
                
         })
}

fn_readFile(__dirname+'/archivo.txt',console.log)