var loadUserData = function(){
	$.ajax({
		type: 'GET',
		url: "userData.json",
		success: function( data ){
			console.log( 'success', data );
		}
	});
};