import { Grid } from "./Grid";
import { MapCell } from "./MapCell";

export class MapRenderer {
    grid:Grid;
    divMap = new Map<MapCell, HTMLElement>();;

    constructor(grid:Grid) {
        this.grid = grid;
        let mapElement = document.getElementById('map');

        for(let i=0; i<grid.Matrix.length; i++) {
            grid.Matrix[i].forEach((cell) => {
                let cellElement = document.createElement('div');
                this.divMap.set(cell, cellElement);

                //Set the initial CSS and add it to the page
                cellElement.setAttribute('class', 'mapCell');
                mapElement.appendChild(cellElement);

                cellElement.addEventListener('mouseup', () => { this.cellClicked(cell) });

                this.drawSquare(cell);
            });

            let rowBreakElement = document.createElement('br');
            mapElement.appendChild(rowBreakElement);
        }

        //The callback is wrapped so "this" is correct
        this.grid.listenForChanges((cell) => { this.cellUpdated(cell) });
    }

    cellUpdated(cell:MapCell) {
        this.drawSquare(cell);
    }

    drawSquare(cell:MapCell) {
        //let cell = this.grid.Matrix[x][y];
        let div = this.divMap.get(cell);

        div.style.backgroundColor = cell.BackgroundColor;
        if(cell.pieces.length > 0) {
            div.style.backgroundColor = 'grey';
            div.style.backgroundImage = "url('Sprites/" + cell.pieces[0].SpriteName + "')";
        }
        if(cell.selected) {
            //div.style.borderColor = 'white';
        }
    }

    cellClicked(cell:MapCell) {
        this.grid.clickCell(cell);
    }
}