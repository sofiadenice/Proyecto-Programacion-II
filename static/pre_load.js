
/*
preload information to local storage users
*/
function preLoadUsers() {

    var userArray = [{
        user: "bal",
        password: "123",
        role: "admin"
    }, {
        user: "rod",
        password: "234",
        role: "client"
    }, {
        user: "ted",
        password: "345",
        role: "client"
    }]

    localStorage.setItem("lUserArray", JSON.stringify(userArray))
}

function preLoadAddResults() {

    var addResultArray = [
        { user: "rod", num1: 1, num2: 2, result: 1 },
        { user: "rod", num1: 1, num2: 2, result: 2 },
        { user: "ted", num1: 1, num2: 2, result: 3 },
        { user: "ted", num1: 1, num2: 2, result: 4 },
        { user: "rod", num1: 1, num2: 2, result: 5 },
        { user: "rod", num1: 1, num2: 2, result: 6 },
        { user: "ted", num1: 1, num2: 2, result: 7 },
        { user: "ted", num1: 1, num2: 2, result: 8 },
        { user: "rod", num1: 1, num2: 2, result: 9 },
        { user: "rod", num1: 1, num2: 2, result: 10 },
        { user: "ted", num1: 1, num2: 2, result: 11 },
        { user: "ted", num1: 1, num2: 2, result: 12 },
        { user: "rod", num1: 1, num2: 2, result: 13 },
        { user: "rod", num1: 1, num2: 2, result: 14 },
        { user: "ted", num1: 1, num2: 2, result: 15 },
        { user: "ted", num1: 1, num2: 2, result: 16 }
    ]

    localStorage.setItem("lAddResultArray", JSON.stringify(addResultArray))
}


preLoadUsers()
preLoadAddResults()