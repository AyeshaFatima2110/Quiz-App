//import {score} from './quiz.js';

renderResult();

function renderResult(){
 console.log('this is result page');
 const score = localStorage.getItem('score');
  const resultHtml = `
      <div>
        your score : ${score}
      </div>`;
  document.querySelector('.js-score-container').innerHTML = resultHtml;
  const resultContainer = document.querySelector('.js-result-container');
  
  
  if(score>=8){
    resultContainer.innerHTML = `Good Job! &#128512`;
  }
  else if(score>=5 && score<8){
    resultContainer.innerHTML = 'Nice Try! &#128516;';
  }
  else{
    resultContainer.innerHTML = 'Not Good! &#128577';
  }

  


}