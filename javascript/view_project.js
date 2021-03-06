$(document).ready(function() {
    var person_id = localStorage.getItem("person_id");
    console.log("Person ID = " + person_id);
    var name;
    var projects = [];

    $.ajax({
        url: 'http://localhost:8080/get_projects_by_person_id/' + person_id,
        type: 'get',
        success: function(data, response) {
            var msg = "";
            if(response) {
                msg = "Project retrieved successfully!";
                projects = data.projects;
            } else {
                msg = "Error retrieving project.";
            }
            alert(msg);

            projects.forEach(project => {
                name = project.projectName;
                outcome = project.outcome;
                description = project.description;
                var deliverables = project.deliverables;
                $("#project-info table").append('<tr class="table-cell"><th>' + name + '</th><th>' +description+ '</th><th>' + outcome + '</th><th>' + '<button value = ' + project.projectId + '>View Project</button>' + '</th></tr>');
                deliverables.forEach(deliverable => $("#deliverables table").append('<tr class="table-cell"><th>' + deliverable.deliverableName + '</th><th>' + deliverable.deliverableDescription + '</th><th>' + deliverable.leader + '</th><th>' + deliverable.deadline + '</th></tr>'));
            });

            $("button").click(function(){
              localStorage.setItem("project_id",alert($(this).val()));
              window.location.href = "home.html";
            });
        }
    });

});
