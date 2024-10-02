import { Mcqs } from "../data/questions.js";

let html = '';
let counter = 1;
renderQuestions(counter);
function renderQuestions(id){

  
console.log('questions page')

Mcqs.forEach((mcq)=>{
  const Qno = mcq.id;

  if(Qno === counter){

    const options = mcq.options;
    html = `
        <div>
          ${mcq.question}
        </div>
        <div class="spacer"></div>
        ${renderOptions(options)}
        
        `;
  }
  
  
});
}

document.querySelector('.js-mcq-container').innerHTML = html;


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




document.querySelectorAll('.js-mcq-option')
        .forEach(element =>{
          element.addEventListener('click', (event)=>{
            const getAnswer = event.target.innerText; // get the html of the targeted or clicked option
            console.log(getAnswer);
            //checkAnswer(getAnswer);

          });
        
        


        });

/*function checkAnswer(answer){

}*/

const nextButton = document.querySelector('.js-next-button');
nextButton.addEventListener('click' , ()=>{

})