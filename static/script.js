

//XP Bar#
const xpbarr = document.querySelector("#xp-bar");
const xplvl = document.querySelector("#xp-lvl");
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
    xplvl.innerHTML = xplvlAmount;
  }

if (xpbarAmount == 0){
    xpbarAmount = 0;
    xpbarr.style.borderBottom = "3px solid white";;
    xpbarr.style.borderImageSlice =  1;
}else{
    xpbarr.style.borderBottom = "3px solid transparent";
    xpbarr.style.borderImage = "linear-gradient(to right,red," + xpbarAmount + "%, " + "white)";
    xpbarr.style.borderImageSlice =  1;
}

const completeTask = document.querySelector('#complete-task');
if (completeTask != null){
    completeTask.addEventListener('click', () => {
        updateXPAmount(20);
        xpbarr.style.borderBottom = "3px solid transparent";
        xpbarr.style.borderImage = "linear-gradient(to right,red," + xpbarAmount + "%, " + "white)";
        xpbarr.style.borderImageSlice =  1;
        console.log(xpbarAmount + " empty.")
        console.log(xpbarAmount + "xpBar");
    });
}

if (xpbarAmount >= 100){
    updateLVL();
    xpbarAmount = 0;
    localStorage.setItem('xpbarAmount', xpbarAmount);
    xpbarr.style.borderBottom = "3px solid white";;
    xpbarr.style.borderImageSlice =  1;
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
const taskRows = document.querySelectorAll('.task-row-display');
const taskBg = document.querySelector('.task-bg');
const taskContent = document.querySelector('#task-name-row');
const taskDesc = document.querySelector('#task-description-row');
taskRows.forEach((taskRow) => {
    taskRow.addEventListener('click', () => {
        
        const taskName = taskRow.querySelector('#class-name').textContent;
        console.log(taskName)
        const taskDescription = taskRow.querySelector('#task-description').textContent;

        taskContent.value = taskName;
        taskDesc.value = taskDescription;

        taskBg.style.display = 'flex';
    });
});
function closePopup() {
    taskBg.style.display = 'none';
}

//Calendar 
const today = new Date();
const todayFormatted = new Intl.DateTimeFormat("en-uk", {
    dateStyle: "medium"
})
document.getElementById("date-month").innerHTML = todayFormatted.format(today);



console.log(xpbarAmount);
console.log(xplvlAmount);

//Background Image