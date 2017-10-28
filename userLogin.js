function buttonClick() {
    var loginButtonElement = document.getElementById("loginButton");
    loginButtonElement.addEventListener("click", function(loginButtonElement) {
        validateLogin();

    });
}

function validateLogin(){
    var userName = document.getElementById("uName").value;
    var password = document.getElementById("pswd").value;
    console.log(userName);
    console.log(password);

    var request = new XMLHttpRequest();
    request.onreadystatechange = alertContents;
    request.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var credential = "userName=" + userName +"&password=" + password;
    console.log(credential);
    request.send(credential);


  function alertContents() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        alert(request.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  }
