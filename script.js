var margin = { top: 30, right: 80, bottom: 80, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Tooltip when hovered.
var tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("position", "absolute");

d3.csv("https://raw.githubusercontent.com/sKeer89/CS467/main/val.csv", function(data) {

    console.log(data);

    // Convert mark from string to numvbers, and trim unnecessary data.
    data.forEach(function(d) {
        console.log(d)
        d.Mark = parseInt(d.Mark.replace(/\D/g, ''), 10);
    });

    var x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(function(d) { return d.Student; }))
        .padding(0.2);
    svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("fill", "black").style("text-anchor", "end");

    var y = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .style("fill", "black");

    svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 40) + ")")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("Student");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - (margin.left))
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("Marks");

    svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d) { return x(d.Student); })
        .attr("y", function(d) { return y(d.Mark); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.Mark); })
        .attr("fill", "#d3ffd3")

    //Hover's code.
    .on("mouseover", function(d) {
            tooltip.transition()
                .duration(300)
                .style("opacity", 1);
            tooltip.html(d.Student + ", " + d.Mark)
                .style("left", (d3.event.pageX + 5) + "px")
                .style("top", (d3.event.pageY - 7) + "px");
            d3.select(this).attr("fill", function(d) { return d.Mark < 70 ? "#FF0000" : "#00FF00"; });
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(350)
                .style("opacity", 0);
            d3.select(this).attr("fill", "#d3ffd3");
        });

});
svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 - (margin.top / 2))
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("text-decoration", "underline")
    .style("fill", "black")
    .text("Student Marks Visualization");
