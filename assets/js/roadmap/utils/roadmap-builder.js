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
    const guardsNode = RoadmapBuilder.#createNode("Tracé_109-21ad", [
      "Guards-2",
    ]);
    const lazyLoadingNode = RoadmapBuilder.#createNode("Tracé_109-22ad", [
      "Lazy_Loading-2",
    ]);
    const resolversNode = RoadmapBuilder.#createNode("Tracé_109-23ad", [
      "Resolvers-2",
    ]);
    const routingAdvancedNode = RoadmapBuilder.#createNode(
      "Rectangle_1-10ad",
      ["Routing-2ad"],
      [guardsNode, lazyLoadingNode, resolversNode]
    );
    trees.push(routingAdvancedNode);

    // State management
    const ngxsNode = RoadmapBuilder.#createNode("Tracé_109-24ad", ["Ngxs"]);
    const ngrxNode = RoadmapBuilder.#createNode("Tracé_109-25ad", ["Ngrx"]);
    const statedNode = RoadmapBuilder.#createNode(
      "Rectangle_1-11ad",
      ["State_management-2"],
      [ngxsNode, ngrxNode]
    );
    trees.push(statedNode);

    // ChangeDetection
    const changeDetectionStrategyNode = RoadmapBuilder.#createNode(
      "Tracé_109-37ad",
      ["ChangeDetectionStrategy-4"]
    );
    const zonesgNode = RoadmapBuilder.#createNode("Tracé_109-38ad", [
      "Zones-4",
    ]);
    const changeDetectionNode = RoadmapBuilder.#createNode(
      "Rectangle_1-12ad",
      ["Change_2", "detection-2"],
      [zonesgNode, changeDetectionStrategyNode]
    );
    trees.push(changeDetectionNode);

    // Custom directive & pipe
    const customeDirectivePipeNode = RoadmapBuilder.#createNode(
      "Rectangle_1-13ad",
      ["Créer_des_custom_", "directives_pipes"]
    );
    trees.push(customeDirectivePipeNode);

    // Optimisation rendering
    const serverSideRenderingNode = RoadmapBuilder.#createNode(
      "Tracé_109-27ad",
      ["Server_Side_2", "Rendering-4"]
    );
    const staticSitegenerationNode = RoadmapBuilder.#createNode(
      "Tracé_109-28ad",
      ["Static_Site_2", "Generation-2"]
    );
    const optimisationRenderingNode = RoadmapBuilder.#createNode(
      "Rectangle_1-14ad",
      ["Optimisation_du_2", "rendering-3"],
      [serverSideRenderingNode, staticSitegenerationNode]
    );
    trees.push(optimisationRenderingNode);

    // PWA
    const serviceWorkersNode = RoadmapBuilder.#createNode("Tracé_109-26ad", [
      "Service_2",
      "workers-2",
    ]);
    const appShellNode = RoadmapBuilder.#createNode("Tracé_109-40ad", [
      "App_shell-2",
    ]);
    const pwaNode = RoadmapBuilder.#createNode(
      "Rectangle_1-15ad",
      ["PWA-2"],
      [serviceWorkersNode, appShellNode]
    );
    trees.push(pwaNode);

    // i18n
    const pipeI18nPluralNode = RoadmapBuilder.#createNode("Tracé_109-39ad", [
      "Pipe_4",
      "i18nPlural-2",
    ]);
    const pipeI18nSelectsNode = RoadmapBuilder.#createNode(
      "Tracé_109-30ad",
      ["Pipe_3", "i18nSelect-2"],
      [pipeI18nPluralNode]
    );
    const ngxTranslateNode = RoadmapBuilder.#createNode("Tracé_109-29ad", [
      "ngx-translate-2",
    ]);
    const i18nNode = RoadmapBuilder.#createNode(
      "Rectangle_1-16ad",
      ["i18n-2"],
      [pipeI18nSelectsNode, ngxTranslateNode]
    );
    trees.push(i18nNode);

    // Gestion asynchrome
    const observablesNode = RoadmapBuilder.#createNode("Rectangle_2-16ad", [
      "Operators-6",
    ]);
    const subjectsNode = RoadmapBuilder.#createNode("Rectangle_2-15ad", [
      "Operators-5",
    ]);
    const operatorsNode = RoadmapBuilder.#createNode("Rectangle_2-9ad", [
      "Operators-4",
    ]);
    const effectsNode = RoadmapBuilder.#createNode("Rectangle_2-10ad", [
      "Effects-2",
    ]);
    const computedSignalsNode = RoadmapBuilder.#createNode("Rectangle_2-11ad", [
      "Computed_2",
      "Signals-5",
    ]);
    const writibleSignalsNode = RoadmapBuilder.#createNode("Rectangle_2-12ad", [
      "Writible_2",
      "Signals-6",
    ]);
    const signalsNode = RoadmapBuilder.#createNode(
      "Tracé_109-32ad",
      ["Signals-4"],
      [effectsNode, computedSignalsNode, writibleSignalsNode]
    );
    const rxJsNode = RoadmapBuilder.#createNode(
      "Tracé_109-31ad",
      ["RxJs-2"],
      [operatorsNode, observablesNode, subjectsNode]
    );
    const gestionAsynchroneNode = RoadmapBuilder.#createNode(
      "Rectangle_1-17ad",
      ["Gestion_2", "asynchrone-2"],
      [rxJsNode, signalsNode]
    );
    trees.push(gestionAsynchroneNode);

    // Angular Material
    const layoutNode = RoadmapBuilder.#createNode("Rectangle_2-13ad", [
      "Layout-2",
    ]);
    const breakpointObserverNode = RoadmapBuilder.#createNode(
      "Rectangle_2-14ad",
      ["Breakpoint_2", "Observer-2"]
    );
    const cdkNode = RoadmapBuilder.#createNode("Tracé_109-33ad", ["CDK-2"]);
    const responsiveDesignNode = RoadmapBuilder.#createNode(
      "Tracé_109-34ad",
      ["Responsive_2", "Design-2"],
      [layoutNode, breakpointObserverNode]
    );
    const themesNode = RoadmapBuilder.#createNode("Tracé_109-35ad", [
      "Themes-2",
    ]);
    const schematicsNode = RoadmapBuilder.#createNode("Tracé_109-36ad", [
      "Schematics-2",
    ]);
    const angularMaterialNode = RoadmapBuilder.#createNode(
      "Rectangle_1-18ad",
      ["Angular_2", "Material-2"],
      [cdkNode, responsiveDesignNode, themesNode, schematicsNode]
    );
    trees.push(angularMaterialNode);

    return trees;
  }

  static getTreesArchitect() {
    const trees = [];

    // Notions générales d'architecture
    const fonctionsPureNode = RoadmapBuilder.#createNode("Tracé_109-3ac", [
      "Fonctions_",
      "pures",
    ]);
    const immuabiliteNode = RoadmapBuilder.#createNode("Tracé_109-4ac", [
      "Immuabilité",
    ]);
    const dependencyInjectionNode = RoadmapBuilder.#createNode(
      "Tracé_109-5ac",
      ["Dependency_", "injection"]
    );
    const notionsGeneraleArchitectureNode = RoadmapBuilder.#createNode(
      "Rectangle_1ac",
      ["Notions_générales_", "d_architecture"],
      [dependencyInjectionNode, immuabiliteNode, fonctionsPureNode]
    );
    trees.push(notionsGeneraleArchitectureNode);

    // Programmation fonctionnelle

    const patternObserverNode = RoadmapBuilder.#createNode("Tracé_109ac", [
      "Pattern_",
      "Observer",
    ]);
    const compositionFluxNode = RoadmapBuilder.#createNode("Tracé_109-2ac", [
      "Composition_",
      "des_flux",
    ]);
    const programmationFonctionnelleNode = RoadmapBuilder.#createNode(
      "Rectangle_1-2ac",
      ["Programmation_", "fonctionnelle"],
      [patternObserverNode, compositionFluxNode]
    );
    trees.push(programmationFonctionnelleNode);

     // Smart vs Dumb component

    const smartVsDumbNode = RoadmapBuilder.#createNode(
      "Rectangle_1-3ac",
      ["Smart_Vs_Dumb_", "component"],
      []
    );
    trees.push(smartVsDumbNode);

      // Gestion des modules

    const standAloneComponentNode = RoadmapBuilder.#createNode("Tracé_109-10ac", [
      "Standalone_",
      "component-2",
    ]);
    const singleComponentNode = RoadmapBuilder.#createNode("Tracé_109-9ac", [
      "Single_Component_",
      "Angular_Module",
    ]);
    const featureShareModuleNode = RoadmapBuilder.#createNode("Tracé_109-8ac", [
      "Feature_Modules_",
      "SharedModule",
    ]);
    const gestionModulesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-4ac",
      ["Gestion_des_", "modules"],
      [featureShareModuleNode, singleComponentNode, standAloneComponentNode]
    );
    trees.push(gestionModulesNode);

    // Découpage en features

    const decoupageFeaturesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-5ac",
      ["Découpage_en_", "features"],
      []
    );
    trees.push(decoupageFeaturesNode);

    // Routing shell

    const routingShellNode = RoadmapBuilder.#createNode(
      "Rectangle_1-6ac",
      ["Routing_shell"],
      []
    );
    trees.push(routingShellNode);

     // Responsabilité service composant

    const responsabiliteServiceComposantNode = RoadmapBuilder.#createNode(
      "Rectangle_1-7ac",
      ["Responsabilité_", "Service_Composant"],
      []
    );
    trees.push(responsabiliteServiceComposantNode);

    // Les 3 couches de données

    const stateNode = RoadmapBuilder.#createNode("Tracé_109-6ac", [
      "Couche_",
      "state",
    ]);
    const businessNode = RoadmapBuilder.#createNode("Tracé_109-7ac", [
      "Couche_2",
      "business",
    ]);
    const viewModelNode = RoadmapBuilder.#createNode("Tracé_109-11ac", [
      "Couche_3",
      "view_Model",
    ]);
    const coucheDonneesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-8ac",
      ["Les_3_couches_", "de_données"],
      [viewModelNode, businessNode, stateNode]
    );
    trees.push(coucheDonneesNode);

      // Notions avancées

    const migrationNode = RoadmapBuilder.#createNode("Tracé_109-12ac", [
      "Migration_par_",
      "itération",
    ]);
    const routerStateNode = RoadmapBuilder.#createNode("Tracé_109-13ac", [
      "Router_state_et_",
      "Formstate_avec_",
      "Ngxs",
    ]);
    const reactiveNode = RoadmapBuilder.#createNode("Tracé_109-14ac", [
      "Programmation_2",
      "réactive_:_Réifiée_et_",
      "transparente"
    ]);
    const ngxsVsNgrxNode = RoadmapBuilder.#createNode("Tracé_109-15ac", [
      "Comparer_Ngxs_",
      "et_Ngrx",
    ]);
    const notionsAvanceesNode = RoadmapBuilder.#createNode(
      "Rectangle_1-9ac",
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
