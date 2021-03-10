$(document).ready(function() {
    $("#body-container").append("<h1>" + localStorage.getItem("project_id") + "</h1>");
    var project_id = localStorage.getItem("project_id");
    var url = "http://localhost:8080/projects/" + project_id;
    var projects = [];

    $.ajax({
        url: url,
        type: 'get',
        success: function(response, data) {
            var msg = "";
            if(response) {
                msg = "Project retrieved successfully!";
                projects = response["projects"];
            } else {
                msg = "Error retrieving project.";
            }

            projects.forEach(project => {
                var people = project["people"];
                people.forEach(person => {
                    $("#input-receiver").append("<option value=" + person["personId"] +">"+person["userId"]+"</option>");
                });
            });
        }
    });
    
    $("#add-communication-submit").on("click", (e) => {
        e.preventDefault();

        var project_id = localStorage.getItem("project_id");
        var sender = localStorage.getItem("person_id");
        var receiver = $("#input-receiver").val().trim();
        var summary = $("#input-summary").val().trim();

        $.post("http://localhost:8080/add_communication",
        {
            "project_id": project_id,
            "sender": sender,
            "receiver": receiver,
            "summary": summary
        },
        function(response) {
            var msg = "";
            if(response) {
                msg = "Communication created successfully!";
                window.location.href = "project_dash.html";
            } else {
                msg = "Error creating communication.";
            }
            alert(msg);
        });
    })
});