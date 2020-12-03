  ///Interation 1

  let rover = {
      direction = "N",
      x: 0,
      y: 0,
    
  }

  ///Iteration 2 

  function turnLeft(rover){
    console.log("turnLeft was called!");
  }
  if (rover.direction === "N") {
      roverDirection = "W"
  }
  else if (rover.direction === "W") {
      roverDirection = "S"
  }
  else if (rover.direction === "S") {
      roverDirection = "E"
  }
  else if (rover.direction === "E") {
      roverDirection = "N"
  }

  function turnRight(rover){
    console.log("turnRight was called!");
  }
  if (rover.direction === "N") {
      roverDirection = "E"
  }
  else if (rover.direction === "E") {
      roverDirection = "S"
  }
  else if (rover.direction === "S") {
      roverDirection = "W"
  }
  else if (rover.direction === "W") {
      roverDirection = "N"
  }    

  ///Iteration 3
  
  function moveForward(rover){
    console.log("moveForward was called")
  }
  if (rover.direction === "N") {
    rover.x = 0  
    rover.y = -1
  }
  else if (rover.direction === "S") {
    rover.x = 0  
    rover.y = 1
  }
  else if (rover.direction === "W") {
      rover.x = -1
      rover.y = 0
  }
  else if (rover.direction === "E") {
      rover.x = 1
      rover.y = 0
  }

  ///Interation 4

  let roverpath = rffrfflfrff

  ///Iteration 5


  ///Bonus Enforce Boundaries


  ///Bonus Other Suggested Features 