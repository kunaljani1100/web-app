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

            projects.forEach(project => {
                name = project.projectName;
                outcome = project.successMetrics;
                description = project.description;
                var deliverables = project.deliverables;
                $("#project-info table").append('<tr class="table-cell"><th>' + name + '</th><th>' +description+ '</th><th>' + outcome + '</th><th><button class="link-button" value="v-' + project.projectId + '">View project</button></th><th><button class="link-button" value="d-' + project.projectId +'"">Delete</button></th></tr>');
                deliverables.forEach(deliverable => $("#deliverables table").append('<tr class="table-cell"><th>' + deliverable.deliverableName + '</th><th>' + deliverable.deliverableDescription + '</th><th>' + deliverable.leader + '</th><th>' + deliverable.deadline + '</th></tr>'));
            });

            $("button").click(function(){
                var pid =  $(this).val();
                if(pid.includes('v-')){
                    pid = pid.replace('v-','');
                    localStorage.setItem("project_id",pid);
                    window.location.href = "project_dash.html";
                } else {
                    pid = pid.replace('d-','');
                    $.ajax({
                        url: 'http://localhost:8080/delete_project/' + pid,
                        type:'delete',
                        success:function(data,response){
                            if(response){
                                alert("Project deleted successfully");
                                window.location.href = "view_all_projects.html";
                            }
                        }
                    });
                }
            });
        }
    });
});