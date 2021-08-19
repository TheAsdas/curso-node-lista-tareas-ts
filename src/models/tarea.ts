import { v4 } from "uuid";

export class Tarea {
  id: string;
  desc: string;
  completadoEn?: string;

  static listado: { [key: string]: Tarea } = {};

  private constructor(desc: string) {
    this.id = v4();
    this.desc = desc;
  }

  public static crearTarea(desc: string) {
    const tarea = new Tarea(desc);
    Tarea.listado[tarea.id] = tarea;
  }
}
