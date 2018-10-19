$(document).ready(function() {
  $("#userInputForm").submit(function(event) {
    event.preventDefault();

    var userName = $("#formName").val();
    var userChoice = $("#programChoice").val();

    if (userChoice === "yes") {
      $("#knowTrack").show();
      $("#userInputForm").hide()
    } else if (userChoice === "no") {
      $("#questionForm").show();
      $("#userInputForm").hide();
    } else {
      alert("Please make a selection");
    }
  });

  $("#questionForm").submit(function(event) {
    event.preventDefault();
    





  });
});
