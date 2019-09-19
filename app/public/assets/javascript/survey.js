// survey  

$('.jumbotron').css('background-color','darkcyan');

$("#survey-results").hide();

$("#post-student").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  const matchUser = {name: 'Myles', photo: 'nada', answers: [1,1,1,1,5,1,5,1,5,2]};
  

  console.log(`this is studentZero: ${matchUser}`);

  // This line is the magic. It"s very similar to the standard ajax function we used.
  // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
  // depending on if a tables is available or not.

    // fill first match card
  function firstMatch(match) {
    $("#name-1").text(match.name);
    $("#compat-rating-1").text(`Compatibility Rating: ${formatCompat(match.compatibility)}`);
    $("#pic-1").attr('src',match.photo);
    match.answers.map((answer,i) => {
      $("#answers-1").append($("<li>").text("Hello, answer = " + (i + 1) + " = " + answer));
    })    
  };

  // fill second match card
  function secondMatch(match) {
    $("#name-2").text(match.name);
    $("#compat-rating-2").text(`Compatibility Rating: ${formatCompat(match.compatibility)}`);
    $("#pic-2").attr('src',match.photo);
    match.answers.map((answer,i) => {
      $("#answers-2").append($("<li>").text("Hello, answer = " + (i + 1) + " = " + answer));
    })  
  };

  // fill third match card
  function thirdMatch(match) {
    $("#name-3").text(match.name);
    $("#compat-rating-3").text(`Compatibility Rating: ${formatCompat(match.compatibility)}`);
    $("#pic-3").attr('src',match.photo);
    match.answers.map((answer,i) => {
      $("#answers-3").append($("<li>").text("Hello, answer = " + (i + 1) + " = " + answer));
    })  
  };

  function formatCompat(compat) {
    console.log("in surevy.js formatCompat");
    return (100 - compat * 2.5) + ' %';
  };

  $.post("/api/students", matchUser)
    .then(function(response) {
      console.log(response);
      response.map((match,i) => {
        switch (i) {
          case 0: {
            firstMatch(match);
          };
            break;
          case 1: {
            secondMatch(match);
          };
          break;
          case 2: {
            thirdMatch(match);
          };
            break;      
        }
      });
      $("#survey-results").show();
    });
});

