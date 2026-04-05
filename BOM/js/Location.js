// Properties of Location Object
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);

// For Redirecting to URL
function go(){
  //  window.location = "https://www.google.com";
  //  For setting the URL
  // location.href = "https://www.google.com";

  // Method for URL Redirection - assign and replace
  location.assign("https://www.google.com")  // assign maintains history (add in history)
  location.replace("https://www.google.com") // replace doesn't maintains history (not add in history)

  // reload webpage
  location.reload();
}