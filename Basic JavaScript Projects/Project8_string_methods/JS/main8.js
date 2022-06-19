// Concat() Method

function full_Sentence()    {
    var part_1 = "I have made ";
    var part_2 = "this sentence ";
    var part_3 = "using the ";
    var part_4 = "concat() method.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concat").innerHTML = whole_sentence;
}

// Slice() Method

function slice_Method() {
    var Sentence = "This sentence is using the slice() method.";
    var Section = Sentence.slice(26,34);
    document.getElementById("Slice").innerHTML = Section;
}

// toString() Method
function string_Method()    {
    var num = 623;
    document.getElementById("Numbers_to_string").innerHTML = num.toString();
}

// toPrecision() Method
function precision_Method() {
    var X = 343.3123543;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}