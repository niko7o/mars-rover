// 10x10 matrix of planet Mars
var mars = [
  ["Rover", null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

// Rover object
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
  find: function(){
    for (var x = 0; x < mars.length; x++){
      var row = mars[x];
      for (var y = 0; y < row.length; y++){
        var column = row[y];
        if (column === "Rover"){
          console.log(" Rover found at coords ["+this.x+"]["+this.y+"] - facing " + this.direction);
        }
      }
    }
  },
  turnLeft: function(){
    switch(this.direction){
      case 'N': this.direction = 'W';
                console.log('\n Left turn. Now facing: ' + this.direction);
                break;
      case 'W': this.direction = 'S';
                console.log('\n Left turn. Now facing: ' + this.direction);
                break;
      case 'S': this.direction = 'E';
                console.log('\n Left turn. Now facing: ' + this.direction);
                break;
      case 'E': this.direction = 'N';
                console.log('\n Left turn. Now facing: ' + this.direction);
                break;
      }
  },
  turnRight: function(){
    switch(rover.direction){
      case 'N': rover.direction = 'E';
                console.log('\n Right turn. Now facing: ' + rover.direction);
                break;
      case 'W': rover.direction = 'N';
                console.log('\n Right turn. Now facing: ' + rover.direction);
                break;
      case 'S': rover.direction = 'W';
                console.log('\n Right turn. Now facing: ' + rover.direction);
                break;
      case 'E': rover.direction = 'S';
                console.log('\n Right turn. Now facing: ' + rover.direction);
                break;
      }
  },
  goForward: function(){
    switch(rover.direction){
      case 'N': this.travelLog.push('['+this.x+']' + '['+this.y+']'); // we push the coords before updating them
                this.y = -1;
                console.log('\n Forward');
                this.find();
                break;
      case 'W': this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.x = -1;
                console.log('\n Forward');
                this.find();
                break;
      case 'S': this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.y += 1;
                console.log('\n Forward');
                this.find();
                break;
      case 'E': this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.x += 1;
                console.log('\n Forward');
                this.find();
                break;
      }
  }
}

// List for our rover to do things
var commandList = 'rffrfflfrff';

// Split & Read Orders
for (var i = 0; i < commandList.length; i++){
    var c = commandList.charAt(i);
    switch(c){
      case 'r': rover.turnRight();
      break;

      case 'l': rover.turnLeft();
      break;

      case 'f': rover.goForward();
      break;
    }
}

// Checking Travel log at end of run
console.log('\n');
console.log('-+- Travel Log -+-');
console.log(rover.travelLog);
