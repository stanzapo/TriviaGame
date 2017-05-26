var questions = [

	"<p>What four states of matter are observable in everyday life?</p>", 
	"<p>How many holes are there in a full round of golf?</p>", 
	"<p>What animal is the symbol of the United States democratic party?</p>", 
	"<p>What popular beverage once contained cocaine?</p>", 
	"<p>Who sang the version of the song 'Day-O' (The Banana Boat Song) released in 1956?</p>", 
	];

var answers = [
	
	"Water",
	"Fire",
	"Solid",
	"Plasma",
]

for (var q = 0; q < questions.length; q++) {
	$(".container").append(questions[q]);
	$(".container").append("<label><input type='radio' name='optradio1'>Liquid </label>");
	$(".container").append("<label><input type='radio' name='optradio2'>Gas </label>");
	$(".container").append("<label><input type='radio' name='optradio3'>Solid </label>");
	$(".container").append("<label><input type='radio' name='optradio4'>Plasma </label>");
}

$(function(){
$('#hs_timer').countdowntimer({
    hours :1,
    seconds : 0,
    size : "lg"
});
});