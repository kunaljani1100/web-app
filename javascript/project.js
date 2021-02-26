$(document).ready(function() {
    var i = 1;
    $("#add-person").on("click", (e) => {
        e.preventDefault();
        $("#team-container").append('<div class="member-input" id=member' + i + '></div>');
        $("#member" + i).append('<input type="text" placeholder="Name" id="input-name">');
        $("#member" + i).append('<input type="text" placeholder="Email" id="input-email">');
        i++;
    })
    $("#create-team-submit").on("click", (e) => {
        e.preventDefault();
        const project = $("#input-project").val();
        const description = $("#input-description").val();
        const metrics = $("#input-metrics").val();
        // $.ajax({
        //     url: "/create_project",
        //     data: {
        //       name: name,
        //       description: description,
        //     },
        //     success: function( result ) {
        //         window.location.href = "home.html";
        //     }
        // });
        window.location.href = "admin_home.html";
    })
});