// userID used to hold userID of user selected
var userID;
var userObj;

$(document).ready( function(){
	$( "#login" ).html( formLogin );
});

/**
*	loadUserData()
*	This function takes the values selected/entered by the user.
*	It executes an ajax call to retrieve info of all users.
*	Returns void
*/
var loadUserData = function(){

	// get userID from the user selected
	userID = $('#user').val();
	
	// get pass entered by user
	var entPass = $('#pwd').val();

	// ajax call to get json of all user data
	$.get( "https://jkhorngui.github.io/calendar/user/userData.json",
			function( userData ){
			// get user object
			userObj = findUser( userID, userData )
			// verify password
			checkPassword( entPass, userObj );
		});
};

/**
*	findUser( userID, userData )
*	param: userID is an integer. It is the ID of the user selected by the user.
*		   userData is an array of user objects of all users
*	Traverses through array to find correct user object.
*/
var findUser = function( userID, userData ){
	
	// i is used for the index to traverse throuhg the array
	var i;
	
	for( i = 0;; i++ ){
		
		// checking to see if IDs are the same
		// the for loop id infinite so it break if the 
		// statement is true
		if( userID == userData[i].id ){
			break;
		}
	}

	// return correct user object
	return userData[i];
}

/**
*	checkPassword( entPass, userObj )
*	param: entPass is a string the user has enetered
*		   userObj is a user Object
*	Function verifies the password.
*/
var checkPassword = function( entPass, userObj ){
	
	// displays message if login is successful or not.
	if( entPass === userObj.password ){
		$('#loginMsg').html("login success");
		
		// display change password form when first login		
		if( userObj.firstTimeLogin ){
			$("#firstTimeLogin").html(chgPassForm);
		}
		
		// remove red border if in the case the user enetered
		// pass incorrectly
		$("#pwdInput").removeClass('has-error');
		
		// disable user ability to change users
		$("#user").attr("disabled",true);
	}
	else {
		$('#loginMsg').html("login failed");
		$("#pwdInput").addClass('has-error');
	}
};