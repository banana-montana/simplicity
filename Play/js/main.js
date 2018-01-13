$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage']
	});
});

// mobile nav menu
function openNav() {
    document.getElementById("myNav").style.height = "100%";
};
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
};