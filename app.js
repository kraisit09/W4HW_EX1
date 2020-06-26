// ================= HW 1.11 =================
let hw1_array1 = [{
    name: "apple",
    birth: "2000-01-01"
},
{
    name: "banana",
    birth: "1990-10-01"
},
{
    name: "watermelon",
    birth: "1985-12-01"
},
]

let hw1_array2 = hw1_array1.map(x => {
let age = 0
if (x.name === 'apple' && x.birth === '2000-01-01') {
    age = 19
} else if (x.name === 'banana' && x.birth === '1990-10-01') {
    age = 29
} else if (x.name === 'watermelon' && x.birth === '1985-12-01') {
    age = 33
}

return {
    name: x.name,
    birth: x.birth,
    age: age
}
})

console.log(hw1_array1)
console.log(hw1_array2)

// ================= HW 1.12 =================
let hw2_array1 = [{
        name: "apple",
        birth: "2000-01-01"
    },
    {
        name: "banana",
        birth: "1990-10-10"
    },
    {
        name: "watermelon",
        birth: "1985-12-30"
    },
]
let hw2_array2 = hw2_array1.map(x => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let currBirth = new Date(x.birth);
    let formatBirthDate = ('00' + currBirth.getDate()).slice(-2) + " " + months[currBirth.getMonth()].toLowerCase() + " " +
        currBirth.getFullYear()

    return `<tr> <td>${x.name}</td> <td>${formatBirthDate}</td> </tr>`
})

console.log(hw2_array1)
console.log(hw2_array2)