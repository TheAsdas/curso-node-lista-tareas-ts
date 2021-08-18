import readline from "readline";

/* const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); */

export interface MenuData {
  titulo: string;
  opciones: {
    nombre: string;
    accion: (...args: any[]) => any | void;
    cero?: boolean;
  }[];
}

export const mostrarMenu = (data: MenuData) => {
  const _largoTitulo = data.titulo.length;
  console.clear();
  console.log(separador(_largoTitulo + 10).yellow);
  console.log(`     ${data.titulo}     `.yellow.bold);
  console.log(separador(_largoTitulo + 10).yellow, "\n");

  data.opciones.forEach((o, i) => {
    const { cero, nombre } = o;
    console.log(cero ? "0.".green.bold : `${i + 1}.`.green.bold, nombre.white);
  });

  const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  io.question("Selecciona una opción: \n> ", (opt) => {
    io.close();
  });
};

/**
 * # Pausar aplicación
 * Pausa la ejecucción del programa hasta que el usuario presione ENTER para continuar.
 */
export const pausar = () => {
  const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  io.question(`Presiona ${"ENTER".green} para continuar...`, (opt) => {
    io.close();
  });
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
