import { Mcqs } from "../data/questions.js";

let score = 0;
let counter = 1;
let currentMcq = '';

document.addEventListener('DOMContentLoaded',()=>{
  renderQuestions(counter);

})

 //at first id 1
//render the questions
function renderQuestions(id){
  
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
              <div class="option-spacer"></div>`;
   });
  return optionHtml;
  
}

//adding an event listener to the newly added options
function attachOptionListener(){
  document.querySelectorAll('.js-mcq-option')
          .forEach(element =>{
            element.addEventListener('click',handleOptionEvent);
  });
}

function handleOptionEvent(event){

  const selectedOption = event.target;
  const getAnswer = selectedOption.innerText; // get the html of the targeted or clicked option
  const result = checkAnswer(getAnswer);
  showResult(selectedOption ,result);
}



//adding event linstener to next button (next button let us navigate to new question )

const nextButton = document.querySelector('.js-next-button');
nextButton.addEventListener('click' , ()=>{
  if(counter>=1 && counter<10){
    counter++;
    //console.log(counter);
    renderQuestions(counter);
  }
  if(counter===10){
    
    nextButton.classList.add('js-submit-button');
    nextButton.innerHTML = 'submit';
    nextButton.classList.remove('js-next-button');
    //adding setTimeout for a little delay because were updating the dom so it took a little bit time , and after updating the dom we add the event listener so it will not cause the null proerty error
    setTimeout(()=>{
      const submitButton = document.querySelector('.js-submit-button');
      submitButton.addEventListener('click',()=>{
        localStorage.setItem('score',score);
        window.location.href = 'result.html';
        

      });
    },3);
  }

});






function checkAnswer(answer){
  let result = '';
  if(currentMcq.answer === answer){
      score++;
      
      result = true;
      
    }
  else{
      
      result = false;
    }

  return result;
     
  }

 // console.log(typeof[]); // why object
function showResult(selectedOption,result){
  const optionsElement = document.querySelectorAll('.js-mcq-option');

  if(result){
    selectedOption.classList.add('right-answer');
    
   }
  else{
    selectedOption.classList.add('wrong-answer');
    }
 
  optionsElement.forEach(element=>{
    element.removeEventListener('click',handleOptionEvent);
  });

  


}













