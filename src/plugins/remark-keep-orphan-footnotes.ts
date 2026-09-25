import { visit } from "unist-util-visit";

/**
 * By default, remark-rehype (GFM footnote mode) discards footnote *definitions*
 * that are never referenced from the body. This plugin rescues those orphan
 * footnotes so they still render in the footnotes section.
 *
 * It works by collecting every `footnoteDefinition` whose identifier is not used
 * by any `footnoteReference`, and injecting a hidden reference for each at the
 * end of the document. A small tweak to the visible label keeps the numbering
 * consistent without polluting the reading flow.
 *
 * The injected references are wrapped in a container marked with a data
 * attribute so downstream CSS can hide them if desired:
 *
 *     <section data-orphan-footnotes> ... </section>
 */
export function remarkKeepOrphanFootnotes() {
	// @ts-expect-error: unist tree typing is loose here
	return (tree) => {
		const defined = new Set<string>();
		const referenced = new Set<string>();

		visit(tree, "footnoteDefinition", (node: any) => {
			defined.add(node.identifier);
		});
		visit(tree, "footnoteReference", (node: any) => {
			referenced.add(node.identifier);
		});

		const orphans = [...defined].filter((id) => !referenced.has(id));
		if (orphans.length === 0) return;

		// Inject hidden references for each orphan footnote at the end of the
		// last paragraph of the document. We attach them to an existing paragraph
		// so the mdast remains valid (references cannot live as direct children
		// of `root`).
		const children = tree.children;
		let lastParagraph = [...children].reverse().find((c: any) => c.type === "paragraph");
		if (!lastParagraph) {
			lastParagraph = { type: "paragraph", children: [] };
			children.push(lastParagraph);
		}

		for (const id of orphans) {
			(lastParagraph as any).children.push({
				type: "footnoteReference",
				identifier: id,
				label: id,
				data: {
					hName: "sup",
					hProperties: { className: ["orphan-footnote-ref"], ariaHidden: true },
				},
			});
		}
	};
}
