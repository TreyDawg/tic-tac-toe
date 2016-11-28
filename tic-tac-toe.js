// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function makeShape() {
if (turn=="player1") {
  var seven=document.createElementNS(namespace, "circle")
  seven.setAttribute("cx",50)
  seven.setAttribute("cy",50)
  seven.setAttribute("r",40)
  seven.setAttribute("fill","red")
  svg.appendChild(seven)
turn="player2"
}
}






function circle() {
  var svg=document.getElementById("game-board")
  var seven=document.createElementNS(namespace, "circle")
  seven.setAttribute("cx",50)
  seven.setAttribute("cy",50)
  seven.setAttribute("r",40)
  seven.setAttribute("fill","red")
  svg.appendChild(seven)
}

function trey() {
  var savage=document.getElementById("game-board")
  var five=document.createElementNS(namespace, "circle")
  five.setAttribute("cx",50)
  five.setAttribute("cy",150)
  five.setAttribute("r",40)
  five.setAttribute("opacity",1)
  five.setAttribute("fill","yellow")
  savage.appendChild(five)
}

function austin() {
  var saveges=document.getElementById("game-board")
var two=document.createElementNS(namespace, "circle")
two.setAttribute("cx",50)
two.setAttribute("cy",250)
two.setAttribute("r",40)
two.setAttribute("fill","red")
saveges.appendChild(two)
}

function alex() {
  var savages=document.getElementById("game-board")
var one=document.createElementNS(namespace, "circle")
one.setAttribute("cx",150)
one.setAttribute("cy",250)
one.setAttribute("r",40)
one.setAttribute("fill","yellow")
savages.appendChild(one)
}

 function kellen() {
  var sevages=document.getElementById("game-board")
var three=document.createElementNS(namespace, "circle")
three.setAttribute("cx",150)
three.setAttribute("cy",150)
three.setAttribute("r",40)
three.setAttribute("fill","red")
sevages.appendChild(three)
}

function gigi() {
 var seveges=document.getElementById("game-board")
var threee=document.createElementNS(namespace, "circle")
threee.setAttribute("cx",150)
threee.setAttribute("cy",50)
threee.setAttribute("r",40)
threee.setAttribute("fill","yellow")
seveges.appendChild(threee)
}

function papa() {
 var sevegas=document.getElementById("game-board")
var threeee=document.createElementNS(namespace, "circle")
threeee.setAttribute("cx",250)
threeee.setAttribute("cy",50)
threeee.setAttribute("r",40)
threeee.setAttribute("fill","red")
sevegas.appendChild(threeee)
}

function dad() {
 var seeegas=document.getElementById("game-board")
var threeeee=document.createElementNS(namespace, "circle")
threeeee.setAttribute("cx",250)
threeeee.setAttribute("cy",150)
threeeee.setAttribute("r",40)
threeeee.setAttribute("fill","red")
seeegas.appendChild(threeeee)
}

function mom() {
 var seeeas=document.getElementById("game-board")
var thrreeeee=document.createElementNS(namespace, "circle")
thrreeeee.setAttribute("cx",250)
thrreeeee.setAttribute("cy",250)
thrreeeee.setAttribute("r",40)
thrreeeee.setAttribute("fill","yellow")
seeeas.appendChild(thrreeeee)
}
