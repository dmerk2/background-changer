
$(document).ready(function(){
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
		
		for(var i = 0; i < 3; i++){
			var rgb = [];
			var rgb = rgb.push(Math.floor(Math.random() * 255));
		
		var colors = ['red', 'blue', 'yellow', 'green', 'purple', rgb];
    	$("body").css('background-color', colors[Math.floor(Math.random() * colors.length)]);
		};
	});
});