export class Table {
  constructor(cols, rows, containerId) {
    this.cols = cols;
    this.rows = rows;
    this.container = document.querySelector(containerId);
    this.field = [];
    this.createFields();
  }

  createFields() {
    let field = [];
    for (let i = 0; i < this.rows; i++) {
      field[i] = [];
      for (let j = 0; j < this.cols; j++) {
        field[i].push(this.createRocks());
      }
    }
    this.field = field;
    this.renderFields();
  }

  createRocks() {
    return Math.trunc(Math.random() * 5) === 1 ? "#" : "";
  }

  renderFields() {
    let template = "";
    for (let i = 0; i < this.rows; i++) {
      template += "<tr>";
      for (let j = 0; j < this.cols; j++) {
        template += `<td>${this.field[i][j]}</td>`;
      }
    }
    this.container.innerHTML = template;
  }
}

export class Character{
  constructor(table, x, y, face){
    this.table = table;
    this.x = x;
    this.y = y;
    this.face = face;
    if(!(this.setPosition(this.x, this.y))){
      throw new Error();
    }
  }

  up(){
    if(this.x-1 < 0){
      return;
    }
    this.setPosition(this.x - 1, this.y);
  }

  down(){
    if(this.x >= this.table.rows - 1){
      return;
    }
    this.setPosition(this.x + 1, this.y);
  }

  left(){
    if(this.y - 1 < 0){
      return;
    }
    this.setPosition(this.x, this.y - 1);
  }

  right(){
    if(this.y >= this.table.cols - 1){
      return;
    }
    this.setPosition(this.x, this.y + 1);
  }

  moveCharacter(move){
    const acceptedMoves = {
      ArrowUp(){
        this.up();
      },
      ArrowDown() {
        this.down();
      },
      ArrowLeft(){
        this.left();
      },
      ArrowRight(){
        this.right();
      }
    }
    const moveFunction = acceptedMoves[move];
    moveFunction.apply(this, []);
  }

  setPosition(x, y){
    if(this.table.field[x][y] === '#'){
      return false;
    }
    this.table.field[this.x][this.y] = '';
    this.x = x;
    this.y = y;
    this.table.field[this.x][this.y] = this.face;
    this.table.renderFields();
    return true;
  }
}

export class Player extends Character{
  constructor(table){
    super(table, 0, 0, '*-*');
  }
}

export class Npc extends Character{
  constructor(field){
    const x = Math.trunc(Math.random() * field.rows);
    const y = Math.trunc(Math.random() * field.cols);   
    super(field, x, y, "0-0");
    setInterval(this.walkRandomly.bind(this), 500);
  }

  walkRandomly(){
    const acceptedMoves = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    const direction = Math.trunc(Math.random() * 4);
    this.moveCharacter(acceptedMoves[direction]);
  }

}


