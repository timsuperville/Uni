import * as d3 from "d3";
import { userNavbar } from "../components";

// Bar chart
const barData = [450, 200, 100, 220, 500, 100, 400, 230, 500];
const barLabels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const barSvg = d3.select("#chart-bars")
   .append("svg")
   .attr("width", 600)
   .attr("height", 400);

const barX = d3.scaleBand()
   .domain(barLabels)
   .range([0, 600])
   .padding(0.1);

const barY = d3.scaleLinear()
   .domain([0, d3.max(barData)])
   .range([400, 0]);

barSvg.append("g")
   .attr("transform", "translate(0, 400)")
   .call(d3.axisBottom(barX));

barSvg.append("g")
   .call(d3.axisLeft(barY));

barSvg.selectAll(".bar")
   .data(barData)
   .enter()
   .append("rect")
   .attr("class", "bar")
   .attr("x", (d, i) => barX(barLabels[i]))
   .attr("y", d => barY(d))
   .attr("width", barX.bandwidth())
   .attr("height", d => 400 - barY(d))
   .attr("fill", "#fff");

// Line chart
const lineData1 = [50, 40, 300, 220, 500, 250, 400, 230, 500];
const lineData2 = [30, 90, 40, 140, 290, 290, 340, 230, 400];
const lineLabels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const lineSvg = d3.select("#chart-line")
   .append("svg")
   .attr("width", 600)
   .attr("height", 400);

const lineX = d3.scalePoint()
   .domain(lineLabels)
   .range([0, 600]);

const lineY = d3.scaleLinear()
   .domain([0, d3.max([...lineData1, ...lineData2])])
   .range([400, 0]);

lineSvg.append("g")
   .attr("transform", "translate(0, 400)")
   .call(d3.axisBottom(lineX));

lineSvg.append("g")
   .call(d3.axisLeft(lineY));

const line1 = d3.line()
   .x((d, i) => lineX(lineLabels[i]))
   .y(d => lineY(d))
   .curve(d3.curveMonotoneX);

const line2 = d3.line()
   .x((d, i) => lineX(lineLabels[i]))
   .y(d => lineY(d))
   .curve(d3.curveMonotoneX);

lineSvg.append("path")
   .datum(lineData1)
   .attr("fill", "none")
   .attr("stroke", "#cb0c9f")
   .attr("stroke-width", 3)
   .attr("d", line1);

lineSvg.append("path")
   .datum(lineData2)
   .attr("fill", "none")
   .attr("stroke", "#3A416F")
   .attr("stroke-width", 3)
   .attr("d", line2);
