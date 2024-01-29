# CS467

### Student Marks Visualization

This code utilizes D3.js to create a bar chart visualizing student marks for the academic year 2022-2023. The chart includes axes, labels, and interactive features like tooltips. Students with marks above 70% turn green on hover, while those below 70% turn red. The HTML page provides a structured layout for the chart and additional information. The script dynamically loads data from a CSV file and uses D3.js to create an engaging and informative data visualization.

Here's a more detailed breakdown:

#### Visualization Setup:
1. Defines margins, width, and height for the chart.
2. Creates an SVG element with specified dimensions and appends a group element (<g>) with margin adjustments.
#### Tooltip Creation
Initializes a tooltip with styling and appends it to the HTML body. The tooltip provides additional information when hovering over data points.
#### Data Loading and Preprocessing:
1. Utilizes D3.js to load student marks data from a CSV file hosted on GitHub.
2. Converts the "Mark" column values from strings to numbers, removing non-numeric characters.
#### Scale Definitions:
1. Sets up x and y scales using D3's scaleBand and scaleLinear functions, respectively.
2. Specifies domains and ranges based on the loaded data.
#### Axis Creation:
1. Appends x and y axes to the chart, using D3's axisBottom and axisLeft functions.
2. Applies transformations and styles to axis labels for better readability.
#### Text Labels:
Adds text labels for the x and y axes, providing context and orientation for the viewer.
#### Bar Chart Creation:
1. Appends rectangles to represent bars on the chart, with attributes like x, y, width, height, and fill color based on student marks.
2. The chart visualizes each student's mark, emphasizing the distribution and variations.
#### Interactive Features (Hover Effects):
1. Implements mouseover and mouseout events for each bar to display a tooltip with the student's name and mark.
2. Dynamically changes the fill color of bars based on the mark, highlighting students above 70% in green and others in red during hover.
3. Appends a text element in the HTML to provide context and additional information about the purpose of the visualization.
#### Styling and HTML Structure:
1. Defines CSS styles for the body, content area, and additional information div.
2. Constructs a simple HTML page structure with a title, content div containing the chart and information text, and a script reference.


### Screenshots
<img width="1133" alt="image" src="https://github.com/sKeer89/CS467/assets/40351944/0d5bc31a-c7dd-42ab-bf66-f8b6442c768e">

<img width="1177" alt="image" src="https://github.com/sKeer89/CS467/assets/40351944/f91a6bb7-c1b1-4cca-981e-1db2abbf8de4">


