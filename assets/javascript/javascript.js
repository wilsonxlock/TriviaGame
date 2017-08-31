$( document ).ready(function() {
var time = "90";
function timeup (){time--;$(".timer").html("Time left " + time);if (time == "0"){
     $(".timer").html('<img src="assets/javascript/images/donttread.JPG">');$(".choice1,.chocie2,.choice3,.chocie4").hide();end()}};
function timeclock(){setInterval(function(){timeup()},1000);}
var correct = "0";
var incorrect = "0";
function start(){
    $(".choice1").hide()
    $(".choice2").hide()
    $(".choice3").hide()
    $(".choice4").hide()
    $(".gif").html('<img src="assets/javascript/images/start.png">')
    $(".gif").on("click", function(){
        qpage1()
        timeclock()
    })
}
function end(){
    $(".h1").html("Thanks for playing!");
    $(".choice1").html("Restart")
    $(".choice2").html("Number correct: "+ correct)
    $(".choice3").html("Number Wrong: " + incorrect)
    $(".choice4").hide()
    $(".choice1").on("click", function(){
        start()
    })
}
function qpage1 (){
$(".h1").html("What year did the Dollar lose the gold backing?");
$(".buttons").show()
$(".gif").hide()
$(".choice1").show()
$(".choice2").show()
$(".choice3").show()
$(".choice4").show()
$(".choice1").html("1933")
$(".choice2").html("1942")
$(".choice3").html("1968")
$(".choice4").html("it hasn't")
$(".choice2,.choice3,.choice4").on("click",function(){
    incorrect++
    $(".h1").html("Wrong the correct answer is 1933");
    $(".buttons").hide()
    $(".gif").show()
    $(".gif").html('<img src="https://media.giphy.com/media/wb6xgCSpLl0m4/giphy.gif" width=100%>')
    setTimeout(function(){ qpage2(); }, 5000);
    return;
})
$(".choice1").on("click",function(){
    correct++
    $(".h1").html("Correct!")
    $(".buttons").hide()
    $(".gif").show()
    $(".gif").html('<img src="https://media.giphy.com/media/wb6xgCSpLl0m4/giphy.gif" width=100%>')
    setTimeout(function(){ qpage2(); }, 5000);
    return;
})}



function qpage2 (){
$(".h1").html("What kind of currency is the American Dollar?");
$(".gif").hide()
$(".buttons").show()
$(".choice1").html("Secured")
$(".choice2").html("Backed")
$(".choice3").html("Fiat")
$(".choice4").html("Reciept")
$(".choice2,.choice1,.choice4").on("click",function(){
    incorrect++
    $(".h1").html("Wrong the correct answer is Fiat");
    $(".gif").show()
    $(".gif").html('<img src="https://media.giphy.com/media/lZd4oyt1EzC3C/giphy.gif" width=100%>')
    $(".buttons").hide()
    setTimeout(function(){ qpage3(); }, 5000);
    return;
})
$(".choice3").on("click",function(){
    correct++
    $(".h1").html("Correct!")
    $(".gif").show()
    $(".gif").html('<img src="https://media.giphy.com/media/lZd4oyt1EzC3C/giphy.gif" width=100%>')
    $(".buttons").hide()
    setTimeout(function(){ qpage3(); }, 5000);
    return;
}

)}
function qpage3 (){
    $(".gif").hide()
    $(".h1").html("Who is the founder/creator of Bitcoin's design?");
    $(".buttons").show()
    $(".choice1").html("Vitalik Buterin")
    $(".choice2").html("Satoshi Nakamoto")
    $(".choice3").html("Kid Cudi")
    $(".choice4").html("Ben Shapiro")
    $(".choice1,.choice3,.choice4").on("click",function(){
        incorrect++
        $(".h1").html("Wrong the correct answer is Satoshi Nakamoto");
        $(".buttons").hide()
        $(".gif").show()
        $(".gif").html('<img src="https://media.giphy.com/media/GMIbzgzyS4pws/giphy.gif" width=100%>')
        setTimeout(function(){ qpage4(); }, 5000);
        return;
    })
    $(".choice2").on("click",function(){
        correct++
        $(".h1").html("Correct!")
        $(".buttons").hide()
        $(".gif").show()
        $(".gif").html('<img src="https://media.giphy.com/media/GMIbzgzyS4pws/giphy.gif" width=100%>')
        setTimeout(function(){ qpage4(); }, 5000);
        return;
        }
         )}
    function qpage4 (){
        $(".gif").hide()
        $(".h1").html("What is it called when a currency consistantly looses value?");
        $(".buttons").show()
        $(".choice1").html("Keynesian Economics")
        $(".choice2").html("Renumeration")
        $(".choice3").html("Quantitative Easing")
        $(".choice4").html("Inflation")
        $(".choice2,.choice3,.choice1").on("click",function(){
            incorrect++
            $(".h1").html("Wrong the correct answer is Inflation");
            $(".buttons").hide()
            $(".gif").show()
            $(".gif").html('<img src="https://media.giphy.com/media/tpwRrFJtQlQD6/giphy.gif" width=100%>')
            setTimeout(function(){ qpage5(); }, 5000);
            return;
        })
        $(".choice4").on("click",function(){
            correct++
            $(".h1").html("Correct!")
            $(".buttons").hide()
            $(".gif").show()
            $(".gif").html('<img src="https://media.giphy.com/media/tpwRrFJtQlQD6/giphy.gif" width=100%>')
            setTimeout(function(){ qpage5(); }, 5000);
            return;
        
        }
        )}
        function qpage5 (){
            $(".gif").hide()
            $(".h1").html("Which of these is most related to capitalism?");
            $(".buttons").show()
            $(".choice1").html("Karl Marx")
            $(".choice2").html("Austrian Economics")
            $(".choice3").html("Government Welfare")
            $(".choice4").html("That guy you know that wears a Trump hat")
            $(".choice1,.choice3,.choice4").on("click",function(){
                incorrect++
                $(".h1").html("Wrong the correct answer is Austrian Economics");
                $(".buttons").hide()
                $(".gif").show()
                $(".gif").html('<img src="https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif" width=100%>')
                setTimeout(function(){ qpage2(); }, 5000);
                return;
            })
            $(".choice2").on("click",function(){
                correct++
                $(".h1").html("Correct!")
                $(".buttons").hide()
                $(".gif").show()
                $(".gif").html('<img src="https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif" width=100%>')
                setTimeout(function(){ end(); }, 5000);
            return;
        }
            
            
            
            )}
start()
})