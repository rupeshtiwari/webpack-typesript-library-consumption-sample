declare module "mylib"
{
	export * from './models/product';
	export * from './calculator/calc';
	export * from './utility/util';

	export const version = "1.0";
	export function add(a: number, b: number): number;
	export function multiply(a: number, b: number): number;

	export class Product {
	    name: string;
	    constructor(name: string);
	}

	export interface User {
	    name: string;
	    dob: Date;
	}

	export class Util {
	    static equal(a: string, b: string): boolean;
	}

}