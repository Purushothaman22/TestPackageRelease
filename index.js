const core = require('@actions/core');
const token = core.getInput('TOKEN');

console.log(token);

var g1 = new Date("2021-03-26T11:15:58Z");
console.log(`g1: ${g1.getDate()}`);
// (YYYY, MM, DD, Hr, Min, Sec)
var g2 = new Date("2021-04-27T11:15:58Z");

//calculate time difference  
var time_difference = g1.getTime() - g2.getTime();  
  
//calculate days difference by dividing total milliseconds in a day  
var days_difference = time_difference / (1000 * 60 * 60 * 24);  
