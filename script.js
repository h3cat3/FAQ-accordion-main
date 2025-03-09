const questions = document.querySelectorAll(".question");
const expansionImg = document.querySelectorAll(".expand");
const answers = document.querySelectorAll(".answer");


console.log(questions);
console.log(expansionImg);
console.log(answers)
document.addEventListener('DOMContentLoaded',() => {
    
expansionImg.forEach((img,index) => {
    img.addEventListener('click', () => {
        const isExpanded = answers[index].style.display === "block";

        if (!isExpanded) {
            img.src = "assets/images/icon-minus.svg";
            answers[index].style.display = "block";
            console.log(answers[index])
        } else {
            img.src = "assets/images/icon-plus.svg";
            answers[index].style.display = "none";
        }
    })
    img.addEventListener('keydown', () => {
        const isExpanded = answers[index].style.display === "block";

        if (!isExpanded) {
            img.src = "assets/images/icon-minus.svg";
            answers[index].style.display = "block";
            console.log(answers[index])
        } else {
            img.src = "assets/images/icon-plus.svg";
            answers[index].style.display = "none";
        }
    })
})
})

