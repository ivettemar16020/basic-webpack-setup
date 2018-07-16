const state = {
  player: ['X', 'O'],
  currentPlayer: 0, 
  win: false
};

const render = lState =>  {
  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }
  
  const title = document.createElement('h1');
  title.innerHTML = 'TOTITO';

  const grid = document.createElement('div');
  grid.className= 'grid';

  let turPlay = lState.currentPlayer;
  const info = document.createElement('h2'); 
  info.innerHTML = (`It's player ${lState.player[lState.currentPlayer]}'s turn`)
  console.log(lState.player[lState.currentPlayer]);

  //Button
  const reBtn = document.createElement('button');
  reBtn.className = 'reBtn';
  reBtn.innerHTML = 'Reload';

  root.appendChild(title);
  root.appendChild(grid);
  root.appendChild(info);
  root.appendChild(reBtn);

  //Totito grid elements
  const g1 = document.createElement('div');
  g1.className = 'g';
  const g2 = document.createElement('div');
  g2.className = 'g';
  const g3 = document.createElement('div');
  g3.className = 'g';
  const g4 = document.createElement('div');
  g4.className = 'g';
  const g5 = document.createElement('div');
  g5.className = 'g';
  const g6 = document.createElement('div');
  g6.className = 'g';
  const g7 = document.createElement('div');
  g7.className = 'g';
  const g8 = document.createElement('div');
  g8.className = 'g';
  const g9 = document.createElement('div');
  g9.className = 'g';

  //Adding grid elements
  grid.appendChild(g1);
  grid.appendChild(g2);
  grid.appendChild(g3);
  grid.appendChild(g4);
  grid.appendChild(g5);
  grid.appendChild(g6);
  grid.appendChild(g7);
  grid.appendChild(g8);
  grid.appendChild(g9);

  //Sectors: X and O 
  //const cannot be re-assigned
  let sectX1 = 0 
  , sectX2 = 0
  , sectX3 = 0
  , sectX4 = 0
  , sectX5 = 0
  , sectX6 = 0
  , sectX7 = 0
  , sectX8 = 0
  , sectX9 = 0
  , sectO1 = 0
  , sectO2 = 0
  , sectO3 = 0
  , sectO4 = 0
  , sectO5 = 0
  , sectO6 = 0
  , sectO7 = 0
  , sectO8 = 0
  , sectO9 = 0
  , flagX = 0;
  
  //Mechanics
  g1.onclick = () => {
    if(lState.win == false){
      if(sectX1 == 0 && sectO1 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g1.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX1 = 1;
          flagX++;
          console.log('X');
        }else{
          g1.classList.add('XPlayer');    
          lState.currentPlayer = 0;
          sectO1 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g2.onclick = () => {
    if(lState.win == false){
      if(sectX2 == 0 && sectO2 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g2.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX2 = 1;
          flagX++;
          console.log('X');
        }else{
          g2.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO2 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g3.onclick = () => {
    if(lState.win == false){
      if(sectX3 == 0 && sectO3 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g3.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX3 = 1;
          flagX++;
          console.log('X');
        }else{
          g3.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO3 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g4.onclick = () => {
    if(lState.win == false){
      if(sectX4 == 0 && sectO4 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g4.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX4 = 1;
          flagX++;
          console.log('X');
        }else{
          g4.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO4 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g5.onclick = () => {
    if(lState.win == false){
      if(sectX5 == 0 && sectO5 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g5.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX5 = 1;
          flagX++;
          console.log('X');
        }else{
          g5.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO5 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g6.onclick = () => {
    if(lState.win == false){
      if(sectX6 == 0 && sectO6 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g6.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX6 = 1;
          flagX++;
          console.log('X');
        }else{
          g6.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO6 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g7.onclick = () => {
    if(lState.win == false){
      if(sectX7 == 0 && sectO7 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g7.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX7 = 1;
          flagX++;
          console.log('X');
        }else{
          g7.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO7 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g8.onclick = () => {
    if(lState.win == false){
      if(sectX8 == 0 && sectO8 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g8.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX8 = 1;
          flagX++;
          console.log('X');
        }else{
          g8.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO8 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  g9.onclick = () => {
    if(lState.win == false){
      if(sectX9 == 0 && sectO9 == 0){
        if(lState.player[lState.currentPlayer] == "X"){
          g9.classList.add('XPlayer');    
          lState.currentPlayer = 1;
          sectX9 = 1;
          flagX++;
          console.log('X');
        }else{
          g9.classList.add('OPlayer');    
          lState.currentPlayer = 0;
          sectO9 = 1;
          console.log('O');
        }   
      }else{
        alert('Not available');
      }  
      winner();
    }
  };

  //Winner? 
  function winner(){
    //X: 
    if ((sectX1 == 1 && sectX2 == 1 && sectX3 == 1) || (sectX1 == 1 && sectX4 == 1 && sectX7 == 1) || (sectX7 == 1 && sectX5 == 1 && sectX3 == 1) || (sectX3 == 1 && sectX6 == 1 && sectX9 == 1) || (sectX7 == 1 && sectX8 == 1 && sectX9 == 1) || (sectX1 == 1 && sectX5 == 1 && sectX9 == 1) || (sectX4 == 1 && sectX5 == 1 && sectX6 == 1) || (sectX2 == 1 && sectX5 == 1 && sectX8 == 1)){
      alert('Player X is the winner');
      lState.win = true; 
    }
    if ((sectO1 == 1 && sectO2 == 1 && sectO3 == 1) || (sectO1 == 1 && sectO4 == 1 && sectO7 == 1) || (sectO7 == 1 && sectO5 == 1 && sectO3 == 1) || (sectO3 == 1 && sectO6 == 1 && sectO9 == 1) || (sectO7 == 1 && sectO8 == 1 && sectO9 == 1) || (sectO1 == 1 && sectO5 == 1 && sectO9 == 1) || (sectO4 == 1 && sectO5 == 1 && sectO6 == 1) || (sectO2 == 1 && sectO5 == 1 && sectO8 == 1)){
      alert('Player O is the winner');
      lState.win = true; 
    }
    if((lState.win == false) && (flagX >= 5)){
      alert('Tie');
      lState.win = true;
    }
  }

  //Reload the game
  reBtn.onclick = () => {
    //alert('You reloaded the game');
    lState.currentPlayer = 0;
    lState.win = false;
    render(lState);
  };
}

render(state);