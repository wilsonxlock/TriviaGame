$( document ).ready(function() {
var questions = [
    {string1: "question1",
    choice: {
        right: "answer 1",
        wrong: ["answer2", "answer3","answer4"]
    }
    },
    {string2: "question2",
    choice: {
        right: "answer 1",
        wrong: ["answer2", "answer3","answer4"]
    }
    }
]
function qpage1 (){$(".h1").html(questions[0].string1);
$(".choice1").html(questions[0].choice.right)
$(".choice2").html(questions[0].choice.wrong[0])
$(".choice3").html(questions[0].choice.wrong[1])
$(".choice4").html(questions[0].choice.wrong[2])
$(".choice2,.choice3,.choice4").on("click",function(){
    console.log("wrong")
    wrongscreen("choice1",'<img src="https://media.giphy.com/media/3ohzdYTdnKMNqY2eJO/giphy.gif">')
})
$(".choice1").on("click",function(){
    console.log("right")
    rightscreen()

})
}
function wrongscreen (x,y){
    $(".h1").html("Wrong the correct answer is "+ x);
    $(".buttons").html(y)
    
}
function rightscreen (y){
$(".h1").html("Correct!")
$(".buttons").html(y)}
qpage1()
})