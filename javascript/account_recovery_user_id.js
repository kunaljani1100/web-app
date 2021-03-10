$(document).ready(function() {
    $("#account-verify").on("click", (e) => {
        e.preventDefault();
        var userId = $("#input-user_id").val().trim();

        $.ajax({
            url: 'http://localhost:8080/account_recovery',
            type:'post',
            data: {
                user_id: userId,
                code:"code"
            },
            success: function(response) {
                if(response["message"] == "User exists.") {
                    alert("User verified.");
                    localStorage.setItem("account_recovery_verification_code",response["verification_code"]);
                    localStorage.setItem("account_recovery_user_id",userId);
                    window.location.href = "recovery_credentials_input.html";
                }
                else{
                    alert("User does not exist.");
                }
            }
        });
    })
});