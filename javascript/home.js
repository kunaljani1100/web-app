$(document).ready(function() {
    // regular user
    $("#view-project").on("click", (e) => {
        e.preventDefault();
        window.location.href = "view_project.html";
    })
    $("#add-deliverable").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_deliverable.html";
    })
    $("#add-cost").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_cost.html";
    })
    $("#add-communication").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_communication.html";
    })
});