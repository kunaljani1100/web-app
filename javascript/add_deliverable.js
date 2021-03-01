$(document).ready(function() {
    $("#add-deliverable-submit").on("click", (e) => {
        e.preventDefault();
        var person_id = localStorage.getItem("person_id");
        var project_id;

        $.ajax({
            url: 'localhost:8080/get_projects_by_person_id/' + person_id,
            type: 'get',
            success: function(response, data) {
                var msg = "";
                if(response) {
                    msg = "Project ID retrieved successfully!";
                    project_id = data.project_id;
                } else {
                    msg = "Error retrieving project ID.";
                }
                alert(msg);
            }
        });

        var name = $("#input-deliverable").val();
        var leader = $("#input-owner").val();
        var description = $("#input-description").val();
        var deadline = $("#input-deadline").val();

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
                window.location.href = "home.html";
            } else {
                msg = "Error creating deliverable.";
            }
            alert(msg);
        });
    })
});