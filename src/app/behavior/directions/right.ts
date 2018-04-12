import { Behavior } from '../behavior';
import { Coordinate } from '../coordinate';

export class Right implements Behavior {
	private increased: number = 0;
	coordinate(): Coordinate {
		return new Coordinate(++this.increased,0);
	}
	reset(): void {
		this.increased = 0;
	}
}