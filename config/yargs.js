const descripcion = {
    demand: true,
    alias: "d",
    desc: " descripcion de la tarea por hacer"
};


const completado = {
    default: true,
    alias: "c",
    desc: "marca complatado la tarea"
};


const argv = require("yargs")
    .command("crear", "crear un elemento por hacer", {
        descripcion
    })

.command("actualizar", "actualizando el estado de la tarea", {
    descripcion,
    completado
})

.command("borrar", "borrando una tarea", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}