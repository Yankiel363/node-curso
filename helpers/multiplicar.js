const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base = 1 , l = false , h )=>{

   try {
    

    let salida ='';

    for(let i = 1; i <= h ; i++){

         salida += (`${base} X ${i} = ${base * i}\n`);

    }

    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida,);


    if(l){
        console.log( `==============  Tabla del ${base} ==============`  );
        console.log( salida );
    }

    return(` tabla-${base}creada`);
   } catch (err) {
       throw err;
   }

}

module.exports = {
    crearArchivo
}