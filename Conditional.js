console.log("if else Statement");

var light = "Green";

if (light == "Green") {
    console.log("Go!");
} 
else if (light == "Yellow") {
    console.log("Wait!");
} 
else if (light == "Red") {
    console.log("Stop!");
} 
else {
    console.log("Invalid Color!!");
}

console.log("Switch Statement");
let signal = "White"

switch (signal) {
    case "Green":
        console.log("Go!");
        break;
    case "Yellow":
        console.log("Wait!");
        break;
    case "Red":
        console.log("Stop!");
        break;
    default:
        console.log("Invalid Color!");
        break;
}