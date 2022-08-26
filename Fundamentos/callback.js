const PrimerCallback=(MiCallbaack)=>{
    setTimeout(()=>{
           console.log('--->Ejecutando Primer Callback')
           MiCallbaack("Nilson");
    },1000)
}

const SegundoCallback=(nombre,SegundoCallback)=>{
    setTimeout(()=>{
           console.log('--->Ejecutando segundo Callback'+ nombre)
           SegundoCallback(nombre);
    },1000)
}



PrimerCallback((nombre)=>{
    console.log("Se  ejecuta después del PrimerCallback" +nombre)
     SegundoCallback(nombre,()=>{
         console.log("Se ha ejecutado el segundo Callback")
     })
});
