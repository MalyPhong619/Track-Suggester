$(document).ready(function() {
  $("#userInputForm").submit(function(event) {
    event.preventDefault();

    var userName = $("#formName").val();
    var userChoice = $("#programChoice").val();

    if (userChoice === "yes") {
      $("#questionForm").show();
      $("#userInputForm").hide()
    } else if (userChoice === "no") {
      $("#knowTrack").show();
      $(".container").hide();
    } else {
      alert("Please make a selection");
    }

  });
});
