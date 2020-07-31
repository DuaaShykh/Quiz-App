    var min = 0;
    var sec = 0;
    var msec = 0;
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var interval;
    function timer(){
        sec++;
      seconds.innerHTML = sec;
        if(sec >=60){
            min++
            minutes.innerHTML = min;
            sec = 0
        } 
       if(minutes.innerHTML==2 ){
           clearTimeout(interval);
           alert("Time's Up!!");
           quiz.innerHTML = "<img src='trophy-png.png'><br><h2>You got "+right+ " / "+questions.length+" questions right</h2>"+"<br>"+"<h2>You got "+points+ " points</h2><br><h2>Time: "+minutes.innerHTML+" : "+seconds.innerHTML;
           quiz.innerHTML += "<a href='index.html'><button>Try Again</button></a><br>";
            getId("quiz_status").innerHTML = "<h1>Time's Up..</h1>"+"<br>"; 
            document.getElementById("min").innerHTML = "";
            document.getElementById("sec").innerHTML = "";
            document.getElementById("colon").innerHTML = "";
            document.getElementById("time").innerHTML = "";
       }
    }
    interval = setInterval(timer,1000);

var count = 0;
var quiz, quiz_status,question,choices,choice,opt1,opt2,opt3,opt4;
var right = 0;
var points = 0;
var questions = [
      {
        question: "Who was the youngest British Prime Minister?",
       
          a: "Allen Sherman",
          b: "William Pitt",
          c: "Douglas Crockford",
          d: "Catherine Parr",
          answer: "b"
      },
      {
        question: "What language is spoken in Brazil?",
       
          a: "English",
          b: "Spanish",
          c: "Russian",
          d: "Portuguese",
          answer: "d"
      },
      {
        question: "Who invented JavaScript?",
       
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich",
          d: "Allen Sherman",
          answer: "c"
      },
      {
        question: "How to write an IF statement in JavaScript?",
       
          a: "if i = 13 then",
          b: "if (i == 13)",
          c: "if i == 13 then",
          d: "if i = 13",
          answer: "b"
      },
      {
        question: "Alberta is a province of which country?",
        
          a: "Colombia",
          b: "Brazil",
          c: "Canada",
          d: "Algeria",
          answer: "c"
      }
];

function getId(id){
    return document.getElementById(id);
}

var sname = document.getElementById("name");
function getQuestion(){
    quiz = getId("quiz");
    if(count >= questions.length){
        quiz.innerHTML = "<img src='trophy-png.png'><h2>You got "+right+ " / "+questions.length+" questions right !!</h2>  "+"<br>"+"<h2>You got "+points+ " points. </h2><br><h2>Time: "+minutes.innerHTML+" : "+seconds.innerHTML ;
        quiz.innerHTML += "<a href='quiz_result.html'><button id = 'ans'>Show Answers</button></a><br>";
        quiz.innerHTML += "<a href='index.html'><button id = 'tryAgain' >Try Again</button></a><br>";
        getId("quiz_status").innerHTML = "<h1>Your quiz has been competed!</h1>"+"<br>";
        document.getElementById("min").innerHTML = "";
        document.getElementById("sec").innerHTML = "";
        document.getElementById("colon").innerHTML = "";
        document.getElementById("time").innerHTML = "";
       
        count = 0;
        right = 0;
      clearTimeout(interval);
        return false;
    }

    getId("quiz_status").innerHTML = "Question "+ (count+1)+ " of "+ questions.length;
   
    question = questions[count].question;
    opt1 = questions[count].a;
    opt2 = questions[count].b;
    opt3 = questions[count].c;
    opt4 = questions[count].d;
    quiz.innerHTML = "<h3>"+question+"</h3>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'>"+opt1+"</label><hr color='#bf360c'>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='b'>"+opt2+"</label><hr color='#bf360c'>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='c'>"+opt3+"</label><hr color='#bf360c'>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='d'>"+opt4+"</label><hr color='#bf360c'>"; 
    quiz.innerHTML +="<button onclick='checkAns()'  id = 'next_btn'>Next</button> ";
   
}
function checkAns(){
   
    choices = document.getElementsByName("choices");
    for(i=0; i<choices.length;i++){
        if(choices[i].checked){
            choice = choices[i].value
        }
    }
    if(choice == questions[count].answer){
        right++;
         points += 10;
    }
    count++;
    getQuestion();

  

}
 
window.addEventListener("load",getQuestion);

