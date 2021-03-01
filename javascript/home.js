$(document).ready(function() {
    var person_id = "person-g2nSBbuI"; 
    localStorage.setItem("person_id", person_id);

    // regular user
    $("#add-project").on("click", (e) => {
        e.preventDefault();
        window.location.href = "add_project.html";
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
    // $("#add-communication").on("click", (e) => {
    //     e.preventDefault();
    //     window.location.href = "add_communication.html";
    // })
});