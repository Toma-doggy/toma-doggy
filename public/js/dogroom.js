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

// potty button actions
const pottybtn = document.getElementById("pottybtn");
pottybtn.addEventListener('click', () =>{
   currentState = "sitright";
   checkSource();
 setTimeout(function() {
    currentState = "idleright";
    checkSource();
    console.log(currentState);
}, .7 * 1000);
setTimeout(function() {
  makePoop()
  currentState = "happy";
  checkSource();
  console.log(currentState);
}, 3.5 * 1000);
setTimeout(function() {
  makePoopSpeech();
}, 10 * 1000);
});

// play button actions 
const playbtn = document.getElementById("playbtn");
playbtn.addEventListener('click', () =>{
    makeBall()
   currentState = "run";
   checkSource();
   setTimeout(function() {
    currentState = "happy";
    checkSource();
    context.clearRect(260,160,30,30);
  }, 10 * 1000);
});
// give treat button actions 
const treatbtn = document.getElementById("treatbtn");
treatbtn.addEventListener('click', () =>{
   currentState = "lick";
   checkSource();
   makeTreat();
   setTimeout(function() {
     makeHeart();
    context.clearRect(250,130,70,55);
    currentState = "happy";
    checkSource();
    console.log(currentState);
  }, 5 * 1000);
  setTimeout(function() {
    context.clearRect(220,47,50,59);
  },8 * 1000);
});
// feed button actions
const feedbtn = document.getElementById("feedbtn");
feedbtn.addEventListener('click', () =>{
  make_item_bowl()
   currentState = "lick";
   checkSource();
   setTimeout(function() {
    makeHeart();
    //  references the x and y position of the dog bowl, and the height and width of the image of the dog bowl 
    context.clearRect(250,150,50,37);
    currentState = "happy";
    checkSource();
  }, 7 * 1000);
  setTimeout(function() {
    context.clearRect(220,47,50,59);
  },11 * 1000);
});
// pick up button
const pickupbtn = document.getElementById("pickupbtn");
pickupbtn.addEventListener('click', () =>{
  context.clearRect(120,160,20,21);
  context.clearRect(70,20,200,91)
});
// dance button
const dancebtn = document.getElementById("dancebtn");
dancebtn.addEventListener('click', ()=>{
  makeDiscoBall();
  currentState = "walk";
  checkSource();
  setTimeout(function() {
    currentState = "happy";
    checkSource();
    context.clearRect(154,0,100,110);
  },10 * 1000);
});
// canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

let currentState = "idle";
// getUserData();
let userbreed = localStorage.getItem("breed");
let breed = userbreed;
let spriteSheet = new Image();
spriteSheet.src = "assets/"+breed+"/"+breed+currentState+".png";

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
  context.clearRect(xPos, yPos, frameWidth, frameHeight );
  animate(State.getState(currentState));
  requestAnimationFrame(frame);
}

frame();

let userChosenItems = ["table"]
let currentItem1 = userChosenItems[0];
// make_item();
function make_item()
{
  itemXpos = 10;
  itemYpos = 100;
  item_image = new Image();
  item_image.src = 'assets/items/item'+currentItem1+'.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}
function make_item_bowl()
{
  itemXpos = 250;
  itemYpos = 150;
  item_image = new Image();
  item_image.src = 'images/Premium_Dog_Food_Small.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}
function makeHeart()
{
  itemXpos = 220;
  itemYpos = 47;
  item_image = new Image();
  item_image.src = 'images/heart-bubble-small.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}
function checkSource(){
  spriteSheet.src = "assets/"+breed+"/"+breed+currentState+".png";
};
function makeTreat()
{
  itemXpos = 250;
  itemYpos = 130;
  item_image = new Image();
  item_image.src = 'images/treatsmall.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}
function makePoop()
{
  itemXpos = 120;
  itemYpos = 160;
  item_image = new Image();
  item_image.src = 'images/poopsmall.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}
function makePoopSpeech()
{
  itemXpos = 70;
  itemYpos = 20;
  item_image = new Image();
  item_image.src = 'images/poop-speech-small.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}
function makeBall()
{
  itemXpos = 260;
  itemYpos = 160;
  item_image = new Image();
  item_image.src = 'images/pixelball-small.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}
function makeDiscoBall()
{
  itemXpos = 154;
  itemYpos = 0;
  item_image = new Image();
  item_image.src = 'images/Disco-Ball-Small.png';
  item_image.onload = function(){
    context.drawImage(item_image, itemXpos, itemYpos);
  }
}


