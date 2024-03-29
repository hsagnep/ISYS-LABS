function parseScores(scoresString) {
    return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
    // Your code here
    var num_A = 0;
    var num_B = 0;
    var num_C = 0;
    var num_D = 0;
    var num_F = 0;
    for (i=0;i<scoresArray.length;i++){
        if (scoresArray[i] >= 90){
            num_A+=1
        }
        if (scoresArray[i] >= 80 && scoresArray[i] <= 89) {
            num_B+=1
        }
        if (scoresArray[i] >= 70 && scoresArray[i] <= 79) {
            num_C+=1
        }
        if (scoresArray[i] >= 60 && scoresArray[i] <= 69) {
            num_D += 1
        }
        if (scoresArray[i] < 60){
            num_F += 1
        }
    }
    return [num_A,num_B,num_C,num_D,num_F]
}

function setTableContent(userInput) {
   var tbl = document.getElementById("distributionTable");

    // Check to see if any input was entered
    if (!userInput) {
        // Specification / instructions will state that if no input is entered into 
        // the prompt, then a table with a single cell must be created.
        // The cell must have text content "No graph to display".
        tbl.innerHTML = "<tr><td>No graph to display</td></tr>";
        return;
    }
    
    // First build the distribution array from the input
    var distribution = buildDistributionArray(parseScores(userInput));
    
    // Specification will state that unless the input is empty, the 
    // following requirements must be met:
    // - The table must have 3 rows
    // - The top row must contain the bars
    // - Each TD with a bar has the CSS vertical-align property set to "bottom"
    // - The middle row must contain the grade labels
    // - The bottom row must contain the frequencies
    // - Each bar gains 10 pixels in height per occurrence
    // - (From HW): "Write your code in such a way that the user may enter any number 
    //   of scores.  In other words, make your graph grow larger when the user enters 
    //   more scores."

    // Initialize markup string for table's innerHTML
    var row1 = "<tr><td><div style='height: " + distribution[0]*10 + "px' class='bar0'></div></td><td><div style='height: " + distribution[1]*10 + "px' class='bar1'></div></td><td><div style='height: " + distribution[2]*10 + "px' class='bar2'></div></td><td><div style='height: " + distribution[3]*10 + "px' class='bar3'></div></td><td><div style='height: " + distribution[4]*10 + "px' class='bar4'></div></td></tr>";
    var row2 = "<tr><td>A</td><td>B</td><td>C</td><td>D</td><td>F</td></tr>";
    var row3 = "<tr><td>" + distribution[0] + "</td><td>" + distribution[1] + "</td><td>" + distribution[2] + "</td><td>" + distribution[3] + "</td><td>" + distribution[4] + "</td></tr>";
    var markup = row1 + row2 + row3;
    
    
    // Set the table's innerHTML
    tbl.innerHTML = markup;
}

function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for 
    // testing purposes
    setTableContent("45 78 98 83 86 99 90 59");
}
