import inquirer from "inquirer";
import Tarea from "../models/tarea";

type MenuData = inquirer.QuestionCollection;
type Choices = { value: any; name: string; checked?: boolean }[];

const name = "respuesta";

export const leer = async (message: string, titulo?: string) => {
  if (titulo) mostrarCabecera(titulo);
  const { respuesta } = await inquirer.prompt({
    type: "input",
    name,
    message,
    validate(val) {
      if (val.length === 0) return "No puedes ingresar nada.";
      return true;
    },
  });

  return respuesta;
};

export const pausar = async (
  message = `Presiona ${"ENTER".red} para continuar...`
): Promise<void> => {
  const question: MenuData = {
    type: "input",
    name,
    message,
  };
  await inquirer.prompt(question);
};

export const principal = async (): Promise<number> => {
  const question: MenuData = {
    type: "list",
    name,
    message: " Selecciona una opción:",
    choices: [
      { value: 1, name: "1. ".yellow.bold + "Crear tarea" },
      { value: 2, name: "2. ".yellow.bold + "Listar tareas" },
      { value: 3, name: "3. ".yellow.bold + "Completar tareas" },
      { value: 4, name: "4. ".yellow.bold + "Borrar tareas" },
      { value: 0, name: "0. ".yellow.bold + "Guardar y salir" },
    ],
  };

  mostrarCabecera("Tareas pendientes: menú principal");
  const { respuesta } = await inquirer.prompt(question);
  return respuesta;
};

export const listar = async (): Promise<undefined | boolean> => {
  const question: MenuData = {
    type: "list",
    name,
    message: "Mostrar:",
    choices: [
      { value: undefined, name: "Todas".white },
      { value: true, name: "Completadas".green },
      { value: false, name: "Pendientes".red },
    ],
  };

  mostrarCabecera("Tareas pendientes: listar tareas");
  const { respuesta } = await inquirer.prompt(question);
  return respuesta;
};

export const borrar = async (tareas: Tarea[]) => {
  const choices: Choices = tareas.map((t, i) => {
    return { value: t.id, name: `${i + 1}. `.yellow.bold + t.desc };
  });
  choices.unshift({ value: null, name: "0. ".yellow.bold + "Cancelar" });
  const question: MenuData = {
    type: "list",
    name,
    message: "Borrar:",
    choices,
  };

  mostrarCabecera("Tareas pendientes: borrar una tarea");
  const { respuesta } = await inquirer.prompt(question);
  return respuesta;
};

export const confirmar = async (message: string): Promise<boolean> => {
  const { respuesta } = await inquirer.prompt({
    type: "confirm",
    name,
    message,
  });
  return respuesta;
};

export const cambiarEstado = async (tareas: Tarea[]): Promise<string[]> => {
  const choices: Choices = tareas.map((t, i) => {
    return {
      value: t.id,
      name: `${i + 1}. `.yellow.bold + t.desc,
      checked: t.completadoEn ? true : false,
    };
  });

  const { respuesta } = await inquirer.prompt({
    type: "checkbox",
    name,
    message: "Borrar:",
    choices,
  });

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

/**
 * # Muestra un título
 * Imprime un título por consola al usuario.
 * @param titulo Titulo para mostrar
 */
const mostrarCabecera = (titulo: string) => {
  const _largoTitulo = titulo.length;

  console.clear();
  console.log(separador(_largoTitulo + 10).yellow);
  console.log(`     ${titulo}     `.yellow.bold);
  console.log(separador(_largoTitulo + 10).yellow, "\n");
};
