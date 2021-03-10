$(document).ready(function() {
    $("#body-container").append("<h1>" + localStorage.getItem("project_id") + "</h1>");
    $("#add-person-to-project").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_people_to_project.html";
    })
    $("#view-project").on("click", (e) => {
        e.preventDefault();
        window.location.href = "view_project.html";
    })
    $("#add-deliverable").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_deliverable.html";
    })
    $("#add-communication").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_communication.html";
    })
});