$(document).ready(function() {
    $("#add-cost-submit").on("click", (e) => {
        e.preventDefault();

        var name = $("#input-name").val().trim();
        var expected = $("#input-expected").val().trim();
        var actual = $("#input-actual").val().trim();

        if(project != "") {
            $.ajax({
                url: '/add_cost',
                type: 'post',
                data: {
                    name: name,
                    expected_cost: expected,
                    actual_cost: actual
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