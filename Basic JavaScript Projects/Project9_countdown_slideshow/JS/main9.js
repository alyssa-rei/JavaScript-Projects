function countdown()    {   // NAMING FUNCTION
    var seconds = document.getElementById("seconds").value;  // DEFINING VARIABLE

function tick() {   // NAMING FUNCTION, COUNTDOWN
    seconds = seconds - 1;
    timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == 0)  {
        alert("TIME'S UP!!!");  // ALERT AFTER COUNTDOWN DONE
        clearTimeout(time);
        timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1;   // DEFINING VARIABLE
    showSlides(slideIndex);

function plusSlides(n) { // NAMING FUNCTION
    showSlides(slideIndex += n);
}

function currentSlide(n) { // NAMING FUNCTION
    showSlides(slideIndex = n);
}

function showSlides(n) { // NAMING FUNCTION, DEFINING LET VARIABLES, IF STATEMENTS
    let i;
    let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
}