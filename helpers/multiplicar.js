const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, hasta = 10,listar = false ) => {
    try {
    
        let salida = '';
        let consola = '';
        const nombreArchivo = `./salida/tabla-${base}-hasta-${hasta}.txt`;
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`; 
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`; 
        };
        
        if (listar) {
            console.log('====================='.green);
            console.log('Tabla del: '.blue, colors.blue(base) );
            console.log('====================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync( nombreArchivo, salida );
    
        return nombreArchivo;

    } catch (error) {

        throw error;
        
    }

};

module.exports = { 
    crearArchivo
};