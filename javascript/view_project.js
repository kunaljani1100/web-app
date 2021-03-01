$(document).ready(function() {
    var person_id = localStorage.getItem("person_id");
    console.log("Person ID = " + person_id);
    var name;
    var projects = [];

    // var project = "Test Project";
    // var description = "Test description";
    // var metrics = "Test success metrics";
    // var deliverables = [
    //     {
    //         name: "Deliverable 1",
    //         description: "Deliverable description",
    //         leader: "Deliverable leader",
    //         deadline: "Deadline"
    //     },
    //     {
    //         name: "Deliverable 2",
    //         description: "Deliverable description",
    //         leader: "Deliverable leader",
    //         deadline: "Deadline"
    //     }
    // ];

    // $("#project-info table").append('<tr class="table-cell"><th>' + project + '</th><th>' + description + '</th><th>' + metrics + '</th></tr>');
    // deliverables.forEach(deliverable => $("#deliverables table").append('<tr class="table-cell"><th>' + deliverable.name + '</th><th>' + deliverable.description + '</th><th>' + deliverable.leader + '</th><th>' + deliverable.deadline + '</th></tr>'));

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
                var deliverables = project.deliverables;
                $("#project-info table").append('<tr class="table-cell"><th>' + name + '</th><th> </th><th>' + outcome + '</th></tr>');
                deliverables.forEach(deliverable => $("#deliverables table").append('<tr class="table-cell"><th>' + deliverable.deliverableName + '</th><th>' + deliverable.deliverableDescription + '</th><th>' + deliverable.leader + '</th><th>' + deliverable.deadline + '</th></tr>'));
            });
        }
    });
});