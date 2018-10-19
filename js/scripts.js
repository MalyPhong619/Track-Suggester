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
    var result = userSum(answerOne, answerTwo, answerThree, answerFour, answerFive);

    console.log(result);

    if (result > 2 && result < 19) {
      if (result > 7 && result < 11) {
        $(".cSharp-modal").toggle();
      } else if (result > 10 && result < 13) {
        $(".java-modal").toggle();
      } else if (result > 12 && result < 15) {
        $(".ruby-modal").toggle();
      } else if (result > 14 && result < 19) {
        $(".php-modal").toggle();
      }
    } else {
      alert("Please answer all questions");
    }
  });
});
