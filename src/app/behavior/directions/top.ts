import { Behavior } from '../behavior';
import { Coordinate } from '../coordinate';

export class Top implements Behavior {
	private increased: number = 0;
	coordinate(): Coordinate {
		return new Coordinate(0,++this.increased);
	}
	reset(): void {
		this.increased = 0;
	}
}