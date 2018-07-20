import { Piece } from "./Piece";
import { Tank } from "./Pieces/Tank";
import { Grid } from "./Grid";

export class Player {
    pieces = new Array<Piece>();

    constructor(grid:Grid) {
        let firstTank = new Tank();
        this.pieces.push(firstTank);

        grid.addPiece(4, 4, firstTank);
        grid.setActiveCell(4,4);
    }
}