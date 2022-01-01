function startGame() {
    myGameArea.start();
}

var myGameArea = {  
    canvas : undefined,
    start : function() {
        this.canvas = document.getElementById("gameArea");
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
    },

    draw: function(component) {
    this.context.fillStyle = component.color;
    this.context.fillRect(component.x, component.y, component.width, component.height);
  }
}

var redSquare = {
  width: 20,
  height: 20,
  x: 10,
  y: 120,
  color: "red"
};

function updateGameArea() {
  myGameArea.draw(redSquare);
}