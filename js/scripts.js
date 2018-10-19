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

    var answerOne = parseInt($("input:radio[name=formQuestionOne]:checked").val());
    var answerTwo = parseInt($("input:radio[name=formQuestionTwo]:checked").val());
    var answerThree = parseInt($("input:radio[name=formQuestionThree]:checked").val());
    var answerFour = parseInt($("input:radio[name=formQuestionFour]:checked").val());
    var answerFive = parseInt($("input:radio[name=formQuestionFive]:checked").val());
    var result = userSum(answerOne, answerTwo, answerThree, answerFour, answerFive);

    if (result > 2) {
      if (result > 7 && result < 11) {
        $(".cSharp-modal").show();
      } else if (result > 10 && result < 13) {
        $(".java-modal").show();
      } else if (result > 12 && result < 15) {
        $(".ruby-modal").show();
      } else if (result > 14 && result < 19) {
        $(".php-modal").show();
      }
    } else {
      alert("Please answer all questions");
    }
  });
  $(".close").click(function() {
    $(".modal").hide();
  })

});
