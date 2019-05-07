var login_text = document.getElementById('login_text');
var loader =  document.getElementById('loader');
var email = document.getElementById('email');
var password = document.getElementById('password');

function formHandler(event) {
	event.preventDefault();
	login_text.style.display="none";
	loader.style.display="block";
}