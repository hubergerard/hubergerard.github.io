const sections = [
  document.getElementById("beginner"),
  document.getElementById("advanced"),
  document.getElementById("architect"),
];

function displayRoadmap(i) {
    sections[i].style.display = "block";
    sections
      .filter((_, index) => index != i)
      .forEach((section) => (section.style.display = "none"));
  }