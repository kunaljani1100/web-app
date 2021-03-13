$(document).ready(function() {
    $("#body-container").append("<h1>" + localStorage.getItem("project_id") + "</h1>")
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
                people.forEach(person=>{
                    $("#input-owner").append("<option value=" + person["personId"] +">"+person["userId"]+"</option>");
                });
            });
        }
    });

    $("#add-deliverable-submit").on("click", (e) => {
        e.preventDefault();
        var person_id = localStorage.getItem("person_id");
        var project_id = localStorage.getItem("project_id");

        // $.ajax({
        //     url: 'localhost:8080/get_projects_by_person_id/' + person_id,
        //     type: 'get',
        //     success: function(response, data) {
        //         var msg = "";
        //         if(response) {
        //             msg = "Project ID retrieved successfully!";
        //             project_id = data.project_id;
        //         } else {
        //             msg = "Error retrieving project ID.";
        //         }
        //     }
        // });

        var name = $("#input-deliverable").val().trim();
        var leader = $("#input-owner").val().trim();
        var description = $("#input-description").val().trim();
        var deadline = $("#input-deadline").val().trim();

        $.post("http://localhost:8080/add_deliverable_to_project",
        {
            "project_id": project_id,
            "leader": leader,
            "name": name,
            "description": description,
            "deadline": deadline
        },
        function(response) {
            var msg = "";
            if(response) {
                msg = "Deliverable created successfully!";
                window.location.href = "project_dash.html";
            } else {
                msg = "Error creating deliverable.";
            }
            alert(msg);
        });
    })
});
