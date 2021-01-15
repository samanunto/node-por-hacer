const fs = require("fs");

let listadoPorHacer = [];


const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);




    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error("no se pudo grabar", err);
    })

}


const cargarBD = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }



}


const getListado = () => {
    guardarBD();
    return listadoPorHacer;

}
const crear = (descripcion) => {
    cargarBD();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarBD();
    return porHacer;

}


const actualizar = (descripcion, completado = true) => {
    cargarBD();
    //version corta
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);


    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }

}


const borrar = (descripcion) => {
    cargarBD();

    //version larga
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}