// Prompt the user for his name and a duration in minutes
const inputName = window.prompt('What\'s your name?', 'Harry Potter');
const inputMinutes = window.prompt('How long does it take in minutes?', '353');

// Calulcate the hours and minutes
const minutes = inputMinutes % 60;
const hours = (inputMinutes - minutes) / 60;

// Write the name to the document as "Hello [name], Your input was [minutes] minutes"
document.write(`Hello ${inputName}, Your input was ${inputMinutes} minutes`);

// Go to the next line
document.write('<br>');

// Write the duration to the document as "x hours and y minutes"
document.write(`Ouput: ${hours} hours and ${minutes} minutes`);