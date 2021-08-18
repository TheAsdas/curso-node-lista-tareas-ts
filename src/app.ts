import colors from "colors";
import { MenuData, mostrarMenu, pausar } from "./helpers/mensajes";

colors;
console.clear();

const menu: { [key: string]: MenuData } = {
  principal: {
    titulo: "Tareas: Menú principal",
    opciones: [
      { nombre: "Crear tarea", accion: () => { return} },
      { nombre: "Listar tareas", accion: () => {} },
      { nombre: "Listar tareas completadas", accion: () => {} },
      { nombre: "Listar tareas pendientes", accion: () => {} },
      { nombre: "Completar tarea(s)", accion: () => {} },
      { nombre: "Crear tarea", accion: () => {} },
      { nombre: "Borrar tarea", accion: () => {}, cero: true },
    ],
  },
};

const main = async (args?: []) => {
  console.log("Hola, mundo.".random);
  mostrarMenu(menu.principal);
  pausar();
};

main();
