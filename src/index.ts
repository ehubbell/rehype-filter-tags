import { remove } from 'unist-util-remove';
import { visit } from 'unist-util-visit';

const rehypeFilterTags = options => {
	const base = { tags: [] };
	const computedOptions = { ...base, ...options };
	return tree => {
		visit(tree, 'element', node => {
			if (computedOptions.tags.includes(node.tagName)) {
				Object.assign(node.properties, {
					tagName: node.tagName,
				});
			} else {
				remove(tree, node);
			}
		});
	};
};

export default rehypeFilterTags;

// Docs
// https://github.com/rehype-pretty/rehype-pretty-code/issues/69
// https://github.com/rehypejs/rehype-autolink-headings/blob/main/lib/index.js
// https://github.com/syntax-tree/unist-util-visit
// https://github.com/syntax-tree/unist-util-remove
