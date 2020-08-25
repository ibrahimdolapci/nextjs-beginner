import { IImages } from "./images.interface";

export interface IEntry {
    title: string;
    description: string;
    programType: 'series' | 'movie';
    images: IImages;
    releaseYear: number;
}