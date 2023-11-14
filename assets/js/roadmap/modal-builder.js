export class ModalBuilder {

  static buildLevelElement(level) {
    const levelElement = document.createElement("h4");
    levelElement.className = 'level';
    levelElement.innerHTML = "Votre niveau : " + level;
    return levelElement;
  }

  static buildScoreGlobalElement(scores) {
    const scoreGlobalElement = document.createElement("h4");
    scoreGlobalElement.className = 'score-global';
    scoreGlobalElement.innerHTML = Math.round(scores.total * 100) + "%";
    return scoreGlobalElement;
  }

  static buildScoreDetailsElement(scores) {
    const scoreBeginnerElement = document.createElement("div");
    scoreBeginnerElement.innerHTML =
      "Votre score débutant : ";
      const spanBeginnerElement = document.createElement('span');
      spanBeginnerElement.innerHTML = Math.round(scores.beginner * 100) + "%";
      spanBeginnerElement.style.fontWeight = '600';
      scoreBeginnerElement.append(spanBeginnerElement);

    const scoreAdvancedElement = document.createElement("div");
    scoreAdvancedElement.innerHTML =
      "Votre score avancé : ";
    const spanAdvancedElement = document.createElement('span');
    spanAdvancedElement.innerHTML = Math.round(scores.advanced * 100) + "%";
    spanAdvancedElement.style.fontWeight = '600';
    scoreAdvancedElement.append(spanAdvancedElement);
    

    const scoreArchitectElement = document.createElement("div");
    scoreArchitectElement.innerHTML =
    "Votre score architecte : ";
    const spanArchitectElement = document.createElement('span');
    spanArchitectElement.innerHTML = Math.round(scores.architect * 100) + "%";
    spanArchitectElement.style.fontWeight = '600';
    scoreArchitectElement.append(spanArchitectElement);

    const scoreDetailsElement = document.createElement("div");
    scoreDetailsElement.id = "score-details";
    scoreDetailsElement.append(
      scoreBeginnerElement,
      scoreAdvancedElement,
      scoreArchitectElement
    );
    return scoreDetailsElement;
  }

  static buildProgressBarElement(score) {

    const progressBar = document.createElement("div");
    const progression = document.createElement("div");
    progression.style.width = score * 100 + '%';
    progressBar.id = "progress-bar";
    progression.id = "progress-color";
    progressBar.append(progression);
    return progressBar;
  }
}
