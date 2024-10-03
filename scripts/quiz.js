import { Mcqs } from "../data/questions.js";

let score = 0;
let counter = 1;
renderQuestions(counter); //at first id 1

function renderQuestions(id){
  let currentMcq = '';
  let html = '';
  Mcqs.forEach((mcq)=>{
    
    if(mcq.id === id){
      currentMcq = mcq;
    }
  });


  const options = currentMcq.options;
  html = `
      <div class="question-container">
        ${currentMcq.question}
      </div>
      <div class="spacer"></div>
      <div class="js-option-container">
        ${renderOptions(options)}
      </div>
        
      
      `;
          
    
  document.querySelector('.js-mcq-container').innerHTML = html;
  attachOptionListener();
}




//rendering options for each question
function renderOptions(options){

  let optionHtml = '';

  options.forEach((option)=>{
    optionHtml += `<div class="mcq-option js-mcq-option">
               
               ${option}
                   </div>
              <div class="option-spacer"></div>`
   });
  return optionHtml;
  
}

//adding an event listener to the newly added options
function attachOptionListener(){
  document.querySelectorAll('.js-mcq-option')
          .forEach(element =>{
            element.addEventListener('click', (event)=>{
              const getAnswer = event.target.innerText; // get the html of the targeted or clicked option
              console.log(getAnswer);
              checkAnswer(getAnswer);

            });
  });
}



//adding event linstener to next button (next button let us navigate to new question )
const nextButton = document.querySelector('.js-next-button');
nextButton.addEventListener('click' , ()=>{
  if(counter>=1 && counter<10 ){
    counter++;
    //console.log(counter);
    renderQuestions(counter);
  }

});




function checkAnswer(answer){
  let currentMcq = '';
  Mcqs.forEach(mcq=>{
    if(counter===mcq.id){
      currentMcq = mcq;
    }
    });

    if(currentMcq.answer === answer){
      score++;
      console.log('correct');
      console.log(score);
      
    }
    else{
      console.log('wrong');
    }
     
  }

 // console.log(typeof[]); // why object














