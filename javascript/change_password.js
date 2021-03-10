$(document).ready(function() {
    $("#change-password-submit").on("click", (e) => {
        e.preventDefault();

        var personId = localStorage.getItem("person_id");
        var oldPassword = $("#old-password").val().trim();
        var newPassword = $("#new-password").val().trim();
        var confirmNewPassword = $("#confirm-new-password").val().trim();

        if(newPassword != confirmNewPassword){
          alert("Passwords do not match.")
        }
        else {
            $.ajax({
                url: 'http://localhost:8080/change_password',
                type:'post',
                data: {
                    person_id: personId,
                    old_password: oldPassword,
                    new_password: newPassword
                },
                success: function(response) {
                    alert(response["message"]);
                    if(response["message"] == "Change Password Successful.")
                    {
                      window.location.href = "home.html";
                    }
                  }
            });
        }
    })
});