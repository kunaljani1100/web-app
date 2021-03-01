$(document).ready(function() {
    $("#add-communication-submit").on("click", (e) => {
        e.preventDefault();

        // var person_id = localStorage.getItem("person_id");

        var sender = $("#input-sender").val();
        var receiver = $("#input-receiver").val();
        var summary = $("#input-summary").val();

        $.post("http://localhost:8080/add_communication",
        {
            "sender": sender,
            "receiver": receiver,
            "summary": summary
        },
        function(response) {
            var msg = "";
            if(response) {
                msg = "Communication created successfully!";
                window.location.href = "home.html";
            } else {
                msg = "Error creating communication.";
            }
            alert(msg);
        });
    })
});