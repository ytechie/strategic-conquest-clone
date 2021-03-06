import { MapCell } from './MapCell';
import { LandCell } from './CellTypes/LandCell';
import { Piece } from './Piece';
import { MapRenderer } from './MapRenderer';

export class Grid {
    readonly Matrix:Array<Array<MapCell>> = [];
    readonly renderer:MapRenderer;
    private cellUpdated:(cell:MapCell) => void;
    private cellClicked:(cell:MapCell) => void;
    private lastActiveCell:MapCell;

    constructor(mapWidth:number, mapHeight:number) {
        this.cellUpdated = (cell) => {};
        this.cellClicked = (cell) => {};

        for(let i = 0; i<mapWidth; i++) {
            this.Matrix[i] = new Array<MapCell>(mapHeight);
            for(let j = 0; j<mapHeight; j++) {
                let newCell = new LandCell();
                newCell.x = i; //maybe add this to the ctor?
                newCell.y = j;
                this.Matrix[i][j] = newCell;
            }
        }
    }

    addPiece(x:number,y:number, piece:Piece) {
        let cell = this.Matrix[x][y];
        cell.pieces.push(piece);

        this.cellUpdated(cell);
    }

    setActiveCell(x:number, y:number) {
        if(this.lastActiveCell) {
            this.lastActiveCell.selected = false;
            this.cellUpdated(this.lastActiveCell);
        }
        let cell = this.Matrix[x][y];
        cell.selected = true;
        this.cellUpdated(cell);
        this.lastActiveCell = cell;
    }

    clickCell(cell:MapCell) {
        this.cellClicked(cell);
    }
    
    listenForChanges(callback:(cell:MapCell) => void) {
        this.cellUpdated = callback;
    }

    listenForClicks(callback:(cell:MapCell) => void) {
        this.cellClicked = callback;
    }
}