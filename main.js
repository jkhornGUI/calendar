var currentUser = $('#user').val();

var loadUserData = function(){
	$.ajax({
		type: 'GET',
		url: "https://jkhorngui.github.io/calendar/userData.json",
		success: function( data ){
			console.log('success', data);
		},
		failure: function(){console.log("fail");}
	});
};