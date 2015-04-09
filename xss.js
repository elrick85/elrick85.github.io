function makeRequest() {
    function parseCookies () {
        var cookie_dict = {};
        // Only react on 400 status
        if (xhr.readyState === 4 && xhr.status === 400) {
            // Replace newlines and match <pre> content
            var content = xhr.responseText.replace(/\r|\n/g,'').match(/<pre>(.+)<\/pre>/);

            console.log(content);
        }
    }
    // Make XHR request
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = parseCookies;
    xhr.open("GET", "/", true);
    xhr.send(null);
}
 
//makeRequest();