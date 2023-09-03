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




