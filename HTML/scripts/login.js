function validate() {
    user_name = document.getElementById("username")
    password = document.getElementById("password")
    if (user_name.value == "" || password.value == "") {
        alert("Please provide User Name and Password")
    } else {
        alert("Login Successful.")
    }
}