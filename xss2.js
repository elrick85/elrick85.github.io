 
function makeRequest() {
    function parseCookies () {
		console.log(xhr.responseText);
    }
	
    // Make XHR request
    var xhr = new XMLHttpRequest();
    //xhr.onreadystatechange = parseCookies;
    xhr.open("TRACE", "/", false);
    xhr.send();
	console.log(xhr.responseText);
}