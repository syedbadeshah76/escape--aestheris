const scenes = [
  {
    text: "You awaken in a cryo-chamber on a derelict alien spaceship. What do you do?",
    choices: ["Explore the hallway", "Stay and hide"],
    next: [1, 2]
  },
  {
    text: "You encounter hostile robots. What now?",
    choices: ["Run to the pod bay", "Try to hack the robots"],
    next: [3, 4]
  },
  {
    text: "You remain hidden too long. Oxygen runs out. GAME OVER.",
    choices: [],
    next: []
  },
  {
    text: "You make it to an escape pod. You survive. YOU WIN!",
    choices: [],
    next: []
  },
  {
    text: "The robots detect and zap you. GAME OVER.",
    choices: [],
    next: []
  }
];

let current = 0;

function renderScene() {
  const textBox = document.getElementById("scene-text");
  const choicesBox = document.getElementById("choices");
  textBox.innerHTML = scenes[current].text;
  choicesBox.innerHTML = "";

  scenes[current].choices.forEach((choice, index) => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.innerText = choice;
    btn.onclick = () => {
      current = scenes[current].next[index];
      renderScene();
    };
    choicesBox.appendChild(btn);
  });
}

window.onload = renderScene;
