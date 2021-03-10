$(document).ready(function() {
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
                name = person.name;
                emailId = person.emailId;
                type = person.type;
                profile = person.profile;
                $("#people-info table").append('<tr class="table-cell"><th>' + name + '</th><th>' +emailId+ '</th><th>' + type + '</th><th>' + profile + '</th></tr>');
            });
        }
    });
});