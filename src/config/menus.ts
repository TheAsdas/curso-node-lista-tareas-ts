import inquirer from "inquirer";

const respuestaMenu = "respuesta";

enum MenuTypes {
  principal = "principal",
  pausa = "pausa",
}

export const menu: { [key in MenuTypes]: inquirer.QuestionCollection } = {
  principal: {
    type: "list",
    name: respuestaMenu,
    message: "¿Qué deseas hacer?",
    choices: [
      { value: 1, name: "1. Crear tarea" },
      { value: 2, name: "2. Listar tareas" },
      { value: 3, name: "3. Completar tareas" },
      { value: 4, name: "4. Borrar tareas" },
      { value: 0, name: "5. Salir" },
    ],
  },
  pausa: {
    type: "input",
    name: respuestaMenu,
    message: `Presiona ${"ENTER".red} para continuar...`,
  },
};
