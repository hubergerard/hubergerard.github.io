import { TreeUtils } from "./tree-utils.js";

export class NodeSelectorUtils {
  static #selectNode(node) {
    const { rectRef, textRefs } = node.value;
    rectRef.classList.add("selected");
    textRefs.forEach((textRef) => textRef.classList.add("line-through"));
  }

  static #unselectNode(node) {
    const { rectRef, textRefs } = node.value;
    rectRef.classList.remove("selected");
    textRefs.forEach((textRef) => textRef.classList.remove("line-through"));
  }

  static #selectChildren(node) {
    for (const child of node.children) {
        NodeSelectorUtils.#selectNode(child);
        NodeSelectorUtils.#selectChildren(child);
    }
  }

  static #unselectChildren(node) {
    for (const child of node.children) {
        NodeSelectorUtils.#unselectNode(child);
        NodeSelectorUtils.#unselectChildren(child);
    }
  }

  static makeSelectable(node, root) {
    const rectRef = node.value.rectRef;
    const applyTransparency = () => (rectRef.style.opacity = 0.7);
    const toggleSelected = () => {
      const isRectSelected = rectRef.classList.contains("selected");
      if (isRectSelected) {
        NodeSelectorUtils.#unselectNode(node);
        NodeSelectorUtils.#unselectChildren(node);
      } else {
        NodeSelectorUtils.#selectNode(node);
        NodeSelectorUtils.#selectChildren(node);
      }
      [...TreeUtils.getAllParentsOfNode(node, root)]
        .reverse()
        .forEach((node) => {
          const allChildrenSelected = node.children.every((child) =>
            child.value.rectRef.classList.contains("selected")
          );
          if (allChildrenSelected) {
            NodeSelectorUtils.#selectNode(node);
          } else {
            NodeSelectorUtils.#unselectNode(node);
          }
        });
    };
    const removeTransparency = () => (rectRef.style.opacity = 1);
    rectRef.style.cursor = "pointer";
    rectRef.addEventListener("mouseenter", applyTransparency);
    rectRef.addEventListener("mouseleave", removeTransparency);
    rectRef.addEventListener("click", toggleSelected);

    for (const textRef of node.value.textRefs) {
      textRef.style.cursor = "pointer";
      textRef.addEventListener("mouseenter", applyTransparency);
      textRef.addEventListener("mouseleave", removeTransparency);
      textRef.addEventListener("click", toggleSelected);
    }
  }
}
