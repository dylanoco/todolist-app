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
    // Check if the clicked element is the popup content or a child of it
    if (!e.target.closest(".popup-content")) {
        document.querySelector(".popup-bg").style.display = "none";
    }
})