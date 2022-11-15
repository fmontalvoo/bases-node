const { generarTabla, generarTablas } = require('./src/mult');

console.clear();

const [, , arg3 = 'num=7'] = process.argv;
const [, num] = arg3.split('=');
const n = parseInt(num);

generarTablas(n)
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