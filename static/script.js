

//XP Bar
var rootRGBA = document.querySelector(':root');
var rootRGBAGetStyle = getComputedStyle(rootRGBA);
var RGBA = 'rgba('+ rootRGBAGetStyle.getPropertyValue('--xpColourR') + ','+
rootRGBAGetStyle.getPropertyValue('--xpColourG') + ','+ rootRGBAGetStyle.getPropertyValue('--xpColourB') + ',' + '1)';
const xpbarr = document.querySelector("#xp-bar");
const xplvl = document.querySelector("#xp-lvl");

const textColour = document.querySelector(".banner-content");
let xpbarAmount;
let xplvlAmount;
if(xpbarAmount == 100){
    updateLVL();
    xpbarAmount = 0;
    localStorage.setItem('xpbarAmount', xpbarAmount)
}

if (localStorage.getItem('xpbarAmount')) {
  // If the value exists in localStorage, use it
  console.log("yes");
  xpbarAmount = parseInt(localStorage.getItem('xpbarAmount'));
} else {
  // If not, initialize it with a default value
  console.log("no");
  xpbarAmount = 0;
  xplvlAmount = 1;
  xplvl.innerHTML = xplvlAmount;
}  

if (localStorage.getItem('xplvlAmount')) {
    console.log("yes xplvl");
    xplvlAmount = parseInt(localStorage.getItem('xplvlAmount'));
    xplvl.innerHTML = xplvlAmount;
}
else{
    console.log("no xplvl");
    xplvlAmount = 1;
    xplvl.innerHTML = xplvlAmount;
}

if (localStorage.getItem('RGBA')) {
    console.log("yes xplvl");
    RGBA = localStorage.getItem('RGBA');
}
else{
    console.log("no rgba");
}

function updateXPAmount(newValue) {
    console.log(xplvlAmount);
    xpbarAmount = xpbarAmount + newValue;
    // Store the updated value in localStorage
    localStorage.setItem('xpbarAmount', xpbarAmount);
  }


function updateLVL() {
    xplvlAmount = xplvlAmount + 1;
    // Store the updated value in localStorage
    localStorage.setItem('xplvlAmount', xplvlAmount);
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    console.log(`Setting RGB: R=${randomR}, G=${randomG}, B=${randomB}`);

    rootRGBA.style.setProperty('--xpColourR', randomR);
    rootRGBA.style.setProperty('--xpColourG', randomG);
    rootRGBA.style.setProperty('--xpColourB', randomB);

    console.log(`Updated RGB: R=${rootRGBA.style.getPropertyValue('--xpColourR')}, G=${rootRGBA.style.getPropertyValue('--xpColourG')}, B=${rootRGBA.style.getPropertyValue('--xpColourB')}`);
    RGBA = 'rgba('+ rootRGBAGetStyle.getPropertyValue('--xpColourR') + ','+
    rootRGBAGetStyle.getPropertyValue('--xpColourG') + ','+ rootRGBAGetStyle.getPropertyValue('--xpColourB') + ',' + '1)';
    console.log(RGBA + "sjdkfguhsfs");
    localStorage.setItem('RGBA', RGBA);
    xplvl.innerHTML = xplvlAmount;
}

if (xpbarAmount == 0){
    xpbarAmount = 0;
    xpbarr.style.borderBottom = "3px solid white";
    xpbarr.style.boxShadow = "0px 0px 10px 1px "+ RGBA;
    xpbarr.style.borderImageSlice =  1;
}else{
    updateColour();
}

const completeTask = document.querySelector('#complete-task');
if (completeTask != null){
    completeTask.addEventListener('click', () => {
        updateXPAmount(20);
        updateColour();
    });
}

if (xpbarAmount >= 100){
    updateLVL();
    xpbarAmount = 0;
    localStorage.setItem('xpbarAmount', xpbarAmount);
    updateColour();
}
//Accordion JS
const accordion = document.getElementsByClassName('accordion-header');
for (i = 0; i<accordion.length;i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup-bg").style.display = "flex";
})
document.querySelector(".popup-bg").addEventListener("click", function (e) {
    if (!e.target.closest(".popup-content")) {
        document.querySelector(".popup-bg").style.display = "none";
    }
})
document.querySelector(".task-bg").addEventListener("click", function (e) {
    if (!e.target.closest(".task-row-display")) {
        document.querySelector(".task-bg").style.display = "none";
    }
})

// Clickable Rows
const taskRows = document.querySelectorAll('.clickable-task');
const taskBg = document.querySelector('.task-bg');
const taskContent = document.querySelector('#task-name-row');
const taskDesc = document.querySelector('#task-description-row');
taskRows.forEach((taskRow) => {
    taskRow.addEventListener('click', () => {
        
        const taskName = taskRow.querySelector('#task-name').textContent;
        console.log(taskName);
        const taskDescription = taskRow.querySelector('#task-description').textContent;

        taskContent.value = taskName;
        taskDesc.value = taskDescription;

        taskBg.style.display = 'flex';
    });
});
function closePopup() {
    taskBg.style.display = 'none';
}

function updateColour(){
    xpbarr.style.borderBottom = "3px solid white";
    xpbarr.style.borderImage = "linear-gradient(to right," + RGBA + ", "+ xpbarAmount + "%, " + "white)";
    xpbarr.style.boxShadow = "0px 0px 10px 1px "+ RGBA;
    xpbarr.style.borderImageSlice =  1;
    textColour.style.color = RGBA;
}
//Calendar 
const today = new Date();
const todayFormatted = new Intl.DateTimeFormat("en-uk", {
    dateStyle: "medium"
})
document.getElementById("date-month").innerHTML = todayFormatted.format(today);

console.log(xpbarAmount);
console.log(RGBA);
console.log(xplvlAmount);

//Background Image