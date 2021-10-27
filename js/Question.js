class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Correct Option No..");
   this.button = createButton('Submit');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }



    
    //Create elements for One question (h3) and 4 options (h4)
   

    
    





   
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
   
   
    //Create html() and position() for each question, input and answers.
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      "Thank You, Your Answer Has Been Submitted"

    })


  }

