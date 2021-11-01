const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 400;
const height = canvas.height = 276;
const frameWidth = 96;
const frameHeight = 101;
const xPos = 150;
const yPos = 100;
const scale = 1;
const fps = 60;
const secondsToUpdate = .5 * fps;
let frameIndex = 0;
let count = 0;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

let currentState = "run";
let spriteSheet = new Image();
spriteSheet.src = "assets/shibadog"+currentState+".png";

const State = {
  states: {},
  generateState: function(name, startIndex, endIndex) {
    if (!this.states[name]) {
      this.states[name] = {
        frameIndex: startIndex,
        startIndex: startIndex,
        endIndex: endIndex,
      };

    }
  },
  getState: function(name) {
    if (this.states[name]) {
      return this.states[name];
    }
  }
};

State.generateState("walk", 0, 3);
State.generateState("walkright", 0, 3);
State.generateState("walkleft", 0, 3);
State.generateState("run", 0, 2);
State.generateState("walkup", 0, 3);
State.generateState("sit", 0, 3);
State.generateState("idle", 2, 3);
State.generateState("sleep", 0, 1);
State.generateState("sitright", 0, 3);
State.generateState("idleright", 3, 4);
State.generateState("happy", 0, 1);
State.generateState("lick", 0, 2);


function animate(state) {
  context.drawImage(
    spriteSheet,
    state.frameIndex * frameWidth,
    0,
    frameWidth,
    frameHeight,
    xPos,
    yPos,
    frameWidth * scale,
    frameHeight * scale
  );

  count ++;
  if (count > secondsToUpdate) {
    state.frameIndex ++;
    count = 0;
  }
  
  if (state.frameIndex > state.endIndex) {
    state.frameIndex = state.startIndex;
  }
}
function frame() {
  context.clearRect(0, 0, width, height);
  animate(State.getState(currentState));
  requestAnimationFrame(frame);
}

frame();