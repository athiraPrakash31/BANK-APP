function regMe() {
    window.location='./registration.html'
}
function logMe() {
    window.location='./login.html'
}
function registration() {
    // Get input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username && email && password) {
        var user = {
            username: username,
            email: email,
            password:password
        };

       var userString = JSON.stringify(user);

        localStorage.setItem("user", userString);

        
        alert("User registered successfully!");
        window.location='./login.html'

    }
     else {
        alert("Please fill in all the fields");
    }
}
function login() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve user data from local storage
    var storedUserString = localStorage.getItem("user");

    // Check if user data exists
    if (storedUserString) {
        var storedUser = JSON.parse(storedUserString);

        // Check if entered credentials match the registered user
        if (username === storedUser.username && password === storedUser.password) {
            // Display success message
            alert("Login successful!");
            // Redirect to another page after successful login
            window.location = './main.html';
        } else {
            // Display error message
            alert("Invalid username or password. Please try again.");
        }
    } else {
        // Display error message if no user is registered
        alert("No user registered. Please register first.");
    }
}




