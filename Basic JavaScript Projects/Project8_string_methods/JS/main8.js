// Concat() Method

function full_Sentence()    {       // Naming function
    var part_1 = "I have made ";    //
    var part_2 = "this sentence ";  // 
    var part_3 = "using the ";      // Naming variables, string values
    var part_4 = "concat() method.";//
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concat").innerHTML = whole_sentence; // Displaying concatenated values
}

// Slice() Method

function slice_Method() {           // Naming function
    var Sentence = "This sentence is using the slice() method.";    // Naming variable, string value / sentence
    var Section = Sentence.slice(26,34);    // Naming variable, start/end values
    document.getElementById("Slice").innerHTML = Section;   // Displaying sliced value
}

// toString() Method                
function string_Method()    {       // Naming function
    var num = 623;                  // Naming variable, value
    document.getElementById("Numbers_to_string").innerHTML = num.toString(); // Displaying string, decimal
}

// toPrecision() Method
function precision_Method() {       // Naming function
    var X = 343.3123543;            // Naming variable, value
    document.getElementById("Precision").innerHTML = X.toPrecision(5); // Displaying value to five digits
}