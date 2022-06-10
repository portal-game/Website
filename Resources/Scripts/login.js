let usernameForm = document.getElementById("auth-user");
let passwordForm = document.getElementById("auth-pwd");

$("#auth-login").click(function() {
	console.log("Username: " + usernameForm.value + " Password: " + passwordForm.value);
});