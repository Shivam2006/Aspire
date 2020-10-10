class Form {

    constructor() {
      this.input = createInput("Enter your email");
      this.button = createButton('Lets Start');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.registeration= createElement('h3');
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Aspire");
      this.title.position(displayWidth/2 - 50, 0);

  
      this.input.position(displayWidth/2-80, displayHeight/2-20);
      this.button.position(displayWidth/2 + 40, displayHeight/2-20);
      this.reset.position(displayWidth-100,20);
      this.registeration.position(displayWidth/2,displayHeight/2);
  
      this.button.mousePressed(()=>{
          Entry.update();5478.
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello ")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }
  