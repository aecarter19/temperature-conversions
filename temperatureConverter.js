const kelvin = 0;
// This is the forecast today in Kelvin
var celsius = (kelvin - 273);
// This is the forecast today in Celsius
var fahrenheit = (celsius * (9/5) +32);
// This is the forecast today in fahrenheit
var newton = (celsius * (33/100));
// This is the forecase today in newton
fahrenheit = Math.floor(fahrenheit);
// This rounds up fahrenheit so it is not a decimal
newton = Math.floor(newton);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenieht.');
