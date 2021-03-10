$(document).ready(function() {
    $("#credential-update").on("click", (e) => {
        e.preventDefault();

        var input_verification_code = $("#verification-code").val().trim();
        var verification_code = localStorage.getItem("account_recovery_verification_code");
        var userId = localStorage.getItem("account_recovery_user_id");

        if(verification_code == input_verification_code){
            alert("Verification successful.");
            var newPassword = $("#new-password").val().trim();
            var confirmNewPassword = $("#confirm-new-password").val().trim();
            if(newPassword == confirmNewPassword){
                $.ajax({
                    url: 'http://localhost:8080/recovery_credentials',
                    type:'post',
                    data: {
                        user_id: userId,
                        new_password: newPassword
                    },
                    success: function(response) {
                        window.location.href = "login.html";
                    }
                });
            } else {
                alert("Passwords do not match.");
            }
        } else {
            alert("Verification failed.");
        }
    })
});