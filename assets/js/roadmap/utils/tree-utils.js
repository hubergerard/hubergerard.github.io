export class TreeUtils {
  static getAllParentsOfNode(node, root) {
    if (root === node) {
      return [];
    }
    if (root.children.length === 0) {
      return [];
    }
    if (root.children.includes(node)) {
      return [root];
    }
    if (
      root.children
        .flatMap((child) => TreeUtils.getAllParentsOfNode(node, child))
        .some((node) => node != undefined)
    ) {
      return [
        root,
        ...root.children.flatMap((child) => TreeUtils.getAllParentsOfNode(node, child)),
      ];
    }
    return [
      ...root.children.flatMap((child) => TreeUtils.getAllParentsOfNode(node, child)),
    ];
  }

  static flatten(node) {
    const flattenedNodes = [node];

    for (const child of node.children) {
      flattenedNodes.push(...TreeUtils.flatten(child));
    }

    return flattenedNodes;
  }
}
