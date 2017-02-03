var head = $("#snake-head");
var food = $("#snake-food");
var snakeLength = 1
var snakeBody = ["head"]
var hs_display = $("#highscore-display");

var foodLeft = "whothefuckknowspx"
var foodTop = "whothefuckcarespx"
var speed = 100
var score = snakeLength
hs_display.html("HIGHSCORE: " + localStorage.getItem("HIGHSCORE"))
//CANVAS FOR SNAKE BODYYYY!!!!
var canvas = document.getElementById("snake-canvas");
var ctx = canvas.getContext("2d");

if (localStorage.getItem("HIGHSCORE") == null) {
  localStorage.setItem("HIGHSCORE", 0)
}
function Sprite(x,y,w,h,color){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.color=color ? color : "#000";
}
Sprite.prototype.drawMe = function (ctx,dx,dy){
  ctx.fillStyle = this.color;
  dx= dx ? dx : 0;
  dy= dy ? dy : 0;
  ctx.beginPath();
  ctx.moveTo(this.x,this.y);
  ctx.lineTo(this.x, this.y + this.h);
  ctx.lineTo(this.x + this.w, this.y + this.h);
  ctx.lineTo(this.x + this.w, this.y);
  ctx.lineTo(this.x,this.y)
  ctx.lineWidth = 5
  ctx.stroke();
  ctx.fillRect(this.x+dx,this.y+dy,this.w,this.h);

}
//DEATH ----------------------------------------------------------

var playerDeadvar = "false"

//FOOD SPAWNING ---------------------------------------------------

function spawnFood() {
  var randomLeftValue = (((Math.floor(Math.random()*35)*25) + 15).toString() + "px");
  var randomTopValue = (((Math.floor(Math.random()*17)*25)).toString() + "px");
  food.css("left",randomLeftValue);
  food.css("top",randomTopValue);
  foodLeft = randomLeftValue
  foodTop = randomTopValue
}
spawnFood()
//movement--------------------------------------------------------
/////////////////// BORDERS /////////////////////////
setInterval(function(){
  // get left as int //
  var leftClean1 = head.css("left");
  var leftClean2 = leftClean1.split("px")[0];
  var playerLeft = parseInt(leftClean2);
  // get top as int //
  var topClean1 = head.css("top");
  var topClean2 = topClean1.split("px")[0];
  var playerTop = parseInt(topClean2);
  //////////////////////////////////////////////////
  function playerDead() {
    $("#death-message").css("display","inline-block");
    playerDeadvar = "true"
    head.css("display","none");
  }
  if (playerLeft > 915) {
    playerDead()
  }
  if(playerLeft < 0) {
    playerDead()
  }
  if(playerTop < 0) {
    playerDead()
  }
  if(playerTop > 475) {
    playerDead()
  }
},101);
/////////////////PLAYER CORDS/////////////////////
// get left as int //
var leftClean1 = head.css("left");
var leftClean2 = leftClean1.split("px")[0];
var playerLeft = parseInt(leftClean2);
// get top as int //
var topClean1 = head.css("top");
var topClean2 = topClean1.split("px")[0];
var playerTop = parseInt(topClean2);
//////////////////////////////////////////////////
var heading = "null"
// THIS FUNCTION CHANGES HEADINGS -----------------------------------------------------------------
$(document).keydown(function(e) {
    if (e.keyCode == 38) { //up
      if (heading == "down") {

      } else {
      heading = "up"
    }
    }
    else if (e.keyCode == 80) {
      heading = "null"
    }
    else if(e.keyCode == 82) {
      window.location.reload();
    }
    else if(e.keyCode == 40) { //down
      if (heading == "up") {

      } else {
      heading = "down"
    }

    }
    else if(e.keyCode == 37) { //left
      if (heading == "right") {

      } else {
      heading = "left"
    }

    }
    else if(e.keyCode == 39) { //right
      if (heading == "left") {

      } else {
      heading = "right"
    }
    }

    else {
    }
  }
)
// ACTUAL MOVEMENT FUNCTION ------------------------------------------------------------------------------------
setInterval(function() {

  /////////////////PLAYER CORDS/////////////////////
  // get left as int //
  var leftClean1 = head.css("left");
  var leftClean2 = leftClean1.split("px")[0];
  var playerLeft = parseInt(leftClean2);
  // get top as int //
  var topClean1 = head.css("top");
  var topClean2 = topClean1.split("px")[0];
  var playerTop = parseInt(topClean2);
  //////////////////////////////////////////////////
  if (playerDead = "false") {
    if (heading == "up") {
      var newCordforUpifying = ((playerTop - 25).toString() + "px");
      head.css("top",newCordforUpifying);
    }
    else if (heading == "down") {
      var newCordforDownifying = ((playerTop + 25).toString() + "px");
      head.css("top",newCordforDownifying);
    }
    else if (heading == "left") {
      var newCordforLeftifying = ((playerLeft - 25).toString() + "px");
      head.css("left",newCordforLeftifying);
    }
    else if (heading == "right") {
      var newCordforRightifying = ((playerLeft + 25).toString() + "px");
      head.css("left",newCordforRightifying)
    }
    else {
    }
  }
else {
}
},100)
// THIS FUNCTION CHECKS IF YOU ARE ON TOP OF THE FOOD
setInterval(function() {
  /////////////////PLAYER CORDS/////////////////////
  // get left as int //
  var leftClean1 = head.css("left");
  var leftClean2 = leftClean1.split("px")[0];
  var playerLeft = parseInt(leftClean2);
  // get top as int //
  var topClean1 = head.css("top");
  var topClean2 = topClean1.split("px")[0];
  var playerTop = parseInt(topClean2);
  //////////////////////////////////////////////////
  var idksomehowfuckedup = ((((parseInt(foodTop.split("px")[0]) + 25)).toString()) + "px")
  if (leftClean1 == foodLeft) {
    if (topClean1 == idksomehowfuckedup) {
      spawnFood()
      speed = speed - 10
      function addBodyPart() {
        snakeLength = snakeLength + 1
      }
      addBodyPart()
    }
  }
},101)
  theCords = [];
