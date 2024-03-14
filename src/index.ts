/**
 * Nodes are objects within the canvas. Nodes may be text, files, links, or groups.
 */
export type ANode =
	| TextTypeNodesStoreText
	| FileTypeNodesReferenceOtherFilesOrAttachmentsSuchAsImagesVideosEtc
	| LinkTypeNodesReferenceAURL
	| GroupTypeNodesAreUsedAsAVisualContainerForNodesWithinIt;
export type TheTypeOfATextNode = "text";
export type TextInPlainTextWithMarkdownSyntax = string;
export type TheTypeOfAFileNode = "file";
export type ThePathToTheFileWithinTheSystem = string;
export type ASubpathThatMayLinkToAHeadingOrABlockAlwaysStartsWith = string;
export type TheTypeOfALinkNode = "link";
export type TheURLReferencedByTheLink = string;
export type TheTypeOfAGroupNode = "text";
export type ATextLabelForTheGroup = string;
export type ThePathToTheBackgroundImage = string;
/**
 * Options are:
 * cover - fills the entire width and height of the node.
 * ratio - maintains the aspect ratio of the background image.
 * repeat - repeats the image as a pattern in both x/y directions.
 */
export type TheRenderingStyleOfTheBackgroundImage =
	| "cover"
	| "ratio"
	| "repeat";
export type AnOptionalArrayOfNodes = ANode[];
export type AUniqueIdentifierForTheEdge = string;
export type TheNodeIdWhereTheConnectionStarts = string;
export type TheSideWhereThisEdgeStarts = "top" | "right" | "bottom" | "left";
export type TheShapeOfTheEndpointAtTheEdgeStart = "none" | "arrow";
export type TheNodeIdWhereTheConnectionEnds = string;
export type TheSideWhereThisEdgeEnds = "top" | "right" | "bottom" | "left";
export type TheShapeOfTheEndpointAtTheEdgeEnd = "none" | "arrow";
export type TheColorOfTheLine = AColorInHexadecimalFormat | APresetColor;
export type AColorInHexadecimalFormat = string;
/**
 * Six preset colors exist, mapped to the following numbers:
 * 1 red
 * 2 orange
 * 3 yellow
 * 4 green
 * 5 cyan
 * 6 purple
 */
export type APresetColor = 1 | 2 | 3 | 4 | 5 | 6;
export type TheTextLabelForTheEdge = string;
export type AnOptionalArrayOfEdges = EdgesAreLinesThatConnectOneNodeToAnother[];

/**
 * Infinite canvas tools are a way to view and organize information spatially, like a digital whiteboard. Infinite canvases encourage freedom and exploration, and have become a popular interface pattern across many apps.
 * The JSON Canvas format was created to provide longevity, readability, interoperability, and extensibility to data created with infinite canvas apps. The format is designed to be easy to parse and give users ownership over their data. JSON Canvas files use the .canvas extension.
 * JSON Canvas was originally created for Obsidian. JSON Canvas can be implemented freely as an import, export, and storage format for any app or tool. This site, and all the resources associated with JSON Canvas are open source under the MIT license.
 */
export interface AnOpenFileFormatForInfiniteCanvasData {
	$schema: string;
	nodes?: AnOptionalArrayOfNodes;
	edges?: AnOptionalArrayOfEdges;
	[k: string]: unknown;
}
export default interface JsonCanvas
	extends AnOpenFileFormatForInfiniteCanvasData {}

export interface TextTypeNodesStoreText {
	type: TheTypeOfATextNode;
	text: TextInPlainTextWithMarkdownSyntax;
	[k: string]: unknown;
}
export interface FileTypeNodesReferenceOtherFilesOrAttachmentsSuchAsImagesVideosEtc {
	type: TheTypeOfAFileNode;
	file: ThePathToTheFileWithinTheSystem;
	subpath?: ASubpathThatMayLinkToAHeadingOrABlockAlwaysStartsWith;
	[k: string]: unknown;
}
export interface LinkTypeNodesReferenceAURL {
	type: TheTypeOfALinkNode;
	url: TheURLReferencedByTheLink;
	[k: string]: unknown;
}
export interface GroupTypeNodesAreUsedAsAVisualContainerForNodesWithinIt {
	type: TheTypeOfAGroupNode;
	label?: ATextLabelForTheGroup;
	background?: ThePathToTheBackgroundImage;
	backgroundStyle?: TheRenderingStyleOfTheBackgroundImage;
	[k: string]: unknown;
}
export interface EdgesAreLinesThatConnectOneNodeToAnother {
	id: AUniqueIdentifierForTheEdge;
	fromNode: TheNodeIdWhereTheConnectionStarts;
	fromSide?: TheSideWhereThisEdgeStarts;
	fromEnd?: TheShapeOfTheEndpointAtTheEdgeStart;
	toNode: TheNodeIdWhereTheConnectionEnds;
	toSide?: TheSideWhereThisEdgeEnds;
	toEnd?: TheShapeOfTheEndpointAtTheEdgeEnd;
	color?: TheColorOfTheLine;
	label?: TheTextLabelForTheEdge;
	[k: string]: unknown;
}
