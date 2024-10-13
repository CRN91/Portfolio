import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './NetworkGraph.css';

const NetworkGraph = () => {
  // SVG container
  const ref = useRef();

  useEffect(() => {
    const scale = window.innerWidth < 600 ? 0.5 : 1;
    const width = window.innerWidth < 600 ? 300 : 600;
    const height = window.innerWidth < 600 ? 300 : 600;

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .html("");

    const nodes = [ // Names of nodes and links to projects
      { id: "Adam Kaizra", label: "MSci Computer \nScience" },
      { id: "Warroom", label:"Godot Game", url: "https://github.com/CRN91/Warroom" },
      { id: "Network Analysis", label: "Alliance and Trade", url: "https://github.com/CRN91" },
      { id: "Chess Robot", label: "Articulated Arm",url: "https://github.com/CRN91" },
      { id: "Robot Outreach", label: "Group Project", url: "https://github.com/CRN91" },
      //{ id: "Hexgrid", url: "https://github.com/CRN91/Hexgrid" },
      { id: "Spreadsheet", label: "SC Microservice", url: "https://github.com/CRN91/Spreadsheet-SC-Microservice-MVP" },
      { id: "Maze Solver", label: "Search Algorithms", url: "https://github.com/CRN91/Maze-Solver" }
    ];

    const edges = [
      { source: "Adam Kaizra", target: "Warroom" },
      { source: "Adam Kaizra", target: "Network Analysis" },
      { source: "Adam Kaizra", target: "Chess Robot" },
      { source: "Adam Kaizra", target: "Robot Outreach" },
      //{ source: "Warroom", target: "Hexgrid" },
      { source: "Adam Kaizra", target: "Spreadsheet" },
      { source: "Adam Kaizra", target: "Maze Solver" }
    ];

    // Simulation setup
    const simulation = d3.forceSimulation(nodes)
      .force("edge", d3.forceLink(edges).id(d => d.id).distance(200*scale))
      .force("charge", d3.forceManyBody().strength(-500*scale))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(75*scale));

    // Edges
    const edge = svg.append("g")
      .selectAll("line")
      .data(edges)
      .enter().append("line")
      .attr("stroke-width", 8*scale)
      .attr("stroke", "#999");

    // Nodes setup
    const node = svg.append("g")
      .selectAll(".node")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node")

      // Dragging Cursor Functionality
      .call(d3.drag()
        .on("start", function(event, d) { // on grab
          d3.select(this).select("circle").style("cursor", "grab");
        dragstarted(event, d);
        })
        .on("drag", function(event, d) { // whilst dragging
          d3.select(this).select("circle").style("cursor", "grabbing");
          dragged(event, d);
        })
        .on("end", function(event, d) { // on release
          if (d.id === "Adam Kaizra") { // Central node has grab cursor
            d3.select(this).select("circle").style("cursor", "grab");
          } else { // Project nodes have external link cursor
            d3.select(this).select("circle").style("cursor", "url('/external_link.png') 10 10, pointer");
          }
          dragended(event, d);
        }));

    // Node customisation
    node.append("circle") // Shape
      .attr("r", 64 * scale) // Radius
      .attr("fill", "#33cc33") // Colour
      .style("cursor", function(d) {
        if (d.id === "Adam Kaizra") { // Central node has grab cursor
          return d3.select(this.parentNode).style("cursor", "grab");
        } else { // Project nodes have external link cursor
          return d3.select(this).style("cursor", "url('/external_link.png') 10 10, pointer");
        }
      })
      .on("click", function(event, d) {
        if (d.url) { // Opens project github in a new tab
          window.open(d.url, "_blank");
        }
      });

    // Node text customisation
    node.append("text")
      .attr("dy", 4) // Vertical offset
      .style("text-anchor", "middle") // Text alignment
      .style("font-size", (14*scale + "px")) // Font size
      .selectAll("tspan")
      .data(d => {
      const textLines = `${d.id} ${d.label ? `\n${d.label}` : ''}`.split('\n');
      return textLines.map((line, i) => ({ line, bold: i === 0 })); // Only the first line (ID) is bold
      })
      .enter().append("tspan") // Create text elements
      .attr("x", 0)
      .attr("dy", (d, i) => i ? "1.2em" : 0)
      .style("font-weight", d => d.bold ? "bold" : "normal") // Apply bold style to the ID
      .text(d => d.line);  


    simulation
      .nodes(nodes)
      .on("tick", ticked);

    simulation.force("edge")
      .links(edges);

    function ticked() {
      edge
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
       .attr("transform", d => `translate(${d.x},${d.y})`);
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, []);

  return (
    <svg ref={ref}></svg>
  );
};

export default NetworkGraph;
