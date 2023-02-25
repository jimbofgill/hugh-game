const question = document.querySelector(".question");
const answer_input = document.getElementById("answer_input");
const result = document.querySelector(".result");

var num_to_double = 0;
const set_question = () => {
    num_to_double = Math.floor(Math.random() * 500) + 1;

    // This makes testing easier!
    //num_to_double = Math.floor(Math.random() * 5) + 1;

    question.innerHTML = "Double " + num_to_double;
};

set_question();

answer_input
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            var a = Number(answer_input.value);
            answer_input.value = null;
            if (a === 2 * num_to_double) {
                result.innerHTML = "Yes!   Double " +
                    num_to_double + " is " + 2 * num_to_double;
                set_question();
            } else {
                result.innerHTML = "Nope";
            }
        }
    });