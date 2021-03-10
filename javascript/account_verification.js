$(document).ready(function() {
    $("#verify").on("click", (e) => {
        e.preventDefault();
        var verificationCode = $("#verification-code").val().trim();

        if(verificationCode == localStorage.getItem("verification_code")) {
            $.ajax({
                url: 'http://localhost:8080/verify_user',
                type:'post',
                data: {
                    user_id: localStorage.getItem("new_user_id"),
                    token:"token"
                },
                success: function(response) {
                    if(response["message"] == "New user verified.") {
                        alert("Account successfully verified.");
                        window.location.href = "login.html";
                    }
                    else {
                        alert("User exists");
                    }
                }
            });
        } else {
          alert("Verification failed.");
        }
    })
});