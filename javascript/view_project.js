$(document).ready(function() {
    $("#body-container").append("<h1>" + localStorage.getItem("project_id") + "</h1>")
    var project_id = localStorage.getItem("project_id");
    console.log("Project ID = " + project_id);
    var name;
    var projects = [];
    var userId = "";

    $.ajax({
        url: 'http://localhost:8080/projects/' + project_id,
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
                var people = project.people;
                $("#project-info table").append('<tr class="table-cell"><th>' + name + '</th><th>' +description+ '</th><th>' + outcome + '</th></tr>');
                deliverables.forEach(deliverable => {
                    $.ajax({
                        url: 'http://localhost:8080/get_user_id/' + deliverable.leader,
                        type: 'get',
                        success: function(data, response) {
                            var msg = "";
                            var users = [];
                            if(response) {
                                msg = "List of comminications successfully!";
                                username = data.user_id;
                                summary = communication.summary;
                                $("#deliverables table").append('<tr class="table-cell"><th>' + deliverable.deliverableName + '</th><th>' + deliverable.deliverableDescription + '</th><th>' + username + '</th><th><button class="link-button" value=' + deliverable.deliverableId + '">Complete</button></th></tr>');
                            } else {
                                msg = "Error getting user ID.";
                            }
                        }
                    });
                });
                
                people.forEach(person => $("#people table").append('<tr class="table-cell"><th>' + person.userId + '</th></tr>'));
            });

            $.ajax({
                url: 'http://localhost:8080/get_messages_of_reciever/' +localStorage.getItem("person_id") +"/"+localStorage.getItem("project_id"),
                type: 'get',
                success: function(data, response) {
                    var msg = "";
                    var users = [];
                    if(response) {
                        msg = "List of comminications successfully!";
                        communications = data.communications;
                    } else {
                        msg = "Error retrieving people.";
                    }

                    communications.forEach(communication => {
                        name = communication.senderId;
                        var username;
        
                        $.ajax({
                            url: 'http://localhost:8080/get_user_id/' +name,
                            type: 'get',
                            success: function(data, response) {
                                var msg = "";
                                var users = [];
                                if(response) {
                                    msg = "List of comminications successfully!";
                                    username = data.user_id;
                                    summary = communication.summary;
                                    $("#communication table").append('<tr class="table-cell"><th>' + username + '</th><th>' +summary+ '</th></tr>');

                                } else {
                                    msg = "Error getting user ID.";
                                }
                            }
                        });

                    });
                }
            });

            $("#home").click(function(){
                localStorage.setItem("project_id",project_id);
                window.location.href = "project_dash.html";
            });

            $("button").click(function() {
                var deliverableId =  $(this).val();
                $.ajax({
                    url: 'http://localhost:8080/delete_deliverable/' + project_id + '/'+ deliverableId,
                    type:'delete',
                    success:function(response){
                        if(response){
                            alert("Deliverable deleted successfully");
                            window.location.href = "view_project.html";
                        }
                    }
                });
            });
        }
    });
});