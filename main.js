var loadUserData = function(){
	console.log('test');
	$.ajax({
		type: 'GET',
		url: "https://jkhorngui.github.io/calendar/userData.json",
		success: function( data ){
			console.log('success');
		},
		failure: function(){console.log("fail");}
	});
};