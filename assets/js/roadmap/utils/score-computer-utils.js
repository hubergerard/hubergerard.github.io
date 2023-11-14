import { Roadmaps } from "../constants/roadmaps.js";
import { ModalBuilder } from "../modal-builder.js";

export class ScoreComputerUtils {
  static addComputeScoreListener(buttonId, scoreDivId) {
    const scoreListener = () => {
      const scores = ScoreComputerUtils.#globalScore();
      const level = ScoreComputerUtils.#getLevel(scores);
      document.getElementById(scoreDivId).innerHTML = "";
      const elements = [
        ModalBuilder.buildLevelElement(level),
        ModalBuilder.buildScoreGlobalElement(scores),
        ModalBuilder.buildProgressBarElement(scores.total),
        ModalBuilder.buildScoreDetailsElement(scores),
      ];
      document.getElementById(scoreDivId).append(...elements);
    };
    document.getElementById(buttonId).addEventListener("click", scoreListener);
  }



  static #globalScore() {
    const beginnerScore = ScoreComputerUtils.#computeScore(Roadmaps.BEGINNERS);
    const advancedScore = ScoreComputerUtils.#computeScore(Roadmaps.ADVANCED);
    const architectScore = ScoreComputerUtils.#computeScore(Roadmaps.ARCHITECT);
    return {
      total: (beginnerScore + advancedScore + architectScore) / 3,
      beginner: beginnerScore,
      advanced: advancedScore,
      architect: architectScore,
    };
  }

  static #computeScore(roadmap) {
    let count = 0;
    let countSelected = 0;

    function traverse(node) {
      count++;
      if (node.value.rectRef.classList.contains("selected")) {
        countSelected++;
      }
      if (node.children) {
        for (const child of node.children) {
          traverse(child); // Appel récursif pour les nœuds enfants
        }
      }
    }
    for (const tree of roadmap) {
      traverse(tree);
    }

    return countSelected / count;
  }

  static #getLevel(scores) {
    if (scores.beginner < 0.7) {
      return "Néophyte";
    }
    if (scores.advanced < 0.7) {
      return "Débutant";
    }
    if (scores.architect < 0.7) {
      return "Avancé";
    }
    return "architecte";
  }

}
