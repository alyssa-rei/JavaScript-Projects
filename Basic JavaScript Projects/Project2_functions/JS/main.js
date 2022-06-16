function myFunction()   { // Naming function
    var sentence = "This is the first part of the sentence"; // Defining variable, giving string value
    sentence += " and this is the second!"; // to be concatenated with this string value
    document.getElementById("Text").innerHTML = sentence; // Defining Id of the element to be located and its return value
}