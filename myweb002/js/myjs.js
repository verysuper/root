
$(document).ready(function() {
    $("#b1").click(function() {
  		$("#show").animate({left:"600px"},1500,"easeOutElastic");
		
    });
	$("#b2").click(function() {
        $("#show").animate({left:""},"slow","easeInOutBack");
    });
});
