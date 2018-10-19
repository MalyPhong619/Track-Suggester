var userSum = function(one, two, three, four, five) {
  return one + two + three + four + five;
}

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

    var answerOne = parseInt($("#formQuestionOne").val());
    var answerTwo = parseInt($("#formQuestionOne").val());
    var answerThree = parseInt($("#formQuestionOne").val());
    var answerFour = parseInt($("#formQuestionOne").val());
    var answerFive = parseInt($("#formQuestionOne").val());
    var result;




  });
});
