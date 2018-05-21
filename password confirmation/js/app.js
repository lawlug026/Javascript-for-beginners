//problem; Hints are shown even when forms are valid
//soln: hide them when form is valid

//hide the hints
$('form span').hide()

$password = $('#password');
$confirmPassword = $('#passwordC');

function passwordEvent(){
	
	if($password.val().length > 7){
		$password.next().hide();
	}else{
		$password.next().show();
	}

}

function confirmPasswordEvent(){
	
	if($password.val() === $confirmPassword.val()){
		$confirmPassword.next().hide();
	}else{
		$confirmPassword.next().show();
	}
}

$password.on({
	focus: passwordEvent,
	keyup: passwordEvent
}).on({
	focus: confirmPasswordEvent,
	keyup: confirmPasswordEvent
});
//On an event of password
//check for validation for password input
	// hide if valid
	// else show
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

//On an event of confirm password
//match for password & confirmation
	//hide if matches
	//else show