// from data.js
var tableData = data;

var tbody = d3.select("tbody");


tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

// Use d3 to update each cell's values with ufo data.
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// ********************************************************

var submit = d3.select("#filter-btn");
var empty = d3.select("tbody")
submit.on("click", function() {
    empty.html("")

   // Prevent the page from refreshing 
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

//filter data
    var filteredData = tableData.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);
    
// loop through data
    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
    
    // Use d3 to update each cell's values with data.
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
