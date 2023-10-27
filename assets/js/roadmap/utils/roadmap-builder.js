import { Node } from "../models/node.js";

export class RoadmapBuilder {
  static getTreesBeginner() {
    const trees = [];

    // AngularJs
    const angularJsNode = RoadmapBuilder.#createNode("Rectangle_1", [
      "AngularJs_vs_",
      "Angular",
    ]);
    trees.push(angularJsNode);

    // Angular CLI
    const ngBuildNode = RoadmapBuilder.#createNode("Tracé_109", ["ng_build"]);
    const ngServeNode = RoadmapBuilder.#createNode("Tracé_109-2", ["ng_serve"]);
    const ngNewNode = RoadmapBuilder.#createNode("Tracé_109-3", ["ng_new"]);
    const ngTestNode = RoadmapBuilder.#createNode("Tracé_109-4", ["ng_test"]);
    const ngGenerateNode = RoadmapBuilder.#createNode("Tracé_109-5", [
      "ng_generate",
    ]);
    const ngE2eNode = RoadmapBuilder.#createNode("Tracé_109-6", ["ng_e2e"]);
    const angularCliNode = RoadmapBuilder.#createNode(
      "Rectangle_1-2",
      ["Angular_CLI"],
      [
        ngBuildNode,
        ngServeNode,
        ngNewNode,
        ngTestNode,
        ngGenerateNode,
        ngE2eNode,
      ]
    );
    trees.push(angularCliNode);

    // Composant
    const interpolationNode = RoadmapBuilder.#createNode("Rectangle_2", [
      "Interpolation",
    ]);
    const propertyBindingNode = RoadmapBuilder.#createNode("Rectangle_2-2", [
      "Property_",
      "binding",
    ]);
    const referenceVarsNode = RoadmapBuilder.#createNode("Rectangle_2-3", [
      "Reference_",
      "vars",
    ]);
    const inputOutputNode = RoadmapBuilder.#createNode("Rectangle_2-4", [
      "_Input_",
      "_Output",
    ]);
    const cycleDeVieNode = RoadmapBuilder.#createNode("Rectangle_2-5", [
      "Cycle_de_",
      "vie",
    ]);
    const reactiveFormsNode = RoadmapBuilder.#createNode("Rectangle_2-6", [
      "Reactive_",
      "forms-2",
    ]);
    const templateDrivenFormsNode = RoadmapBuilder.#createNode(
      "Rectangle_2-7",
      ["Template_", "driven_forms"]
    );
    const templateNode = RoadmapBuilder.#createNode(
      "Tracé_109-7",
      ["Template"],
      [
        interpolationNode,
        propertyBindingNode,
        referenceVarsNode,
        inputOutputNode,
        cycleDeVieNode,
      ]
    );
    const formsNode = RoadmapBuilder.#createNode(
      "Tracé_109-8",
      ["Forms"],
      [reactiveFormsNode, templateDrivenFormsNode]
    );
    const composantNode = RoadmapBuilder.#createNode(
      "Rectangle_1-3",
      ["Composants"],
      [templateNode, formsNode]
    );
    trees.push(composantNode);

    // Services
    const casUtilisationNode = RoadmapBuilder.#createNode("Tracé_109-13", [
      "Cas_",
      "d_utilisation",
    ]);
    const fetchingRemoteDataNode = RoadmapBuilder.#createNode("Tracé_109-14", [
      "Fetching_",
      "Remote_Data",
    ]);
    const communicationServiceNode = RoadmapBuilder.#createNode(
      "Tracé_109-15",
      ["Communication_", "service"]
    );
    const dependencyInjectionNode = RoadmapBuilder.#createNode("Tracé_109-16", [
      "Dependency_",
      "Injection",
    ]);
    const interceptorsNode = RoadmapBuilder.#createNode("Tracé_109-17", [
      "Interceptors",
    ]);
    const servicesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-4",
      ["Services"],
      [
        casUtilisationNode,
        fetchingRemoteDataNode,
        communicationServiceNode,
        dependencyInjectionNode,
        interceptorsNode,
      ]
    );
    trees.push(servicesNode);

    // Routing
    const routerOutletNode = RoadmapBuilder.#createNode("Tracé_109-10", [
      "Router_outlet",
    ]);
    const routerLinksNode = RoadmapBuilder.#createNode("Tracé_109-11", [
      "Router_Links",
    ]);
    const routerEventsNode = RoadmapBuilder.#createNode("Tracé_109-12", [
      "Router_events",
    ]);
    const routingNode = RoadmapBuilder.#createNode(
      "Rectangle_1-5",
      ["Routing"],
      [routerOutletNode, routerLinksNode, routerEventsNode]
    );
    trees.push(routingNode);

    return trees;
  }

  static getTreesAdvanced() {
    const trees = [];

    // RoutingAdvanced
    const guardsNode = RoadmapBuilder.#createNode("Tracé_109-20ad", [
      "Guards",
    ]);
    const lazyLoadingNode = RoadmapBuilder.#createNode("Tracé_109-14ad", [
      "Lazy_Loading",
    ]);
    const resolversNode = RoadmapBuilder.#createNode("Tracé_109-15ad", [
      "Resolvers",
    ]);
    const routingAdvancedNode = RoadmapBuilder.#createNode(
      "Rectangle_1-6ad",
      ["Routing"],
      [guardsNode, lazyLoadingNode, resolversNode]
    );
    trees.push(routingAdvancedNode);

    // State management
    const ngxsNode = RoadmapBuilder.#createNode("Tracé_109-16ad", ["Ngxs"]);
    const ngrxNode = RoadmapBuilder.#createNode("Tracé_109-17ad", ["Ngrx"]);
    const statedNode = RoadmapBuilder.#createNode(
      "Rectangle_1-7ad",
      ["State_management"],
      [ngxsNode, ngrxNode]
    );
    trees.push(statedNode);

    // ChangeDetection
    const changeDetectionStrategyNode = RoadmapBuilder.#createNode(
      "Tracé_109-18ad",
      ["ChangeDetectionStrategy-2"]
    );
    const zonesgNode = RoadmapBuilder.#createNode("Tracé_109-19ad", [
      "Zones-2",
    ]);
    const changeDetectionNode = RoadmapBuilder.#createNode(
      "Rectangle_1-8ad",
      ["Change_", "detection"],
      [zonesgNode, changeDetectionStrategyNode]
    );
    trees.push(changeDetectionNode);

    // Custom directive & pipe
    const customeDirectivePipeNode = RoadmapBuilder.#createNode(
      "Rectangle_1-9ad",
      ["Custom_", "directive_pipe"]
    );
    trees.push(customeDirectivePipeNode);

    // Optimisation rendering
    const serverSideRenderingNode = RoadmapBuilder.#createNode(
      "Tracé_109-6ad",
      ["Server_Side_", "Rendering-2"]
    );
    const staticSitegenerationNode = RoadmapBuilder.#createNode(
      "Tracé_109-7ad",
      ["Static_Site_", "Generation"]
    );
    const optimisationRenderingNode = RoadmapBuilder.#createNode(
      "Rectangle_1-3ad",
      ["Optimisation_du_", "rendering"],
      [serverSideRenderingNode, staticSitegenerationNode]
    );
    trees.push(optimisationRenderingNode);

    // PWA
    const serviceWorkersNode = RoadmapBuilder.#createNode("Tracé_109ad", [
      "Service_",
      "workers",
    ]);
    const appShellNode = RoadmapBuilder.#createNode("Tracé_109-5ad", [
      "App_shell",
    ]);
    const pwaNode = RoadmapBuilder.#createNode(
      "Rectangle_1ad",
      ["PWA"],
      [serviceWorkersNode, appShellNode]
    );
    trees.push(pwaNode);

    // i18n
    const pipeI18nPluralNode = RoadmapBuilder.#createNode("Tracé_109-4ad", [
      "pipe_2",
      "i18nPlural",
    ]);
    const pipeI18nSelectsNode = RoadmapBuilder.#createNode(
      "Tracé_109-3ad",
      ["pipe_", "i18nSelect"],
      [pipeI18nPluralNode]
    );
    const ngxTranslateNode = RoadmapBuilder.#createNode("Tracé_109-2ad", [
      "ngx-translate",
    ]);
    const i18nNode = RoadmapBuilder.#createNode(
      "Rectangle_1-2ad",
      ["i18n"],
      [pipeI18nSelectsNode, ngxTranslateNode, pipeI18nPluralNode]
    );
    trees.push(i18nNode);

    // Gestion asynchrome
    const observablesNode = RoadmapBuilder.#createNode("Rectangle_2-3ad", [
      "Operators-3",
    ]);
    const subjectsNode = RoadmapBuilder.#createNode("Rectangle_2-2ad", [
      "Operators-2",
    ]);
    const operatorsNode = RoadmapBuilder.#createNode("Rectangle_2ad", [
      "Operators",
    ]);
    const effectsNode = RoadmapBuilder.#createNode("Rectangle_2-4ad", [
      "Effects",
    ]);
    const computedSignalsNode = RoadmapBuilder.#createNode("Rectangle_2-5ad", [
      "Computed_",
      "Signals-2",
    ]);
    const writibleSignalsNode = RoadmapBuilder.#createNode("Rectangle_2-6ad", [
      "Writible_",
      "Signals-3",
    ]);
    const signalsNode = RoadmapBuilder.#createNode(
      "Tracé_109-9ad",
      ["Signals"],
      [effectsNode, computedSignalsNode, writibleSignalsNode]
    );
    const rxJsNode = RoadmapBuilder.#createNode(
      "Tracé_109-8ad",
      ["RxJs"],
      [operatorsNode, observablesNode, subjectsNode]
    );
    const gestionAsynchroneNode = RoadmapBuilder.#createNode(
      "Rectangle_1-4ad",
      ["Gestion_", "asynchrone"],
      [rxJsNode, signalsNode]
    );
    trees.push(gestionAsynchroneNode);

    // Angular Material
    const layoutNode = RoadmapBuilder.#createNode("Rectangle_2-7ad", [
      "Layout",
    ]);
    const breakpointObserverNode = RoadmapBuilder.#createNode(
      "Rectangle_2-8ad",
      ["Breakpoint_", "Observer"]
    );
    const cdkNode = RoadmapBuilder.#createNode("Tracé_109-10ad", ["CDK"]);
    const responsiveDesignNode = RoadmapBuilder.#createNode(
      "Tracé_109-11ad",
      ["Responsive_", "Design"],
      [layoutNode, breakpointObserverNode]
    );
    const themesNode = RoadmapBuilder.#createNode("Tracé_109-12ad", [
      "Themes",
    ]);
    const schematicsNode = RoadmapBuilder.#createNode("Tracé_109-13ad", [
      "Schematics",
    ]);
    const angularMaterialNode = RoadmapBuilder.#createNode(
      "Rectangle_1-5ad",
      ["Angular_", "Material"],
      [cdkNode, responsiveDesignNode, themesNode, schematicsNode]
    );
    trees.push(angularMaterialNode);

    return trees;
  }

  static getTreesArchitect() {
    const trees = [];

    // Notions générales d'architecture
    const fonctionsPureNode = RoadmapBuilder.#createNode("Tracé_109-3ar", [
      "Fonctions_",
      "pures",
    ]);
    const immuabiliteNode = RoadmapBuilder.#createNode("Tracé_109-4ar", [
      "Immuabilité",
    ]);
    const dependencyInjectionNode = RoadmapBuilder.#createNode(
      "Tracé_109-5ar",
      ["Dependency_", "injection"]
    );
    const notionsGeneraleArchitectureNode = RoadmapBuilder.#createNode(
      "Rectangle_1ar",
      ["Notions_générales_", "d_architecture"],
      [dependencyInjectionNode, immuabiliteNode, fonctionsPureNode]
    );
    trees.push(notionsGeneraleArchitectureNode);

    // Programmation fonctionnelle

    const patternObserverNode = RoadmapBuilder.#createNode("Tracé_109ar", [
      "Pattern_",
      "Observer",
    ]);
    const compositionFluxNode = RoadmapBuilder.#createNode("Tracé_109-2ar", [
      "Composition_",
      "des_flux",
    ]);
    const programmationFonctionnelleNode = RoadmapBuilder.#createNode(
      "Rectangle_1-2ar",
      ["Programmation_", "fonctionnelle"],
      [patternObserverNode, compositionFluxNode]
    );
    trees.push(programmationFonctionnelleNode);

     // Smart vs Dumb component

    const smartVsDumbNode = RoadmapBuilder.#createNode(
      "Rectangle_1-3ar",
      ["Smart_Vs_Dumb_", "component"],
      []
    );
    trees.push(smartVsDumbNode);

      // Gestion des modules

    const standAloneComponentNode = RoadmapBuilder.#createNode("Tracé_109-10ar", [
      "Standalone_",
      "component-2",
    ]);
    const singleComponentNode = RoadmapBuilder.#createNode("Tracé_109-9ar", [
      "Single_Component_",
      "Angular_Module",
    ]);
    const featureShareModuleNode = RoadmapBuilder.#createNode("Tracé_109-8ar", [
      "Feature_Modules_",
      "SharedModule",
    ]);
    const gestionModulesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-4ar",
      ["Gestion_des_", "modules"],
      [featureShareModuleNode, singleComponentNode, standAloneComponentNode]
    );
    trees.push(gestionModulesNode);

    // Découpage en features

    const decoupageFeaturesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-5ar",
      ["Découpage_en_", "features"],
      []
    );
    trees.push(decoupageFeaturesNode);

    // Routing shell

    const routingShellNode = RoadmapBuilder.#createNode(
      "Rectangle_1-6ar",
      ["Routing_shell"],
      []
    );
    trees.push(routingShellNode);

     // Responsabilité service composant

    const responsabiliteServiceComposantNode = RoadmapBuilder.#createNode(
      "Rectangle_1-7ar",
      ["Responsabilité_", "Service_Composant"],
      []
    );
    trees.push(responsabiliteServiceComposantNode);

    // Les 3 couches de données

    const stateNode = RoadmapBuilder.#createNode("Tracé_109-6ar", [
      "Couche_",
      "state",
    ]);
    const businessNode = RoadmapBuilder.#createNode("Tracé_109-7ar", [
      "Couche_2",
      "business",
    ]);
    const viewModelNode = RoadmapBuilder.#createNode("Tracé_109-11ar", [
      "Couche_3",
      "view_Model",
    ]);
    const coucheDonneesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-8ar",
      ["Les_3_couches_", "de_données"],
      [viewModelNode, businessNode, stateNode]
    );
    trees.push(coucheDonneesNode);

      // Notions avancées

    const migrationNode = RoadmapBuilder.#createNode("Tracé_109-12ar", [
      "Migration_par_",
      "itération",
    ]);
    const routerStateNode = RoadmapBuilder.#createNode("Tracé_109-13ar", [
      "Router_state_et_",
      "Formstate_avec_",
      "Ngxs",
    ]);
    const reactiveNode = RoadmapBuilder.#createNode("Tracé_109-14ar", [
      "Programmation_2",
      "réactive_:_Réifiée_et_",
      "transparente"
    ]);
    const ngxsVsNgrxNode = RoadmapBuilder.#createNode("Tracé_109-15ar", [
      "Comparer_Ngxs_",
      "et_Ngrx",
    ]);
    const notionsAvanceesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-9ar",
      ["Notions_", "avancées"],
      [migrationNode, routerStateNode, reactiveNode, ngxsVsNgrxNode]
    );
    trees.push(notionsAvanceesNode);

    return trees;
  }

  static #createNode(rectId, textIds, children = []) {
    const rectRef = document.getElementById(rectId);
    const textRefs = textIds.map((textId) => document.getElementById(textId));
    return new Node({ rectRef, textRefs }, children);
  }
}
