$(document).ready(function() {
    $("#create-project-submit").on("click", (e) => {
        e.preventDefault();

        var project = $("#input-project").val().trim();
        var description = $("#input-description").val().trim();
        var metrics = $("#input-metrics").val().trim();

        if(project != "") {
            $.ajax({
                url: '/create_project',
                type: 'post',
                data: {
                    project_name: project,
                    // description: description,
                    outcome: metrics
                },
                success: function(response) {
                    var msg = "";
                    if(response == 1) {
                        msg = "Project created successfully!";
                    } else {
                        msg = "Error creating project.";
                    }
                    alert(msg);
                }
            });
        }
    })
});