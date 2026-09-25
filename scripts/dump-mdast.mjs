import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import fs from "node:fs";

const content = fs.readFileSync("src/content/post/superpowers.md", "utf8");
const tree = unified().use(remarkParse).use(remarkGfm).parse(content);

function walk(n, out = []) {
	if (n.type === "footnoteDefinition" || n.type === "footnoteReference") {
		out.push({ type: n.type, identifier: n.identifier, label: n.label });
	}
	if (n.children) for (const c of n.children) walk(c, out);
	return out;
}
console.log(JSON.stringify(walk(tree), null, 2));
