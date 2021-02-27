$(document).ready(function() {
    $("#add-deliverable-submit").on("click", (e) => {
        e.preventDefault();

        var name = $("#input-deliverable").val().trim();
        var leader = $("#input-owner").val().trim();
        var description = $("#input-description").val().trim();
        var deadline = $("#input-deadline").val().trim();

        if(project != "") {
            $.ajax({
                url: '/add_deliverable_to_project',
                type: 'post',
                data: {
                    name: name,
                    description: description,
                    leader: leader,
                    deadline: deadline
                },
                success: function(response) {
                    var msg = "";
                    if(response == 1) {
                        msg = "Deliverable added successfully!";
                    } else {
                        msg = "Error adding deliverable.";
                    }
                    alert(msg);
                }
            });
        }
    })
});