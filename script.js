const questions = document.querySelectorAll(".question");
const expansionButton = document.querySelectorAll(".expand");
const answers = document.querySelectorAll(".answer");



document.addEventListener('DOMContentLoaded',() => {
    expansionButton.forEach((button,index) => {
        button.addEventListener('click', () => {
            const isHidden = answers[index].classList.contains("hide");
            if (isHidden) {
                button.innerHTML= '<img src = "assets/images/icon-minus.svg" alt="minimise">';
                answers[index].classList.remove("hide");
            } else {
               button.innerHTML= '<img src = "assets/images/icon-plus.svg" alt="expand">';
                answers[index].classList.add("hide");
            }
        })
        
    })
})

