import { Coordinate } from './coordinate';

export interface Behavior {
	coordinate(): Coordinate;
	reset(): void;
}