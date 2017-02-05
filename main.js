var userID;

var loadUserData = function(){

	userID = $('#user').val();
	password = $('#pwd').val();

	$.ajax({
		type: 'GET',
		url: "https://jkhorngui.github.io/calendar/userData.json",
		success: function( UserData ){
			userObj = findUser( currentUser, Userdata )
			if( password === userObj.password ){
				$('#loginMsg').html("login success");
			}
			else {
				$('#loginMsg').html("login failed");
			}
		},
		failure: function(){console.log("fail");}
	});
};

var findUser = function( user, userData ){

	for( i = 0; user !== userData[i].id; i++ ){}

	return userData[i];
}