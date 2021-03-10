$(document).ready(function(){
    var person_id = localStorage.getItem("person_id");
    
    $("button").click(function(){
        const response = $.post("http://localhost:8080/create_project",
        {
            "person_id": person_id,
            "project_name": document.getElementById("project_name").value,
            "description": document.getElementById("description").value,
            "success_metrics": document.getElementById("success_metrics").value
        },
        function(response){
            alert(response["message"]);
            if(response["message"].includes("successfully created")){
                window.location.href = "home.html";
            }
        });
    });
});