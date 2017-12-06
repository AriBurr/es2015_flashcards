$(document).ready( () => {
  const flashcards = [  {hint: "Default Parameters", answer: "In ES6, we can put default values right in the signature of functions."},
                        {hint: "Template Literal", answer: "In ES6, we can use a new syntax ${NAME} inside of the back-ticked string."},
                        {hint: "Multi-line Strings", answer: "In ES6, utilize backicks to create multi-line strings."},
                        {hint: "Destructuring Assignment", answer: `The destructuring assignment syntax is a JavaScript expression that makes it possible
                                                                    to unpack values from arrays, or properties from objects, into distinct variables.`},
                        {hint: "Arrow Functions", answer: `Arrow functions are a more concise syntax for writing function expressions.
                                                           They utilize a new token, =>, that looks like a fat arrow.
                                                           Arrow functions are anonymous and change the way (this) binds in functions.`},
                        {hint: "Promises", answer: "Promises allow us to write asynchronous code in a more synchronous and structured way."},
                        {hint: "Let and Const", answer: "Let is scoped to the nearest set of { }. Const values cannot change"},
                    ]

  let count = 0;
  let hidden = true;

  $("#next").on("click", () => {
    if (hidden === false) {
      $("#answer").toggleClass('hidden');
      hidden = true;
    }
    $("#content").html(`<h5><strong>${flashcards[count].hint}</strong></h5>`);
    $("#answer").html(`<p>${flashcards[count].answer}</p>`);
    count++
    if (count === flashcards.length ) count = 0;
  });

  $("#reveal").on("click", () => {
    if (hidden) {
      $("#answer").toggleClass('hidden');
      hidden = false;
    }
  });

});
