export type JSONCanvasColor = string | JSONCanvasColorPreset;
export type JSONCanvasColorPreset = 1 | 2 | 3 | 4 | 5 | 6;
export type JSONCanvasEdgeSide = "top" | "right" | "bottom" | "left";
export type JSONCanvasEdgeEnd = "none" | "arrow";
export type JSONCanvasNode =
	| JSONCanvasNodeType
	| JSONCanvasTextNode
	| JSONCanvasFileNode
	| JSONCanvasLinkNode
	| JSONCanvasGroupNode;

export interface JsonCanvas {
	required?: true;
	edges?: JSONCanvasEdge[];
	nodes?: JSONCanvasNode[];
	[k: string]: unknown;
}
export interface JSONCanvasEdge {
	color?: JSONCanvasColor;
	fromNode: string;
	fromSide?: JSONCanvasEdgeSide;
	id: string;
	label?: string;
	toEnd?: JSONCanvasEdgeEnd;
	toNode: string;
	toSide?: JSONCanvasEdgeSide;
}
export interface JSONCanvasNodeType {
	color?: JSONCanvasColor;
	height: number;
	id: string;
	type: "text" | "file" | "link" | "group";
	width: number;
	x: number;
	y: number;
}
export interface JSONCanvasTextNode {
	color?: JSONCanvasColor;
	height: number;
	id: string;
	text: string;
	type: "text";
	width: number;
	x: number;
	y: number;
}
export interface JSONCanvasFileNode {
	color?: JSONCanvasColor;
	file: string;
	height: number;
	id: string;
	subpath?: string;
	type: "file";
	width: number;
	x: number;
	y: number;
}
export interface JSONCanvasLinkNode {
	color?: JSONCanvasColor;
	height: number;
	id: string;
	type: "link";
	url: string;
	width: number;
	x: number;
	y: number;
}
export interface JSONCanvasGroupNode {
	background?: string;
	backgroundStyle?: "cover" | "ratio" | "repeat";
	color?: JSONCanvasColor;
	height: number;
	id: string;
	label?: string;
	type: "group";
	width: number;
	x: number;
	y: number;
}
