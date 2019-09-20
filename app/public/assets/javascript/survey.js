// survey  

$(document).ready(function(){

  $("#survey-form").show();
  $("#survey-results").hide();



  // question data
  surveyQuestions = [
    {title: "Lights Out", question: "How important is it for your dormmate to have simliar sleep schedule (i.e. both be morning persons or night-owls)?"}
   ,{title: "Clean Room", question: "How important is it that your dormmate keeps a clean room?"} 
   ,{title: "Friendship", question: "How important is it to have a freindship with your dormmate?"} 
   ,{title: "Same Major", question: "How important is it that your dormmate and you have the same major?"} 
   ,{title: "Solitude Needs", question: "How important is it for you to have times of solitude/privacy in your dormroom?"} 
   ,{title: "Guests", question: "How important is it for you to be able to have friends visit your room?"} 
   ,{title: "Share Chores", question: "How important is it that you and your roommate share chores equally?"} 
   ,{title: "Entertainment", question: "How important is it for you to be able to play music, watch TV, party in your dormroom?"} 
   ,{title: "Study Partner", question: "How important is it for you to be able study with your dormmate?"} 
   ,{title: "Share Meals", question: "How important is it that you share meals and food in your dormroom?"} 
  ];

  // update survey form with questions
  var i = 0;
  $(".question-label").each(function () {
    $(this).text(`${(i + 1)} - ${surveyQuestions[i].question}`);
    i++
  });


  //  hard coded user for testing backend while front survey not completed
  const matchUser = {name: 'Myles', photo: 'nada', answers: [2,3,4,5,1,1,2,3,4,5]};
  console.log(`this is studentZero: ${matchUser}`);
  matchUserFirstName = matchUser.name.split(' ');
  console.log(`match user's first name ${matchUserFirstName[0]}`);



  // $("#start-survey").on("click", function(event) {
  //   event.preventDefault();
  //   $("#survey-form").show();

  // });


  // // update survey form with questions
  // var i = 0;
  // $(".question-label").each(function () {
  //   $(this).text(`${(i + 1)} - ${surveyQuestions[i].question}`);
  //   i++
  // });



  $("#submit").on("click", function(event) {
  // $("#post-student").on("click", function(event) {  
    event.preventDefault();

    // validate form entries
    console.log($("#user-name").val());
    console.log($("#photo-link").val());
    var i = 0;
    $(".question").each(function () {
      console.log(`question ${i} ${$(this).val()}`);
      // console.log($(this).val());
      i++
    });

    // *** next play it to validate to make 
    // sure all fields are populated
    // but before taht create a student class object for the
    // input values and let pass into the post api


    // ready to make post and get results
    $("#survey-form").hide();


      // fill first match card
    function firstMatch(match) {
      $("#name-1").text(match.name);
      $("#compat-rating-1").text(`Compatibility Rating: ${formatCompat(match.compatibility)}`);
      $("#pic-1").attr('src',match.photo);
      $("#pic-1").attr('alt','no pic available');
      matchNameArr = match.name.split(' ');
      matchFirstName = matchNameArr[0];
      match.answers.map((answer,i) => {
        var answerDiff = Math.abs(answer - matchUser.answers[i]);
        console.log(`you: ${matchUser.answers[i]} them: ${answer}`);
        console.log(answerDiff);
        var barPct = 100 - (answerDiff * 25);
        console.log(`var pct ${barPct}`);
        var barClass = '';
        switch (barPct) {
          case 100: barClass = 'progress-bar-green';
            break;
          case 75: barClass = 'progress-bar-green';
            break;    
          case 50: barClass = 'progress-bar-yellow';
            break;  
          case 25: barClass = 'progress-bar-red';
            break; 
          case 0: barClass = 'progress-bar-red';
            break;     
          default: barClass = 'bg-info';
            break;
        };
        var newBar = $(`<div class="progress"><div class="progress-bar ${barClass}" role="progressbar" style="width: ${barPct}%"
                       aria-valuenow="${barPct}" aria-valuemin="0" aria-valuemax="100">${surveyQuestions[i].title} ${barPct}%</div></div>`);
        $("#answers-1").append(newBar);      
      })  
        // $("#answers-1").append($("<li>").text(`${surveyQuestions[i].title} ::: You: ${matchUser.answers[i]} / ${matchFirstName}: ${answer} `));
    };

    // fill second match card
    function secondMatch(match) {
      $("#name-2").text(match.name);
      $("#compat-rating-2").text(`Compatibility Rating: ${formatCompat(match.compatibility)}`);
      $("#pic-2").attr('src',match.photo);
      $("#pic-2").attr('alt','no pic available');
      matchNameArr = match.name.split(' ');
      matchFirstName = matchNameArr[0];
      // $("#match-answer-2").text(matchFirstName);
      match.answers.map((answer,i) => {
        var answerDiff = Math.abs(answer - matchUser.answers[i]);
        console.log(`you: ${matchUser.answers[i]} them: ${answer}`);
        console.log(answerDiff);
        var barPct = 100 - (answerDiff * 25);
        console.log(`var pct ${barPct}`);
        var barClass = '';
        switch (barPct) {
          case 100: barClass = 'progress-bar-green';
            break;
          case 75: barClass = 'progress-bar-green';
            break;    
          case 50: barClass = 'progress-bar-yellow';
            break;  
          case 25: barClass = 'progress-bar-red';
            break; 
          case 0: barClass = 'progress-bar-red';
            break;     
          default: barClass = 'bg-info';
            break;
        };
        var newBar = $(`<div class="progress"><div class="progress-bar ${barClass}" role="progressbar" style="width: ${barPct}%"
                       aria-valuenow="${barPct}" aria-valuemin="0" aria-valuemax="100">${surveyQuestions[i].title} ${barPct}%</div></div>`);
        $("#answers-2").append(newBar);      
      })  
        // var newTr = $(`<tr><td> ${surveyQuestions[i].title} </td><td> ${matchUser.answers[i]} </td><td> ${answer} </td></tr>`)
        // $("#answers-2").append(newTr);
    };

    // fill third match card
    function thirdMatch(match) {
      $("#name-3").text(match.name);
      $("#compat-rating-3").text(`Compatibility Rating: ${formatCompat(match.compatibility)}`);
      $("#pic-3").attr('src',match.photo);
      $("#pic-3").attr('alt','no pic available');
      match.answers.map((answer,i) => {
        var answerDiff = Math.abs(answer - matchUser.answers[i]);
        console.log(`you: ${matchUser.answers[i]} them: ${answer}`);
        console.log(answerDiff);
        var barPct = 100 - (answerDiff * 25);
        console.log(`var pct ${barPct}`);
        var barClass = '';
        switch (barPct) {
          case 100: barClass = 'progress-bar-green';
            break;
          case 75: barClass = 'progress-bar-green';
            break;    
          case 50: barClass = 'progress-bar-yellow';
            break;  
          case 25: barClass = 'progress-bar-red';
            break; 
          case 0: barClass = 'progress-bar-red';
            break;     
          default: barClass = 'bg-info';
            break;
        };
        var newBar = $(`<div class="progress"><div class="progress-bar ${barClass}" role="progressbar" style="width: ${barPct}%"
                       aria-valuenow="${barPct}" aria-valuemin="0" aria-valuemax="100">${surveyQuestions[i].title} ${barPct}%</div></div>`);
        $("#answers-3").append(newBar);      
      })  
    };

    function formatCompat(compat) {
      console.log("in surevy.js formatCompat");
      return (100 - compat * 2.5) + ' %';
    };

    // post the match user to database
    // get match results and diplay 
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


});
