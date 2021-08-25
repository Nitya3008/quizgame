class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
   // this.option1.hide();
  //  this.option2.hide();
   // this.option3.hide();
   //this.option4.hide();
   // this.input1.hide();
   //this.button.hide();
    //this.input2.hide();
  //  this.question.hide();
  question.hide();

    //write code to change the background color here
    background("lightBlue");

    //write code to show a heading for showing the result of Quiz
//this.result=createElement(h1);
//this.result.html("RESULT OF THE QUIZ");
    //call getContestantInfo( ) here

textSize(24);
text("RESULT OF QUIZ",300,50);
Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
if(allContestants!==undefined){
  debugger;
  var display_Answers=230;
  fill("yellow");
  textSize(20);
  text("*NOTE:Contestants that answered right are marked in green",200,170);
}

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      debugger;
      var correctAns=2;
      if(correctAns===allContestants[plr].answer)
        fill("green");
        else
        fill("red");
      display_Answers+=30
      textSize(20); 
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
    }
    
  }

}
