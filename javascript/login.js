$(document).ready(function(){
   $("button").click(function(){
     const response = $.post("http://localhost:8080/login",
     {
        "user_id": document.getElementById("user_id").value,
        "password": document.getElementById("password").value
     },
     function(response){
         if(response["message"] == "login successful"){
            alert("Login successful.");
            var personId = response["person_id"];
            localStorage.setItem("person_id", personId);
            window.location.href = "home.html";
         }
         else {
            alert("Login failed.");
         }
     });
   });
});