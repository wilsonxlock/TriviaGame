$( document ).ready(function() {
var time = "60";
function timeup (){time--;$(".timer").html("Time left " + time);if (time == "0"){
     $(".timer").html('<img src="assets/javascript/images/donttread.JPG">');}};
function timer(){setInterval(function(){timeup()},1000);}
function start(){
    $(".choice1").html("Start")
    $(".choice2").hide()
    $(".choice3").hide()
    $(".choice4").hide()
    $(".choice1").on("click", function(){
        qpage1()
    })
}
function qpage1 (){
$(".h1").html("whats my favorite color?");
$(".timer").html("time left " + time)
timer()
$(".buttons").show()
$(".choice2").show()
$(".choice3").show()
$(".choice4").show()
$(".choice1").html("blue")
$(".choice2").html("green")
$(".choice3").html("pink")
$(".choice4").html("red")
$(".choice2,.choice3,.choice4").on("click",function(){
    $(".h1").html("Wrong the correct answer is ");
    $(".buttons").hide()
    setTimeout(function(){ qpage2(); }, 3000);
})
$(".choice1").on("click",function(){
    $(".h1").html("Correct!")
    $(".buttons").html()}



)}
function qpage2 (){
$(".h1").html("where was i born");
$(".gif").hide()
$(".timer").html("time left " + time)
$(".buttons").show()
$(".choice1").html("winter haven")
$(".choice2").html("lakeland")
$(".choice3").html("tampa")
$(".choice4").html("florida")
$(".choice2,.choice3,.choice4").on("click",function(){
    $(".h1").html("Wrong the correct answer is ");
    $(".gif").show()
    $(".gif").html('<img src="assets/javascript/images/donttread.JPG">')
    $(".buttons").hide()
    setTimeout(function(){ qpage3(); }, 3000);
})
$(".choice1").on("click",function(){
    $(".h1").html("Correct!")
    $(".gif").show()
    $(".gif").html('<img src="assets/javascript/images/donttread.JPG">')
    $(".buttons").hide()
    setTimeout(function(){ qpage3(); }, 3000);
}

)}
function qpage3 (){
    $(".gif").hide()
    $(".h1").html("do i know what im doing");
    $(".timer").html("time left " + time)
    $(".buttons").show()
    $(".choice1").html("no")
    $(".choice2").html("no")
    $(".choice3").html("no")
    $(".choice4").html("no")
    $(".choice2,.choice3,.choice4").on("click",function(){
        $(".h1").html("Wrong the correct answer is ");
        $(".buttons").hide()
        setTimeout(function(){ qpage3(); }, 3000);
    })
    $(".choice1").on("click",function(){
        $(".h1").html("Correct!")
        $(".buttons").html()}
    
    
    
    )}
start()
})