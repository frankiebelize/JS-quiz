export const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text:"<scripting>",correct:false},
            {text:"<script>",correct:true},
            {text:"<js>",correct:false},
            {text:"<javascript>",correct:false},
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {text:"The <body> section",correct:true},
            {text:"The <head> section",correct:false},
            {text:"after the <html> section",correct:false},
            {text:"Both the <head> section and the <body> section are correct",correct:false},
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called abc.js?",
        answers: [
            {text:"<script src = abc.js>",correct:true},
            {text:"<script href = abc.js>",correct:true},
            {text:"<script name = abc.js>",correct:false},
            {text:"<script link = abc.js>",correct:false},
        ]
    },
    {
        question: "How do you write ,Hello World, in an alert box?",
        answers: [
            {text:'msg("Hello Wolrd");',correct:false},
            {text:'alertBox("Hello Wolrd");',correct:false},
            {text:'alert("Hello Wolrd");',correct:true},
            {text:'print("Hello Wolrd");',correct:false},
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            {text:"function:myFunction()",correct:false},
            {text:"function myFunction()",correct:true},
            {text:"function = myFunction()",correct:false},
            {text:"void myFunction",correct:false},
        ]
    },
    {
        question: "How do you call a function named, myFunction?",
        answers: [
            {text:"call function myFunction()",correct:false},
            {text:"myFunction()",correct:true},
            {text:"myFunction",correct:false},
            {text:"call myFunction()",correct:false},
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text:"if (i == 5)",correct:true},
            {text:"if i = 5 then",correct:false},
            {text:"if i = 5",correct:false},
            {text:"if i == 5 then",correct:false},
        ]
    },
    {
        question: ":Lastly, Are you an amazing person? :)",
        answers: [
            {text:"Yes",correct:true},
            {text:"ofc",correct:true},
            {text:"hell yeah I am",correct:true},
            {text:"Nah",correct:false},
        ]
    },
];