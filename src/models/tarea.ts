import { v4 } from "uuid";

export interface Tarea {
  id: string;
  desc: string;
  completadoEn: string | false;
}
type ListaTareas = { [key: string]: Tarea };
export class Tarea {
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

  static set todas(tareas: Tarea[]) {
    tareas.forEach((t) => (Tarea.listado[t.id] = t));
  }
}
