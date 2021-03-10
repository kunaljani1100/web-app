$(document).ready(function() {
    $("#add-person-submit").on("click", (e) => {
        e.preventDefault();

        var name = $("#input-name").val().trim();
        var profile = $("#input-profile").val().trim();
        var email = $("#input-email").val().trim();
        var userId = $("#input-user_id").val().trim();
        var type = $("#input-type").val().trim();
        var password = $("#input-password").val().trim();

        $.ajax({
            url: 'http://localhost:8080/add_person',
            type:'post',
            data: {
                name: name,
                profile: profile,
                email_id: email,
                type: type,
                user_id: userId,
                password: password
            },
            success: function(response) {
                if(response["message"] == "Successfully registered"){
                    alert("Successfully registered");
                    localStorage.setItem("verification_code",response["verification_code"]);
                    localStorage.setItem("new_user_id",userId);
                    window.location.href = "account_verification.html";
                }
                else{
                    alert("User exists");
                }
            }
        });
    })
});