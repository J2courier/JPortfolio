const message = document.querySelector(".secret-message");
const info = document.querySelector(".info-section");
const doneBtn = document.querySelector(".done");
const pfp = document.querySelector(".Jpfp");
const openMessage = document.querySelector(".openMsg");
const obstacle = document.querySelector(".pop-the-obstacle");
const lairObstacle = document.querySelector(".container-for-obs1, .container-for-obs2, .container-for-obs3");
const ruleContainer = document.querySelector(".container-for-rules");
const welcomeMsg = document.querySelector(".welcomeMsg");
const goodluck = document.querySelector(".goodluck");

message.addEventListener("click", ()=>{
    info.style.display = "block";
    openMessage.style.display = "block";
    message.style.display = "none";
    ruleContainer.style.display = "none";
    labelInfo.style.position = "Absolute";
    labelInfo.style.top = "390px";
    
});
openMessage.addEventListener("click", ()=>{
    info.style.display = "none";
    openMessage.style.display = "none";
    message.style.display = "block";
    ruleContainer.style.display = "block";
    welcomeMsg.style.position = "absolute";
    welcomeMsg.style.left = "100px";
    goodluck.style.position = "absolute";
    goodluck.style.left = "100px";
});

doneBtn.addEventListener("click", ()=>{
    info.style.display = "none";
    pfp.style.display = "none";
    openMessage.style.display = "none";
    message.style.display = "block";
    ruleContainer.style.display = "block";
    pfp.style.display = "block";
    welcomeMsg.style.position = "absolute";
    welcomeMsg.style.left = "100px";
    goodluck.style.position = "absolute";
    goodluck.style.left = "100px";
});

lairObstacle.addEventListener("click", ()=>{
    if (obstacle.style.display = "none"){
        obstacle.style.display = "block";
    } 
});

let position = 300;
let direction = 1; 
const stepSize = 0.3; 
const delay = 10; 

function moveDiv() {
  const element = document.querySelector(".secret-message");
  const minPosition = 300; 
  const maxPosition = 310; 

  function animate() {
    position += stepSize * direction; 

    if (position >= maxPosition || position <= minPosition) {
      direction *= -1; 
      setTimeout(() => {
        requestAnimationFrame(animate); 
      }, delay); 
    } else {
      requestAnimationFrame(animate); 
    }

    element.style.top = position + 'px'; 
  }

  requestAnimationFrame(animate); 
}

moveDiv();


