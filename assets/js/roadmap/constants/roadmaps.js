import { RoadmapBuilder } from "../utils/roadmap-builder.js";

export class Roadmaps {
    static BEGINNERS = RoadmapBuilder.getTreesBeginner();
    static ADVANCED = RoadmapBuilder.getTreesAdvanced();
    static ARCHITECT = RoadmapBuilder.getTreesArchitect();
  }