import fs from "fs";
import path, { dirname } from "path";
import { Config, createGenerator } from "ts-json-schema-generator";
import { fileURLToPath } from "url";

const file = process.argv[2];
if (!file) {
	console.error("No file path provided");
	process.exit(1);
} else if (!fs.existsSync(file)) {
	console.error("Provided path does not exist");
	process.exit(1);
} else if (!fs.lstatSync(file).isFile()) {
	console.error("Provided path is not a file");
	process.exit(1);
} else if (!file.endsWith(".ts")) {
	console.error("Provided file is not a typescript file");
	process.exit(1);
}
const rootType = process.argv[3].trim();
if (!rootType) {
	console.error("No root type provided");
	process.exit(1);
} else if (rootType.length === 0) {
	console.error("Root type cannot be empty");
	process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../");
const srcRoot = path.join(projectRoot, "src");
const tsconfig = path.join(projectRoot, "tsconfig.json");

function generate(file: string, rootType: string = "JsonCanvas") {
	const relativePath = path.relative(__dirname, file);
	const config: Config = {
		path: relativePath,
		tsconfig: tsconfig,
		type: rootType,
		topRef: true,
		additionalProperties: false,
		sortProps: true,
	};

	const outputPath = path.join(projectRoot, "jsoncanvas.schema.json");
	const gnerator = createGenerator(config);
	const schema = gnerator.createSchema(config.type);
	const schemaString = JSON.stringify(schema, null, 2);
	fs.writeFileSync(outputPath, schemaString);
}

generate(file);
