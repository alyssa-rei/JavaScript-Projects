// LOCAL VARIABLES
function Add_numbers_3()    {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_4()    {
    var X = 11;
    document.write(X + X);
}
Add_numbers_3();
Add_numbers_4();

    document.write("<br><br><br>");


// GLOBAL VARIABLES
var X = 10;
var Y = 30;
function Add_numbers_1()    {
    document.write(20 + X + "<br>");
}
function Add_numbers_2()    {
    document.write(X + Y);
}
Add_numbers_1();
Add_numbers_2();

    document.write("<br><br><br>");
    
    
// IF STATEMENT
function myFunction()   {
    if (5>3)    {
    document.write("The number on the left is greater than the number on the right.");
    }
}


// TIME FUNCTION
function Time_function()    {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-'+ today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    document.write("Today is " + dateTime);


    document.write("<br><br><br>");
}

// FUNCTION W/O ERROR
var C = "This is a string value";
document.write(C);
console.log(C)


document.write("<br><br><br>");


    // FUNCTION WITH ERROR
    var C = "This is a string value";
    C();
    console.log(C) // Uncaught TypeError: C is not a function at main7.js:45:1