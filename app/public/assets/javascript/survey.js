// survey  

$('.jumbotron').css('background-color','darkcyan');

$("#post-student").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  const students = [ 
    {name: 'Myles', photo: 'nada', answers: [1,2,5,3,1,4,2,1,5,3]}
  ];

  console.log(`this is studentZero: ${students[0]}`);

  // This line is the magic. It"s very similar to the standard ajax function we used.
  // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
  // depending on if a tables is available or not.

  $.post("/api/students", students[0])
    .then(function(response) {
      console.log(response);
      for (match of response) {
        console.log(match.name);
        console.log(match.compatibility);
        console.log(match.photo);
        for (answer of match.answers) {
          console.log(answer);
        };
      };
      // console.log(response[0].name);
      // console.log(response[0].compatibility);
      // console.log(response[0].photo);
      // console.log(response[0].answers);

      
    });

  // $.post("/api/students", students[0],
  //   function(response) {

  //     // If a table is available... tell user they are booked.
  //    console.log(response);


  //   });

});