import { IEntry } from "./entry.interface";

export interface IResponse {
    total: number;
    entries: IEntry[]
}