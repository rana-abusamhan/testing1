var tb = document.getElementById("d1");
var table = document.createElement("table");
tb.appendChild(table);
table.style.border="2px solid black";

var row= document.createElement("tr");
table.appendChild(row);



var hour=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","7pm"];
for(var i =0;i<hour.length;i++){
        
        var header = document.createElement("th");
        row.appendChild(header);
        header.textContent=hour[i];
        header.style.border="2px solid black";
    
}