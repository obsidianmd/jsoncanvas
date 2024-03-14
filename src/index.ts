/**
 * Top-level interface for the JSON Canvas Spec
 */
export interface JsonCanvas {
	nodes?: CanvasNode[];
	edges?: Edge[];
}

export default JsonCanvas;

/**
 * Base node interface for common attributes
 */
export interface CanvasNode {
	id: string;
	type: "text" | "file" | "link" | "group";
	x: number;
	y: number;
	width: number;
	height: number;
	color?: CanvasColor;
}

/**
 * Extended node interface for TextNode type
 */
export interface TextNode extends CanvasNode {
	type: "text";
	/**
	 * Text content with Markdown syntax
	 */
	text: string;
}

/**
 * Extended node interface for FileNode type
 */
export interface FileNode extends CanvasNode {
	type: "file";
	/**
	 * Path to the file
	 */
	file: string;
	/**
	 * Optional subpath within the file
	 */
	subpath?: string;
}

/**
 * Extended node interface for LinkNode type
 */
export interface LinkNode extends CanvasNode {
	type: "link";
	/**
	 * URL the node references
	 */
	url: string;
}

/**
 * Extended node interface for GroupNode type
 */
export interface GroupNode extends CanvasNode {
	type: "group";
	/**
	 * Optional text label for the group
	 */
	label?: string;
	/**
	 * Optional path to a background image
	 */
	background?: string;
	/**
	 * Optional rendering style of the background
	 */
	backgroundStyle?: "cover" | "ratio" | "repeat";
}

/**
 * Union type for all node types
 */
export type AllNodes = TextNode | FileNode | LinkNode | GroupNode;

/**
 * Edge interface for connections between nodes
 */
export interface Edge {
	id: string;
	fromNode: string;
	/**
	 * Optional side of the node where the edge starts
	 */
	fromSide?: "top" | "right" | "bottom" | "left";
	/**
	 * Optional style of the edge end
	 */
	fromEnd?: "none" | "arrow";
	toNode: string;
	/**
	 * Optional side of the node where the edge ends
	 */
	toSide?: "top" | "right" | "bottom" | "left";
	/**
	 * Optional style of the edge end
	 */
	toEnd?: "none" | "arrow";
	color?: CanvasColor;
	/**
	 * Optional label for the edge
	 */
	label?: string;
}

/**
 * Type for color, either a string for hex values or a number for preset colors
 */
export type CanvasColor = string | 1 | 2 | 3 | 4 | 5 | 6;
