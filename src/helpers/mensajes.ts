import inquirer from "inquirer";
import readline from "readline";

/* const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); */

interface iMenuOptions {
  cabecera?: boolean;
  limpiarPantalla?: boolean;
}

/**
 * # Inquirer menu
 * Muestra un menu de inquirer.
 * @param menuOpts Opciones del menú.
 * @param titulo Título de la cabecera.
 * @param cabecera Mostrar o no la cabecera. Por defecto la muestra.
 * @returns La opción seleccionada por el usuario en el menú.
 */
export const mostrarMenu = async <T>(
  menuOpts: inquirer.QuestionCollection,
  titulo?: string,
  opciones: iMenuOptions = {
    limpiarPantalla: true,
    cabecera: true,
  }
): Promise<T> => {
  const { limpiarPantalla, cabecera } = opciones;

  if (limpiarPantalla) console.clear();
  if (cabecera) mostrarCabecera(titulo);

  const { respuesta } = await inquirer.prompt(menuOpts);

  return respuesta;
};

/**
 * # Crear línea separadora.
 * Crea una línea separadora de un largo especificado, o de largo 10 si
 * no este no es especificado.
 * @param largo Largo de la línea separadora. Por defecto es 10.
 * @returns Línea separadora del largo especificado.
 */
const separador = (largo = 10) => {
  let linea = "";

  for (let i = 0; i < largo; i++) {
    linea += "=";
  }

  return linea;
};

const mostrarCabecera = (titulo: string = "Seleccione una opción:") => {
  const _largoTitulo = titulo.length;

  console.clear();
  console.log(separador(_largoTitulo + 10).yellow);
  console.log(`     ${titulo}     `.yellow.bold);
  console.log(separador(_largoTitulo + 10).yellow, "\n");
};
