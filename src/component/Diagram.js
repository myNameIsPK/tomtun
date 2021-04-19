import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

const DiagramModel = require("./DiagramModel.json");

function init() {
  var $ = go.GraphObject.make;  // for conciseness in defining templates

  // some constants that will be reused within templates
  var roundedRectangleParams = {
    parameter1: 2,  // set the rounded corner
    spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  // make content go all the way to inside edges of rounded corners
  };
  
  const myDiagram =
  $(go.Diagram,  // must name or refer to the DIV HTML element
    {
      "animationManager.initialAnimationStyle": go.AnimationManager.None,
      "InitialAnimationStarting": function(e) {
        var animation = e.subject.defaultAnimation;
        animation.easing = go.Animation.EaseOutExpo;
        animation.duration = 900;
        animation.add(e.diagram, 'scale', 0.1, 1);
        animation.add(e.diagram, 'opacity', 0, 1);
      },
      
      // have mouse wheel events zoom in and out instead of scroll up and down
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      // support double-click in background creating a new node
      "clickCreatingTool.archetypeNodeData": { text: "new node" },
      // enable undo & redo
      "undoManager.isEnabled": true,
      positionComputation: function (diagram, pt) {
        return new go.Point(Math.floor(pt.x), Math.floor(pt.y));
      }
    });
    
    // when the document is modified, add a "*" to the title and enable the "Save" button
    myDiagram.addDiagramListener("Modified", function (e) {
    var button = document.getElementById("SaveButton");
    if (button) button.disabled = !myDiagram.isModified;
    var idx = document.title.indexOf("*");
    if (myDiagram.isModified) {
      if (idx < 0) document.title += "*";
    } else {
      if (idx >= 0) document.title = document.title.substr(0, idx);
    }
  });

  function hightLight(node) {
    var shape = node.findObject("SHAPE");
    shape.fill = "#6DAB80";
    shape.stroke = "#A6E6A1";
    var text = node.findObject("TEXT");
    text.stroke = "white";

    // node.findLinksOutOf().each( l => l.progress = "#52ce60")
    for (const p of myDiagram.model.linkDataArray) {
      if (p.from == node.key){
        myDiagram.model.set(p, 'colorPath', "#52ce60");
        myDiagram.model.set(p, 'colorText', "#52ce60");
      }
    }
  };

  function resetHightLight(node) {
    var shape = node.findObject("SHAPE");
    shape.fill = "#9e3309";
    shape.stroke = null;
    var text = node.findObject("TEXT");
    text.stroke = "#ffffff";

    // node.findLinksOutOf().each( l => l.progress = false)
    for (const p of myDiagram.model.linkDataArray) {
      if (p.from == node.key){
        myDiagram.model.set(p, 'colorPath', null);
        myDiagram.model.set(p, 'colorText', null);
      }
    }
  };


  // define the Node template
  myDiagram.nodeTemplate =
    $(go.Node, "Auto",
      {
        locationSpot: go.Spot.Top,
        isShadowed: true, shadowBlur: 1,
        shadowOffset: new go.Point(0, 1),
        shadowColor: "rgba(0, 0, 0, .14)",
        mouseEnter: (e,node) => {hightLight(node)},
        mouseLeave: (e,node) => {resetHightLight(node)},
      },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      // define the node's outer shape, which will surround the TextBlock
      $(go.Shape, "Circle", roundedRectangleParams,
        {
          name: "SHAPE", fill: "#9e3309", strokeWidth: 0,
          stroke: null,
          portId: "",  // this Shape is the Node's port, not the whole Node
          fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
          toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
          cursor: "pointer"
        }),
      $(go.TextBlock,
        {
          name: "TEXT",
          textAlign: "center",
          font: "bold small-caps 11pt helvetica, bold arial, sans-serif", margin: 7, stroke: "#ffffff",
          editable: true  // editing the text automatically updates the model data
        },
        new go.Binding("text").makeTwoWay())
    );

  myDiagram.nodeTemplateMap.add("Start",
    $(go.Node, "Spot", { desiredSize: new go.Size(75, 75) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, "Circle",
        {
          fill: "#52ce60", /* green */
          stroke: null,
          portId: "",
          fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
          toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
          cursor: "pointer"
        }),
      $(go.TextBlock, "Start",
        {
          font: "bold 16pt helvetica, bold arial, sans-serif",
          stroke: "whitesmoke"
        })
    )
  );

  myDiagram.nodeTemplateMap.add("End",
    $(go.Node, "Spot", { desiredSize: new go.Size(75, 75) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, "Circle",
        {
          fill: "maroon",
          stroke: null,
          portId: "",
          fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
          toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
          cursor: "pointer"
        }),
      $(go.Shape, "Circle", { fill: null, desiredSize: new go.Size(65, 65), strokeWidth: 2, stroke: "whitesmoke" }),
      $(go.TextBlock, "End",
        {
          font: "bold 16pt helvetica, bold arial, sans-serif",
          stroke: "whitesmoke"
        })
    )
  );

  // replace the default Link template in the linkTemplateMap
  myDiagram.linkTemplate =
    $(go.Link,  // the whole link panel
      {
        curve: go.Link.Bezier,
        // routing: go.Link.Orthogonal,
        // curve: go.Link.JumpOver,
        adjusting: go.Link.Stretch,
        reshapable: true, relinkableFrom: true, relinkableTo: true,
        toShortLength: 3
      },
      new go.Binding("points").makeTwoWay(),
      new go.Binding("curviness"),
      $(go.Shape,  // the link shape
        { strokeWidth: 1.5 },
        new go.Binding('stroke', 'colorPath', function(progress) {
          return progress ? "#52ce60" /* green */ : 'black';
        }),
        new go.Binding('strokeWidth', 'widthPath', function(progress) {
          return progress ? 2.5 : 1.5;
        })
        ),
      $(go.Shape,  // the arrowhead
        { toArrow: "standard", stroke: null },
        new go.Binding('fill', 'progress', function(progress) {
          return progress ? "#52ce60" /* green */ : 'black';
        })),
      $(go.Panel, "Auto",
        // $(go.Shape,  // the label background, which becomes transparent around the edges
        //   {
        //     fill: $(go.Brush, "Radial",
        //       { 0: "rgb(245, 245, 245)", 0.7: "rgb(245, 245, 245)", 1: "rgba(245, 245, 245, 0)" }),
        //     stroke: null
        //   }),
        $(go.TextBlock, "transition",  // the label text
          {
            textAlign: "center",
            font: "9pt helvetica, arial, sans-serif",
            margin: 4,
            background: 'rgb(255, 207, 104)',
            editable: true  // enable in-place editing
          },
          // editing the text automatically updates the model data
          new go.Binding("text").makeTwoWay(),
          new go.Binding("stroke", 'colorText', function (progress) {
            return progress ? '#52ce60' : "black";
          }))
      )
    );

  // read in the JSON data from the "mySavedModel" element
  myDiagram.model = new go.Model.fromJson(DiagramModel)
  return myDiagram
  
}



export default function Diagram(props) {
  return (
    <ReactDiagram
      initDiagram={init}
      divClassName="myDiagramDiv"
      // nodeDataArray={DiagramModel.nodeDataArray}
      // linkDataArray={DiagramModel.linkDataArray}
    />
  );
}
