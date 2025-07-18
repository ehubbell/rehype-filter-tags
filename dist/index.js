import { remove } from "unist-util-remove";
import { visit } from "unist-util-visit";
const rehypeFilterTags = (options) => {
  const base = { tags: [] };
  const computedOptions = { ...base, ...options };
  return (tree) => {
    visit(tree, "element", (node) => {
      if (computedOptions.tags.includes(node.tagName)) {
        Object.assign(node.properties, {
          tagName: node.tagName
        });
      } else {
        remove(tree, node);
      }
    });
  };
};
export {
  rehypeFilterTags as default
};
