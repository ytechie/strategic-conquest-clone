import { Piece } from "./Piece";

export abstract class MapCell {
    abstract BackgroundColor:string;
    pieces = new Array<Piece>();
    selected:boolean = false;
}