var rainfall = prompt("How many inches of rain fell?");
var rainfallInches = "*";
console.log("Rain: " + rainfallInches.repeat(rainfall));
var yield = 50;
if (rainfall >= 20) {
yield *=.9;
} else if (rainfall <= 10) {
    yield *=.8;
} 
var fertilizer =prompt("Did you use fertlizer? Answer yes or no");
var fertType = ['regular', 'premium'];
if (fertilizer === 'no') {
   // console.log("The yield should be " + yield + " bushels per acre.");
   yield = yield;
}else if 
        (fertilizer === 'yes') {
            fertType =prompt("Did you use regular or premium?");
            if (fertType === "regular") {
                yield *=1.1;
            } else if 
            (fertType === 'premium') {
                yield *=1.5;
            }
        }
        console.log("The yield should be " + yield + " bushels per acre.");

