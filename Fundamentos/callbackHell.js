const PrimerCallback=(MiCallbaack)=>{
    setTimeout(()=>{
           console.log('--->How are you')
           MiCallbaack();
    },1000)
}

const SegundoCallback=(SegundoCallback)=>{
    setTimeout(()=>{
           console.log('--->bla bla bla ....')
           SegundoCallback();
    },1000)
}

const TercerCallback=(Tercer)=>{
    setTimeout(()=>{
           console.log('--->Adios ....')
           Tercer();
    },1000)
}



PrimerCallback(()=>{
    console.log("Primer Callback")
     SegundoCallback(()=>{
         console.log("Se ha ejecutado el segundo Callback")
         TercerCallback(()=>{
            console.log("Se ejecuta el Tercer callback FIN DEL PROCESO...")
         })
     })
});
