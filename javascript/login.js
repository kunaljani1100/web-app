$(document).ready(function(){
    $("#login-submit").on("click", (e) => {
        e.preventDefault();
        const email = $("#input-email").val();
        const password = $("#input-password").val();
        console.log(email);
        var request = {
            user_id:email,
            password:password
        };
        console.log(request);
        const jsonString = JSON.stringify(request);
        const xhr = new XMLHttpRequest();

        const URL = 'https://jsonplaceholder.typicode.com/todos'
        const data = {
           "userId": 1,
           "title": "delectus aut autec",
           "completed": false
        };
        // Send a post request
        fetch(URL, {
           method: "POST",
           body: JSON.stringify(data),
           headers: {
              "Content-type": "application/json; charset=UTF-8"
           }
        });


        // $.ajax({
        //     url: "",
        //     data: {
        //       email: email,
        //       password: password
        //     },
        //     success: function( result ) {
        //         window.location.href = "home.html";
        //     }
        // });
        window.location.href = "home.html";
    })
  });
