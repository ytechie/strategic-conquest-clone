import { Grid } from './Grid';
import { MapRenderer } from './MapRenderer';
import { Player } from './Player';

let grid = new Grid(124, 96);
let renderer = new MapRenderer(grid);

let player1 = new Player(grid);