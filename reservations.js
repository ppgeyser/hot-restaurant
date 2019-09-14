// Question: What does this code do?
$("#add-reservation-btn").on("click", function(event) {
    event.preventDefault();
    var name = $("#name-input").val().trim();
    var phone = $("#phone-input").val().trim();
    var email =  $("#email-input").val().trim();
    var uniqueID = $("#unique-ID").val().trim();
    
    var query = "api/reservation?" + name + "&" + email + "&" + phone + "&" + uniqueID;

    $.post(query)
      .then(function(data) {
        console.log("reservation.html", data);
        alert("Adding reservation...");
      });
  });