const argv = require('yargs')
    .option('number', {
        alias: 'n',
        type: 'number',
        demandOption: true,
        description:'Recibe un número entero como argumento',
    })
    .check((argv, options) => {
        if (isNaN(argv.number))
            throw 'Debe ingresar un número';
        return true;
    })
    .argv;

module.exports = argv;