// LET
var X = 13;                         // Naming variable, value
document.write(X + "<br>");         //
{
    let X = 31;                     // Using same variable,
    document.write(X + "<br>");     // within function, different value
}
document.write(X + "<br><br><br>"); // Return to displaying original value of variable



// WHILE LOOP
function count_to_Five() {      // Naming function
    var Digit = "";             // Naming variables
    var X = 1;                  //
    while (X<6)    {            // Digit increasing by one
        Digit += " " + X;       // until X
        X++;                    // reaches 5
    }
    document.getElementById("Loop").innerHTML = Digit;  // Displays counting, 1 to 5
}



// FOR LOOP
    var Employees = ["Thomas", "Alyssa", "Zach", "Sherrie", "Christian", "Joanna"]; // 
    var Content = "";                                                               // Naming variables
    var Y;                                                                          //
    function for_Loop() {                                                   // Naming function
        for (Y = 0; Y < Employees.length; Y++)    {                         // Going through
        Content += Employees[Y] + "<br>";                                   // list until reaches end
        }
        document.getElementById("List_of_Employees").innerHTML = Content;   // Displays values, from index 0 and so on
    }



// ARRAY
    function nature_pics()   {                  // Naming function
        var nature_pic = [];                    // Naming array,
        nature_pic[1] = "Mount Washington";     // variables,
        nature_pic[2] = "Silver Falls";         // and
        nature_pic[3] = "Sparks Lake";          // values
        document.getElementById("Nature").innerHTML = "In this photo is Central Oregon's " + // Displays string values,
            nature_pic[3] + ", adjacent to Mount Bachelor."; // concatenated with value of element at index 3
    }