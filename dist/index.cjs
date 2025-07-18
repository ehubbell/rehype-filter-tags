"use strict";
const unistUtilRemove = require("unist-util-remove");
const unistUtilVisit = require("unist-util-visit");
const rehypeFilterTags = (options) => {
  const base = { tags: [] };
  const computedOptions = { ...base, ...options };
  return (tree) => {
    unistUtilVisit.visit(tree, "element", (node) => {
      if (computedOptions.tags.includes(node.tagName)) {
        Object.assign(node.properties, {
          tagName: node.tagName
        });
      } else {
        unistUtilRemove.remove(tree, node);
      }
    });
  };
};
module.exports = rehypeFilterTags;
