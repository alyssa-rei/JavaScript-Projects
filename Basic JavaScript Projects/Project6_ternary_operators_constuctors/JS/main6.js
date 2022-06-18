// DISPLAYING TERNARY OPERATOR
document.write(Smaller = (3>1) ? "Left number is smaller":"Right number is smaller");

    document.write("<br><br>");

// CREATING OBJECT TYPE & PROPERTIES
function Person(Identification, Department, Title) {
    this.Person_Identification = Identification;
    this.Person_Department = Department;
    this.Person_Title = Title;
}

// CREATING NEW OBJECTS
const Alyssa = new Person(12345, "Customer Relations", "Account Executive");
const Zach = new Person(67890, "Operations", "Operations Assistant");


// DISPLAYING CONSTRUCTOR & NESTED FUNCTIONS
function myFunction()   {
    document.getElementById("Cons").innerHTML = "Alyssa's employee ID is "
    + Alyssa.Person_Identification + " and she works in the "
    + Alyssa.Person_Department + " as an " + Alyssa.Person_Title;
}

function upper()    {
    document.getElementById("Random").innerHTML = lower();
    function lower()    {
        return Math.random() * 50;
    }
}