//HERE IS THE FUNCTION THAT ADDS BODY PARTS AND REGULATES BODY PARTS AND DOES EVERYTHING RELATING TO BODY LENGTH
setInterval(function() {
  /////////////////PLAYER CORDS/////////////////////
  // get left as int //
  var leftClean1 = head.css("left");
  var leftClean2 = leftClean1.split("px")[0];
  var playerLeft = parseInt(leftClean2);
  // get top as int //
  var topClean1 = head.css("top");
  var topClean2 = topClean1.split("px")[0];
  var playerTop = parseInt(topClean2);
  //////////////////////////////////////////////////
  function playerDead() {
    $("#death-message").css("display","inline-block");
    playerDeadvar = "true"
    head.css("display","none");

    if (playerDeadvar = "true") {
      setInterval(function() {
        ctx.clearRect(0,0,100000,100000)
      },10)
  }
  }

  theCords.push(playerLeft + "," + playerTop);
  var pastCords = theCords.slice(theCords.length - snakeLength, theCords.length - 1);
  ctx.clearRect(0,0,100000,100000)
  for (i = 0; i < pastCords.length; i++) {
    var properCordForLeft = parseInt(pastCords[i].split(",")[0]);
    var properCordForTop = parseInt(pastCords[i].split(",")[1]);
    if (properCordForLeft == playerLeft) {
      if (properCordForTop == playerTop) {
        playerDead()
      }
    }
    var newBodyPart = new Sprite(properCordForLeft,properCordForTop,25,25,"#ffff00")
    newBodyPart.drawMe(ctx,0,0);
  }
  $("#main-title").html("SCORE: " + snakeLength);

},101)
setInterval(function() {
  console.log("score: " + snakeLength)
  console.log(localStorage.getItem("HIGHSCORE"))
  if (parseInt(snakeLength) > parseInt(localStorage.getItem("HIGHSCORE"))) {
    localStorage.setItem("HIGHSCORE",score);
  }
  hs_display.html("HIGHSCORE: " + localStorage.getItem("HIGHSCORE"))
},100)
