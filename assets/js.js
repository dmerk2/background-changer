
$(document).ready(function(){

function rndColor() {
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7',
               '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
        color = '#', i;
    for (i = 0; i < 6 ; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

	$("#red").on("click", function(){
		$("body").css("background", "red");
	});

	$("#blue").on("click", function(){
		$("body").css("background", "blue");
	});

	$("#yellow").on("click", function(){
		$("body").css("background", "yellow");
	});

	$("#green").on("click", function(){
		$("body").css("background", "green");
	});

	$("#random").on("click", function(){	
			var colors = [rndColor()];
	    	$("body").css('background', colors[Math.floor(Math.random() * colors.length)]);
		});
	});


