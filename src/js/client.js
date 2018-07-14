const state = {
  player: ['O', 'X'],
  currentPlayer: 0, 
  pos: [[0,0,0],[0,0,0],[0,0,0]]
};

const render = lState => {
  const title = document.createElement('h1');
  title.innerHTML = 'TOTITO';

  const grid = document.createElement('div');
  grid.className= 'grid';

  root.appendChild(title);
  root.appendChild(grid);

  //Totito grid elements
  const g1 = document.createElement('div');
  g1.className = 'g1';
  const g2 = document.createElement('div');
  g2.className = 'g2';
  const g3 = document.createElement('div');
  g3.className = 'g3';
  const g4 = document.createElement('div');
  g4.className = 'g4';
  const g5 = document.createElement('div');
  g5.className = 'g5';
  const g6 = document.createElement('div');
  g6.className = 'g6';
  const g7 = document.createElement('div');
  g7.className = 'g7';
  const g8 = document.createElement('div');
  g8.className = 'g8';
  const g9 = document.createElement('div');
  g9.className = 'g9';

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

}

render(state);