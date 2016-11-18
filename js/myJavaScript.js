/*Function to validate login*/
/*
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validateLogin()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "admin" && password == "12345")
	{
		alert ("Login successfully");
		/*window.location = "success.html"; // Redirecting to other page.*/
	/*	return false;
	}
	else
	{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
			if( attempt == 0)
			{
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
			}
	}
}*/

function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "admin"; 
        var password = "12345";
        if ((un == username) && (pw == password)) {
        	alert("ok");
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  }

