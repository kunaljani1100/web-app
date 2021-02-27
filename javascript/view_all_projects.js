$(document).ready(function() {

    $.ajax({
        url: '/projects/',
        type: 'get',
        success: function(data, response) {
            var msg = "";
            if(response == 1) {
                msg = "Project retrieved successfully!";
                project = data.project;
                description = data.description;
                metrics = data.outcome;
            } else {
                msg = "Error retrieving project.";
            }
            alert(msg);

            $("#project-info tr").append("<th>" + project + "</th><th>" + description + "</th><th>" + metrics + "<th>");
        }
    });


});