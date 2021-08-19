import inquirer from "inquirer";

const name = "respuesta";

export const leerInput = async (message: string) => {
  const question: inquirer.Question[] = [
    {
      type: "input",
      name,
      message,
      validate(val) {
        if (val.length === 0) return "No puedes ingresar nada.";
        return true;
      },
    },
  ];
  const { respuesta } = await inquirer.prompt(question);

  return respuesta;
};

export const pausar = async () => {
  const question: inquirer.Question[] = [
    {
      type: "input",
      name,
      message: `Presiona ${"ENTER".red} para continuar...`,
    },
  ];

  await inquirer.prompt(question);
};
