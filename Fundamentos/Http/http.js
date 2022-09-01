const http=require('http')

http.createServer((req,resp)=>{
  console.log("nueva función")
  console.log(req.url)

})

const router=(req,resp)=>{

    switch (req.url) {
        case 'Hola':
             req.write("Has accedido a la ruta hola")
             req.end()
            break;
    
        default:
            req.write("Error :404 file not fould")
            req.end()
            break;
    }

}