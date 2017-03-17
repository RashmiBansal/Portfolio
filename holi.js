window.onload = function() {
	$("#splash").hide();
};

$(window).mousemove(function( event ) {
	//console.log(event.originalEvent);
	createAndShowSplash(event.clientX, event.clientY);
});

function createAndShowSplash (topgap, leftgap) {
	copy = $("#splash").clone();

	copy[0].setAttribute("id", "copy_splash");
	copy[0].setAttribute("fill", get_random_color());
	let size = rand(50,300);
	copy[0].setAttribute("width", size+'px');
	copy[0].setAttribute("height", size+'px');
  	copy.css('marginLeft', topgap-size/3+'px');
  	copy.css('margin-top', leftgap-size/3+'px');
	
	copy.appendTo("body");
	copy.show();
}

function rand(min, max) {
    return parseInt(Math.random() * (max-min+1), 10) + min;
}

function get_random_color() {
    var h = rand(1, 360); // color hue between 1 and 360
    var s = rand(30, 100); // saturation 30-100%
    var l = rand(30, 70); // lightness 30-70%
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
