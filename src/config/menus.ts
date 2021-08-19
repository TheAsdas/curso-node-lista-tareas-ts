import inquirer from "inquirer";

const respuestaMenu = "respuesta";

enum MenuTypes {
  principal = "principal",
  pausa = "pausa",
  input = "input",
}

export const menu: { [key in MenuTypes]: inquirer.QuestionCollection } = {
  principal: {
    type: "list",
    name: respuestaMenu,
    message: "¿Qué deseas hacer?",
    choices: [
      { value: 1, name: "1. ".yellow.bold + "Crear tarea" },
      { value: 2, name: "2. ".yellow.bold + "Listar tareas" },
      { value: 3, name: "3. ".yellow.bold + "Completar tareas" },
      { value: 4, name: "4. ".yellow.bold + "Borrar tareas" },
      { value: 0, name: "0. ".yellow.bold + "Salir" },
    ],
  },
  pausa: {
    type: "input",
    name: respuestaMenu,
    message: `Presiona ${"ENTER".red} para continuar...`,
  },
  input: {
    type: "input",
    name: respuestaMenu,
  },
};
