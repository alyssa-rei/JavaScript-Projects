function my_Dictionary()    {   // Naming function
    var Pet = {                 // Defining variables,
        Species:"Dog",          //
        Breed:"Pit Bull",       // and
        Color:"Black",          //
        Age:8,                  // key-value pairs
    };
    delete Pet.Age;             // Deleting Age key
    document.getElementById("Dictionary").innerHTML = Pet.Breed; // Defining Element Id, value
}