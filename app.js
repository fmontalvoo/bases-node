const { generarTabla, generarTablas } = require('./src/mult');
const argv = require('yargs')
    .option('number', {
        type: 'number',
        alias: 'n',
        demandOption: true,
    })
    .check((argv, options) => {
        if (isNaN(argv.number))
            throw 'Debe ingresar un número';
        return true;
    })
    .argv;

console.clear();

// const [, , arg3 = 'num=7'] = process.argv;
// const [, num] = arg3.split('=');
// const n = parseInt(num);

generarTablas(argv.number)
    .then(res => {
        if (res)
            console.info('Archivo creado');
    })
    .catch(console.error);

// generarTabla(9)
//     .then(res => {
//         if (res)
//             console.info('Archivo creado');
//     })
//     .catch(console.error);