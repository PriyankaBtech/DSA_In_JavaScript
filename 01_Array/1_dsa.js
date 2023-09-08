/*********************** Array DSA ********************************/

// Most popular and used method of array for structure the data.

const ticketLine = ["Priyanka", "Sanju", "Pankaj", "Ayush"]

// Remove person from starting
ticketLine.shift() // [ 'Sanju', 'Pankaj', 'Ayush' ]


// Add new person at the end
ticketLine.push("Priyanka") // [ 'Sanju', 'Pankaj', 'Ayush', 'Priyanka' ]


// Add VIP in starting of line
ticketLine.unshift("VIP") // [ 'VIP', 'Sanju', 'Pankaj', 'Ayush', 'Priyanka' ]


// Remove person from end
ticketLine.pop() // [ 'VIP', 'Sanju', 'Pankaj', 'Ayush' ]


// Find person at index
console.log(ticketLine.indexOf("Sanju")) // 1


// Add person in middle
ticketLine.splice(1, "VIP2") // [ 'VIP', 'Sanju', 'Pankaj', 'Ayush' ]
ticketLine.splice(1, 0, "VIP2") // [ 'VIP', 'VIP2', 'Sanju', 'Pankaj', 'Ayush' ]
ticketLine.splice(1, 2, "VIP2") // [ 'VIP', 'VIP2', 'Pankaj', 'Ayush' ]


// Remove person from Particular index
ticketLine.splice(3, 1) // [ 'VIP', 'VIP2', 'Pankaj' ]


// Replace VIP to PA
ticketLine.splice(1, 1, "PA") // [ 'VIP', 'PA', 'Pankaj' ]





