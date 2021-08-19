import { v4 } from "uuid";

interface Tarea {
  id: string;
  desc: string;
  completadoEn: string | false;
}
type ListaTareas = { [key: string]: Tarea };
class Tarea {
  private static listado: ListaTareas = {};

  private constructor(desc: string) {
    this.id = v4();
    this.desc = desc;
    this.completadoEn = false;
  }

  static crearTarea(desc: string) {
    const tarea = new Tarea(desc);
    Tarea.listado[tarea.id] = tarea;
  }

  /**
   * Arreglo con todas las tareas.
   */
  static get todas() {
    return Object.keys(Tarea.listado).map((key) => Tarea.listado[key]);
  }

  /**
   * Arreglo con todas las tareas.
   */
  static set todas(tareas: Tarea[]) {
    tareas.forEach((t) => (Tarea.listado[t.id] = t));
  }

  /**
   * # Mostrar tareas
   * Muestra todas las tareas con sus estados por consola.
   *
   * @param completadas  Posibles valores: `undefined`, `true`, `false`.
   * - Si es `undefined` muestra todas las tareas.
   * - Si es `true` muestra todas las tareas completadas.
   * - Si es `false` muestra todas las tareas pendientes.
   */
  static listar(completadas?: boolean) {
    let tareasFiltradas =
      completadas === undefined
        ? Tarea.todas
        : completadas
        ? Tarea.todas.filter((t) => t.completadoEn)
        : Tarea.todas.filter((t) => !t.completadoEn);

    console.log();
    tareasFiltradas.forEach(({ desc, completadoEn }, i) =>
      console.log(
        `${i + 1}.`.yellow.bold,
        desc.white,
        "::".yellow.bold,
        completadoEn
          ? `Completada el ${completadoEn}`.green.bold
          : "Pendiente".red.bold
      )
    );
    console.log();
  }

  /**
   * # Borrar una tarea
   * Borra la tarea cuya ID haya sido ingresada.
   * @param id ID de la tarea a borar.
   */
  static borrar(id: string) {
    if (Tarea.listado[id]) delete Tarea.listado[id];
  }

  /**
   * # Alternas estado de las tareas
   * Activa las tareas cuyos IDs fueron enviados en el parametro `ids`, y desactiva las tareas
   * que cuyas IDs no estén en dicho arreglo.
   * @param ids Lista de IDs de tareas completadas.
   */
  static alternar(ids: string[]) {
    Tarea.todas.forEach((t) => {
      if (ids.includes(t.id)) {
        if (!t.completadoEn) t.completadoEn = new Date().toISOString();
      } else t.completadoEn = false;
    });
  }
}

export default Tarea;
