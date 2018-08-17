
var rover = {
  direction: "N",
  positionx: 0,
  positiony: 0,
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N": 
       rover.direction = "W";
       console.log("Rover's current direction is " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover's current direction is " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover's current direction is " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover's current direction is " + rover.direction);
      break;
  }  
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N": 
       rover.direction = "E";
       console.log("Rover's current direction is " + rover.direction);
       break;
    case "E":
      rover.direction = "S";
      console.log("Rover's current direction is " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover's current direction is " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover's current direction is " + rover.direction);
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.positiony--;
      console.log("current position is " + rover.positiony + "y," + rover.positionx + "x.");
      breack;
    case "S":
      rover.positiony++;
      console.log("current position is " + rover.positiony + "y," + rover.positionx + "x.");
      breack;
    case "W":
      rover.positionx--;
      console.log("current position is " + rover.positiony + "y," + rover.positionx + "x.");
      breack;
    case "E":
      rover.positionx++;
      console.log("current position is " + rover.positiony + "y," + rover.positionx + "x.");
      breack;
  }
}

function command () {
  for (var letra = f;) {
    switch (letra) {
      case "f":
      moveForward(rover);
      breack;
      case "l":
      turnLeft(rover);
      breack;
      case "r":
      turnRight(rover);
      breack;
            }
  }
}

