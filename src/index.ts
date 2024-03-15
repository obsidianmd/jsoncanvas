export type JSONCanvasColor = string | APresetColor;
/**
 * Six preset colors exist, mapped to the following numbers:
 * 1 red
 * 2 orange
 * 3 yellow
 * 4 green
 * 5 cyan
 * 6 purple
 */
export type APresetColor = "1" | "2" | "3" | "4" | "5" | "6";
/**
 * The rendering style of the end of the edge line
 */
export type JSONCanvasEdgeEnd = "none" | "arrow";
export type JSONCanvasNode =
	| JSONCanvasNodeGeneric
	| JSONCanvasTextNode
	| JSONCanvasFileNode
	| JSONCanvasLinkNode
	| JSONCanvasGroupNode;
/**
 * Options are:
 * cover - fills the entire width and height of the node.
 * ratio - maintains the aspect ratio of the background image.
 * repeat - repeats the image as a pattern in both x/y directions.
 */
export type TheRenderingStyleOfABackgroundImage = "cover" | "ratio" | "repeat";

export interface JsonCanvas {
	/**
	 * Edges are lines that connect one node to another
	 */
	edges?: JSONCanvasEdge[];
	/**
	 * Nodes are objects within the canvas. Nodes may be text, files, links, or groups
	 */
	nodes?: JSONCanvasNode[];
	[k: string]: unknown;
}
export interface JSONCanvasEdge {
	color?: JSONCanvasColor;
	/**
	 * The ID of the node that the edge starts from
	 */
	fromNode: string;
	/**
	 * The side of the node that the edge connects from
	 */
	fromSide?: "top" | "right" | "bottom" | "left";
	/**
	 * The ID for the edge
	 */
	id: string;
	/**
	 * The text label for the edge
	 */
	label?: string;
	toEnd?: JSONCanvasEdgeEnd;
	/**
	 * The ID of the node that the edge ends at
	 */
	toNode: string;
	/**
	 * The side of the node that the edge connects to
	 */
	toSide?: "top" | "right" | "bottom" | "left";
}
export interface JSONCanvasNodeGeneric {
	color?: JSONCanvasColor;
	/**
	 * The height of the node in pixels
	 */
	height: number;
	/**
	 * Unique ID for the node
	 */
	id: string;
	/**
	 * The node type
	 */
	type: "text" | "file" | "link" | "group";
	/**
	 * The width of the node in pixels
	 */
	width: number;
	/**
	 * The x position of the node in pixels
	 */
	x: number;
	/**
	 * The y position of the node in pixels
	 */
	y: number;
}
export interface JSONCanvasTextNode {
	color?: JSONCanvasColor;
	/**
	 * The height of the node in pixels
	 */
	height: number;
	/**
	 * Unique ID for the node
	 */
	id: string;
	/**
	 * Plain text with Markdown syntax
	 */
	text: string;
	/**
	 * The node type
	 */
	type: "text";
	/**
	 * The width of the node in pixels
	 */
	width: number;
	/**
	 * The x position of the node in pixels
	 */
	x: number;
	/**
	 * The y position of the node in pixels
	 */
	y: number;
}
export interface JSONCanvasFileNode {
	color?: JSONCanvasColor;
	/**
	 * The path to the file within the system
	 */
	file: string;
	/**
	 * The height of the node in pixels
	 */
	height: number;
	/**
	 * Unique ID for the node
	 */
	id: string;
	/**
	 * The subpath that may link to a heading or a block. Always starts with a #
	 */
	subpath?: string;
	/**
	 * The node type
	 */
	type: "file";
	/**
	 * The width of the node in pixels
	 */
	width: number;
	/**
	 * The x position of the node in pixels
	 */
	x: number;
	/**
	 * The y position of the node in pixels
	 */
	y: number;
}
export interface JSONCanvasLinkNode {
	color?: JSONCanvasColor;
	/**
	 * The height of the node in pixels
	 */
	height: number;
	/**
	 * Unique ID for the node
	 */
	id: string;
	/**
	 * The node type
	 */
	type: "link";
	url: string;
	/**
	 * The width of the node in pixels
	 */
	width: number;
	/**
	 * The x position of the node in pixels
	 */
	x: number;
	/**
	 * The y position of the node in pixels
	 */
	y: number;
}
export interface JSONCanvasGroupNode {
	/**
	 * The path to the background image
	 */
	background?: string;
	backgroundStyle?: TheRenderingStyleOfABackgroundImage;
	color?: JSONCanvasColor;
	/**
	 * The height of the node in pixels
	 */
	height: number;
	/**
	 * Unique ID for the node
	 */
	id: string;
	/**
	 * The text label for the group
	 */
	label?: string;
	/**
	 * The node type
	 */
	type: "group";
	/**
	 * The width of the node in pixels
	 */
	width: number;
	/**
	 * The x position of the node in pixels
	 */
	x: number;
	/**
	 * The y position of the node in pixels
	 */
	y: number;
}
