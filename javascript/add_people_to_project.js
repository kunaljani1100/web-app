$(document).ready(function() {
    $("#body-container").append("<h1>" + localStorage.getItem("project_id") + "</h1>");

    $.ajax({
        url: 'http://localhost:8080/get_people/',
        type: 'get',
        success: function(data, response) {
            var msg = "";
            var users = [];
            if(response) {
                msg = "List of people retrieved successfully!";
                people = response["result"];
                users = data.result;
            } else {
                msg = "Error retrieving people.";
            }

            users.forEach(person => {
                personId = person.personId;
                name = person.name;
                emailId = person.emailId;
                type = person.type;
                profile = person.profile;
                $("#people-info table").append('<tr class="table-cell"><th>' + name + '</th><th>' +emailId+ '</th><th>' + type + '</th><th>' + profile + '</th><th><button class="link-button" value = '+ personId +'>Add</button>Add</th></tr>');
            });

            $("button").click(function() {
                const response = $.post("http://localhost:8080/add_person_to_project",
                {
                    "person_id": $(this).val(),
                    "project_id": localStorage.getItem("project_id")
                },
                function(response) {
                    alert(response["message"]);
                        if(response["message"] == "Person successfully added to project."){
                        window.location.href = "view_project.html";
                    }
                });
            });
        }
    });
});