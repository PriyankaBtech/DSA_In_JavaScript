/*********************** Object ****************************/

const obj = {
    firstName: "Priyanka",
    lastName: "kaushal",
    id: 12345,
    education: ["diploma", "engineering"],
    fullName: function() {
        return `full name is ${this.firstName} ${this.lastName}`
    } 
}

// Read
console.log(obj.firstName); // Priyanka
console.log(obj["firstName"]); // Priyanka

// Update
obj.id = 5555; // update new value 


// Delete
delete obj.lastName // last name removed


//+++++++++++++++++++++++++++++ Class ++++++++++++++++++++++++++++++++++++++

class BioData {
    constructor(firstName, lastName, education, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.education = education;
        this.id = id;
    }
    fullName() {
        return `full name is ${this.firstName} ${this.lastName}`
    }
    
}

const PriyankaBioData = new BioData('Priyanka', 'Kaushal', 'B.tech', 5000);

console.log(PriyankaBioData);

// BioData {
//     firstName: 'Priyanka',
//     lastName: 'Kaushal',
//     education: 'B.tech',
//     id: 5000
// }

console.log(PriyankaBioData.fullName()); // full name is Priyanka Kaushal

