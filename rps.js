let youScore = 0;
let cpuScore = 0;
const youScore_span = document.getElementById('you-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');



function getCpuMove()
{
  var moves = ['r', 'p', 's'];
  var rando = Math.floor(Math.random()*3);
  return moves[rando];
}

function word(letter)
{
  if(letter === 'r') return 'Rock';
  if(letter === 'p') return 'Paper';
  if(letter === 's') return 'Scissors';
}

function win(youChoice, cpuChoice)
{
  const youChoice_div = document.getElementById(youChoice);
  youScore++;
  youScore_span.innerHTML = youScore;
  result_p.innerHTML = word(youChoice) + " beats " + word(cpuChoice) + ". You WON!";
  youChoice_div.classList.add('green-glow');
  setTimeout(() => youChoice_div.classList.remove('green-glow') , 300);
}

function lose(youChoice, cpuChoice)
{
  const youChoice_div = document.getElementById(youChoice);
  cpuScore++;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = word(youChoice) + " loses to " + word(cpuChoice) + ". You LOST..";
  youChoice_div.classList.add('red-glow');
  setTimeout(() => youChoice_div.classList.remove('red-glow') , 300);
}

function draw(youChoice)
{
  const youChoice_div = document.getElementById(youChoice);
  result_p.innerHTML = 'It\'s a DRAW!';
  youChoice_div.classList.add('grey-glow');
  setTimeout(() => youChoice_div.classList.remove('grey-glow') , 300);
}


function game(move)
{
  const cpuMove = getCpuMove();

  switch(move + cpuMove){
    case 'rs':
    case 'sp':
    case 'pr':
      win(move, cpuMove);
      break;

    case 'rp':
    case 'ps':
    case 'sr':
      lose(move, cpuMove);
      break;

    case 'rr':
    case 'pp':
    case 'ss':
      draw(move);
      break;
  }
}

function main()
{
  rock_div.addEventListener('click', function(){
    game('r');
  });

  paper_div.addEventListener('click', function(){
    game('p');
  });

  scissors_div.addEventListener('click', function(){
    game('s');
  });
}

main();
