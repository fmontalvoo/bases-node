const colors = require('colors');
const argv = require('./config/yargs');

const { generarTabla, generarTablas } = require('./src/mult');

console.clear();

// const [, , arg3 = 'num=7'] = process.argv;
// const [, num] = arg3.split('=');
// const n = parseInt(num);

generarTablas(argv.number)
    .then(res => {
        if (res)
            console.info('Archivo creado'.rainbow);
    })
    .catch(error => console.error(colors.red(error)));

// generarTabla(9)
//     .then(res => {
//         if (res)
//             console.info('Archivo creado');
//     })
//     .catch(console.error);