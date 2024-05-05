var inputs = $("input");
arrayInputs = inputs.get();
console.log(arrayInputs);
var index = 0;
$(".marks-container").hide();
$(arrayInputs).on("click", function () {
    index = inputs.index(this);
    console.log(index);
    var x = 0;
    while (x < arrayInputs.length) {
        if (x === index) {
            arrayInputs[x].checked = true;
        }

        else {
            arrayInputs[x].checked = false;
        }
        x++;
    }
})

var data = [{
    'que': 'Which of the following is a Markup Language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'ans': '1'

},
{
    'que': 'What year was javascript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'None of the above',
    'ans': '2'

},

{
    'que': 'What does CSS stand for?',
    'a': 'Hype text markup language',
    'b': 'Cascading style sheet',
    'c': 'Jason Object Notation',
    'd': 'None of the above',
    'ans': '1'

}

]


function loadQues() {

    $(".question label h1").text(i + 1 + ". " + data[i].que);


}

function loadOpt() {
    $(".one label").text(data[i].a);
    $(".two label").text(data[i].b);
    $(".three label").text(data[i].c);
    $(".four label").text(data[i].d);
}




var i = 0;
var correct = 0;
var wrong = 0;

$("button").on("click", function () {


    if (index + 1 == data[i].ans) {

        correct++;

    }
    else {
        wrong++;
    }
    i++;
    if (i >= 3) {
        loadMarks();

    }

    else {
        loadQues();
        loadOpt();
    }


})




function loadMarks() {

    $(".marks-container").toggle();
    $(".quiz-container").toggle();
    $("span").prepend(correct + "/3");

}

loadQues();
loadOpt();