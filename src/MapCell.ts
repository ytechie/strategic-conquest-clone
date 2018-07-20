import { Piece } from "./Piece";

export abstract class MapCell {
    x:number;
    y:number;
    abstract BackgroundColor:string;
    pieces = new Array<Piece>();
    selected:boolean = false;
}