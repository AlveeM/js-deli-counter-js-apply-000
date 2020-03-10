function takeANumber(line, name) {
  line.push(name);
  let message = `Welcome, ${name}. You are number ${line.length} in line.`;
  return message;
}

// counter gives the customer a number
// welcome message
// starts at 1
// won't have to reset it to 0

// declare ticketNumber 
let ticketNumber = 0;

// declare takeANumberNoArr
function takeANumberNoArr() {
  // declare message variable
  let message = `Welcome, you are number ${line} in line.`
  // log welcome message
  console.log(message);
  // increment global coutner
  ticketNumber += ticketNumber;
  // return the counter 
  return ticketNumber;
}


function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  
  let customerName = line.shift();
  return `Currently serving ${customerName}.`;
}

function currentLine(line) {
    if (line.length < 1) {
        return "The line is currently empty.";
    }

    let resultStr = "The line is currently: ";
    
    if (line.length === 1) {
        return (resultStr + `1. ${line[0]}`);
    }

    for (let i = 0; i < line.length - 1; i++) {
        resultStr += `${i + 1}. ${line[i]}, `;
    }

    resultStr += `${line.length}. ${line[line.length - 1]}`;

    return resultStr;
}