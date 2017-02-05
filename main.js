var userID;
var test;

var loadUserData = function(){

	userID = $('#user').val();
	password = $('#pwd').val();

	$.ajax({
		type: 'GET',
		url: "https://jkhorngui.github.io/calendar/userData.json",
		success: function( userData ){
			
			var userObj = findUser( userID, userData )
			if( password === userObj.password ){
				$('#loginMsg').html("login success");
			}
			else {
				$('#loginMsg').html("login failed");
			}
			
			//test = userData;
		},
		failure: function(){console.log("fail");}
	});
};

var findUser = function( userID, userData ){
	var i;
	
	for( i = 0;; i++ ){
		if( userID == userData[i].id ){
			break;
		}
	}

	return userData[i];
}