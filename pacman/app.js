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
    if(this.x + 1 > this.table.rows){
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
    if(this.y + 1 > this.table.cols){
      return;
    }
    this.setPosition(this.x, this.y + 1);
  }

  moveCharacter(move){
    switch(move){
      case "ArrowUp": console.log("Moving Up");this.up(); break;
      case "ArrowDown": console.log("Moving Down");this.down(); break;
      case "ArrowLeft": console.log("Moving Left");this.left(); break;
      case "ArrowRight": console.log("Moving Right"); this.right(); break;
      default: console.log("Nothing happens."); break;
    }
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


