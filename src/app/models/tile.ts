import { Piece } from './piece';

export class Tile {	
	constructor(piece?: Piece) {
		this.piece = piece;
	}
	
	piece: Piece;
	color: string;
	get isEmpty() {
		return this.piece == null;
	}
}
