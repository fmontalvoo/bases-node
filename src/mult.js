const fs = require("fs");

const generarTablas = (n = 10) => {
    return new Promise((resolve, reject) => {
        let lineas = '';
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                lineas += `${j} * ${i} = ${i * j}\n`;
            }
            lineas += '-'.repeat(15).concat('\n');
        }

        // fs.writeFile('tablas-mult.txt', lineas, (err) => {
        //     if (err) throw err;
        //     console.log(lineas);
        // });

        try {
            fs.writeFileSync('tablas-mult.txt', lineas);
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
}

const generarTabla = async (n = 10) => {
    let lineas = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            lineas += `${j} * ${i} = ${i * j}\n`;
        }
        lineas += '-'.repeat(15).concat('\n');
    }

    try {
        fs.writeFileSync('tablas-mult.txt', lineas);
        return true;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    generarTabla,
    generarTablas,
}