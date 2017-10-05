/*
Ironhack prework by Nikolaas Verlee
All iterations are coded & tested
Bonus iterations that were done: Enforce Boundaries, Moving Backwards, Validate Inputs
*/

// 10x10 matrix of planet Mars
var mars = [
  ["Rover", null, null, "O", null, null, null, null, null, "O"],
  ["O", null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, "O"],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, "O", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "O", null, null, null, null, null, null, null, null],
  [null, null, null, null , null, null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null]
];

// Rover object
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
  find: function(){
    for (var x = 0; x < mars.length; x++){ // We create columns equal to ours Mars grid's length (10)
      var row = mars[x];
      for (var y = 0; y < row.length; y++){ // And rows depending on the created columns
        var column = row[y];
        if (column === "Rover"){
          return ("Rover found at coords ["+this.x+"]["+this.y+"] facing " + this.direction);
        }
      }
    }
  },
  turnLeft: function(){
    switch(this.direction){
      case 'N': this.direction = 'W';
                return 'Left turn. Now facing: ' + rover.direction;
                break;
      case 'W': this.direction = 'S';
                return 'Left turn. Now facing: ' + rover.direction;
                break;
      case 'S': this.direction = 'E';
                return 'Left turn. Now facing: ' + rover.direction;
                break;
      case 'E': this.direction = 'N';
                return 'Left turn. Now facing: ' + rover.direction;
                break;
      }
  },
  turnRight: function(){
    switch(rover.direction){
      case 'N': rover.direction = 'E';
                return 'Right turn. Now facing: ' + rover.direction;
                break;
      case 'W': rover.direction = 'N';
                return 'Right turn. Now facing: ' + rover.direction;
                break;
      case 'S': rover.direction = 'W';
                return 'Right turn. Now facing: ' + rover.direction;
                break;
      case 'E': rover.direction = 'S';
                return 'Right turn. Now facing: ' + rover.direction;
                break;
      }
  },
  goForward: function(){
    switch(rover.direction){
      case 'N': this.checkBoundaries();
                this.travelLog.push('['+this.x+']' + '['+this.y+']'); // we push the coords before updating them
                this.y -= 1; // the rover goes up
                console.log('\n Forward up');
                this.find();
                break;

      case 'W': this.checkBoundaries();
                this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.x -= 1;
                console.log('\n Forward left');
                this.find();
                break;

      case 'S': this.checkBoundaries();
                this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.y += 1;
                console.log('\n Forward down');
                this.find();
                break;

      case 'E': this.checkBoundaries();
                this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.x += 1;
                console.log('\n Forward right');
                this.find();
                break;
      }
  },
  goBack: function(){
    switch(rover.direction){
      case 'N': this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.y = +1;
                console.log('\n Went back up');
                this.find();
                break;
      case 'W': this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.x = +1;
                console.log('\n Went back right');
                this.find();
                break;
      case 'S': this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.y += -1;
                console.log('\n Went back down');
                this.find();
                break;
      case 'E': this.travelLog.push('['+this.x+']' + '['+this.y+']');
                this.x += -1;
                console.log('\n Went back left');
                this.find();
                break;
      }
  },
  /*
  checkObstacle: function(){
    if(mars[rover.x][rover.y] === "Rover" && mars[rover.x+1][rover.y] === "O"){
      console.log('Obstacle found on: Right');
      rover.x = rover.x - 1 ;
    }
    else if(mars[rover.x][rover.y] === "Rover" && mars[rover.x-1][rover.y] === "O"){
      console.log('Obstacle found on: Left');
      rover.x = rover.x + 1 ;
    }
    else if(mars[rover.x][rover.y] === "Rover" && mars[rover.x][rover.y+1] === "O"){
      console.log('Obstacle found on: Bottom');
      rover.y = rover.y - 1 ;
    }
    else if(mars[rover.x][rover.y] === "Rover" && mars[rover.x][rover.y-1] === "O"){
      console.log('Obstacle found on: Top');
      rover.y = rover.y + 1;
    }
  },
  */
  checkBoundaries: function(){
    if(rover.y <= -1){ // Top grid wall
      rover.y = 0;
    }
    if(rover.x <= -1){ // Left grid wall
      rover.x = 0;
    }
    if(rover.y == 10){ // Bottom grid wall
      rover.y = 9;
    }
    if(rover.x == 10){ // Right grid wall
      rover.x = 9;
    }
  }
};

// Make the rover navigate with a string of commands
function navigate(commandList){
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

        case 'b': rover.goBack();
                  break;

        // Command checker for anything that isn't r, l, f, b
        default: console.log('\n No such command [' + c + '] at string position [' + (i+1) + ']');
      }
  }
  // Checking Travel log at end of navigation run
  console.log('\n');
  console.log('-+- Travel Log -+-');
  console.log(rover.travelLog);
}

// Use this string variable inside navigate if you'd like to check all 4 grid walls
var string_boundaries_check = 'rfffffffffffffrfffffffffffffrfffffffffffffrffffffffffffff';
navigate('rffrfflfrff');
