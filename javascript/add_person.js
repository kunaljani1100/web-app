$(document).ready(function() {
    $("#create-team-submit").on("click", (e) => {
        e.preventDefault();

        var name = $("#input-name").val().trim();
        var profile = $("#input-profile").val().trim();
        var email = $("#input-email").val().trim();
        var type = $("#input-type").val().trim();

        if(project != "") {
            $.ajax({
                url: '/add_person',
                type:'post',
                data: {
                    name: name,
                    profile: profile,
                    email_id: email,
                    type: type,
                    user_id: email,
                    password: "default"
                },
                success: function(response) {
                    var msg = "";
                    if(response == 1) {
                        msg = "Person created successfuly!";
                        $.ajax({
                            url: '/add_person_to_project',
                            type:'post',
                            data: {
                                person_id: name,
                                project_id: profile
                            },
                            success: function(response) {
                                var msg = "";
                                if(response == 1) {
                                    msg = "Person added to project successfuly!";
                                } else {
                                    msg = "Error adding person to project.";
                                }
                                alert(msg);
                            }
                        });
                    } else {
                        msg = "Error creating person.";
                    }
                    alert(msg);
                }
            });
        }
    })
});