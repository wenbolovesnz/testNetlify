$(document).ready(function() {
	$("#notify-btn").click(function(){
		var email = $("#inputGroupSuccess1").val();
		ga('send', 'event', 'UserEmail', email, 1);

		$("#pre-submit").hide();
		$("#after-submit").show();
	})
});