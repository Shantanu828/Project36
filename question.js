class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("").attribute("placeholder", "Enter your name");
     //Create a input box to enter the number
     this.input2 = createInput("").attribute("placeholder", "Enter the correct option no");
  
  
      this.button = createButton('Submit');
      //Create elements for One question (h3) and 4 options (h4)
      this.question = createElement("h3");
      this.option1  = createElement("h4");
      this.option2  = createElement("h4");
      this.option3  = createElement("h4");
      this.option4 = createElement("h4");
  
      this.message = createElement("h2")
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
     
      this.message.hide();
      //Add hide() for questions, options & input box
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.input2.hide();
  
    }
    setElementsStyle() {
      this.input1.class("customInput1");
      this.input2.class("customInput2");
      this.button.class("customButton");
      this.message.class("greeting");
    }
  
    display(){
      this.title.html("MyQuiz Game");
      this.title.position(350, 0);
  
  
      //Create html() and position() for each question, input and answers.
      this.question.html("If today is Friday then what day will fall after 1897 days ?");
      this.question.position(100,60);
  
      this.option1.html(" 1.Monday")
      this.option1.position(100,90);
  
      this.option2.html("2.Tuesday")
      this.option2.position(100,120);
  
      this.option3.html("3.Saturday")
      this.option3.position(100,150);
  
      this.option4.html("4.Sunday")
      this.option4.position(100,180);
  
      this.input2.position(350,270);
  
  
  
  
      this.input1.position(150, 270);
      this.button.position(290, 360);
      this.setElementsStyle();
      // Add a mousepressed action when the button is clicked Display the this.message
      this.button.mousePressed(()=>{
       
        var message1 =`Thank You,Your Answer Has Been Submitted.. `
        this.message.html(message1);
      });
  
    }
  }
  