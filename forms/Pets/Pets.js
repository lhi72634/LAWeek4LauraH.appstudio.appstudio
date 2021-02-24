//Create 1st array

let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]

//Create 2nd array with Sal

let withSal= petNames.slice()
withSal.push("Sal")

//Sal at the end of 1st array

petNames.push("Sal")

//Get 3rd name

console.log(`The third pet is named ${petNames[2]}.`)

//Length 1st array

console.log(`The array has ${petNames.length} names in it.`)

//Delete last element of 1st array

petNames.pop()


