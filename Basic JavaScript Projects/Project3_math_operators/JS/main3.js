window.alert(Math.random() * 50); // Displays a window alert with a random number below 50

    var A = 5; // Defining variable A with the value of "5"
    A++; // Increasing the value of variable A
    document.write(A); // Displaying an increment above variable A

document.write("<br><br><br>");

    var B = 3; // Displaying variable B with the value of "3"
    B--; // Decreasing the value of variable B
    document.write(B); // Displaying an increment below variable B

document.write("<br><br><br>");

function addition_function()    { // Naming function
    var addition = 10 + 20; // Defining variable 
    document.getElementById("Add").innerHTML = "10 + 20 = " + addition; // Defining Element Id, value
}

function subtraction_function() { // Naming function
    var subtraction = 50 - 25; // Defining variable 
    document.getElementById("Subtract").innerHTML = "50 - 25 = " + subtraction; // Defining Element Id, value
}

function multiplication_function() { // Naming function
    var multiplication = 10 * 3; // Defining variable 
    document.getElementById("Multiply").innerHTML = "10 * 3 = " + multiplication; // Defining Element Id, value
}

function modulus_Operator() { // Naming function
    var modulus = 23 / 6; // Defining variable 
    document.getElementById("Mod").innerHTML = modulus; // Defining Element Id, value
}