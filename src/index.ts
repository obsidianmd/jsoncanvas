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
export const APresetColor = {
	Red: "1",
	Orange: "2",
	Yellow: "3",
	Green: "4",
	Cyan: "5",
	Purple: "6",
} as const;
export type APresetColor = (typeof APresetColor)[keyof typeof APresetColor];

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
type Side = "top" | "right" | "bottom" | "left";

export interface JSONCanvasEdge {
	color?: JSONCanvasColor;
	/**
	 * The ID of the node that the edge starts from
	 */
	fromNode: string;
	/**
	 * The side of the node that the edge connects from
	 */
	fromSide?: Side;
	/**
	 * The ID for the edge
	 */
	id: string;
	/**
	 * The text label for the edge
	 */
	label?: string;
	/**
	 * The rendering style of the end of the edge line
	 */
	toEnd?: JSONCanvasEdgeEnd;
	/**
	 * The ID of the node that the edge ends at
	 */
	toNode: string;
	/**
	 * The side of the node that the edge connects to
	 */
	toSide?: Side;
}

export const NodeType = {
	Text: "text",
	File: "file",
	Link: "link",
	Group: "group",
} as const;

export type NodeType = (typeof NodeType)[keyof typeof NodeType];

export interface JSONCanvasNodeGeneric {
	/**
	 * The color of the node
	 */
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
	type: NodeType;
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
export interface JSONCanvasTextNode extends JSONCanvasNodeGeneric {
	type: typeof NodeType.Text;
	/**
	 * Plain text with Markdown syntax
	 */
	text: string;
}
export interface JSONCanvasFileNode extends JSONCanvasNodeGeneric {
	type: typeof NodeType.File;
	/**
	 * The path to the file within the system
	 */
	file: string;
	/**
	 * The subpath that may link to a heading or a block. Always starts with a #
	 */
	subpath?: string;
}
export interface JSONCanvasLinkNode extends JSONCanvasNodeGeneric {
	type: typeof NodeType.Link;
	/**
	 * The URL to link to
	 */
	url: string;
}
export interface JSONCanvasGroupNode extends JSONCanvasNodeGeneric {
	type: typeof NodeType.Group;
	/**
	 * The path to the background image
	 */
	background?: string;
	/**
	 * The rendering style of the background image
	 */
	backgroundStyle?: TheRenderingStyleOfABackgroundImage;
	/**
	 * The text label for the group
	 */
	label?: string;
}
