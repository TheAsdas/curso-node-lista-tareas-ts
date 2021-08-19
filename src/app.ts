import colors from "colors";
import { menu } from "./config/menus";
import { mostrarMenu } from "./helpers/mensajes";
import { Tarea } from "./models/tarea";

colors;
console.clear();

const main = async (args?: []) => {
  let opt = null;
  do {
    opt = await mostrarMenu<number>(menu.principal, "Tareas: Menú Principal");
    
    switch (opt) {
      case value:
        
        break;
    
      default:
        break;
    }

    await mostrarMenu<void>(menu.pausa, "", {
      cabecera: false,
      limpiarPantalla: false,
    });
  } while (opt !== 0);

  //pausar();
};

main();
