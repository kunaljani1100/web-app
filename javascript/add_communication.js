$(document).ready(function() {
    $("#add-communication-submit").on("click", (e) => {
        e.preventDefault();

        var sender = $("#input-sender").val().trim();
        var receiver = $("#input-receiver").val().trim();
        var summary = $("#input-communication").val().trim();

        if(project != "") {
            $.ajax({
                url: '/add_communication',
                type: 'post',
                data: {
                    sender: sender,
                    receiver: receiver,
                    summary: summary
                },
                success: function(response) {
                    var msg = "";
                    if(response == 1) {
                        msg = "Cost added successfully!";
                    } else {
                        msg = "Error adding cost.";
                    }
                    alert(msg);
                }
            });
        }
    })
});