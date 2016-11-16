// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function circle() {
  var svg=document.getElementById("game-board")
  var seven=document.createElementNS(namespace, "circle")
  seven.setAttribute("cx",50)
  seven.setAttribute("cy",50)
  seven.setAttribute("r",40)
  seven.setAttribute("fill","red")
  svg.appendChild(seven)
}
