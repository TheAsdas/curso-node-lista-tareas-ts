import colors from "colors";
import { menu } from "./config/menus";
import { guardarDb, leerDb } from "./helpers/datosLocales";
import { leerInput, pausar } from "./helpers/inquirer";
import { mostrarMenu } from "./helpers/mensajes";
import { Tarea } from "./models/tarea";

colors;
console.clear();

const main = async (args?: []) => {
  let opt = null;

  Tarea.todas = leerDb() ?? [];

  do {
    opt = await mostrarMenu<number>(menu.principal, "Tareas: Menú Principal");

    switch (opt) {
      case 1:
        //crear tarea
        Tarea.crearTarea(
          await leerInput("Ingrese la descripción de la tarea:")
        );
        break;
      case 2:
        console.log(Tarea.todas);
        break;
      case 3:
        break;
    }

    if (opt !== 0) await pausar();
  } while (opt !== 0);

  guardarDb(Tarea.todas);
  //pausar();
};

main();
