import { existsSync, readFileSync, writeFileSync } from "fs";
import Tarea from "../models/tarea";

const dir = "./db/data.json";

export const guardarDb = (data: any) =>
  writeFileSync(dir, JSON.stringify(data));

export const leerDb = () => {
  return existsSync(dir)
    ? (JSON.parse(readFileSync(dir, { encoding: "utf8" })) as Tarea[])
    : null;
};
