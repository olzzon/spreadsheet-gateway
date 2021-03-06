export interface Item {
	id: string
	objectType: string
	objectTime: number
	duration: number
	clipName: string
	attributes: {
		[key: string]: string
	}
}
export interface SheetsItem extends Item {
	position: string // A3:A9
}

export class SheetItem implements Item {
	constructor (
		public id: string,
		public objectType: string,
		public objectTime: number,
		public duration: number,
		public clipName: string,
		public attributes: {
			[key: string]: string
		},
		public position: string
	) { }
}
