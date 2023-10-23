import { ScoreComputerUtils } from "./utils/score-computer-utils.js";
import { Roadmaps } from "./constants/roadmaps.js";
import { TreeUtils } from "./utils/tree-utils.js";
import { NodeSelectorUtils } from "./utils/node-selector-utils.js";

Roadmaps.BEGINNERS.map((node) => TreeUtils.flatten(node)).forEach((flatTree) =>
  flatTree.forEach((node) => {
    NodeSelectorUtils.makeSelectable(node, flatTree[0]);
  })
);

Roadmaps.ADVANCED.map((node) => TreeUtils.flatten(node)).forEach((flatTree) =>
  flatTree.forEach((node) => {
    NodeSelectorUtils.makeSelectable(node, flatTree[0]);
  })
);

Roadmaps.ARCHITECT.map((node) => TreeUtils.flatten(node)).forEach((flatTree) =>
  flatTree.forEach((node) => {
    NodeSelectorUtils.makeSelectable(node, flatTree[0]);
  })
);

ScoreComputerUtils.addComputeScoreListener(
  "buttonScoring",
  "modal-score"
);
