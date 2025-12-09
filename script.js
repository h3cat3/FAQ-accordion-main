const questions = document.querySelectorAll(".question");
const expansionButton = document.querySelectorAll(".expand");
const answers = document.querySelectorAll(".answer");



document.addEventListener('DOMContentLoaded',() => {
    expansionButton.forEach((button,index) => {
        button.addEventListener('click', () => {
            const isExpanded = answers[index].style.display === "block";
            if (!isExpanded) {
                button.innerHTML= '<img src = "assets/images/icon-minus.svg" alt="minimise">';
                answers[index].style.display = "block";
            } else {
               button.innerHTML= '<img src = "assets/images/icon-plus.svg" alt="expand">';
                answers[index].style.display = "none";
            }
        })
        
    })
})

