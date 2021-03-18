

/*
************* register functionality begin
*/

function registerNewUser() {
    var reg_user = document.getElementById("user_reg").value;
    var reg_password = document.getElementById("passw_reg").value;
    var reg_role = "client";

    //alert(reg_user);
    var userArray = [];

    if (localStorage.getItem("lUserArray") !== null) {
        userArray = JSON.parse(localStorage.getItem("lUserArray"));
    }

    var current_reg = {
        user: reg_user,
        password: reg_password,
        role: reg_role
    };

    userArray.push(current_reg);

    localStorage.setItem("lUserArray", JSON.stringify(userArray));

    window.location.href = "http://127.0.0.1:5000/login"
    //window.location.href = "http://heroku:5000/login";
}

/*
************* login functionality begin
*/
function checkLogin() {

    var user = document.getElementById("user").value;
    var password = document.getElementById("passw").value;

    var userArray = JSON.parse(localStorage.getItem("lUserArray"));

    if (user !== null && user !== "") {
        if (password !== null && password !== "") {

            var canLogin = checkLoginInfo(user, password, userArray);
            if (canLogin === true) {
                //need a method to get the role and send it into createSessionUser below
                var role = getUserRole(user, password, userArray)
                createSessionUser(user, password, role)
                window.location.href = "http://127.0.0.1:5000/login";
                //window.location.href = "http://heroku:5000/dashboard";
            } else {
                alert("user or password are not correct");
            }

        } else {
            alert("password must not be empty");
        }
    } else {
        alert("user must not be empty");
    }

}

function checkLoginInfo(user, password, userArray) {
    if (userArray !== null && userArray.length > 0) {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].user === user && userArray[i].password === password) {
                return true;
            }
        }
    }
    return false;
}

function getUserRole(pUser, pPassword, pUserArray) {
    var role = ""
    if (pUserArray !== null && pUserArray.length > 0) {
        var length = pUserArray.length
        for (var i = 0; i < length; i++) {
            if (pUserArray[i].user === pUser && pUserArray[i].password === pPassword) {
                role = pUserArray[i].role
                break
            }
        }
    }
    return role
}

//Funcion para mostrar contenido de pestañas de HTML
function hideDivById(divId) {
    hideAllDivW3Includes()
    var element = document.getElementById(divId)
    if (element.style.display === "none") {
        element.style.display = "block"
    }
}

//Ocultar todo el contenido de pestañas de HTML
function hideAllDivW3Includes() {
    var elementArray = document.getElementsByName("pages")
    for (var element of elementArray) {
        element.style.display = "none"
    }
}


w3.includeHTML()
