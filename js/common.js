const backend_host = "http://spm.test/api/";

function logout() {
	localStorage.clear();
	window.location.href = "../login.html";
}