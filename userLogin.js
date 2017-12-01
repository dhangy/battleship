// function buttonClick() {
//     var loginButtonElement = document.getElementById("loginButton");
//     loginButtonElement.addEventListener("click", function(loginButtonElement) {
//         validateLogin();
//     });
// }
// function validateLogin(){
//     var userName = document.getElementById("userName").value;
//     var password = document.getElementById("password").value
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = alertContents;
//     request.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php", true);
//     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     var credential = "userName=" + userName +"&password=" + password;
//     console.log(credential);
//     request.send(credential);
//     function alertContents() {
//         if (request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 var responseJson = JSON.parse(request.responseText);
//                 if (responseJson["result"] =="invalid") {
//                     var messageBox = document.getElementById('messageBox');
//                     messageBox.innerHTML = "Your password and/or username are incorrect!";
//                 }
//                 else if (responseJson["result"] == "valid") {
//                     localStorage.setItem("userName" , responseJson["userName"]);
//                     localStorage.setItem("TimeStamp" , responseJson["timestamp"]);
//                     window.location.href = "gameBoard.html";
//                 }
//             }
//             else {
//         alert('There was a problem with the request.');
//       }
//     }
//   }
//   }
//
//   function loadUserCredentials(){
//       var userInfo = document.getElementById('userInfo');
//       var userData = localStorage.getItem('userName');
//       var timeStampData = localStorage.getItem('TimeStamp');
//       var userInfoDisplay = "Username: " + userData + " Time Stamp: " + timeStampData;
//       userInfo.innerHTML = userInfoDisplay;
//   }
//
//   function clearUserData() {
//       var clearButton = document.getElementById('clearLocalStorage');
//       clearButton.addEventListener("click", function(clearButton){
//         var userInfo = document.getElementById('userInfo');
//           var blank = " ";
//           userInfo.innerHTML = blank;
//           localStorage.removeItem('userName');
//           localStorage.removeItem('TimeStamp');
//       });
//   }
