$(document).ready(function() {
    // admin
    $("#create-project").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_project.html";
    })
    $("#change-password").on("click", (e) => {
        e.preventDefault();
        window.location.href = "change_password.html";
    })
    $("#add-person").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_person.html";
    })
    $("#view-projects").on("click", (e) => {
        e.preventDefault();
        window.location.href = "view_all_projects.html";
    })
    $("#view-people").on("click", (e) => {
        e.preventDefault();
        window.location.href = "view_all_people.html";
    })
});
