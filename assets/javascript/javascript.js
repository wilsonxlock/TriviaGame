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
function start(){
    $(".choice1").html("Start")
    $(".choice2").hide()
    $(".choice3").hide()
    $(".choice4").hide()
    $(".choice1").on("click", function(){
        qpage1()
    })
}
function qpage1 (){$(".h1").html(questions[0].string1);
$(".timer").hide()
$(".buttons").show()
$(".choice2").show()
$(".choice3").show()
$(".choice4").show()
$(".choice1").html(questions[0].choice.right)
$(".choice2").html(questions[0].choice.wrong[0])
$(".choice3").html(questions[0].choice.wrong[1])
$(".choice4").html(questions[0].choice.wrong[2])
$(".choice2,.choice3,.choice4").on("click",function(){
    $(".h1").html("Wrong the correct answer is ");
    $(".timer").show()
    $(".timer").html()
    $(".buttons").hide()
    setTimeout(function(){ qpage2(); }, 3000);
})
$(".choice1").on("click",function(){
    $(".h1").html("Correct!")
    $(".buttons").html()}



)}
function qpage2 (){$(".h1").html(questions[1].string1);
$(".timer").hide()
$(".buttons").show()
$(".choice1").html(questions[0].choice.right)
$(".choice2").html(questions[0].choice.wrong[0])
$(".choice3").html(questions[0].choice.wrong[1])
$(".choice4").html(questions[0].choice.wrong[2])
$(".choice2,.choice3,.choice4").on("click",function(){
    $(".h1").html("Wrong the correct answer is ");
    $(".timer").show()
    $(".timer").html()
    $(".buttons").hide()
    setTimeout(function(){ qpage2(); }, 3000);
})
$(".choice1").on("click",function(){
    $(".h1").html("Correct!")
    $(".buttons").html()}



)}
start()
})