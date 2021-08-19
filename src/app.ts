import colors from "colors";
import { guardarDb, leerDb } from "./helpers/datosLocales";
import {
  borrar,
  confirmar,
  leer,
  listar,
  pausar,
  principal,
} from "./helpers/menus";

import Tarea from "./models/tarea";

colors;

const main = async (args?: []) => {
  let continuar = true;
  let opt;

  Tarea.todas = leerDb() ?? [];
  while (continuar) {
    console.clear();
    switch ((opt = await principal())) {
      case 0 /* Salir */:
        continuar = false;
        pausar(`Tareas guardadas. Presiona  ${"ENTER".yellow} para salir.`);
        break;
      case 1 /* Crear */:
        console.clear();
        Tarea.crearTarea(
          await leer(
            "Ingrese la descripción de la tarea:",
            "Tareas pendientes: agregar una tarea"
          )
        );
        await pausar(
          `Tarea agregada. Presiona ${"ENTER".yellow} para continuar.`
        );
        break;
      case 2 /* Listar */:
        console.clear();
        Tarea.listar(await listar());
        await pausar();
        break;
      case 3 /* Cambiar estado */:
        break;
      case 4 /* Borrar */:
        const id = await borrar(Tarea.todas);
        let seguro;

        if (id) {
          seguro = await confirmar("¿Estás seguro?");
          if (seguro) Tarea.borrar(id);
        }

        await pausar(
          (seguro ? `Tarea borrada exitosamente. ` : "Nada fue borrado. ") +
            `Presiona ${"ENTER".yellow} para continuar.`
        );
        break;
    }
  }

  guardarDb(Tarea.todas);
};

main();
