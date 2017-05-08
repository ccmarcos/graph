var diagram;
var $;
var nodo=0;
var nodos=new Array();

function goIntro(){
   $ = go.GraphObject.make;
   diagram =
    $(go.Diagram, "myDiagramDiv",
      {
        initialContentAlignment: go.Spot.Center, // center Diagram contents
        "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
      });
}

function addGraph(){
  //diagram.layout = $(go.GridLayout);
  nodo++;
  nodos[nodo] =
     $(go.Node, "Auto",
       $(go.Shape,
           { figure: "Circle",
           fill: "lightblue" }),
       $(go.TextBlock,
         { text: nodo,
           margin: 10 })
     );
   diagram.add(nodos[nodo]);
}

function addVertice(){
  var primero = document.getElementById("primero").value;
  var segundo = document.getElementById("segundo").value;
  var tercero = document.getElementById("tercero").value;
  var num = tercero.toString();
  diagram.add(
    $(go.Link,
      $(go.Shape),
      { fromNode: nodos[primero], toNode: nodos[segundo] },
      $(go.TextBlock,num,{ segmentOffset: new go.Point(0, -10) })
    ));
}
